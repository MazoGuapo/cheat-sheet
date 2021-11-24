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

#### Tareas por defecto de gulp (formato)
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

#### Flujo pipe (formato)
```go
export const styles = () => {
    return gulp.src(paths.styles.src)
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(paths.styles.dest));
}
```

## Recursos
- [Node](https://nodejs.org/es/)
- [Gulp npm](https://www.npmjs.com/package/gulp)
- [Yargs](https://www.npmjs.com/package/yargs)
- [Gulp Sass](https://www.npmjs.com/package/gulp-sass)
- [Clean CSS](https://www.npmjs.com/package/clean-css)
- [Gulp IF](https://www.npmjs.com/package/gulp-if)
- [Gulp Sourcemap](https://www.npmjs.com/package/gulp-sourcemaps)
<!-- - [Gulp npm](https://www.npmjs.com/package/gulp)
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