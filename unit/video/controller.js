describe('Controller: VideoCtrl', function() {
    beforeEach(module('angularvideo'));

    var VideoCtrl, scope, $httpBackend, stateparams = {
            id: "1"
        },
        $sce;

    beforeEach(inject(function(_$httpBackend_, _$sce_, $controller, $rootScope) {
        $httpBackend = _$httpBackend_;
        $sce = _$sce_;
        $httpBackend.expectGET('/api/videos/one/1')
            .respond({
                "name": "Video name",
                "src": "http://clips.vorwaerts-gmbh.de/VfE_html5.mp4"
            });

        scope = $rootScope.$new();
        VideoCtrl = $controller('VideoCtrl', {
            $scope: scope,
            $stateParams: stateparams // mock stateparams
        });
    }));

    it('should attach the video to the scope', function() {
        $httpBackend.flush();
        expect(scope.video).toBeDefined();
    });

    it('should sanitize the url', function() {
        $httpBackend.flush();
        var sceString = $sce.trustAsResourceUrl('http://clips.vorwaerts-gmbh.de/VfE_html5.mp4');
        expect(sceString.toString()).toEqual(scope.video.src.toString());
    });
});
