module.exports = (config) ->
  config.set
    frameworks: ['jasmine']
    browsers: ['PhantomJS']
    files: [
        'client/bower_components/underscore/underscore-min.js'
        'server/public/scripts/*'
        'client/bower_components/angular-mocks/angular-mocks.js'
        'unit/**/*.js'
    ]
    preprocessors:
        '**/*.coffee': ['coffee']

