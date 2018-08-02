module.exports = function(grunt) {
  grunt.initConfig({
	pkg: grunt.file.readJSON('package.json'),
	distFolder: 'dist',

  imagemin: {
	    png: {
	      options: {
	        optimizationLevel: 7
	      },
	      files: [
	        {

	          expand: true,
	          // cwd is 'current working directory'
	          cwd: 'images/',
	          src: ['**/*.png'],
	          // Could also match cwd line above. i.e. project-directory/img/
	          dest: '<%= distFolder %>/images',
	          ext: '.png'
	        }
	      ]
	    },
	    jpg: {
	      options: {
	        progressive: true
	      },
	      files: [
	        {
	          // Set to true to enable the following options…
	          expand: true,
	          // cwd is 'current working directory'
	          cwd: 'images/',
	          src: ['**/*.jpg'],
	          // Could also match cwd. i.e. project-directory/img/
	          dest: '<%= distFolder %>/images',
	          ext: '.jpg'
	        }
	      ]
	    },
	    gif: {
	      options: {
	      },
	      files: [
	        {
	          // Set to true to enable the following options…
	          expand: true,
	          // cwd is 'current working directory'
	          cwd: 'images/',
	          src: ['**/*.gif'],
	          // Could also match cwd. i.e. project-directory/img/
	          dest: '<%= distFolder %>/images',
	          ext: '.gif'
	        }
	      ]
	    }
	},



  webfont: {
    adminIcons: {
      src: 'icons/admin/*.svg',
      dest: 'fonts/',
      destCss: 'scss/',
      options: {
        stylesheet: 'scss',
        relativeFontPath: '../fonts',
        font: 'pagebuilder-icons',
        syntax: 'bootstrap',
        htmlDemo: 'true'
      }
		},
		storefrontIcons: {
			src: 'icons/storefront/*.svg',
      dest: 'fonts/',
      destCss: 'scss/',
      options: {
        stylesheet: 'scss',
        relativeFontPath: '../fonts',
        font: 'CMS-Storefront-Icons',
        syntax: 'bootstrap',
        htmlDemo: 'true'
      }
		}
  },


  });

  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-webfont');

  grunt.registerTask('default', ['webfont']);

};
