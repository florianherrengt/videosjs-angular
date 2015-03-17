describe('Controller: VideoCtrl', function() {
    beforeEach(module('angularvideo'));

    var VideosCtrl, scope, $httpBackend;

    beforeEach(inject(function(_$httpBackend_, $controller, $rootScope) {
        $httpBackend = _$httpBackend_;
        $httpBackend.expectGET('/api/videos')
            .respond({
                count: 1,
                data: [{
                    name: 'Hello World!'
                }]
            });

        scope = $rootScope.$new();
        VideosCtrl = $controller('VideosCtrl', {
            $scope: scope
        });
    }));

    it('should attach a list of videos to the scope', function() {
        $httpBackend.flush();
        expect(scope.videos.length).toBe(1);
    });
});
