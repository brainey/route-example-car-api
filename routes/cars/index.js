const cars = require('express').Router();
const all = require('./all');
const single = require('./single');

cars.get('/', all);
cars.get('/:carId', single);

const data = require('../../data.json');

// Refactored out for code below this and findObject.js
// cars.param('carId', (req, res, next, value) => {
// 	const car = data.cars.find(c => c.id === (value * 1));

//     if (car) {
//     	req['car'] = car;
//     	next();
//     } else {
//     	res.status(404).send('Invalid car ID');
//   	}
// });

// routes/cars/index.js
const findObject = require('../../utils/findObject');

cars.param('carId', findObject('car'));

module.exports = cars;
