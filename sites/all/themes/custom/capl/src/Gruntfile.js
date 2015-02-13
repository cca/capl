'use strict';

module.exports = function (grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    // watch for changes and trigger compass, jshint, uglify and livereload
    watch: {
      compass: {
        files: ['sass/{,**/}*.scss'],
        tasks: [
          'clean:cssInit',
          'compass',
          'cssmin',
          'concat:css',
          'clean:cssExtra'
        ]
      },
      js: {
        files: '<%= jshint.all %>',
        tasks: [
          'clean:jsInit',
          'jshint',
          'uglify:dev',
          'uglify:dist',
          'concat:js',
          'clean:jsExtra'
        ]
      },
      livereload: {
        options: {
          livereload: 3001
        },
        files: [
          '../css/capl-style.css'
        ]
      }
    },

    // compass and scss
    compass: {
      options: {
        bundleExec: true,
        httpPath: '/sites/all/themes/custom/capl',
        cssDir: '../css',
        sassDir: 'sass',
        imagesDir: '../images',
        javascriptsDir: '../js',
        fontsDir: '../css/fonts',
        assetCacheBuster: 'none',
        require: [
          'sass-globbing',
          'oily_png'
        ]
      },
      all: {
        options: {
          environment: 'development',
          outputStyle: 'expanded',
          relativeAssets: true,
          raw: 'line_numbers = :true\n'
        }
      }
    },

    // javascript linting with jshint
    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      all: [
        'js/*.js',
        '!js/*.min.js'
      ]
    },

    // concat & minify
    uglify: {
      dev: {
        options: {
          mangle: false,
          compress: false,
          beautify: true
        },
        files: {
        }
      },
      dist: {
        options: {
          mangle: true,
          compress: true
        },
        files: {
        }
      }
    },

    // copy files
    copy: {
      main: {
      }
    },

    // minimize css files
    cssmin: {
      options: {
        keepSpecialComments: 0
      },
      minify: {
        expand: true,
        cwd: '../css/',
        src: ['*.css', '!*.min.css'],
        dest: '../css/',
        ext: '.min.css'
      }
    },

    // concatenate css/js files
    concat: {
      css: {
        files: {
          '../css/all.min.css': ['../css/*.min.css']
        }
      },
      js: {
        options: {
          separator: grunt.util.linefeed + ';' + grunt.util.linefeed
        },
        files: {
          '../js/capl-scripts.min.js': ['../js/*.min.js']
        }
      }
    },

    // clean (remove) files created during other tasks
    clean: {
      options: {
        force: true
      },
      cssInit: ['../css/*.min.css'],
      jsInit: ['../js/*.min.js'],
      allInit: ['<%= clean.cssInit %>', '<%= clean.jsInit %>'],
      cssExtra: ['../css/*.min.css', '!../css/capl-style.min.css'],
      jsExtra: ['../js/*.min.js', '!../js/all.min.js'],
      allExtra: ['<%= clean.cssExtra %>', '<%= clean.jsExtra %>']
    }

  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-clean');

  grunt.registerTask('build', [
    'clean:allInit',
    'copy',
    'compass',
    'cssmin',
    'jshint',
    'uglify:dev',
    'uglify:dist',
    'concat',
    'clean:allExtra'
  ]);

  grunt.registerTask('default', [
    'clean:allInit',
    'copy',
    'compass',
    'cssmin',
    'jshint',
    'uglify:dev',
    'uglify:dist',
    'concat',
    'clean:allExtra',
    'watch'
  ]);

};
