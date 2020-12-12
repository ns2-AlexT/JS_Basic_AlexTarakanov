'use strict'
// так как объекты еще не проходили, то массивы вида [{good:, quantity:, price:}, {good:, quantity:, quantity:}] - не использую
// пока не пришло понимание как использовать reduce для масива массивов(который использую я)
// Вы сможете при разборе ДЗ, объяснить как использовать reduce в массиве массивов ?
// если массив имеет вид: 
// [{good :'товар_1', quantity: '2', price: '150'}, 
//  {good :'товар_2', quantity: '2', price: '150'}, 
//  {good :'товар_3', quantity: '2', price: '150'}]
// тогда  reduce весьма кстати и понятно как его использовать.

function countBasketPrice(new_arr) {
    let total_coast = 0;
    for (let i = 0; i < new_arr.length; i++) {
        total_coast += new_arr[i][1] * new_arr[i][2];
    }
    return total_coast

}

let new_arr = [['товар_1', '2', '150'], ['товар_2', '4', '75'], ['товар_3', '5', '100']];
console.log(`Total price of basket is ${countBasketPrice(new_arr)}`);
console.log(`Total price of basket is ${countBasketPrice_1(new_arr)}`);