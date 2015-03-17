describe('Video list', function() {
  it('should start on the video list page', function() {
    browser.get('http://localhost:3000');
    expect(browser.getCurrentUrl()).toBe('http://localhost:3000/#/videos');
  });

  it('should display a list of videos', function(){
    var videoList = element.all(by.repeater('video in videos'));
    expect(videoList.count()).not.toEqual(0);
  });
});
