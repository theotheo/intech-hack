var r = require("random-js")();

const kinds = ['собственник', 'родственник', 'друг', 'договор аренды']
module.exports = () => {
    return r.pick(kinds);
};
