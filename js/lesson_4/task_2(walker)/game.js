"use strict";
/*
Отрисовка происходит НЕ в консоли, а через DOM.
Функционал по перемещению реализован через методы библиотеки Vue.js
 */
class Cell {
    constructor(ind, isPlayerHere = false) {
        this.cellIndex = ind;
        this.isPlayerHere = isPlayerHere;
    }
}
class Position {
    constructor(position = 12 * (12 / 2 - 1) + 12 / 2) {
        this.baseSize = 12;
        this.position = position;
    }
}
class Game {
    constructor() {
        this.filedSize = 12;
        this.playerPosition = new Position();
        this.field = this.createField();
    }
    createField() {
        const field = [];
        for (let i = 0; i < this.filedSize * this.filedSize; i++) {
            const cell = new Cell(i);
            if (this.playerPosition.position === i) {
                cell.isPlayerHere = true;
            }
            field.push(cell);
        }
        return field;
    }
}
