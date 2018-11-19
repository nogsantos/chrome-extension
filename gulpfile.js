/*eslint-env node */
const chalk = require("chalk");
const gulp = require("gulp");
const argv = require("yargs").argv;
const plugins = require("gulp-load-plugins")();
const manifest = require("./src/manifest");
const replaceOpts = require("./buildReplacements");
const distFilename =
    manifest.name.replace(/[ ]/g, "_").toLowerCase() +
    "-v-" +
    manifest.version +
    ".zip";
/**
 * Output which version to build and to where
 */
gulp.task("announce", function() {
    plugins.util.log(
        "Building version",
        chalk.cyan(manifest.version),
        "of",
        chalk.cyan(manifest.name),
        "as",
        chalk.cyan("dist/" + distFilename)
    );
});

/**
 * Cleans build and dist dirs
 */
gulp.task("clean", ["announce"], function() {
    return gulp
        .src(["build/**", "build/*"], { read: false })
        .pipe(plugins.rm({ async: false }));
});

/**
 * ESLINT the javascript (BEFORE uglifier ran over it)
 */
gulp.task("lint", function() {
    return gulp
        .src(["src/js/*/*.js"])
        .pipe(plugins.eslint())
        .pipe(plugins.eslint.format())
        .pipe(plugins.eslint.failOnError());
});

/**
 * Optimize CSS
 */
gulp.task("optimizeCss", ["clean"], function() {
    // Optimize main options.css
    gulp.src(["src/css/*.css"], { nonegate: false })
        .pipe(plugins.replaceTask(replaceOpts))
        .pipe(plugins.cssnano())
        .pipe(gulp.dest("build/css/"));
});

/**
 * Build global.js
 * Sadly until I use webpack here the order is important :(
 */
gulp.task("globalJs", ["clean"], function() {
    return gulp
        .src(["src/js/background.js", "src/js/main.js"])
        .pipe(plugins.replaceTask(replaceOpts))
        .pipe(plugins.uglify())
        .pipe(gulp.dest("build/js/"));
});

/**
 * Copies files that can be copied without changes
 */
gulp.task("copyUnchanged", ["clean"], function() {
    ["img"].forEach(function(dir) {
        gulp.src(["src/" + dir + "/**/*"], { nonegate: false }).pipe(
            gulp.dest("build/" + dir)
        );
    });
});

/**
 * Copies HTML files and removes comment and blocks (see above)
 */
gulp.task("copyHtml", ["copyUnchanged"], function() {
    return gulp
        .src(["src/**/*.html"], {
            nonegate: false
        })
        .pipe(plugins.replaceTask(replaceOpts))
        .pipe(plugins.cleanhtml())
        .pipe(gulp.dest("build/html"));
});

/**
 * Copies and replaces the manifest.json file (see above)
 */
gulp.task("mangleManifest", ["clean"], function() {
    return gulp
        .src("src/manifest.json")
        .pipe(plugins.replaceTask(replaceOpts))
        .pipe(gulp.dest("build"));
});

/**
 * SASS -> CSS
 * Output is expanded since it will be compressed if
 * running 'build'
 */
gulp.task("sass", function() {
    gulp.src("src/scss/*.scss")
        .pipe(plugins.sourcemaps.init())
        .pipe(
            plugins
                .sass({ outputStyle: "expanded" })
                .on("error", plugins.sass.logError)
        )
        .pipe(plugins.sourcemaps.write("."))
        .pipe(gulp.dest("src/css"));
});

/**
 * Watch and live compile SASS -> CSS
 */
gulp.task("sass:watch", function() {
    gulp.watch("src/sass/**/*.scss", ["sass"]);
});

/**
 * Build a distribution
 */
gulp.task(
    "build",
    [
        "announce",
        "clean",
        "lint",
        "copyHtml",
        "sass",
        "optimizeCss",
        "globalJs",
        "mangleManifest"
    ],
    function() {
        gulp.src(["build/**"])
            .pipe(plugins.zip(distFilename))
            .pipe(gulp.dest("dist"));
    }
);

/**
 * Build a BETA
 */
gulp.task("build-beta", ["build"], function() {
    gulp.src(["build/**"])
        .pipe(plugins.zip(distFilename + ".beta.zip"))
        .pipe(gulp.dest("dist"));
});

/**
 * Watch for changes
 */
gulp.task("watch", function() {
    gulp.watch(["test/**/*.js"], runTests);
    gulp.watch("src/scss/**/*.scss", ["sass"]);
});
