"use strict";
class TicTacToe {
    constructor() {
    }
    generateField() {
        let field = document.querySelector('#field');
        for (let row = 3; row > 0; row--) {
            for (let col = 1; col < 4; col++) {
                let cell = document.createElement('div');
                cell.dataset.row = row.toString();
                cell.dataset.col = col.toString();
                cell.classList.add('col-4', 'cell', 'border');
                if (field) {
                    field.insertAdjacentElement('beforeend', cell);
                }
            }
        }
    }
}
const game = new TicTacToe();
game.generateField();
