'use strict'

function checkingOfNumber(val_number) {
    for (let b = 2; b < val_number; b++) {
        if (val_number % b == 0) {
            return false
        }
    }
    return val_number
}

let i = 2;
while (i <= 100) {
    if (checkingOfNumber(i)) {
        console.log(i);
    }
    i++;
}