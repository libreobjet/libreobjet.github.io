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


  grunt.loadNpmTasks('grunt-contrib-stylus');
  grunt.loadNpmTasks('grunt-jekyll');
  grunt.loadNpmTasks('grunt-build-control');

  // Default task(s).
  grunt.registerTask('default', ['stylus', 'jekyll:serve']);
  grunt.registerTask('deploy', ['buildcontrol']);

};
