var path = require("path");
var jpegtran = require('imagemin-jpegtran');
var optipng = require('imagemin-optipng');
var svgo = require('imagemin-svgo');

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    stylus: {
      compile: {
        files: {
          'public/css/main.css': 'public/css/main.styl',
        }
      }
    },
    jekyll: {                             // Task
      options: {                          // Universal options
        src : './'
      },
      dist: {                             // Target
        options: {                        // Target options
          dest: '_site',
          config: '_config.yml'
        }
      },
      serve: {                            // Another target
        options: {
          serve: true,
          dest: '_site',
          drafts: true,
          future: true
        }
      }
    },
    buildcontrol: {
      options: {
        dir: '_site',
        commit: true,
        push: true,
        message: 'Built %sourceName% from commit %sourceCommit% on branch %sourceBranch%'
      },
      pages: {
        options: {
          remote: 'git@github.com:libreobjet/libreobjet.github.io.git',
          branch: 'master'
        }
      }
    },
    imagemin: {                          // Task
      dynamic: {                         // Another target
        options: {                       // Target options
          optimizationLevel: 3,
          svgoPlugins: [{ removeViewBox: false }],
          use: [
            jpegtran(),
            optipng(),
            svgo()
          ]
        },
        files: [{
          expand: true,                          // Enable dynamic expansion
          cwd: '_site/objects/',                 // Src matches are relative to this path
          src: ['**/*.{png,jpg,gif}'],             // Actual patterns to match
          dest: '_site/objects/'                  // Destination path prefix
        }]
      }
    },
    image_resize: {
      resize: {
        options: {
            width: 770,
            height: 1000, // Because without that, it just generates a 1x1px file
            //overwrite: true
        },
        files: [{
          expand: true,
          cwd: '_site/objects/',
          src: ['**/*.{png,jpg,gif}'],
          dest: '_site/objects/'
        }]
      }
    },
    htmlmin: {                                     // Task
      dist: {                                      // Target
        options: {                                 // Target options
          removeComments: true,
          collapseWhitespace: true
        },
        files: [{
          expand: true,
          cwd: '_site/',
          src: ['**/*.{html,htm}'],
          dest: '_site/'
        }]
      }
    }
  });

  grunt.dynamicCompress = function (directory) {
    var target = grunt.file.expand({ filter: "isDirectory" }, directory + '/*');
    for (var i in target) {
      var subfolder_name = target[i].substr( target[i].lastIndexOf("/") + 1 );
      grunt.config.set('compress.' + subfolder_name, {
        expand: true,
        cwd: target[i],
        src: ['**/*'],
        options: {
          mode: 'zip',
          archive: '_site/objects/' + subfolder_name + '/' + subfolder_name + '.zip'
        }
      });
    }
  };


  grunt.loadNpmTasks('grunt-contrib-stylus');
  grunt.loadNpmTasks('grunt-jekyll');
  grunt.loadNpmTasks('grunt-contrib-compress');
  grunt.loadNpmTasks('grunt-build-control');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-image-resize');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');

  grunt.registerTask('zip-objects', 'Zip all the objects folders', function(){
    grunt.dynamicCompress('_objects');
    grunt.task.run('compress');
  });

  //grunt.registerTask('image_mignifier', ['image_resize', 'imagemin']);
  grunt.registerTask('image_mignifier', ['image_resize']);
  grunt.registerTask('default', ['stylus', 'jekyll:serve'] );
  grunt.registerTask('build', ['stylus', 'jekyll:dist', 'htmlmin', 'image_mignifier', 'zip-objects'] );
  grunt.registerTask('deploy', ['build', 'buildcontrol']);

};
