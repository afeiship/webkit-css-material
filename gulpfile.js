(function () {
  var gulp = require("gulp");
  var sass = require("gulp-sass");
  var del = require("del");
  var path = require("path");
  var pkgHeader = require("@jswork/gulp-pkg-header");
  var SASS_INCLUDE_PATHS = [path.join(__dirname, "/node_modules/")];

  gulp.task("clean", function () {
    return del("dist");
  });

  gulp.task("styles", function () {
    return gulp
      .src("src/index.scss")
      .pipe(pkgHeader())
      .pipe(sass({ outputStyle: "expanded", includePaths: SASS_INCLUDE_PATHS }))
      .pipe(gulp.dest("dist"));
  });

  gulp.task("default", gulp.series(["clean", "styles"]));
})();
