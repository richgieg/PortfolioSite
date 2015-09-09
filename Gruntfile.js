/*
 After you have changed the settings under responsive_images
 run this with one of these options:
  "grunt" alone creates a new, completed images directory
  "grunt clean" removes the images directory
  "grunt responsive_images" re-processes images without removing the old ones
*/

module.exports = function(grunt) {

  grunt.initConfig({
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
          cwd: 'images_src/',
          dest: 'images/'
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
          cwd: 'images_src/',
          dest: 'images/'
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
          cwd: 'images_src/',
          dest: 'images/'
        }]
      }
    },

    /* Clear out the images directory if it exists */
    clean: {
      dev: {
        src: ['images'],
      },
    },

    /* Generate the images directory if it is missing */
    mkdir: {
      dev: {
        options: {
          create: ['images']
        },
      },
    },

  });

  grunt.loadNpmTasks('grunt-responsive-images');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-mkdir');
  grunt.registerTask('default', ['clean', 'mkdir', 'responsive_images']);

};
