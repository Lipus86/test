module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-contrib-uglify');
    
    grunt.initConfig({
        uglify: {
            my_target: {
                files: {
                'output.min.js': ['main.js']
                }
            }
        }
    });
    
    grunt.registerTask('prod', ['uglify']);
    
};