var chance = require('chance').Chance();

module.exports = () => {
  let hour = chance.hour({twentyfour: true});
  let minute = chance.minute()
  return `${hour}:${minute} `;
}
