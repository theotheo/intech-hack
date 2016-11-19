var r = require("random-js")();

const kinds = ['Visa', 'MasterCard', 'American Express', 'Diners Club']
module.exports = () => {return r.pick(kinds)};
