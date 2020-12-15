'use strict'

function countBasketPrice(basketPrice) {
    return basketPrice.good.reduce((total, goods) => total += goods.good_price * goods.good_quantity, 0);
}

let basket = {
    good: [
        {
            good_id: 'Товар_1',
            good_price: 100,
            good_quantity: 2
        },
        {
            good_id: 'Товар_2',
            good_price: 300,
            good_quantity: 1
        },
        {
            good_id: 'Товар_3',
            good_price: 75,
            good_quantity: 4
        }
    ]
    //,
    // basketPrice() {
    //     return this.good.reduce((total, goods) => total += goods.good_price * goods.good_quantity, 0)
    // }
}

console.log(`Total price of basket is : ${countBasketPrice(basket)}`);

// Вариант с объявдением в объектк функции, намного практичнее, но мне кажется на лекции разбирали такой пример.
//Поэтому оставлю свой вариант кода с функцией подсчета итоговой суммы по всей корзине.