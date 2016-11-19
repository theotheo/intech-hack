// var chance = require('chance').Chance();
var r = require("random-js")();

// ПИН-код - (англ. PIN - personal identification number) – персональный идентификационный номер, являющийся секретным кодом карты.
// Его длина варьирует от 4 до 12 цифр, на практике чаще всего встречается из 4. ПИН-код может состоять также из букв.
// http://www.banki.ru/wikibank/pin-kod/

module.exports = () => { return r.string(4, '0123456789')};
