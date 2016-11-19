var r = require("random-js")();
module.exports = (params) => {
  let template = ' ';
  let size = 1;
  if(params !== undefined && params['list'] !== undefined) {
    template = params['list'].split(',').join();
  }
  if(params['size'] !== undefined) {
    size = params['size'];
  }
  return r.string(size, template);
};
