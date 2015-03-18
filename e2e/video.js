describe('Video informations', function() {
    it('should start on the video list page', function() {
        browser.get('http://localhost:3000');
        expect(browser.getCurrentUrl()).toBe('http://localhost:3000/#/videos');
    });

    it('should go to the selected video', function() {
        element.all(by.repeater('video in videos')).get(0).click();
        expect(browser.getCurrentUrl()).toBe('http://localhost:3000/#/video/0');
    });

    it('should display video information', function() {
        var infosList = element.all(by.repeater('info in video.infos'));
        expect(infosList.count()).not.toBe(0);
    });

    it('should transform seconds to minutes', function() {
        var firstInfo = element.all(by.repeater('info in video.infos'));
        for (var i = 0, length = firstInfo.count(); i < length - 1; i++) {
            firstInfo.get(i).getInnerHtml().then(function(html) {
                // true 00:12 / 11:12
                // false 00:60 / 00:90 / 1212:22 / 1:11
                var regex = new RegExp(/^([0-9]){2}:([0-5][0-9])/g);
                regex.test(html.trim().substr(0, 5));
            })
        }
    });
});
