// var chance = require('chance').Chance();
var r = require("random-js")();

let foreignPassport = () => {
  let kk = r.pick([10, 20, 60, 61, 62, 63, 64, 65, 50, 51, 53, 70, 71, 72])
  let passportNumber = r.string(7, '0123456789');
  let res = `${kk} ${passportNumber}`
  return res;
}

module.exports = foreignPassport;
