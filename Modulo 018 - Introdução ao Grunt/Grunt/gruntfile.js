module.exports = function (grunt) {
    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        less: {
            development: {
                files: {
                    'man.css': 'main.less'
                }
            },
            pruduction: {
                options: {
                    compress: true,
                },
                files: {
                    'man.min.css': 'main.less'
                }
            }
        },

        sass: {
            dist: {
                options: {
                    style: 'compressed'
                },
                files: {
                    'main2.css': 'main.scss'
                }
            }
        },

        concurrent: {
            target: ['Ola Grunt', 'less', 'sass']
        }
    })

    grunt.registerTask('Ola Grunt', function () {
        const done = this.async()
        setTimeout(() => {
            console.log('Ola Grunt')
            done()
        }, 3000);
    })

    grunt.loadNpmTasks('grunt-contrib-less')
    grunt.loadNpmTasks('grunt-contrib-sass')
    grunt.loadNpmTasks('grunt-concurrent')

    grunt.registerTask('default', ['concurrent'])
}

