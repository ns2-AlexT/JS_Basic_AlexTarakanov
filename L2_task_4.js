'use strict'


function outNumbers(a) {
    switch (a) {
        case 1: console.log('Number = ' + a++);
        case 2: console.log('Number = ' + a++);
        case 3: console.log('Number = ' + a++);
        case 4: console.log('Number = ' + a++);
        case 5: console.log('Number = ' + a++);
        case 6: console.log('Number = ' + a++);
        case 7: console.log('Number = ' + a++);
        case 8: console.log('Number = ' + a++);
        case 9: console.log('Number = ' + a++);
        case 10: console.log('Number = ' + a++);
        case 11: console.log('Number = ' + a++);
        case 12: console.log('Number = ' + a++);
        case 13: console.log('Number = ' + a++);
        case 14: console.log('Number = ' + a++);
        case 15: console.log('Number = ' + a);
            break;
    }
}

outNumbers(+prompt('Введите число от 1 до 15'));
