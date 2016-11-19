var r = require("random-js")();

const kinds = [
'частная собственность', 'государственная собственность', 'муниципальная собственность', 'иная собственность'
]
module.exports = () => {return r.pick(kinds)};
