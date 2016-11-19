// var chance = require('chance').Chance();
var r = require("random-js")();


// Card Verification Value/Code (CVV/CVC)
//
// Первоначально код CVV/CVC хранился исключительно на магнитной полосе и
// служил для выявления ситуаций повреждения магнитной полосы или грубой подделки карты.
// Использовался код, понятное дело, при проведении транзакций с
// предъявлением карты (in person по терминологии платежных систем) и
//  по аналогии с PVV позволял банку подтвердить подлинность карты.
//   Как и PVV, этот код генерируется банком при выпуске карты. В процессе участвуют PAN (9 символов),
//   срок действия карты (в формате MMYY) и 3-х символьный Service code. Шифрование традиционно осуществляется 3DES,
// в целом алгоритм аналогичен PVV. Если PVV задействуется при проведении
//  транзакций на основе PIN-а, то CVV/CVC используется при безпиновых
//  транзакциях, например, в POS-терминалах.
// http://dmitryga.ru/2013/640

module.exports = () => { return r.string(3, '0123456789')};
