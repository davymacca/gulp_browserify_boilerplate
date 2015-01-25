
    global.SRC_FOLDER = 'src';
    global.BUILD_FOLDER = 'build';
    global.RELEASE_FOLDER = 'release';

    global.config = {
        paths: {
            src: {
                index: SRC_FOLDER + '/index.html',
                assets: [SRC_FOLDER + '/assets/**/*', '!' + SRC_FOLDER + '/assets/images/**/*'],
                images: SRC_FOLDER + '/assets/images/**/*',
                scripts: SRC_FOLDER + '/modules/**/*.js',
                styles: SRC_FOLDER + '/styles/main.styl',
                stylesGlob: SRC_FOLDER + '/styles/**/*.styl',
                livereload: [BUILD_FOLDER + '/**/*', '!' + BUILD_FOLDER + '/assets/**/*'],
                modules: './' + SRC_FOLDER + '/modules/app.js'
            },
            dest: {
                build: {
                    styles: BUILD_FOLDER,
                    scripts: BUILD_FOLDER,
                    images: BUILD_FOLDER + '/assets/images',
                    assets: BUILD_FOLDER + '/assets',
                    index: BUILD_FOLDER,
                },
                release: {
                    styles: RELEASE_FOLDER,
                    scripts: RELEASE_FOLDER,
                    images: RELEASE_FOLDER + '/assets/images',
                    assets: RELEASE_FOLDER + '/assets',
                    index: RELEASE_FOLDER
                }
            }
        },
        filenames: {
            build: {
                styles: 'styles.css',
                scripts: 'scripts.js'
            },
            release: {
                styles: 'styles.min.css',
                scripts: 'scripts.min.js'
            }
        },
        ports: {
            staticServer: 8888,
            livereloadServer: 35729
        }
    };
