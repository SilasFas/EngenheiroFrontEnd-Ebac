const { option } = require("grunt")

module.exports = function (grunt) {
    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        less: {
            development: {
                files: {
                    'dev/styles/main.css': 'src/styles/main.less'
                }
            },
            production: { // Corrigindo o nome da configuração
                options: {
                    compress: true,
                },
                files: {
                    'dist/styles/main.min.css': 'src/styles/main.less' // Corrigindo o nome do arquivo de saída
                }
            }
        },
        watch: {
            less: {
                files: ['src/styles/**/*.less'],
                tasks: ['less:development']
            },
            html: {
                files: ['src/index.html'],
                taks: ['replace:dev']
            }
        },
        replace: {
            dev: {
                options: {
                    patterns: [
                        {
                            match: 'ENDERECO_DO_CSS',
                            replacement: './styles/main.css'
                        }
                    ]
                },
                files: [
                    {
                        expand: true,
                        flatten: true,
                        src: ['src/index.html'],
                        dest: 'dev/'
                    }
                ]
            },
            dist: {
                options: {
                    patterns: [
                        {
                            match: 'ENDERECO_DO_CSS',
                            replacement: './styles/main.min.css'
                        }
                    ]
                },
                files: [
                    {
                        expand: true,
                        flatten: true,
                        src: ['prebuild/index.html'],
                        dest: 'dist/'
                    }
                ]
            }
        },
        htmlmin: {
            dist: {
                options: {
                    removeComments: true,
                    collapseWhitespace: true
                },
                files: {
                    'dist/index.html': 'src/index.html' // Corrigindo o caminho de saída
                }
            }
        },
        clean: ['prebuild']
    })

    grunt.loadNpmTasks('grunt-contrib-less')
    grunt.loadNpmTasks('grunt-contrib-watch')
    grunt.loadNpmTasks('grunt-replace')
    grunt.loadNpmTasks('grunt-contrib-htmlmin')
    grunt.loadNpmTasks('grunt-contrib-clean')

    grunt.registerTask('default', ['watch'])
    grunt.registerTask('build', ['less:production', 'htmlmin:dist', 'replace:dist', 'clean']) // Corrigindo a chamada para 'less:production'
}



// module.exports = function (grunt) {
//     grunt.initConfig({

//         pkg: grunt.file.readJSON('package.json'),

//         less: {
//             development: {
//                 files: {
//                     'man.css': 'main.less'
//                 }
//             },
//             pruduction: {
//                 options: {
//                     compress: true,
//                 },
//                 files: {
//                     'man.min.css': 'main.less'
//                 }
//             }
//         },

//         sass: {
//             dist: {
//                 options: {
//                     style: 'compressed'
//                 },
//                 files: {
//                     'main2.css': 'main.scss'
//                 }
//             }
//         },

//         concurrent: {
//             target: ['Ola Grunt', 'less', 'sass']
//         }
//     })

//     grunt.registerTask('Ola Grunt', function () {
//         const done = this.async()
//         setTimeout(() => {
//             console.log('Ola Grunt')
//             done()
//         }, 3000);
//     })

//     grunt.loadNpmTasks('grunt-contrib-less')
//     grunt.loadNpmTasks('grunt-contrib-sass')
//     grunt.loadNpmTasks('grunt-concurrent')

//     grunt.registerTask('default', ['concurrent'])
// }