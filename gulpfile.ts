"use strict";

const gulp = require("gulp");
const del = require("del");
const tsc = require("gulp-typescript");
const sourcemaps = require('gulp-sourcemaps');
const tsProject = tsc.createProject("tsconfig.json");
const tslint = require('gulp-tslint');
var war = require('gulp-war');
var zip = require('gulp-zip');

gulp.task('war', (done: any) =>{

    return gulp.src('./dist' + '/**')
        .pipe(war({
            welcome: 'index.html',
            displayName: 'KIOSK Monitoring System',
        }))
        .pipe(zip('kiosk-monitoring-web.war'))
        .pipe(gulp.dest('./dist/war'));
});

gulp.task('default', ['war']);
