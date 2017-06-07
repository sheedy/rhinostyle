import gulp from 'gulp';

//
// Import tasks
//

import { animationFlag, animationLogin, animationSecure, animationTime } from './config/animations';
import audio from './config/audio';
import fonts from './config/fonts';
import icons from './config/icons';
import clean from './config/clean';
import deploy from './config/deploy';
import linter from './config/linter';
import media from './config/media';
import pages from './config/pages';
import { distScripts, docsScripts } from './config/scripts';
import server from './config/server';
import { distStyles, docsStyles } from './config/styles';
import watch from './config/watch';

//
// Instantiate tasks
//

gulp.task('animation:flag', animationFlag);
gulp.task('animation:login', animationLogin);
gulp.task('animation:secure', animationSecure);
gulp.task('animation:time', animationTime);
gulp.task('audio', audio);
gulp.task('fonts', fonts);
gulp.task('clean', clean);
gulp.task('docs:deploy', deploy);
gulp.task('dist:scripts', distScripts);
gulp.task('dist:styles', distStyles);
gulp.task('docs:scripts', docsScripts);
gulp.task('docs:site', ['icons'], pages);
gulp.task('docs:styles', docsStyles);
gulp.task('icons', icons);
gulp.task('media', media);
gulp.task('server', ['watch'], server);
gulp.task('styles:lint', linter);
gulp.task('watch', watch);

//
// Bundled tasks
//

gulp.task('animations', ['animation:flag', 'animation:login', 'animation:secure', 'animation:time']);
gulp.task('default', ['audio', 'fonts', 'icons', 'dist:scripts', 'dist:styles', 'docs:scripts', 'docs:styles', 'docs:site', 'media']);
gulp.task('dist', ['audio', 'fonts', 'icons', 'dist:scripts', 'dist:styles', 'styles:lint', 'media']);
gulp.task('docs', ['audio', 'fonts', 'icons', 'docs:scripts', 'docs:styles', 'docs:site', 'styles:lint', 'media']);
gulp.task('styles', ['docs:styles', 'dist:styles', 'styles:lint']);
gulp.task('website', ['docs:deploy']);
