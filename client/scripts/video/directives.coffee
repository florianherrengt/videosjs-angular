angular.module('angularvideo').directive 'secondsToMinutes', ->
    {
        scope:
            video: '@'
        link: (scope, element, attr)->
            secondsToMinutes = (time)->
                `var secs`
                `var mins`
                # Minutes and seconds
                mins = ~ ~(time / 60)
                secs = time % 60
                # Hours, minutes and seconds
                hrs = ~ ~(time / 3600)
                mins = ~ ~(time % 3600 / 60)
                secs = time % 60
                # Output like "1:01" or "4:03:59" or "123:03:59"
                ret = ''
                if hrs > 0
                  ret += '' + hrs + ':' + (if mins < 10 then '0' else '')
                if mins < 10 then mins += '0'
                ret += '' + mins + ':' + (if secs < 10 then '0' else '')
                ret += '' + secs
                return ret
            element.replaceWith(secondsToMinutes(attr.secondsToMinutes))
    }
