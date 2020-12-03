const gulp = require("gulp");
const concat = require("gulp-concat");
const minifycss =require("gulp-minify-css");
const uglify =require("gulp-uglify");

gulp.task("minify-css", function(cb) { 
  gulp.src(["./app/css/b.css","./app/css/c.css","./app/css/a.css"])
  .pipe(concat("styles.css"))
  .pipe(minifycss())
  .pipe(gulp.dest("build/"))    
  cb();
});

gulp.task("minify-js", function(cb) { 
  gulp.src("./app/js/*")
  .pipe(concat("app.js"))
  .pipe(uglify())
  .pipe(gulp.dest("build/"))  
  cb();
});

gulp.task("optimize", gulp.series("minify-css","minify-js"));