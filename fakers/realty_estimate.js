var r = require("random-js")();

const kinds = [
"Евростандарт", "Отличное", "Хорошее", "Удовлетворительное", "Неудовлетоврительное"
]
module.exports = () => {return r.pick(kinds)};
