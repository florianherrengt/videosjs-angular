var mockData = [{
    id: 0,
    name: 'Big Buck Bunny',
    description: 'Big Buck Bunny (code-named Peach) is a short computer-animated comedy film by the Blender Institute, part of the Blender Foundation',
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
    }, {
        time: '40',
        label: 'Sweet home'
    }, {
        time: '50',
        label: 'Waking up'
    }]
}, {
    id: 1,
    name: 'Matrix',
    description: 'Matrix is a 1999 American-Australian science fiction action film written and directed by The Wachowskis',
    src: 'http://samples.mplayerhq.hu/ogg/Theora/theora-a4_v6-k250-s0_2.ogg',
    infos: [{
        time: '3',
        label: 'Nice chair'
    }, {
        time: '11',
        label: 'Deal with it!'
    }, {
        time: '120',
        label: 'Knock knock!'
    }, {
        time: '200',
        label: 'Headache'
    }]
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
