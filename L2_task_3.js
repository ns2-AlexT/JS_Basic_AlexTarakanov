'use strict'

let a = 29
let b = -12

function checkNumbers() {
    if (a > 0 && b > 0) {
        return a - b
    } else {
        if (a < 0 && b < 0) {
            return a * b
        } else {
            if ((a > 0 && b < 0) || (a < 0 && b > 0)) {
                return a + b
            }
        }
    }
}

console.log(checkNumbers(a, b));
