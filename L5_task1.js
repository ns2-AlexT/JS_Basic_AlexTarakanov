'use strict'

const gameChess = {
    makePole() {
        const arrNumbers = [null, 8, 7, 6, 5, 4, 3, 2, 1, null];
        const arrSymbols = [null, 'a', 'b', 'c', 'd', 'e', 'f', 'j', 'h', null];
        let table = document.createElement("table");
        table.style.borderCollapse = 'Collapse';
        for (let i = 0; i < arrNumbers.length; i++) {
            let tr = document.createElement('tr');
            for (let j = 0; j < arrSymbols.length; j++) {
                let td = document.createElement('td');
                td.style.border = '1px solid #888888';
                td.style.width = '40px';
                td.style.height = '40px';
                td.backgroundColor = 'white';
                td.style.textAlign = 'center';
                tr.appendChild(td);
                if (arrNumbers[i] === null && arrSymbols[j] !== null) {
                    td.innerHTML = arrSymbols[j];
                } else if (arrSymbols[j] === null && arrNumbers[i] !== null) {
                    td.innerHTML = arrNumbers[i];
                } else if (arrNumbers[i] != null && arrSymbols[j] != null) {
                    if (i % 2 != j % 2) {
                        td.style.backgroundColor = 'black';
                    }
                }
            }
            table.appendChild(tr);
        }
        document.body.appendChild(table);
    },
};
gameChess.makePole();