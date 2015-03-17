angular.module('angularvideo', [
    'ui.router',
    'ngSanitize'
])
.config ($stateProvider, $urlRouterProvider) ->

    $urlRouterProvider.otherwise('/videos')

    $stateProvider
        .state 'videos',
            url: '/videos',
            templateUrl: 'videos.tpl.html'
            controller: 'VideosCtrl'
        .state 'video',
            url: '/video/:id',
            templateUrl: 'video.tpl.html'
            controller: 'VideoCtrl'
