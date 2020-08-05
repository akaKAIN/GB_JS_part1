class TicTacToe {
    round: number;
    currentSymbol: string;

    constructor() {
        this.round = 0
        this.currentSymbol = 'X'
    }

    changeSymbol(): void {
        this.currentSymbol = 'X' === this.currentSymbol ? 'O' : 'X'
    }

    /**
     * Метод проверки того, что во всех трех ячейках по горизонтали/вертикали/диагонали
     * находятся "символы" одного типа
     */
    isGameOver() {
        const field = document.querySelectorAll('.cell')
    }

    clickHandler(event: MouseEvent): void {
        const catchElem = event.target as HTMLElement
        const row = catchElem.getAttribute('data-row')
        const col = catchElem.getAttribute('data-col')
        if (catchElem.innerText === '' && catchElem.hasAttribute('data-row')) {
            catchElem.innerText = this.currentSymbol
            this.isGameOver()
            this.changeSymbol()
        }
    }

    start(): void {
        this.generateField()
        document.addEventListener('click', this.clickHandler.bind(this))
    }


    /**
     * Метод построения игрового поля.
     */
    generateField(): void {
        let field = document.querySelector('div#field')

        for (let row = 3; row > 0; row--) {
            for (let col = 1; col < 4; col++) {
                let cell = document.createElement('div')
                cell.dataset.row = row.toString()
                cell.dataset.col = col.toString()
                cell.classList.add('col-4', 'cell', 'border')
                if (field) {
                    field.insertAdjacentElement('beforeend', cell)
                }
            }
        }
    }

    static isEmptyCell(elem: HTMLElement): boolean {
        return elem.innerText !== '';
    }
}

const game = new TicTacToe()
game.start()

