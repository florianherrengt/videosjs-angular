exports.list = function(req, res) {
    res.json({
        count: 1,
        data: [{
            name: 'Hello World!'
        }]
    });
};

exports.one = function(req, res) {
    res.json({
        name: 'Video name',
        src: 'http://clips.vorwaerts-gmbh.de/VfE_html5.mp4'
    });
};
