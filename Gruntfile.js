module.exports = function(grunt){
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify:{
            options:{
                stripBanners:true,
                banner:'/* loiter.js by Scott */\n'
            },
            build:{
                src:'./loiter.js',
                dest:'./dist/loiter.min.js'
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.registerTask('default',['uglify']);
};