angular.module('angularvideo').controller 'VideosCtrl', ($scope, Videos)->
    $scope.videos = []
    Videos.getAll().then (videos)->
        $scope.videos = videos.data
    , (reason)->
        alert(reason)


