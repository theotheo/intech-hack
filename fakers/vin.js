// var chance = require('chance').Chance();
var r = require("random-js")();

// В VIN разрешено использовать только следующие символы латинского алфавита и арабские цифры:
//
// 0 1 2 3 4 5 6 7 8 9 A B C D E F G H J K L M N P R S T U V W X Y Z
//
// Использовать буквы I, O, Q запрещено, так как они сходны по начертанию с цифрами 1, 0, а также между собой.
//
// VIN состоит из 3 частей:
//
//     WMI (World Manufacturers Identification) — всемирный индекс изготовителя
//     VDS (Vehicle Description Section) — описательная часть
//     VIS (Vehicle Identification Section) — отличительная часть


module.exports = () => { return r.string( 3 + 6 + 6, '0123456789ABCDEFGHJKLMNPRSTUVWXYZ')};
