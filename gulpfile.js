/**
 *  Welcome to your gulpfile!
 *  The gulp tasks are splitted in several files in the gulp directory
 *  because putting all here was really too long
 */

"use strict";

var gulp = require("gulp");
var sass = require("gulp-sass");
var del = require("del");

gulp.task("clean", function() {
  return del("dist");
});

gulp.task("styles", function() {
  return gulp
    .src("src/*.scss")
    .pipe(gulp.dest("dist"))
    .pipe(sass({ outputStyle: "expanded" }).on("error", sass.logError))
    .pipe(gulp.dest("dist"))
    .pipe(gulp.dest("docs"));
});

gulp.task("default", gulp.series(["clean", "styles"]));
