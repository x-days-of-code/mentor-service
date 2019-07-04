"use strict";

var gulp = require("gulp");
var sass = require("gulp-sass");
var plumber = require("gulp-plumber");
var postcss = require("gulp-postcss");
var autoprefixer = require("autoprefixer");
var server = require("browser-sync").create();

gulp.task("style", function() {
	 gulp.src("src/scss/style.scss")
		.pipe(plumber())
		.pipe(sass())
		.pipe(postcss([
			autoprefixer()
		]))
		.pipe(gulp.dest("src/style"))
		.pipe(server.stream());
});

gulp.task("serve", ["style"], function() {
	server.init({
		server: "src/",
		notify: false,
		open: true,
		cors: true,
		ui: false
	});

	gulp.watch("src/scss/**/*.scss", ["style"]);
	gulp.watch("src/*.html").on("change", server.reload);
});
