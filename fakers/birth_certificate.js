// var chance = require('chance').Chance();
var r = require("random-js")();


// Серия: римские цифры (необходимо набрать в латинском регистре буквами I, V, X),
// две буквы русской раскладкой клавиатуры, номер: 6 (шесть) цифр.
let generator = () => {

  let RR = r.string(2, 'IVX');
  let KK = r.string(2, 'АБВГДЕЖЗИКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ');

  let last = r.string(6, '0123456789');
  let res = `${RR}${KK}${last}`
  return res;
}

module.exports = generator;
