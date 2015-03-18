angular.module('angularvideo').directive 'secondsToMinutes', ->
    {
        link: (scope, element, attr)->
            secondsToMinutes = (time)->
                mins = ~ ~(time / 60)
                secs = time % 60
                hrs = ~ ~(time / 3600)
                mins = ~ ~(time % 3600 / 60)
                secs = time % 60
                ret = ''
                if mins < 10 then mins = '0' + mins
                if hrs > 0
                  ret += '' + hrs + ':' + (if mins < 10 then '0' else '')
                ret += '' + mins + ':' + (if secs < 10 then '0' else '')
                ret += '' + secs
                return ret
            element.replaceWith(secondsToMinutes(attr.secondsToMinutes))
    }
