"use strict";

module.exports = function(grunt) {
  require("load-grunt-tasks")(grunt);

  grunt.initConfig({
    less: {
      style: {
        files: {
          "build/css/style.css": "less/style.less"
        }
      }
    },

    postcss: {
      style: {
        options: {
          processors: [
            require("autoprefixer")()
          ]
        },
        src: "build/css/*.css"
      }
    },

    cssmin: {
      target: {
        files: [{
          expand: true,
          cwd: "build/css",
          src: ["*.css", "!*.min.css"],
          dest: "build/css",
          ext: ".min.css"
        }]
      }
    },

    posthtml: {
      options: {
        use: [
          require("posthtml-include")()
        ]
      },

      html: {
        files: [{
          expand: true,
          src: ["*.html"],
          dest: "build"
        }]
      }
    },

    htmlmin: {
      dist: {
        options: {
          removeComments: true,
          collapseWhitespace: true
        },
        files: {
          "build/index.html": "build/index.html",
          "build/form.html": "build/form.html",
          "build/photo.html": "build/photo.html"
        }
      }
    },

    uglify: {
      options: {
        mangle: false
      },
      my_target: {
        files: {
          "build/js/main.min.js": ["js/main.js"],
          "build/js/main-index.min.js": ["js/main-index.js"],
          "build/js/map.min.js": ["js/map.js"],
          "build/js/picturefill.min.js": ["js/picturefill.js"]
        }
      }
    },

    imagemin: {
      images: {
        options: {
          optimizationLevel: 3,
          progressive: true
        },
        files: [{
          expand: true,
          src: ["img/**/*.{png,jpg}"]
        }]
      }
    },

    cwebp: {
      images: {
        options: {
          q: 90
        },
        files: [{
          expand: true,
          src: ["img/**/*.jpg"]
        }]
      }
    },

    svgstore: {
      options: {
        includeTitleElement: false
      },
      sprite: {
        files: {
          "build/img/sprite.svg": ["img/s-*.svg"]
        }
      }
    },

    browserSync: {
      server: {
        bsFiles: {
          src: ["build/*.html", "build/css/*.css"]
        },
        options: {
          server: "build/",
          watchTask: true,
          notify: false,
          open: true,
          cors: true,
          ui: false
        }
      }
    },

    watch: {
      html: {
        files: ["*.html"],
        tasks: ["posthtml"]
      },
      style: {
        files: ["less/**/*.less"],
        tasks: ["less", "postcss", "cssmin"]
      }
    },

    copy: {
      build: {
        files: [{
          expand: true,
          src: [
            "fonts/**/*.{woff,woff2}",
            "img/**"
          ],
          dest: "build"
        }]
      }
    },

    clean: {
      build: ["build"]
    },

    "gh-pages": {
      options: {
        base: 'build'
      },
      src: ['**']
    }
  });

  grunt.registerTask("serve", ["browserSync", "watch"]);

  grunt.registerTask("build", [
    "clean",
    "copy",
    "less",
    "postcss",
    "cssmin",
    "posthtml",
    "htmlmin",
    "uglify"
  ]);
};
