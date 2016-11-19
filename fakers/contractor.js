var r = require("random-js")();

const kinds = [
    'поставщик',
    'филиал',
    'вкладчик',
    'заемщик',
    'компания'
]
module.exports = () => {return r.pick(kinds)};
