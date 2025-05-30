module.exports = function (grunt) {
     grunt.initConfig({
          pkg: grunt.file.readJSON('package.json'),

          less: {
               dist: {
                    files: {
                         'dist/styles/style.css': 'src/styles/style.less',
                    },
               },
          },

          cssmin: {
               target: {
                    files: {
                         'dist/styles/style.min.css': ['dist/styles/style.css'],
                    },
               },
          },

          htmlmin: {
               dist: {
                    options: {
                         removeComments: true,
                         collapseWhitespace: true,
                    },

                    files: {
                         'dist/index.min.html': 'src/index.html',
                    },
               },
          },

          uglify: {
               dist: {
                    files: {
                         'dist/scripts/main.min.js': 'src/scripts/main.js',
                    },
               },
          },

          watch: {
               less: {
                    files: ['src/styles/*.less'],
                    tasks: ['less', 'cssmin'],
               },

               html: {
                    files: ['src/*.html'],
                    tasks: ['htmlmin'],
               },

               js: {
                    files: ['src/scripts/*.js'],
                    tasks: ['uglify'],
               },
          },
     });

     grunt.loadNpmTasks('grunt-contrib-less');
     grunt.loadNpmTasks('grunt-contrib-cssmin');
     grunt.loadNpmTasks('grunt-contrib-htmlmin');
     grunt.loadNpmTasks('grunt-contrib-uglify');
     grunt.loadNpmTasks('grunt-contrib-watch');

     grunt.registerTask('default', ['less', 'cssmin', 'htmlmin', 'uglify']);
};
//npm install
//npm run grunt
