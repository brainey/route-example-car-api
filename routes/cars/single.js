const data = require('../../data.json');

module.exports = (req, res) => {
	// Refactored out by findObjects and req.car use
	// const carId = req.params.carId * 1;
	// const car = data.cars.find(c => c.id === carId);
	const car = req.car;

	res.status(200).json({ car });
}