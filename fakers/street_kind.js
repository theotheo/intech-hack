var r = require("random-js")();

const kinds = [
  'Аллея',
  'Бульвар',
  'Вал',
  'Взвоз',
  'Въезд',
  'Дорога',
  'Заезд',
  'Кольцо',
  'Линия (линнея)',
  'Луч',
  'Магистраль',
  'Набережная',
  'Переулок',
  'Перспектива (першпектива)',
  'Площадь',
  'Проезд',
  'Проспект',
  'Проулок',
  'Разъезд',
  'Спуск',
  'Съезд',
  'Территория',
  'Тракт',
  'Тупик',
  'Улица',
  'Шоссе',
]
module.exports = () => {return r.pick(kinds)};
