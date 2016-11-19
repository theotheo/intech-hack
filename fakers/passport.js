// var chance = require('chance').Chance();
var r = require("random-js")();

let passport = () => {

  kk = r.integer(0, 85);
  kk = ("00" + kk).substr(-2,2);
  y1 = r.string(1, '0156789');
  y2 = r.integer(0, 9);
  let passportNumber = r.string(6, '0123456789');
  let res = `${kk}${y1}${y2} ${passportNumber}`
  return res;
}

module.exports = passport;
