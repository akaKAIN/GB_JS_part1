interface IFigureInfo {
    title: string;
    icon: string;
    isWhite: boolean;
}

interface IFigureMeta {
    title: string;
    isWhite: boolean
}

interface IFigureInBoxInfo {
    title: string;
    icon: string;
    count: number;
}

interface IFigureInBox {
    king: IFigureInBoxInfo;
    queen: IFigureInBoxInfo;
    rook: IFigureInBoxInfo;
    bishop: IFigureInBoxInfo;
    knight: IFigureInBoxInfo;
    pawn: IFigureInBoxInfo;
}

class StartPosition {
    static base = [
        {row: 0, col: 4, title: 'king', isWhite: true},
        {row: 0, col: 3, title: 'queen', isWhite: true},
        {row: 0, col: 0, title: 'rook', isWhite: true}, {row: 0, col: 7, title: 'rook', isWhite: true},
        {row: 0, col: 2, title: 'bishop', isWhite: true}, {row: 0, col: 5, title: 'bishop', isWhite: true},
        {row: 0, col: 1, title: 'knight', isWhite: true}, {row: 0, col: 6, title: 'knight', isWhite: true},
        {row: 1, col: 0, title: 'pawn', isWhite: true}, {row: 1, col: 1, title: 'pawn', isWhite: true},
        {row: 1, col: 2, title: 'pawn', isWhite: true}, {row: 1, col: 3, title: 'pawn', isWhite: true},
        {row: 1, col: 4, title: 'pawn', isWhite: true}, {row: 1, col: 5, title: 'pawn', isWhite: true},
        {row: 1, col: 6, title: 'pawn', isWhite: true}, {row: 1, col: 7, title: 'pawn', isWhite: true},
        {row: 7, col: 4, title: 'king', isWhite: false},
        {row: 7, col: 3, title: 'queen', isWhite: false},
        {row: 7, col: 0, title: 'rook', isWhite: false}, {row: 7, col: 7, title: 'rook', isWhite: false},
        {row: 7, col: 2, title: 'bishop', isWhite: false}, {row: 7, col: 5, title: 'bishop', isWhite: false},
        {row: 7, col: 1, title: 'knight', isWhite: false}, {row: 7, col: 6, title: 'knight', isWhite: false},
        {row: 6, col: 0, title: 'pawn', isWhite: false}, {row: 6, col: 1, title: 'pawn', isWhite: false},
        {row: 6, col: 2, title: 'pawn', isWhite: false}, {row: 6, col: 3, title: 'pawn', isWhite: false},
        {row: 6, col: 4, title: 'pawn', isWhite: false}, {row: 6, col: 5, title: 'pawn', isWhite: false},
        {row: 6, col: 6, title: 'pawn', isWhite: false}, {row: 6, col: 7, title: 'pawn', isWhite: false}
    ];

    static getBaseMetaFigureForThisCell(row: number, col: number): IFigureMeta | null {
        const figure = this.base.find(figure => col === figure.col && row === figure.row)
        if (figure) {
            return {title: figure.title, isWhite: figure.isWhite}
        }
        return null
    }
}


class FigureBox {
    black: IFigureInBox;
    white: IFigureInBox;

    constructor() {

        this.black = {
            king: {title: 'King', icon: '&#9812;', count: 1},
            queen: {title: 'Queen', icon: '&#9813;', count: 1},
            rook: {title: 'Rook', icon: '&#9814;', count: 2},
            bishop: {title: 'Bishop', icon: '&#9815;', count: 2},
            knight: {title: 'Knight', icon: '&#9816;', count: 2},
            pawn: {title: 'Pawn', icon: '&#9817;', count: 8}
        }

        this.white = {
            king: {title: 'King', icon: '&#9812;', count: 1},
            queen: {title: 'Queen', icon: '&#9813;', count: 1},
            rook: {title: 'Rook', icon: '&#9814;', count: 2},
            bishop: {title: 'Bishop', icon: '&#9815;', count: 2},
            knight: {title: 'Knight', icon: '&#9816;', count: 2},
            pawn: {title: 'Pawn', icon: '&#9817;', count: 8}
        }
    }

    getFigure(figure: IFigureMeta): IFigureInfo | null {
        const side = figure.isWhite ? 'white' : 'black'
        for (let [key, val] of Object.entries(this[side])) {
            if (figure.title.toLowerCase() === key.toLowerCase() && val.count > 0) {
                val.count--;
                return {title: val.title, icon: val.icon, isWhite: figure.isWhite}
            }
        }
        return null
    }
}

class ColorCell {
    light: string;
    dark: string;

    constructor(light: string, dark: string) {
        this.dark = dark
        this.light = light
    }

    getColorCell(row: number, col: number): string {
        if (((row + 1) % 2) === ((col + 1) % 2)) {
            return this.dark
        }
        return this.light
    }
}

class ChessFieldCell {
    name: string;
    rowIndex: number;
    colIndex: number;
    figureOn: IFigureInfo | null;
    colorCell: string;

    constructor(row: number, col: number, figure: IFigureInfo | null, colorCell: string) {
        this.rowIndex = row
        this.colIndex = col
        this.figureOn = figure
        this.name = this.getCellName()
        this.colorCell = colorCell
    }

    getCellName(): string {
        return `${ChessField.columns[this.colIndex]}${ChessField.rows[this.rowIndex]}`
    }
}

class ChessField {
    static rows = [1, 2, 3, 4, 5, 6, 7, 8]
    static columns = ['A', 'B', 'C', 'D', 'E', 'F', 'J', 'H']
    figureBox: FigureBox;
    field: ChessFieldCell[];
    colorCells: ColorCell;

    constructor(lightColorCells: string, darkColorCells: string) {
        this.colorCells = new ColorCell(lightColorCells, darkColorCells)
        this.figureBox = this.getNewFigureBox();
        this.field = this.generateField();
    }

    getNewFigureBox() {
        return new FigureBox()
    }

    generateField(): ChessFieldCell[] {
        const field = []
        for (let row = 0; row < 8; row++) {
            for (let col = 0; col < 8; col++) {
                const metaFigure = StartPosition.getBaseMetaFigureForThisCell(row, col)
                let figure: IFigureInfo | null = null
                const colorCell = this.colorCells.getColorCell(row, col)
                if (metaFigure !== null) {
                    figure = this.figureBox.getFigure(metaFigure)
                }
                const cell = new ChessFieldCell(row, col, figure, colorCell)
                field.push(cell)
            }
        }
        return field
    }
}

const fieldEl = document.querySelector('.field')

const chess = new ChessField('#87570a', '#dcb35c')
console.log(chess)
let colCounter = 0
const emptyCell = `<div class="col-4"></div>`

if (fieldEl) {
    chess.field.forEach(cell => {
        if (colCounter === 8) {
            colCounter = 0
            fieldEl.insertAdjacentHTML('afterbegin', emptyCell)
        }
        colCounter++
        fieldEl.insertAdjacentHTML('afterbegin', `
    <div class="col-1 cell" style="background-color: ${cell.colorCell}; color: ${cell.figureOn?.isWhite ? 'white' : 'black'}">
      ${cell.figureOn?.icon ? cell.figureOn?.icon : ""}
    </div>
    `)})
}

