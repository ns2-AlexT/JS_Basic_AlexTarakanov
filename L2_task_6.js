'use strict'


function multiOperations(arg1, arg2, operation) {
    switch (operation.toLowerCase()) {
        case 'sum': return arg1 + arg2;
        case 'sub': return arg1 - arg2;
        case 'mul': return arg1 * arg2;
        case 'dev':
            if (arg2 === 0) {
                return 'Error ! arg2 must be more than 0 !'
            }
            return arg1 / arg2
    }
}

console.log('Result = ', multiOperations(3, 5, 'sum'));
console.log('Result = ', multiOperations(6, 0, 'dev'));
console.log('Result = ', multiOperations(6, 0, 'mul'));
console.log('Result = ', multiOperations(6, 0, 'sub'));