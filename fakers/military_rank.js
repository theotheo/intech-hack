var r = require("random-js")();

const kinds = [
  'Рядовой (курсант)',
  'Ефрейтор 	Матрос (курсант)',
  'Старший матрос',
  'Младший сержант',
  'Сержант',
  'Старший сержант',
  'Старшина 	',
  'Старшина 2 статьи',
  'Старшина 1 статьи',
  'Главный старшина',
  'Главный корабельный старшина',
  'Прапорщик',
  'Старший прапорщик 	',
  'Мичман',
  'Старший мичман',
  'Младший лейтенант',
  'Лейтенант',
  'Старший лейтенант',
  'Капитан ',
  'Младший лейтенант',
  'Лейтенант',
  'Старший лейтенант',
  'Капитан-лейтенант',
  'Майор',
  'Подполковник',
  'Полковник 	',
  'Капитан 3 ранга',
  'Капитан 2 ранга',
  'Капитан 1 ранга',
  'Генерал-майор',
  'Генерал-лейтенант',
  'Генерал-полковник',
  'Генерал армии',
  'Маршал Российской Федерации 	',
  'Контр-адмирал',
  'Вице-адмирал',
  'Адмирал Адмирал флота ', 
]
module.exports = () => {return r.pick(kinds)};
