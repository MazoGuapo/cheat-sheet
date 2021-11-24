// Importamos librerias js en dev
import gulp from 'gulp';
import yargs from 'yargs';
const sass = require("gulp-sass")(require("sass"));
import cleanCSS from 'gulp-clean-css';
import gulpif from 'gulp-if';
import sourcemaps  from 'gulp-sourcemaps';
import imagemin from 'gulp-imagemin';
import del from 'del';
import webpack from 'webpack-stream';
import uglify from 'gulp-uglify';
import named from 'vinyl-named';
import browserSync from 'browser-sync';
import zip from 'gulp-zip';
import replace from 'gulp-replace';
import info from './package.json';

// Creamos servidor
const server = browserSync.create();

// Creamos variable PRODUCTION con yarg
const PRODUCTION = yargs.argv.prod;

// Guardamos variable con las rutas ( paths )
const paths = {
    styles: {
        src: ['src/assets/scss/bundle.scss', 'src/assets/scss/admin.scss'],
        dest: 'dist/assets/css'
    },
    images: {
        src: 'src/assets/images/**/*.jpg',
        dest: 'dist/assets/images'
    },
    scripts: {
        src: ['src/assets/js/bundle.js', 'src/assets/js/admin.js'],
        dest: 'dist/assets/js'
    },
    other: {
        src: ['src/assets/**/*', '!src/assets/{images,js,scss}', '!src/assets/{images,js,scss}/**/*'],
        dest: 'dist/assets'
    },
    package: {
        src: ['**/*', '!.vscode', '!node_modules{,/**}', '!packaged{,/**}', '!src{,/**}', '!.babelrc', '!.gitignore', '!gulpfile.babel.js', '!package.json', '!package-lock.json'],
        dest: 'packaged'
    }
}

// Browser sync > crear servidor
export const serve = (done) => {
    server.init({
        proxy: "http://udemydemo/"
    })
    done(); // Done hace que se "lance" esta funcion
}

// Browser sync > refrescar servidor
export const reload = (done) => {
    server.reload();
    done();
}

// Tarea para borrar la carpeta de la distribucion ( dist )
export const clean = () => {
    return del(['dist'])
}

// Tarea para compilar sass y generar el sourcemap ( produccion y desarrollo - gulpif )
// Incluye compatibilidad de CSS (cleanCSS) y Sourcemap
export const styles = () => {
    return gulp.src(paths.styles.src)
        .pipe(gulpif(!PRODUCTION, sourcemaps.init()))
        .pipe(sass().on('error', sass.logError))
        .pipe(gulpif(PRODUCTION, cleanCSS({compatibility: 'ie8'})))
        .pipe(gulpif(!PRODUCTION, sourcemaps.write()))
        .pipe(gulp.dest(paths.styles.dest))
        .pipe(server.stream());
}

// Tarea para las gestionar las imagenes + compresion
export const images = () => {
    return gulp.src(paths.images.src)
        .pipe(gulpif(PRODUCTION, imagemin()))
        .pipe(gulp.dest(paths.images.dest))
}

// Tarea para copiar cualquier archivo que no sea sass, imagenes o js
export const copy = () => {
    return gulp.src(paths.other.src)
        .pipe(gulp.dest(paths.other.dest))
}

// Tarea para "vigilar" si se hace un cambio (si se hace un cambio, hace la correspondiente funcion)
export const watch = () => {
    gulp.watch('src/assets/scss/**/*.scss', styles );
    gulp.watch('src/assets/js/**/*.js', gulp.series(scripts, reload));
    gulp.watch('**/*.php', reload);
    gulp.watch(paths.images.src, gulp.series(images, reload));
    gulp.watch(paths.other.src, gulp.series(copy, reload));
}

// Tarea Compilar JS > Webpack (unificar todo el js en un archivo)
// Uglify minimifica el js
// Usamos babel-loader para compatibilzar con Babel
export const scripts = () => {
    return gulp.src(paths.scripts.src)
        .pipe(named())
        .pipe(webpack({
            module: {
                rules: [
                    {
		                test: /\.js$/,
                        use: {
                            loader: 'babel-loader',
                            options: {
                                presets: ['@babel/preset-env'] //or ['babel-preset-env']
                            }
			            }
		            }
		        ]
            },
	        output: {
	            filename: '[name].js'
            },
            externals: {
                jquery: 'jQuery'
            },
	        devtool: !PRODUCTION ? 'inline-source-map' : false,
            mode: PRODUCTION ? 'production' : 'development' //add this
	    }))
	    .pipe(gulpif(PRODUCTION, uglify())) //you can skip this now since mode will already minify
	    .pipe(gulp.dest(paths.scripts.dest));
}

// Comprimir para template
export const compress = () => {
    return gulp.src(paths.package.src)
        .pipe(replace('_themename',info.name))
        .pipe(zip(`${info.name}.zip`))
        .pipe(gulp.dest(paths.package.dest));
}

// Tareas para trabajar > dev & production
// series: hace una funcion cuando acaba la anterior
// parallel: hace las funciones a la vez
export const dev = gulp.series(clean, gulp.parallel(styles, scripts, images, copy), serve, watch)
export const build = gulp.series(clean, gulp.parallel(styles, scripts, images, copy))
export const bundle = gulp.series(build, compress);

// Asignamos dev como tarea "por defecto"
export default dev;

// Produccion
// Para produccion hay que usar 'gulp build --prod' para que haga todas las funciones correctamente