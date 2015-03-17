describe('Video informations', function() {
  it('should start on the video list page', function() {
    browser.get('http://localhost:3000');
    expect(browser.getCurrentUrl()).toBe('http://localhost:3000/#/videos');
  });

  it('should go to the selected video', function(){
    element.all(by.repeater('video in videos')).get(0).$('a').click();
    expect(browser.getCurrentUrl()).toBe('http://localhost:3000/#/video/0');
  });

  it('should display video information', function(){
    var infosList = element.all(by.repeater('info in video.infos'));
    expect(infosList.count()).not.toBe(0);
  });
});
