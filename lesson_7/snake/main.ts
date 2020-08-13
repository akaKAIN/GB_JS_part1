interface IBoard {
    bordSelector: string;
    rowSize: number;
    colSize: number;
}

interface ISnake {
    body: Point[]
}

interface IConfig {
    speed: number;
    board: IBoard;
    snake: ISnake;
}


class SnakeGame {
    config: IConfig;
    board: Board;
    snake: Snake;
    intervalID: number | undefined;


    constructor(config: IConfig) {
        this.config = config
        this.snake = new Snake(this.config.snake.body)
        this.board = new Board(this.config.board)
        this.intervalID = undefined
        this.init()
    }

    protected startGame() {
        this.setInterval(setInterval(this.iterationTick.bind(this), this.getSpeed()))
    }

    protected stopGame() {
        clearInterval(this.intervalID)
        this.setInterval(undefined)
    }

    init() {
        this.drawSnake()
        this.initEventListeners()
    }

    initEventListeners() {
        const start = document.querySelector('.start')
        const stop = document.querySelector('.stop')

        start?.addEventListener('click', this.startGame.bind(this))
        stop?.addEventListener('click', this.stopGame.bind(this))
    }


    private setInterval(id: number | undefined): void {
        this.intervalID = id
    }

    private getInterval(): number | undefined {
        return this.intervalID
    }

    private setSpeed(speed: number): void {
        this.config.speed = speed
    }

    private getSpeed() {
        return this.config.speed
    }

    private iterationTick() {
        this.drawSnake()
        this.snake.doMove()
        this.drawSnake()
    }

    drawSnake(): void {
        this.snake.body.forEach(point => {
            this.drawCell(point, this.snake.element)
        })
    }

    private drawCell(point: Point, className: string) {
        point.getPointElement()?.classList.add(className)
    }

    protected cleanCell(point: Point) {
        const cell = point.getPointElement()
        if (cell && cell.hasAttribute('class')) {
            cell.removeAttribute('class')
        }
    }
}


const configGame = {
    speed: 1500,
    board: {
        bordSelector: '#board',
        rowSize: 20,
        colSize: 20,
    },
    snake: {
        body: [new Point(10, 11), new Point(10, 10)]
    },
}


const snakeGame = new SnakeGame(configGame)
