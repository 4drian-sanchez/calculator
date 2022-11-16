const {src, dest, series, watch} = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const sourcemaps = require('gulp-sourcemaps');
const imagemin = require('gulp-imagemin');
const avif = require('gulp-avif');
const webp = require('gulp-webp');

const css = () => {
    return src('./src/scss/app.scss')
           .pipe(sourcemaps.init())
           .pipe(sass())
           .pipe(postcss([autoprefixer(), cssnano()]))
           .pipe(sourcemaps.write('.'))
           .pipe(dest('build/css'));
};

const img = () => {
    return src('src/img/**/*')
          .pipe(imagemin({optimizattionLevel: 3}))
          .pipe(dest('build/img'))
}

const versionWebp = () => {
    const opciones = {
        quality: 50
    }
    return src('src/img/**/*.jpg')
          .pipe(webp(opciones))
          .pipe(dest('build/img'))

}

const versionAvif = () => {
    const opciones = {
        quality: 50
    }
    return src('src/img/**/*.jpg')
          .pipe(avif(opciones))
          .pipe(dest('build/img'))
}


const dev = () => {
    watch('src/scss/**/*.scss', css);
    watch('bulid/img/**/*', img);
};

exports.css = css;
exports.dev = dev;
exports.img = img;
exports.versionAvif = versionAvif;
exports.versionWebp = versionWebp;
exports.convertirImgs = series(versionAvif, versionWebp);

exports.default = series( css, dev);

