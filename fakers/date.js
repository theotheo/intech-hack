var fakerator = require("fakerator")('ru-RU');
var dateFormat = require('dateformat');

module.exports = (params) => {
  let current = fakerator.date.recent();
  let mask = 'yyyy.mm.dd';
  if(params !== undefined) {
    if(params['offset'] !== undefined) {
      let offset = params['offset'];
      if(offset === 'вчера') {
        current.setDate(current.getDate() - 1);
      } else if(offset === 'завтра') {
        current.setDate(current.getDate() + 1);
      } else if(offset === 'позавчера') {
        current.setDate(current.getDate() - 2);
      } else if(offset === 'послезавтра') {
        current.setDate(current.getDate() + 2);
      } else if(typeof(parseInt(offset)) === 'number') {
        current.setDate(current.getDate() + parseInt(offset));
      }
    }
    if (params['mask'] !== undefined) {
      mask === params['mask']
    }
  };
  return dateFormat(current, mask);
};
