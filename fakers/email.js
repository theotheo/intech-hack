var chance = require('chance').Chance();

module.exports = (params) => {
  let res = chance.email();
  if (params !== undefined && params['domain'] !== undefined) {
    res = res.split('@')[0] + '@' + params['domain'];
  }
  return res;
}
