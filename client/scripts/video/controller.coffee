angular.module('angularvideo').controller 'VideoCtrl', ($scope, $sce, $stateParams, Videos)->
    idVideo = JSON.parse($stateParams.id)
    Videos.getOne(idVideo).then (video)->
        # cannot be set with $sceDelegateProvider since the url could be anything
        video.src = $sce.trustAsResourceUrl(video.src)
        $scope.video = video

        # force the video to reload with the new tag
        # ToDo: create a directive
        setTimeout ->
            document.querySelector('body > div > video:nth-child(2)').load()
        , 0

    , (reason)->
        alert(reason)


