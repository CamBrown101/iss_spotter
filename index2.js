const { nextISSTimesForMyLocation } = require('./iss_promised');
const { printPassTimes } = require('./index');

nextISSTimesForMyLocation()
  .then((passTime) => {
    printPassTimes(passTime);
  })
  .catch((error) => {
    console.log('It doesn\'t work: ', error.message);
  });