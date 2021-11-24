# Wordpress Development Cheat Sheet
- [NPM & Gulp](https://github.com/MazoGuapo/cheat-sheet#npm--gulp)
- [Wordpres](https://github.com/MazoGuapo/cheat-sheet#wordpress)
  + [Hooks - Actions y Filters](https://github.com/MazoGuapo/cheat-sheet#hooks)
  + [Wordpres](https://github.com/MazoGuapo/cheat-sheet#wordpress)

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
El primer argumento es la ruta a observar, el segundo la tarea a ejecutar una vez detectado el cambio
```go
export const watch = () => {
    gulp.watch('src/assets/scss/**/*.scss', styles );
    gulp.watch('src/assets/js/**/*.js', gulp.series(scripts, reload));
    gulp.watch('**/*.php', reload);
    gulp.watch(paths.images.src, gulp.series(images, reload));
    gulp.watch(paths.other.src, gulp.series(copy, reload));
}
```
#### GULP - Webpack multiples archivos (no solo el bundle)
- [Gulp & Babel](https://www.npmjs.com/package/gulp#use-latest-javascript-version-in-your-gulpfile)





## Wordpress


### Hooks
Los ganchos o hooks en WordPress son puntos concretos y estratégicos dentro del core de WordPress que permiten añadir funcionalidades o modificar un comportamiento.

Wordpress tiene los suyos propios y tu puedes crear los tuyos.

#### Actions
Las acciones o action hooks ejecutan una función propia en un lugar preciso en un momento determinado de la línea de ejecución de WordPress

```go
do_action('nombre_hook');
```

```go
add_action('nombre_hook', 'nombre_funcion_ejecutar', 'prioridad');
```

#### Filters
Los filtros o filter hooks de WordPress manipulan la información en un punto concreto de la ejecución antes de que se muestre en la pantalla o se almacene en la base de dato.

```go
add_filter('nombre_hook', 'nombre_filtro_ejecutar');
```

- [Referencia de Actions de WP](https://codex.wordpress.org/Plugin_API/Action_Reference)
- [Referencia de Filters de WP](https://codex.wordpress.org/Plugin_API/Filter_Reference)
- [Referencia de Actions & Filters completa de WP](https://adambrown.info/p/wp_hooks/hook)




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
- [Webpack Stream - Bundle ***](https://www.npmjs.com/package/webpack-stream)
- [Babel loader - Babel & Webpack](https://www.npmjs.com/package/babel-loader)
- [Gulp Uglify - Minificar js](https://www.npmjs.com/package/gulp-uglify)
- [Browser Sync - Refrescar Navegador](https://browsersync.io/)




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
- [Gulp npm](https://www.npmjs.com/package/gulp) -->


<!-- ## Getting started
### Hello world
#### code — app.go

-  [Variables](https://github.com/MazoGuapo/cheat-sheet#variables) -->