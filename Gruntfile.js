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

  grunt.registerTask('zip-objects', 'Zip all the objects folders', function(){
    grunt.dynamicCompress('_objects');
    grunt.task.run('compress');
  });

  grunt.registerTask('default', ['stylus', 'jekyll:serve']);
  grunt.registerTask('deploy', ['stylus', 'buildcontrol']);

};
