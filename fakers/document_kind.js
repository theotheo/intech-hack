var r = require("random-js")();

const kinds = ['паспорт', 'загранпаспорт', 'пенсионное удостоверение', 'удостоверение личности военнослужащего РФ'];
module.exports = () => {return r.pick(kinds)};
