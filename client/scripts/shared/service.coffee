angular.module('angularvideo').factory 'Videos', ($http, $q)->
    {
        getAll: ->
            deferred = $q.defer()
            $http.get('/api/videos')
                .success((data, status, headers, config)->
                    deferred.resolve(data, status, headers, config)
                )
                .error((data, status, headers, config)->
                    deferred.reject(data, status, headers, config)
                )
            return deferred.promise
        getOne: (id)->
            deferred = $q.defer()
            $http.get("/api/videos/one/" + parseInt(id))
                .success((data, status, headers, config)->
                    deferred.resolve(data, status, headers, config)
                )
                .error((data, status, headers, config)->
                    deferred.reject(data, status, headers, config)
                )
            return deferred.promise
    }
