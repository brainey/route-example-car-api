const data = require('../../data.json');

module.exports = (req, res) => {
	// refactored out by findObjects and req.model use
    // const modelId = req.params.modelId * 1;
    // const model = data.models.find(m => m.id === modelId);
    const model = req.model;
    
    res.status(200).json({model});
};
