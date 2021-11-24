# NPM & Gulp

#### Crear archivo package.json (en la terminal)
```go
npm init
```

#### Instalar gulp en todo el ordenador
```go
npm install --global gulp-cli
```

#### Instalar gulp en el proyecto
```go
npm install --save-dev gulp
```

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

#### Babel (compatibilidad con js)
- [Hello World](https://www.npmjs.com/package/gulp#use-latest-javascript-version-in-your-gulpfile)



<!-- ## Getting started
### Hello world
#### code — app.go -->



<!-- -
-  [Variables](https://github.com/MazoGuapo/cheat-sheet#variables) -->