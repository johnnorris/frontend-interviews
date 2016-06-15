module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        babel: {
            options: {
                sourceMap: false,
                presets: ['es2015']
            },
            dist: {
                files: [{
                    expand: true,
                    cwd: 'es6',
                    src: ['*.js'],
                    dest: 'js'
                }]
            }
        },
        watch: {
            js: {
                files: ['es6/**'],
                tasks: ['babel'],
                options: {
                    spawn: false
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-babel');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Default task(s).
    grunt.registerTask('default', ['babel', 'watch']);

};