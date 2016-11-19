var r = require("random-js")();

const kinds = ['платина', 'золото', 'серебро', 'палладий']
module.exports = () => {return r.pick(kinds)};
