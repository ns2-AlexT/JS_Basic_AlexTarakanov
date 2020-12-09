'use strict'

let a = 10;
let b = 3;

function sum(a, b) {
    return a + b
}
function sub(a, b) {
    return a - b
}
function div(a, b) {
    return a / b
}
function mul(a, b) {
    return a * b
}

console.log(`Result ${a} + ${b} = `, sum(a, b));
console.log(`Result ${a} - ${b} = `, sub(a, b));
console.log(`Result ${a} / ${b} = `, div(a, b));
console.log(`Result ${a} * ${b} = `, mul(a, b));