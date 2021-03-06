// Generated by CoffeeScript 1.4.0

module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('abc.json'),
    banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' + '<%= grunt.template.today("yyyy-mm-dd h:MM:ss TT") %>\n' + '<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' + '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' + ' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */\n',
    kmc: {
      options: {
        packages: [
          {
            name: '<%= pkg.name %>',
            path: '../'
          }
        ],
        map: [["<%= pkg.name %>/", "gallery/<%= pkg.name %>/"]]
      },
      main: {
        files: [
          {
            src: "<%= pkg.version %>/index.js",
            dest: "<%= pkg.version %>/build/index.js"
          }, {
            src: "<%= pkg.version %>/parse.js",
            dest: "<%= pkg.version %>/build/parse.js"
          }
        ]
      }
    },
    uglify: {
      options: {
        banner: '<%= banner %>'
      },
      base: {
        files: {
          '<%= pkg.version %>/build/index-min.js': ['<%= pkg.version %>/build/index.js'],
          '<%= pkg.version %>/build/parse-min.js': ['<%= pkg.version %>/build/parse.js']
        }
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-kmc');
  return grunt.registerTask('default', ['kmc', 'uglify']);
};
