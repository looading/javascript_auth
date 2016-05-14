const gulp = require('gulp')
const browserSync = require('browser-sync').create()
const config = require('./gulp/config')
const process = require('process')
const reload = browserSync.reload
var chapter = gulp.env.c;

gulp.task('create', () => {
	
	browserSync.init({
		server : {
			baseDir : `./${chapter}/`
		},
		port : 5555
	})
})


gulp.task('watch', () => {
	for(var i=0 ; i < config.src.length; i++ ) {
		gulp.watch(`./${chapter}/${config.src[i]}`).on('change', reload)
	}
	
})




gulp.task('default', [ 'create', 'watch' ])