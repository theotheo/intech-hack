var r = require("random-js")();

const kinds = [
'кирпич', 'керамоблок', 'газобетон', 'оцилиндрованный брус', 'клееный профилированный брус', 'арболит'
]
module.exports = () => {return r.pick(kinds)};
