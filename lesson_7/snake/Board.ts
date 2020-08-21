class Board extends BoardElements {
    row: number;
    col: number;
    selector: string;

    constructor(config: IBoard) {
        super()
        this.row = config.rowSize
        this.col = config.colSize
        this.selector = config.bordSelector
        this.init()
    }

    init() {
        this.createBoard()
    }

    createBoard() {
        const boardEl = document.querySelector(this.selector)
        if (boardEl === null) {
            throw new Error('No board selector')
        }
        for (let i = 0; i < this.row; i++) {
            const tr = this.getCreatedElement('tr')
            boardEl.appendChild(tr)
            for (let j = 0; j < this.col; j++) {
                const td = this.getCreatedElement('td')
                tr.appendChild(td)
            }
        }
    }


}
