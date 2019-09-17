const data = require('../../../data.json');

module.exports = (req, res) => {
    const modelId = req.params.modelId * 1;
    console.log('looking for cars of model ', req.params.modelId);

    const cars = data.cars.filter(c => c.modelId === modelId);

    console.log('found cars: ', cars);
    res.status(200).json({ cars });
};
