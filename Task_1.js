'use strict'

function getTemp(Tc) {
    return (9 / 5) * Tc + 32
}

let Tc = prompt('Input then temperature in C ', 27)
alert(`The temperature in F is ${getTemp(Tc)} degrees`);