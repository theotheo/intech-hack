var Fakerator = require("fakerator");
var r = require("random-js")();

var generator = function(params) {
  let sex;
  const sexs = ['male', 'female'];
  const langs = ['', 'ru-RU', 'fr-FR', 'de-DE']
  const code2lang = {
    undefined: r.pick(langs),
    '': r.pick(langs),
    'ru': 'ru-RU',
    'fr': 'fr-FR',
    'de': 'de-DE'
  }

  var res = '';

  if(params !== undefined) {
    sex = params['sex'];
  }

  if(sex === undefined) {
    sex = r.pick(sexs)
  }



  var lang = params['lang'];
  lang = code2lang[lang];
  lang = 'ru-RU' // middle name exist only for Russian

  if(lang === undefined) {
    return res;
  }

  fakerator = Fakerator(lang)

  if(sex === 'male') {
    res = fakerator.names.middleNameF();
  } else if(sex === 'female') {
    res = fakerator.names.middleNameF();
  }

  return res;
}
module.exports = generator;
