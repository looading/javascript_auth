const gulp = require('gulp')
const browserSync = require('browser-sync').create()
const config = require('./gulp/config')
const reload = browserSync.reload

gulp.task('create', () => {
	browserSync.init({
		server : {
			baseDir : './'
		},
		port : 5555
	})
})


gulp.task('watch', () => {
	gulp.watch(config.src).on('change', reload)
})

gulp.task('default', [ 'create', 'watch' ])