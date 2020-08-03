/*
Отрисовка происходит НЕ в консоли, а через DOM.
Функционал по перемещению реализован через методы библиотеки Vue.js
 */

class Cell {
    isPlayerHere: boolean;
    cellIndex: number;

    constructor(ind: number, isPlayerHere: boolean = false) {
        this.cellIndex = ind
        this.isPlayerHere = isPlayerHere
    }
}

class Position {
    position: number;
    baseSize = 12

    constructor(position: number = 12 * (12/2 - 1) + 12 / 2 ) {
        this.position = position
    }
}

class Game {
    playerPosition: Position;
    filedSize = 12;
    field: Cell[];

    constructor() {
        this.playerPosition = new Position()
        this.field = this.createField()
    }

    createField(): Cell[] {
        const field: Cell[] = []
        for (let i = 0; i < this.filedSize * this.filedSize; i++) {
            const cell = new Cell(i)
            if (this.playerPosition.position === i) {
                cell.isPlayerHere = true
            }
            field.push(cell)
        }
        return field
    }
}
