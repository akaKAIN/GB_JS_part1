class Board {
    gameObjects: Map<string, string> = new Map();
    row: number;
    col: number;
    selector: string;
    foodList: string[] = ['food-fire', 'food-water', 'food-wood'];

    constructor(config: IBoard) {
        this.row = config.rowSize
        this.col = config.colSize
        this.selector = config.bordSelector
        this.init()
    }

    init() {
        this.createBoard()
        this.createMenu()
        this.fillGameObjects()
        this.createFood()
    }

    get(key: string): string | undefined {
        return this.gameObjects.get(key)
    }

    fillGameObjects() {
        this.gameObjects.set('snake', 'snake')
        this.gameObjects.set('food-fire', 'fire')
        this.gameObjects.set('food-water', 'water')
        this.gameObjects.set('food-wood', 'wood')
    }

    getBoardElement() {
        return document.querySelector(this.selector)
    }

    getCreatedElement(tag: string): Element {
        return document.createElement(tag)
    }

    createBoard() {
        const boardEl = this.getBoardElement()
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

    createMenu() {
        const board = this.getBoardElement()

        const menu = this.getCreatedElement('div')
        menu.classList.add('text-center', 'px-5', 'py-5')
        const startBtn = this.getCreatedElement('button')
        startBtn.innerHTML = 'START'
        startBtn.classList.add('btn', 'btn-info', 'mx-5', 'start')
        const stopBtn = this.getCreatedElement('button')
        stopBtn.innerHTML = 'STOP'
        stopBtn.classList.add('btn', 'btn-info', 'mx-5', 'stop')
        const restartBtn = this.getCreatedElement('button')
        restartBtn.innerHTML = 'RESTART'
        restartBtn.classList.add('btn', 'btn-info', 'mx-5', 'restart')

        menu.appendChild(startBtn)
        menu.appendChild(stopBtn)
        menu.appendChild(restartBtn)
        board?.insertAdjacentElement("afterend", menu)
    }

    getRandomEmptyPoint(): Point {
        while (true) {
            const x = Math.floor(Math.random() * this.col)
            const y =  Math.floor(Math.random() * this.row)
            const freshPoint = new Point(x, y)
            if (freshPoint.getPointElement() === null) {
                return freshPoint
            }
        }
    }

    createFood() {
        for (let i = 0; i < 3; i++) {
            this.foodList.forEach( foodType => {
                const element = this.get(foodType)
                const position = this.getRandomEmptyPoint()
                if (element) {
                    position.drawPointElement(element)
                }
            })
        }
    }
}
