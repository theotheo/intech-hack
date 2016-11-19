let generator = require('creditcard-generator');

module.exports = () => {
  return generator.GenCC()[0];
}
