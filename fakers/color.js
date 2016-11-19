var chance = require('chance').Chance();

module.exports = () => {
  return chance.color({format: 'hex'})
}
