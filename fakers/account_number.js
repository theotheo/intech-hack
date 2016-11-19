var chance = require('chance').Chance();

module.exports = () => {
  return chance.string({pool: '0987654321'}, 20)
}
