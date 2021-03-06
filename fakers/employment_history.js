// var chance = require('chance').Chance();
var r = require("random-js")();


// http://lawyer-consult.ru/administrative/oformlenie-dokumentov/trudovaya-knizhka/sootvetstvie-serij-godam-vypuska.html
let generator = () => {
  let RR = 'II';
  let code = r.pick(['ТК', 'АТ']);
  if(code === 'АТ') {
    RR = r.pick(['', 'I', 'II', 'III', 'IV']);
  } else {
    RR = r.pick(['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X']);
  };

  let last = r.string(7, '0123456789');
  let res = `${code}${RR}${last}`
  return res;
}

module.exports = generator;
