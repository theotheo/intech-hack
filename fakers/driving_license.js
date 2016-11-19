// var chance = require('chance').Chance();
var r = require("random-js")();


let generator = () => {
  let dd = r.string(2, '0123456789');
  let AA = r.string(2, 'АБВГДЕЖЗИКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ');
  let dddddd = r.string(6, '0123456789');
  let res = `${dd}${AA}${dddddd}`;
  return res;
}

module.exports = generator;
