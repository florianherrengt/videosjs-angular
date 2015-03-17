angular.module('angularvideo', [
    'ui.router'
])
.config ($stateProvider, $urlRouterProvider) ->

    $urlRouterProvider.otherwise('/')

    $stateProvider
        .state 'video',
            url: '/video',
            templateUrl: 'video.tpl.html'
            controller: 'VideoCtrl'
