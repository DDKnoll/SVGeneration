module.exports = function (grunt) {
  /** var fs = require('fs');
  var folders = [];

  var articles = [];
  fs.readFileSync('articles.json', function (err, data) {
    articles = JSON.parse(data);
  });
  console.log(articles); */

  var concatJS = [
    'js/_bower.js',
    'js/global.js',
    'js/navbar.js',
    'js/editor.js',
    'js/main.js',
  ];

  grunt.initConfig({
    pages: [],
    clean: ['dist/*'],

    ejs: {
      all: {
        options: {
          // site-wide vars here
        },
        src: ['templates/pages/*.ejs', '!node_modules/**/*'],
        dest: 'dist/',
        expand: true,
        flatten: true,
        ext: '.html',
      },
    },

    shell: {
      'jsx': {
        command: [
          'jsx -x jsx jsx/ js/',
        ].join(' && '),
        stdout: true,
        failOnError: true
      },
      images: {
        command: 'node compile_image_data.js',
        stdout: true,
        failOnError: true
      }
    },

    sass: {                              // Task
      options: {                       // Target options
        style: 'compressed'
      },
      dist: {                            // Target
        files: {
          'style.css': 'scss/app.scss'
        }
      }
    },

    bower_concat: {
      all: {
        dest: 'js/_bower.js',
      }
    },

    copy: {
      all: {
        src: ['*.css', '*.html', 'images/**/*', 'sources/**/*', 'recipes/**/*', '!Gruntfile.js'],
        dest: 'dist/',
      },
    },

    concat: {
      all: {
        src: concatJS,
        dest: 'dist/app.js'
      },
    },

    connect: {
      options: {
        port: process.env.PORT || 3131,
        base: 'dist/',
        hostname: '*'
      },

      all: {},
    },

    browserSync: {
      options: {
        notify: false,
        background: true
      },
      livereload: {
        options: {
          files: [
            'dist/**/*',
          ],
        }
      },
    },

    watch: {
      options: {
        livereload: true
      },

      html: {
        files: 'templates/**/*.ejs',
        tasks: ['ejs'],
      },
      sass: {
        files: 'scss/**/*.scss',
        tasks: 'sass'
      },
      jsx: {
        files: 'jsx/**/*',
        tasks: 'shell:jsx'
      },

      js: {
        files: '<%= concat.all.src %>',
        tasks: ['concat'],
      },

      assets: {
        files: ['assets/**/*', '*.css', '*.js', 'images/**/*', '!Gruntfile.js'],
        tasks: ['copy'],
      }
    },

    'gh-pages': {
      options: {
        base: 'dist/'
      },
      src: ['**/*']
    }
  });

  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  grunt.registerTask('default', ['ejs', 'shell', 'sass', 'bower_concat', 'concat', 'copy']);

  grunt.registerTask('serve', 'start the static file watch compiler and browsersync', function () {
    grunt.task.run([
      'default',
      'connect',
      'browserSync:livereload',
      'watch'
    ]);
  });

  grunt.registerTask('deploy', ['default', 'gh-pages']);

};