angular.module('angularvideo', ['ui.router', 'ngSanitize']).config(["$stateProvider", "$urlRouterProvider", function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/videos');
  return $stateProvider.state('videos', {
    url: '/videos',
    templateUrl: 'videos.tpl.html',
    controller: 'VideosCtrl'
  }).state('video', {
    url: '/video/:id',
    templateUrl: 'video.tpl.html',
    controller: 'VideoCtrl'
  });
}]);

angular.module('angularvideo').factory('Videos', ["$http", "$q", function($http, $q) {
  return {
    getAll: function() {
      var deferred;
      deferred = $q.defer();
      $http.get('/api/videos').success(function(data, status, headers, config) {
        return deferred.resolve(data, status, headers, config);
      }).error(function(data, status, headers, config) {
        return deferred.reject(data, status, headers, config);
      });
      return deferred.promise;
    },
    getOne: function(id) {
      var deferred;
      deferred = $q.defer();
      $http.get("/api/videos/one/" + parseInt(id)).success(function(data, status, headers, config) {
        return deferred.resolve(data, status, headers, config);
      }).error(function(data, status, headers, config) {
        return deferred.reject(data, status, headers, config);
      });
      return deferred.promise;
    }
  };
}]);

angular.module('angularvideo').controller('VideoCtrl', ["$scope", "$sce", "$stateParams", "Videos", function($scope, $sce, $stateParams, Videos) {
  var idVideo;
  idVideo = JSON.parse($stateParams.id);
  return Videos.getOne(idVideo).then(function(video) {
    video.src = $sce.trustAsResourceUrl(video.src);
    $scope.video = video;
    return setTimeout(function() {
      return document.querySelector('body > div > video:nth-child(2)').load();
    }, 0);
  }, function(reason) {
    return alert(reason);
  });
}]);

angular.module('angularvideo').controller('VideosCtrl', ["$scope", "Videos", function($scope, Videos) {
  $scope.videos = [];
  return Videos.getAll().then(function(videos) {
    return $scope.videos = videos.data;
  }, function(reason) {
    return alert(reason);
  });
}]);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb2ZmZWUiLCJhcHAuanMiLCJzaGFyZWQvc2VydmljZS5jb2ZmZWUiLCJzaGFyZWQvc2VydmljZS5qcyIsInZpZGVvL2NvbnRyb2xsZXIuY29mZmVlIiwidmlkZW8vY29udHJvbGxlci5qcyIsInZpZGVvcy9jb250cm9sbGVyLmNvZmZlZSIsInZpZGVvcy9jb250cm9sbGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFFBQVEsT0FBTyxnQkFBZ0IsQ0FDM0IsYUFDQSxlQUVILGdEQUFPLFNBQUMsZ0JBQWdCLG9CQUFqQjtFQUVKLG1CQUFtQixVQUFVO0VDSi9CLE9ETUUsZUFDSyxNQUFNLFVBQ0g7SUFBQSxLQUFLO0lBQ0wsYUFBYTtJQUNiLFlBQVk7S0FDZixNQUFNLFNBQ0g7SUFBQSxLQUFLO0lBQ0wsYUFBYTtJQUNiLFlBQVk7OztBQ0p4QjtBQ1pBLFFBQVEsT0FBTyxnQkFBZ0IsUUFBUSwwQkFBVSxTQUFDLE9BQU8sSUFBUjtFQ0MvQyxPREFFO0lBQ0ksUUFBUSxXQUFBO01BQ0osSUFBQTtNQUFBLFdBQVcsR0FBRztNQUNkLE1BQU0sSUFBSSxlQUNMLFFBQVEsU0FBQyxNQUFNLFFBQVEsU0FBUyxRQUF4QjtRQ0NqQixPREFZLFNBQVMsUUFBUSxNQUFNLFFBQVEsU0FBUztTQUUzQyxNQUFNLFNBQUMsTUFBTSxRQUFRLFNBQVMsUUFBeEI7UUNBZixPRENZLFNBQVMsT0FBTyxNQUFNLFFBQVEsU0FBUzs7TUFFL0MsT0FBTyxTQUFTOztJQUNwQixRQUFRLFNBQUMsSUFBRDtNQUNKLElBQUE7TUFBQSxXQUFXLEdBQUc7TUFDZCxNQUFNLElBQUkscUJBQXFCLFNBQVMsS0FDbkMsUUFBUSxTQUFDLE1BQU0sUUFBUSxTQUFTLFFBQXhCO1FDQ2pCLE9EQVksU0FBUyxRQUFRLE1BQU0sUUFBUSxTQUFTO1NBRTNDLE1BQU0sU0FBQyxNQUFNLFFBQVEsU0FBUyxRQUF4QjtRQ0FmLE9EQ1ksU0FBUyxPQUFPLE1BQU0sUUFBUSxTQUFTOztNQUUvQyxPQUFPLFNBQVM7Ozs7QUNHNUI7QUN4QkEsUUFBUSxPQUFPLGdCQUFnQixXQUFXLDBEQUFhLFNBQUMsUUFBUSxNQUFNLGNBQWMsUUFBN0I7RUFDbkQsSUFBQTtFQUFBLFVBQVUsS0FBSyxNQUFNLGFBQWE7RUNFcEMsT0RERSxPQUFPLE9BQU8sU0FBUyxLQUFLLFNBQUMsT0FBRDtJQUV4QixNQUFNLE1BQU0sS0FBSyxtQkFBbUIsTUFBTTtJQUMxQyxPQUFPLFFBQVE7SUNDbkIsT0RHSSxXQUFXLFdBQUE7TUNGYixPREdNLFNBQVMsY0FBYyxtQ0FBbUM7T0FDNUQ7S0FFSixTQUFDLFFBQUQ7SUNIRixPRElJLE1BQU07OztBQ0RkO0FDYkEsUUFBUSxPQUFPLGdCQUFnQixXQUFXLG1DQUFjLFNBQUMsUUFBUSxRQUFUO0VBQ3BELE9BQU8sU0FBUztFQ0NsQixPREFFLE9BQU8sU0FBUyxLQUFLLFNBQUMsUUFBRDtJQ0NyQixPREFJLE9BQU8sU0FBUyxPQUFPO0tBQ3pCLFNBQUMsUUFBRDtJQ0NGLE9EQUksTUFBTTs7O0FDR2QiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImFuZ3VsYXIubW9kdWxlKCdhbmd1bGFydmlkZW8nLCBbXG4gICAgJ3VpLnJvdXRlcicsXG4gICAgJ25nU2FuaXRpemUnXG5dKVxuLmNvbmZpZyAoJHN0YXRlUHJvdmlkZXIsICR1cmxSb3V0ZXJQcm92aWRlcikgLT5cblxuICAgICR1cmxSb3V0ZXJQcm92aWRlci5vdGhlcndpc2UoJy92aWRlb3MnKVxuXG4gICAgJHN0YXRlUHJvdmlkZXJcbiAgICAgICAgLnN0YXRlICd2aWRlb3MnLFxuICAgICAgICAgICAgdXJsOiAnL3ZpZGVvcycsXG4gICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ3ZpZGVvcy50cGwuaHRtbCdcbiAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdWaWRlb3NDdHJsJ1xuICAgICAgICAuc3RhdGUgJ3ZpZGVvJyxcbiAgICAgICAgICAgIHVybDogJy92aWRlby86aWQnLFxuICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICd2aWRlby50cGwuaHRtbCdcbiAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdWaWRlb0N0cmwnXG4iLCJhbmd1bGFyLm1vZHVsZSgnYW5ndWxhcnZpZGVvJywgWyd1aS5yb3V0ZXInLCAnbmdTYW5pdGl6ZSddKS5jb25maWcoZnVuY3Rpb24oJHN0YXRlUHJvdmlkZXIsICR1cmxSb3V0ZXJQcm92aWRlcikge1xuICAkdXJsUm91dGVyUHJvdmlkZXIub3RoZXJ3aXNlKCcvdmlkZW9zJyk7XG4gIHJldHVybiAkc3RhdGVQcm92aWRlci5zdGF0ZSgndmlkZW9zJywge1xuICAgIHVybDogJy92aWRlb3MnLFxuICAgIHRlbXBsYXRlVXJsOiAndmlkZW9zLnRwbC5odG1sJyxcbiAgICBjb250cm9sbGVyOiAnVmlkZW9zQ3RybCdcbiAgfSkuc3RhdGUoJ3ZpZGVvJywge1xuICAgIHVybDogJy92aWRlby86aWQnLFxuICAgIHRlbXBsYXRlVXJsOiAndmlkZW8udHBsLmh0bWwnLFxuICAgIGNvbnRyb2xsZXI6ICdWaWRlb0N0cmwnXG4gIH0pO1xufSk7XG4iLCJhbmd1bGFyLm1vZHVsZSgnYW5ndWxhcnZpZGVvJykuZmFjdG9yeSAnVmlkZW9zJywgKCRodHRwLCAkcSktPlxuICAgIHtcbiAgICAgICAgZ2V0QWxsOiAtPlxuICAgICAgICAgICAgZGVmZXJyZWQgPSAkcS5kZWZlcigpXG4gICAgICAgICAgICAkaHR0cC5nZXQoJy9hcGkvdmlkZW9zJylcbiAgICAgICAgICAgICAgICAuc3VjY2VzcygoZGF0YSwgc3RhdHVzLCBoZWFkZXJzLCBjb25maWcpLT5cbiAgICAgICAgICAgICAgICAgICAgZGVmZXJyZWQucmVzb2x2ZShkYXRhLCBzdGF0dXMsIGhlYWRlcnMsIGNvbmZpZylcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgLmVycm9yKChkYXRhLCBzdGF0dXMsIGhlYWRlcnMsIGNvbmZpZyktPlxuICAgICAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZWplY3QoZGF0YSwgc3RhdHVzLCBoZWFkZXJzLCBjb25maWcpXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgcmV0dXJuIGRlZmVycmVkLnByb21pc2VcbiAgICAgICAgZ2V0T25lOiAoaWQpLT5cbiAgICAgICAgICAgIGRlZmVycmVkID0gJHEuZGVmZXIoKVxuICAgICAgICAgICAgJGh0dHAuZ2V0KFwiL2FwaS92aWRlb3Mvb25lL1wiICsgcGFyc2VJbnQoaWQpKVxuICAgICAgICAgICAgICAgIC5zdWNjZXNzKChkYXRhLCBzdGF0dXMsIGhlYWRlcnMsIGNvbmZpZyktPlxuICAgICAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZXNvbHZlKGRhdGEsIHN0YXR1cywgaGVhZGVycywgY29uZmlnKVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAuZXJyb3IoKGRhdGEsIHN0YXR1cywgaGVhZGVycywgY29uZmlnKS0+XG4gICAgICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlamVjdChkYXRhLCBzdGF0dXMsIGhlYWRlcnMsIGNvbmZpZylcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZVxuICAgIH1cbiIsImFuZ3VsYXIubW9kdWxlKCdhbmd1bGFydmlkZW8nKS5mYWN0b3J5KCdWaWRlb3MnLCBmdW5jdGlvbigkaHR0cCwgJHEpIHtcbiAgcmV0dXJuIHtcbiAgICBnZXRBbGw6IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIGRlZmVycmVkO1xuICAgICAgZGVmZXJyZWQgPSAkcS5kZWZlcigpO1xuICAgICAgJGh0dHAuZ2V0KCcvYXBpL3ZpZGVvcycpLnN1Y2Nlc3MoZnVuY3Rpb24oZGF0YSwgc3RhdHVzLCBoZWFkZXJzLCBjb25maWcpIHtcbiAgICAgICAgcmV0dXJuIGRlZmVycmVkLnJlc29sdmUoZGF0YSwgc3RhdHVzLCBoZWFkZXJzLCBjb25maWcpO1xuICAgICAgfSkuZXJyb3IoZnVuY3Rpb24oZGF0YSwgc3RhdHVzLCBoZWFkZXJzLCBjb25maWcpIHtcbiAgICAgICAgcmV0dXJuIGRlZmVycmVkLnJlamVjdChkYXRhLCBzdGF0dXMsIGhlYWRlcnMsIGNvbmZpZyk7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBkZWZlcnJlZC5wcm9taXNlO1xuICAgIH0sXG4gICAgZ2V0T25lOiBmdW5jdGlvbihpZCkge1xuICAgICAgdmFyIGRlZmVycmVkO1xuICAgICAgZGVmZXJyZWQgPSAkcS5kZWZlcigpO1xuICAgICAgJGh0dHAuZ2V0KFwiL2FwaS92aWRlb3Mvb25lL1wiICsgcGFyc2VJbnQoaWQpKS5zdWNjZXNzKGZ1bmN0aW9uKGRhdGEsIHN0YXR1cywgaGVhZGVycywgY29uZmlnKSB7XG4gICAgICAgIHJldHVybiBkZWZlcnJlZC5yZXNvbHZlKGRhdGEsIHN0YXR1cywgaGVhZGVycywgY29uZmlnKTtcbiAgICAgIH0pLmVycm9yKGZ1bmN0aW9uKGRhdGEsIHN0YXR1cywgaGVhZGVycywgY29uZmlnKSB7XG4gICAgICAgIHJldHVybiBkZWZlcnJlZC5yZWplY3QoZGF0YSwgc3RhdHVzLCBoZWFkZXJzLCBjb25maWcpO1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcbiAgICB9XG4gIH07XG59KTtcbiIsImFuZ3VsYXIubW9kdWxlKCdhbmd1bGFydmlkZW8nKS5jb250cm9sbGVyICdWaWRlb0N0cmwnLCAoJHNjb3BlLCAkc2NlLCAkc3RhdGVQYXJhbXMsIFZpZGVvcyktPlxuICAgIGlkVmlkZW8gPSBKU09OLnBhcnNlKCRzdGF0ZVBhcmFtcy5pZClcbiAgICBWaWRlb3MuZ2V0T25lKGlkVmlkZW8pLnRoZW4gKHZpZGVvKS0+XG4gICAgICAgICMgY2Fubm90IGJlIHNldCB3aXRoICRzY2VEZWxlZ2F0ZVByb3ZpZGVyIHNpbmNlIHRoZSB1cmwgY291bGQgYmUgYW55dGhpbmdcbiAgICAgICAgdmlkZW8uc3JjID0gJHNjZS50cnVzdEFzUmVzb3VyY2VVcmwodmlkZW8uc3JjKVxuICAgICAgICAkc2NvcGUudmlkZW8gPSB2aWRlb1xuXG4gICAgICAgICMgZm9yY2UgdGhlIHZpZGVvIHRvIHJlbG9hZCB3aXRoIHRoZSBuZXcgdGFnXG4gICAgICAgICMgVG9EbzogY3JlYXRlIGEgZGlyZWN0aXZlXG4gICAgICAgIHNldFRpbWVvdXQgLT5cbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHkgPiBkaXYgPiB2aWRlbzpudGgtY2hpbGQoMiknKS5sb2FkKClcbiAgICAgICAgLCAwXG5cbiAgICAsIChyZWFzb24pLT5cbiAgICAgICAgYWxlcnQocmVhc29uKVxuXG5cbiIsImFuZ3VsYXIubW9kdWxlKCdhbmd1bGFydmlkZW8nKS5jb250cm9sbGVyKCdWaWRlb0N0cmwnLCBmdW5jdGlvbigkc2NvcGUsICRzY2UsICRzdGF0ZVBhcmFtcywgVmlkZW9zKSB7XG4gIHZhciBpZFZpZGVvO1xuICBpZFZpZGVvID0gSlNPTi5wYXJzZSgkc3RhdGVQYXJhbXMuaWQpO1xuICByZXR1cm4gVmlkZW9zLmdldE9uZShpZFZpZGVvKS50aGVuKGZ1bmN0aW9uKHZpZGVvKSB7XG4gICAgdmlkZW8uc3JjID0gJHNjZS50cnVzdEFzUmVzb3VyY2VVcmwodmlkZW8uc3JjKTtcbiAgICAkc2NvcGUudmlkZW8gPSB2aWRlbztcbiAgICByZXR1cm4gc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5ID4gZGl2ID4gdmlkZW86bnRoLWNoaWxkKDIpJykubG9hZCgpO1xuICAgIH0sIDApO1xuICB9LCBmdW5jdGlvbihyZWFzb24pIHtcbiAgICByZXR1cm4gYWxlcnQocmVhc29uKTtcbiAgfSk7XG59KTtcbiIsImFuZ3VsYXIubW9kdWxlKCdhbmd1bGFydmlkZW8nKS5jb250cm9sbGVyICdWaWRlb3NDdHJsJywgKCRzY29wZSwgVmlkZW9zKS0+XG4gICAgJHNjb3BlLnZpZGVvcyA9IFtdXG4gICAgVmlkZW9zLmdldEFsbCgpLnRoZW4gKHZpZGVvcyktPlxuICAgICAgICAkc2NvcGUudmlkZW9zID0gdmlkZW9zLmRhdGFcbiAgICAsIChyZWFzb24pLT5cbiAgICAgICAgYWxlcnQocmVhc29uKVxuXG5cbiIsImFuZ3VsYXIubW9kdWxlKCdhbmd1bGFydmlkZW8nKS5jb250cm9sbGVyKCdWaWRlb3NDdHJsJywgZnVuY3Rpb24oJHNjb3BlLCBWaWRlb3MpIHtcbiAgJHNjb3BlLnZpZGVvcyA9IFtdO1xuICByZXR1cm4gVmlkZW9zLmdldEFsbCgpLnRoZW4oZnVuY3Rpb24odmlkZW9zKSB7XG4gICAgcmV0dXJuICRzY29wZS52aWRlb3MgPSB2aWRlb3MuZGF0YTtcbiAgfSwgZnVuY3Rpb24ocmVhc29uKSB7XG4gICAgcmV0dXJuIGFsZXJ0KHJlYXNvbik7XG4gIH0pO1xufSk7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=