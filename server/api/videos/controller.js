var mockData = [{
    id: 0,
    name: 'Big Buck Bunny',
    src: 'http://clips.vorwaerts-gmbh.de/VfE_html5.mp4',
    infos: [{
        time: '0',
        label: 'A beautify sky'
    }, {
        time: '8',
        label: 'The forest'
    }, {
        time: '17',
        label: 'Bird'
    }]
}, {
    id: 1,
    name: 'Matrix',
    src: 'http://samples.mplayerhq.hu/ogg/Theora/theora-a4_v6-k250-s0_2.ogg'
}];

exports.list = function(req, res) {
    res.json({
        count: mockData.length,
        data: mockData
    });
};

exports.one = function(req, res) {
    res.json(mockData[req.params.id]);
};
