var gulp = require('gulp');
var gutil = require('gulp-util');
var argv = require('yargs').argv;
var fs = require('fs');

var CHAPTER = 'Chapter';
var EXERCISE = 'Exercise-';
var CONFIG_FILES = [
    'package.json', 
    'tsconfig.json', 
    'systemjs.config.js',
    'bs-config.json'
  ];

var prepareMethod;     // Method of prepare: 'copy', 'move' or 'done'
var lastPrepared;      // The last preprared exercise, provided there is one
var lastPreparedPath;  // The path of the last preprared exercise, provided there is one

// Lists the available gulp commands
gulp.task('default', function () {
  gutil.log('Please use one of these tasks:');
  gutil.log('  gulp boilerplate        // refresh exercise boilerplate files');
  gutil.log('  gulp copy --ex CC-XX    // Creates a new exercise from the')
  gutil.log('                          // specified one')
  gutil.log('');
})

// Copies boilerplate files from the samples folder into each exercise folder
gulp.task('boilerplate', ['boilerplate:copy'], function () {
  gutil.log('Boilerplate files updated.');
})

// Carries out boilerplate files copy
gulp.task('boilerplate:copy', function() {
  // Get chapter folders
  var basedir = process.cwd();
  var chapters = fs.readdirSync(basedir).filter(function(file) {
    return file.indexOf(CHAPTER) == 0 && fs.statSync(file).isDirectory();
  });
  // Traverse through chapter folders
  for (var i = 0; i < chapters.length; i++) {
    var chapterDir = basedir + '/' + chapters[i];
    var exercises = fs.readdirSync(chapterDir).filter(function(file) {
      return file.indexOf(EXERCISE) == 0 && fs.statSync(chapterDir + '/' + file).isDirectory();
    });
    // Traverse through exercide folders
    for (var j = 0; j < exercises.length; j++) {
      var exercisePath = chapters[i] + '/' + exercises[j];
      gutil.log('Updating', exercisePath, '...');
      // Copy biolerplate files
      gulp.src(CONFIG_FILES, {base: '.'})
        .pipe(gulp.dest(exercisePath));
    }
  }
})

gulp.task('copy', function () {
  if (!argv.ex) {
    gutil.log('Error: Exercise code (--ex CC-XX) is not specified.');
    return;
  }
  var example = parseExampleCode(argv.ex);
  if (!example) {
    gutil.log('Error: Invalid exercise code ('+ argv.ex + ') is specified.');
    return;
  }
  if (!example) return;
  var sourcePath = getExercisePath(example);
  gutil.log('Source exercise:', sourcePath);
  var newExercise = parseInt(example.exercise) + 1;
  if (newExercise.toString().length == 1) {
      newExercise = '0' + newExercise;
  }
  var destPath = getExercisePath({chapter: example.chapter, exercise: newExercise});
  gutil.log('Destination exercise:', destPath);
  if (dirExists(destPath)) {
    gutil.log('Error: Exercise path ('+ destPath + ') already exists.');
    return;
  }
  return gulp.src([sourcePath + '/*', sourcePath + '/app/*'], 
    {base: sourcePath})
    .pipe(gulp.dest(destPath));
})

// ============================================================================
// Helpers

function parseExampleCode(example) {
  if (!example) return null;
  var parts = example.split('-');
  if (parts.length != 2) return null;
  if (typeof parts[0] !== 'string' || parts[0].length == 0 || parts[0].length > 2) return null;
  var chapter = parts[0].length == 1 ? '0' + parts[0] : parts[0];
  if (typeof parts[1] !== 'string' || parts[1].length == 0 || parts[1].length > 2) return null;
  var exercise = parts[1].length == 1 ? '0' + parts[1] : parts[1];
  return {
      chapter: chapter,
      exercise: exercise
  }
}

function getExercisePath(example) {
  return CHAPTER + example.chapter 
    + '/' + EXERCISE + example.chapter 
    + '-' + example.exercise;
}

function dirExists(basedir, subdir) {
  var path = basedir + ((subdir) ? '/' + subdir : '');
  try {
    var stats = fs.lstatSync(path);
    return stats.isDirectory();
  }
  catch (e) {
    return false;
  }
}
