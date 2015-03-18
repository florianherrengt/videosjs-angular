angular.module('angularvideo').directive 'videoInterface', ->
    {
        link: (scope, element, attr)->
            videoEl = document.createElement('video')
            videoSrc = document.createElement('source')
            videoEl.setAttribute('controls', true)
            videoSrc.setAttribute('type', 'video/mp4')
            videoEl.appendChild(videoSrc)
            element.replaceWith videoEl
            listener = scope.$watch 'video', (video)->
                if video?
                    videoSrc.setAttribute('src', video.src)
                    videoEl.load()
                    listener() # clear the watch

            scope.setTime = (time)->
                videoEl.currentTime = time
    }
