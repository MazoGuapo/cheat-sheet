# Wordpress Development Cheat Sheet
- [NPM & Gulp](https://github.com/MazoGuapo/cheat-sheet#npm--gulp)

## NPM & Gulp

#### Crear archivo package.json (en la terminal dentro de la carpeta del proyecto)
```go
npm init
```

#### Gulp
- [Gulp - Instalación y Ejemplo](https://www.npmjs.com/package/gulp#sample-gulpfilejs)

#### Instalar gulp en todo el ordenador
```go
npm install --global gulp-cli
```

#### Instalar gulp en el proyecto (en la terminal dentro de la carpeta del proyecto)
```go
npm install --save-dev gulp
```

#### Babel (compatibilidad con js)
- [Gulp & Babel](https://www.npmjs.com/package/gulp#use-latest-javascript-version-in-your-gulpfile)

#### GULP - Tareas por defecto de gulp (formato)
```go
import gulp from 'gulp';

gulp.task('default', defaultTask);

function defaultTask(done){
  done();
}

gulp.task('hello' function(done){
  console.log('hello');
  done();
})
```

#### GULP - Flujo pipe (formato) - fuente / tarea / destino
```go
export const styles = () => {
    return gulp.src(paths.styles.src)
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(paths.styles.dest));
}
```

#### GULP - Series - una tarea después de otra
```go
export const build = gulp.series(clean, gulp.parallel(styles, scripts, images, copy))
```

#### GULP - Parallel - una tarea a la vez que otra
```go
export const hello = gulp.parallel(styles, scripts, images, copy)
```

#### GULP - Watch - Observa cualquier cambio donde le indiques
```go
export const watch = () => {
    gulp.watch('src/assets/scss/**/*.scss', styles );
    gulp.watch('src/assets/js/**/*.js', gulp.series(scripts, reload));
    gulp.watch('**/*.php', reload);
    gulp.watch(paths.images.src, gulp.series(images, reload));
    gulp.watch(paths.other.src, gulp.series(copy, reload));
}
```



## Recursos
- [Node](https://nodejs.org/es/)
- [Gulp npm](https://www.npmjs.com/package/gulp)
- [Yargs - produccion vs development](https://www.npmjs.com/package/yargs)
- [Gulp Sass - compilacion](https://www.npmjs.com/package/gulp-sass)
- [Clean CSS - Compatibilidad de CSS](https://www.npmjs.com/package/clean-css)
- [Gulp IF - Condicionales en Gulp](https://www.npmjs.com/package/gulp-if)
- [Gulp Sourcemap - Generar Sourcemap](https://www.npmjs.com/package/gulp-sourcemaps)
- [Gulp Imagemin - Procesado de imagenes y compresion](https://www.npmjs.com/package/gulp-imagemin)
- [del - Procesado de imagenes y compresion](https://www.npmjs.com/package/gulp-imagemin)
<!-- -
- [Gulp npm](https://www.npmjs.com/package/gulp)
- [Gulp npm](https://www.npmjs.com/package/gulp)
- [Gulp npm](https://www.npmjs.com/package/gulp)
- [Gulp npm](https://www.npmjs.com/package/gulp)
- [Gulp npm](https://www.npmjs.com/package/gulp)
- [Gulp npm](https://www.npmjs.com/package/gulp)
- [Gulp npm](https://www.npmjs.com/package/gulp)
- [Gulp npm](https://www.npmjs.com/package/gulp)
- [Gulp npm](https://www.npmjs.com/package/gulp)
- [Gulp npm](https://www.npmjs.com/package/gulp)
- [Gulp npm](https://www.npmjs.com/package/gulp)
- [Gulp npm](https://www.npmjs.com/package/gulp)
- [Gulp npm](https://www.npmjs.com/package/gulp)
- [Gulp npm](https://www.npmjs.com/package/gulp)
- [Gulp npm](https://www.npmjs.com/package/gulp)
- [Gulp npm](https://www.npmjs.com/package/gulp)
- [Gulp npm](https://www.npmjs.com/package/gulp)
- [Gulp npm](https://www.npmjs.com/package/gulp)
- [Gulp npm](https://www.npmjs.com/package/gulp)
- [Gulp npm](https://www.npmjs.com/package/gulp)
- [Gulp npm](https://www.npmjs.com/package/gulp)
- [Gulp npm](https://www.npmjs.com/package/gulp)
- [Gulp npm](https://www.npmjs.com/package/gulp)
- [Gulp npm](https://www.npmjs.com/package/gulp)
- [Gulp npm](https://www.npmjs.com/package/gulp)
- [Gulp npm](https://www.npmjs.com/package/gulp)
- [Gulp npm](https://www.npmjs.com/package/gulp)
- [Gulp npm](https://www.npmjs.com/package/gulp)
- [Gulp npm](https://www.npmjs.com/package/gulp)
- [Gulp npm](https://www.npmjs.com/package/gulp)
- [Gulp npm](https://www.npmjs.com/package/gulp)
- [Gulp npm](https://www.npmjs.com/package/gulp)
- [Gulp npm](https://www.npmjs.com/package/gulp)
- [Gulp npm](https://www.npmjs.com/package/gulp) -->


<!-- ## Getting started
### Hello world
#### code — app.go

-  [Variables](https://github.com/MazoGuapo/cheat-sheet#variables) -->