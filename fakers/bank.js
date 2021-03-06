var r = require("random-js")();

const kinds = [
    'Название банка',
    'Сбербанк России',
    'ВТБ Банк Москвы',
    'Газпромбанк',
    'ВТБ 24',
    'ФК Открытие',
    'Россельхозбанк',
    'Альфа-Банк',
    'Национальный Клиринговый Центр',
    'Промсвязьбанк',
    'Московский Кредитный Банк',
    'ЮниКредит Банк',
    'Бинбанк',
    'Райффайзенбанк',
    'Росбанк',
    'Россия',
    'БМ-Банк (бывш. Банк Москвы)',
    'Рост Банк',
    'Банк «Санкт-Петербург»',
    'Совкомбанк',
    'Ак Барс',
    'Русский Стандарт',
    'Московский Областной Банк',
    'Банк Уралсиб',
    'Ситибанк',
    'Национальный Банк «Траст»',
    'СМП Банк',
    'Уральский Банк Реконструкции и Развития',
    'МДМ Банк',
    'Связь-Банк',
    'Югра',
    'Российский Капитал',
    'Московский Индустриальный Банк',
    'Зенит',
    'Абсолют Банк',
    'Нордеа Банк',
    'Всероссийский Банк Развития Регионов',
    'ИНГ Банк',
    'Глобэкс',
    'Новикомбанк',
    'Возрождение',
    'Транскапиталбанк (ТКБ)',
    'Хоум Кредит Банк',
    'Татфондбанк',
    'Восточный Экспресс Банк',
    'Тинькофф Банк',
    'РосЕвроБанк',
    'Экспресс-Волга',
    'МТС Банк',
    'Росгосстрах Банк',
    'ДельтаКредит',
    'Азиатско-Тихоокеанский Банк',
    'Авангард',
    'ОТП Банк',
    'Аверс',
    'МСП Банк',
    'СКБ-Банк',
    'Инвестторгбанк',
    'Национальный Расчетный Депозитарий',
    'Кредит Европа Банк',
    'Почта Банк',
    'Сургутнефтегазбанк',
    'Запсибкомбанк',
    'Юниаструм Банк',
    'Сетелем Банк',
    'Ренессанс Кредит',
    'Фондсервисбанк',
    'Русфинанс Банк',
    'Центр-инвест',
    'ЦентроКредит',
    'Таврический',
    'Локо-Банк',
    'Союз',
    'Банк Финсервис',
    'Эйч-Эс-Би-Си Банк (HSBC)',
    'Балтинвестбанк',
    'Российский Национальный Коммерческий Банк',
    'Балтийский Банк',
    'Кубань Кредит',
    'ВУЗ-Банк',
    'БНП Париба Банк',
    'Банк Интеза',
    'Меткомбанк (Каменск-Уральский)',
    'РН Банк',
    'Дойче Банк',
    'Экспобанк',
    'Металлинвестбанк',
    'БКС — Инвестиционный Банк',
    'Банк БФА',
    'Международный Финансовый Клуб',
    'Банк Сберегательно-кредитного сервиса',
    'Креди Агриколь КИБ',
    'Бинбанк кредитные карты',
    'Международный Банк Санкт-Петербурга (МБСП)',
    'СДМ-Банк',
    'Тойота Банк',
    'Образование',
    'Крайинвестбанк',
    'Росэксимбанк',
    'Советский',
    'АйСиБиСи Банк',
    'Коммерцбанк (Евразия)',
    'Межтопэнергобанк',
    'Социнвестбанк',
    'ББР Банк',
    'Газэнергобанк',
    'Сумитомо Мицуи',
    'Челиндбанк',
    'ОФК Банк',
    'Еврофинанс Моснарбанк',
    'Примсоцбанк',
    'Фора-Банк',
    'Челябинвестбанк',
    'Левобережный',
    'Интерпрогрессбанк',
    'Саровбизнесбанк',
    'Банк СГБ',
    'Бэнк оф Чайна',
    'Кредит Урал Банк',
    'Плюс Банк',
    'Интехбанк',
    'Фольксваген Банк Рус',
    'НС Банк',
    'Объединенный Капитал',
    'Кольцо Урала',
    'БыстроБанк',
    'Дальневосточный Банк',
    'Национальный Стандарт',
    'Русский Международный Банк',
    'Генбанк',
    'Солидарность (Самара)',
    'Меткомбанк (Череповец)',
    'Банк «МБА-Москва»',
    'Интерпромбанк',
    'Приморье',
    'Алмазэргиэнбанк',
    'Платежный Центр',
    'Финанс Бизнес Банк',
    'АктивКапитал Банк',
    'Девон-Кредит',
    'Газбанк',
    'Московское Ипотечное Агентство',
    'Акибанк',
    'Данске Банк',
    'Липецккомбанк',
    'Ланта-Банк',
    'Российская Финансовая Корпорация',
    'Агропромкредит',
    'Уральский Финансовый Дом',
    'Аресбанк',
    'Спурт Банк',
    'Энерготрансбанк',
    'СЭБ Банк',
    'Татсоцбанк',
    'Москоммерцбанк',
    'Энергобанк',
    'БМВ Банк',
    'Натиксис Банк',
    'Легион',
    'Курскпромбанк',
    'Собинбанк',
    'М2М Прайвет Банк',
    'Морган Стэнли Банк',
    'Мир Бизнес Банк',
    'Чайна Констракшн',
    'Башкомснаббанк',
    'Хлынов',
    'Мерседес-Бенц Банк Рус',
    'НБД-Банк',
    'Тольяттихимбанк',
    'Банк Кредит Свисс',
    'Алеф-Банк',
    'Джей энд Ти Банк',
    'Петербургский Социальный Коммерческий Банк',
    'Темпбанк',
    'Рублев',
    'Держава',
    'Ури Банк',
    'Уралтрансбанк',
    'Развитие-Столица',
    'Пойдем!',
    'Денизбанк Москва',
    'Акцепт',
    'Кошелев-Банк',
    'НК Банк',
    'Расчетно-Кредитный Банк',
    'Нацинвестпромбанк',
    'Инбанк',
    'Форштадт',
    'Русский Ипотечный Банк',
    'Объединенный Кредитный Банк',
    'Национальный Резервный Банк',
    'Норвик Банк',
    'Гарант-Инвест',
    'Росдорбанк',
    'Солидарность (Москва)',
    'Банк Казани',
    'Морской Банк',
    'Гранд Инвест Банк',
    'Прио-Внешторгбанк',
    'Александровский',
    'Агросоюз',
    'Промтрансбанк',
    'Банк ВВБ',
    'Русьуниверсалбанк',
    'Ишбанк',
    'КС Банк',
    'Национальная Факторинговая Компания',
    'Тройка-Д Банк',
    'Современный Коммерческий Инновационный Банк',
    'Нижневолжский Коммерческий Банк',
    'Первомайский',
    'Солид Банк',
    'ТЭМБР-Банк',
    'Русский Торговый Банк',
    'Новопокровский',
    'Ижкомбанк',
    'Оренбург',
    'Нико-Банк',
    'Нефтяной Альянс',
    'Банк Жилищного Финансирования',
    'Киви Банк',
    'Ассоциация',
    'Таатта',
    'Торговый Городской Банк',
    'Юг-Инвестбанк',
    'Снежинский',
    'СИАБ',
    'Автоторгбанк',
    'Енисей',
    'Екатеринбург',
    'Нефтепромбанк',
    'РусЮгбанк',
    'Бинбанк Мурманск',
    'Гута-Банк',
    'Славия',
    'Энергомашбанк',
    'ГПБ-Ипотека',
    'Анкор Банк',
    'Модульбанк',
    'Северо-Восточный Альянс',
    'Вокбанк',
    'Япы Креди Банк Москва',
    'Ставропольпромстройбанк',
    'Московский Нефтехимический Банк',
    'Северный Кредит',
    'Трансстройбанк',
    'Союзный',
    'Эксперт Банк',
    'Томскпромстройбанк',
    'Кранбанк',
    'Воронеж',
    'Идея Банк',
    'Консервативный Коммерческий Банк',
    'Белгородсоцбанк',
    'Славянский Кредит',
    'МС Банк Рус',
    'Банк БКФ',
    'Чувашкредитпромбанк',
    'Финам Банк',
    'Азия-Инвест Банк',
    'Муниципальный Камчатпрофитбанк',
    'Углеметбанк',
    'Актив Банк',
    'БайкалИнвестБанк',
    'Кузнецкбизнесбанк',
    'РЕСО Кредит',
    'Хакасский Муниципальный Банк',
    'Итуруп',
    'Голдман Сакс Банк',
    'Автоградбанк',
    'Русь',
    'Альба Альянс',
    'Ю Би Эс Банк',
    'Риабанк',
    'Уралкапиталбанк',
    'Коммерческий Индо Банк',
    'Индустриальный Сберегательный Банк',
    'Мосуралбанк',
    'Банк на Красных Воротах',
    'Зираат Банк',
    'Чайнасельхозбанк',
    'Северный Народный Банк',
    'Проминвестбанк',
    'Севастопольский Морской Банк',
    'Банк Раунд',
    'Газтрансбанк',
    'Конфидэнс Банк',
    'ФорБанк',
    'Сити Инвест Банк',
    'Руснарбанк',
    'ЯР-Банк',
    'Кубаньторгбанк',
    'Банк Оранжевый',
    'КЭБ ЭйчЭнБи Банк',
    'Гаранти Банк — Москва',
    'Витабанк',
    'Экспресс-Кредит',
    'Новобанк',
    'Нейва',
    'НБК-Банк',
    'Камский Коммерческий Банк',
    'Вега-Банк',
    'Банк ПСА Финанс Рус',
    'Енисейский Объединенный Банк',
    'Владпромбанк',
    'Московский Коммерческий Банк',
    'Нэклис-Банк',
    'Земский Банк',
    'Уссури',
    'Сибсоцбанк',
    'Синко-Банк',
    'Агророс',
    'Банк Торгового Финансирования',
    'Вологжанин',
    'Русский Национальный Банк',
    'Ростфинанс',
    'Зенит Сочи',
    'Межрегиональный промышленно-строительный банк',
    'Венец',
    'Форус Банк',
    'Бест Эффортс Банк',
    'Банкхаус Эрбе',
    'Кремлевский',
    'ПИР Банк',
    'Кузнецкий',
    'Москва-Сити',
    'Горбанк',
    'Финансово-Промышленный Капитал',
    'Экси-Банк',
    'Бинбанк Столица',
    'Донкомбанк',
    'Платина',
    'Стройлесбанк',
    'Евразийский Банк',
    'Долинск',
    'Роял Кредит Банк',
    'Объединенный Резервный Банк',
    'Радиотехбанк',
    'Сибирский Банк Реконструкции и Развития',
    'Юнистрим',
    'Аксонбанк',
    'ВостСибтранскомбанк',
    'Банк Инноваций и Развития',
    'Яндекс.Деньги',
    'Руссобанк',
    'МФБанк',
    'Бинбанк Тверь',
    'Крокус-Банк',
    'Мастер-Капитал',
    'УМ-Банк',
    'Хованский',
    'Камчаткомагропромбанк',
    'Айви Банк',
    'Мегаполис',
    'Московско-Парижский Банк',
    'Иваново',
    'Веста',
    'Международный Коммерческий Банк',
    'Национальный Залоговый Банк',
    'Банк БЦК-Москва',
    'Уралпромбанк',
    'Заречье',
    'Рапида',
    'Ермак',
    'Крыловский',
    'Метрополь',
    'Банк Экономический Союз',
    'НОКССбанк',
    'Татагропромбанк',
    'Братский АНКБ',
    'Донхлеббанк',
    'Живаго-Банк',
    'Сибэс',
    'Невский Банк',
    'Центрально-Европейский Банк',
    'Кузнецкий Мост',
    'Алтайкапиталбанк',
    'Алма Банк (бывш. Первый Инвестиционный Банк)',
    'РТС-Банк',
    'РБА',
    'Банк Премьер Кредит',
    'ИТ Банк',
    'Евроальянс',
    'Санкт-Петербургский Банк Инвестиций',
    'Земкомбанк',
    'Еврокапитал-Альянс',
    'Владбизнесбанк',
    'ЮМК',
    'Новый Московский Банк',
    'БСТ-Банк',
    'Костромаселькомбанк',
    'Кредпромбанк',
    'Кредит Экспресс',
    'Оней Банк',
    'Тамбовкредитпромбанк',
    'Унифондбанк',
    'Йошкар-Ола',
    'ИРС',
    'Аспект',
    'Оргбанк',
    'Экономикс-Банк',
    'Новация',
    'Первый Клиентский Банк',
    'Международный Банк Развития',
    'Канский',
    'Инвестсоцбанк',
    'Апабанк',
    'Взаимодействие',
    'Вестерн Юнион ДП Восток',
    'Внешфинбанк',
    'Росбизнесбанк',
    'Элита',
    'Газнефтьбанк',
    'Международный Строительный Банк',
    'Межрегиональный Почтовый Банк',
    'Резерв',
    'Пермь',
    'Тальменка-Банк',
    'Промышленно-Финансовое Сотрудничество',
    'Новый Символ',
    'Далена',
    'Промсельхозбанк',
    'Заубер Банк',
    'Кросна-Банк',
    'Викинг',
    'Новое Время',
    'Спиритбанк',
    'К2 Банк',
    'Система',
    'Вкабанк',
    'Преодоление',
    'Сельмашбанк',
    'Яринтербанк',
    'Вологдабанк',
    'Народный Банк',
    'Капитал',
    'Миръ',
    'Торжокуниверсалбанк',
    'Наш Дом',
    'Кетовский Коммерческий Банк',
    'Кемсоцинбанк',
    'Булгар Банк',
    'Столичный Кредит',
    'Старооскольский Агропромбанк',
    'Московский Вексельный Банк',
    'Алтынбанк',
    'Златкомбанк',
    'Современные Стандарты Бизнеса',
    'Глобус',
    'Примтеркомбанк',
    'Крона-Банк',
    'ПэйПал Ру',
    'Россита-Банк',
    'Вятич',
    'Проинвестбанк',
    'Майкопбанк',
    'КОР',
    'Холмск',
    'Америкэн Экспресс Банк',
    'Приобье',
    'Руна-Банк',
    'Социум-Банк',
    'Великие Луки Банк',
    'Бум-Банк',
    'ИК Банк',
    'Лайтбанк',
    'Тагилбанк',
    'Дом-Банк',
    'Национальный Банк Взаимного Кредита',
    'Евроазиатский Инвестиционный Банк',
    'Межрегиональный Клиринговый Банк',
    'Икано Банк',
    'Акцент',
    'Кузбассхимбанк',
    'Арзамас',
    'Ноосфера',
    'Саратов',
    'Калуга',
    'Спутник',
    'Первый Дортрансбанк',
    'Уралфинанс',
    'Прайм Финанс',
    'Сервис-Резерв',
    'Новый Кредитный Союз',
    'РФИ Банк',
    'Риал-Кредит',
    'Нальчик',
    'Вэлтон Банк',
    'Соколовский',
    'Финтрастбанк',
    'Народный Доверительный Банк',
    'Саммит Банк',
    'Гринкомбанк',
    'Тендер-Банк',
    'Синергия',
    'Михайловский ПЖСБ',
    'Новый Век',
    'Инкаробанк',
    'Химик',
    'Первоуральскбанк',
    'Почтобанк',
    'Республиканский Кредитный Альянс',
    'Русский Элитарный Банк',
    'Кредитинвест',
    'Новый Промышленный Банк',
    'НКБ',
    'Вакобанк',
    'МТИ-Банк',
    'Мурманский Социальный Коммерческий Банк',
    'Курган',
    'Банк РМП',
    'Объединенная Расчетная Система',
    'Космос',
    'ЕАТП Банк',
    'Финарс Банк',
    'Сталь Банк',
    'Максима',
    'Дон-Тексбанк',
    'Жилкредит',
    'Невастройинвест',
    'Онего',
    'НоваховКапиталБанк',
    'Регионфинансбанк',
    'Мурманский Расчетный Центр',
    'Байкалкредобанк',
    'Си Ди Би Банк',
    'Спецстройбанк',
    'Москва',
    'ФФин Банк (бывш. Охабанк)',
    'Московский Клиринговый Центр',
    'Русский Финансовый Альянс',
    'Классик Эконом Банк',
    'Новокиб',
    'Московский Национальный Инвестиционный Банк',
    'Акрополь',
    'Центрально-Азиатский',
    'Майский',
    'Народный Инвестиционный Банк',
    'Тексбанк',
    'Прохладный',
    'Арсенал',
    'Холдинвестбанк',
    'Южный Региональный Банк',
    'Металлург',
    'Сириус',
    'Славянбанк',
    'АвтоКредитБанк',
    'Балаково-Банк',
    'Эльбин',
    'Международный Расчетный Банк',
    'АлтайБизнес-Банк',
    'Ресурс-Траст',
    'Камский Горизонт',
    'Банк РСИ',
    'Севзапинвестпромбанк',
    'Народный Земельно-Промышленный Банк',
    'Объединенный Банк Республики',
    'РусьРегионБанк',
    'Русский Банк Сбережений',
    'Флора-Москва',
    'Уралприватбанк',
    'Анелик РУ',
    'Прокоммерцбанк',
    'Гефест',
    'Жилстройбанк',
    'Стандарт-Кредит',
    'Логос',
    'Народный Банк Тувы',
    'РИТЦ Банк',
    'ВРБ',
    'Геобанк',
    'Башпромбанк',
    'Алжан',
    'Тульский Расчетный Центр',
    'Лэнд-Банк',
    'МВС Банк',
    'Северо-Западный 1 Альянс Банк',
    'Эко-Инвест',
    'Стар Альянс',
    'Национальный Банк Сбережений',
    'Таганрогбанк',
    'Дружба',
    'Берейт',
    'РИБ',
    'Континенталь',
    'Рента-Банк',
    'Универсальная электронная карта',
    'Европейский Стандарт',
    'Петербургский Расчетный Центр',
    'Альтернатива',
    'Информпрогресс',
    'Промсвязьинвест',
    'Монета.ру',
    'Интеркоопбанк',
    'ИР-Кредит',
    'Финчер',
    'Северстройбанк',
    'Лидер',
    'Олма-Банк',
    'Тайдон',
    'Рунэтбанк',
    'Моби.Деньги',
    'Нарат',
    'Деньги.Мэйл.Ру',
    'Единая касса',
    'Сетевая Расчетная Палата',
    'Расчетная Палата СВМБ',
    'Инновационный Расчетный Центр',
    'Континент Финанс',
    'Красноярский Краевой Расчетный Центр',
    'Электронный платежный сервис',
    'Фидбэк',
    'Русское Финансовое Общество',
    'Платежный Клиринговый Дом',
    'Умут',
    'Вест',
    'Премиум',
    'Единая Расчётная Палата',
    'Дальний Восток',
    'АРБ-Инкасс',
    'Частный Расчетно-Кассовый Центр',
    '21 Век',
    'Расчетный Финансовый Дом'
];

module.exports = () => {
    return r.pick(kinds)
};
