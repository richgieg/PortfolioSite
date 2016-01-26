module.exports = function(grunt) {
  var devImgSrc = 'images_src/';
  var devImgDest = 'src/images/';
  var src = 'src/';
  var dest = 'dist/';

  grunt.initConfig({

    clean: {
      dev: {
        src: [devImgDest]
      },

      prod: {
        src: [dest]
      }
    },

    mkdir: {
      dev: {
        options: {
          create: [devImgDest]
        },
      },

      prod: {
        options: {
          create: [dest]
        },
      }
    },

  copy: {
    prod: {
      files: [
        {
          expand: true,
          cwd: src,
          src: ['**'],
          dest: dest
        },
      ],
    },
  },

    responsive_images: {
      logo: {
        options: {
          engine: 'im',
          sizes: [{
            width: 200,
            quality: 60
          },{
            width: 100,
            quality: 60
          },{
            width: 50,
            quality: 60
          }]
        },

        files: [{
          expand: true,
          src: ['logo.{gif,jpg,png}'],
          cwd: devImgSrc,
          dest: devImgDest
        }]
      },

      banner_full: {
        options: {
          engine: 'im',
          sizes: [{
            width: 2400,
            suffix: '_largest_2x',
            quality: 60
          },{
            width: 1200,
            suffix: '_largest_1x',
            quality: 60
          },{
            width: 1880,
            suffix: '_large_2x',
            quality: 60
          },{
            width: 940,
            suffix: '_large_1x',
            quality: 60
          }]
        },

        files: [{
          expand: true,
          src: ['banner_full.{gif,jpg,png}'],
          cwd: devImgSrc,
          dest: devImgDest
        }]
      },

      banner_cropped: {
        options: {
          engine: 'im',
          sizes: [{
            width: 1440,
            suffix: '_medium_2x',
            quality: 60
          },{
            width: 720,
            suffix: '_medium_1x',
            quality: 60
          },{
            width: 956,
            suffix: '_small_2x',
            quality: 60
          },{
            width: 478,
            suffix: '_small_1x',
            quality: 60
          }]
        },

        files: [{
          expand: true,
          src: ['banner_cropped.{gif,jpg,png}'],
          cwd: devImgSrc,
          dest: devImgDest
        }]
      },

      projects: {
        options: {
          engine: 'im',
          sizes: [{
            width: 1440,
            suffix: '_large_2x',
            quality: 60
          },{
            width: 720,
            suffix: '_large_1x',
            quality: 60
          },{
            width: 956,
            suffix: '_medium_2x',
            quality: 60
          },{
            width: 478,
            suffix: '_medium_1x',
            quality: 60
          },{
            width: 720,
            suffix: '_small_2x',
            quality: 60
          },{
            width: 360,
            suffix: '_small_1x',
            quality: 60
          }]
        },

        files: [{
          expand: true,
          src: ['u_*.{gif,jpg,png}', 'p_*.{gif,jpg,png}'],
          cwd: devImgSrc,
          dest: devImgDest
        }]
      }
    },

  });

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-mkdir');
  grunt.loadNpmTasks('grunt-responsive-images');
  grunt.loadNpmTasks('grunt-contrib-copy');

  grunt.registerTask('dev', ['clean:dev', 'mkdir:dev', 'responsive_images']);
  grunt.registerTask('prod', ['clean:prod', 'copy:prod']);
  grunt.registerTask('default', ['dev', 'prod']);
};
