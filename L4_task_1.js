'use strict'

function getNumberParts(number) {
    let number_obj = {};
    if (number > 0 && number <= 999) {
        number_obj.единицы = Math.floor(number % 10);
        number_obj.десятки = Math.floor(number / 10 % 10);
        number_obj.сотни = Math.floor(number / 100 % 10);
    } else
        console.log('Вы ввели число меньше 0 или больше 999');
    return number_obj;
}
console.log(getNumberParts(+prompt("Введите число: ")))

// Дополнение:
// Минусом  метода написанного выше, считаю создание объекта в функции (согласно ТЗ),
// таким образом этот объект не сможем использовать вне функции.
// Считаю, что лучше объект создать вне функции и работать с ссылкой на него.
//
// 'use strict'
//
// function getNumberParts(number) {
//     if (number > 0 && number <= 999) {
//         number_obj.единицы = Math.floor(number % 10);
//         number_obj.десятки = Math.floor(number / 10 % 10);
//         number_obj.сотни = Math.floor(number / 100 % 10);
//     } else
//         console.log('Вы ввели число меньше 0 или больше 999');
//     return number_obj;
// }
// let number_obj = { 'единицы': null, 'десятки': null, 'сотни': null };
// console.log(getNumberParts(+prompt("Введите число: ")))