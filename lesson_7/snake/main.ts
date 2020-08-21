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
    food: Food;
    snake: Snake | null = null;
    menu: Menu;
    intervalID: number | undefined;


    constructor(config: IConfig) {
        this.config = config
        this.board = new Board(this.config.board)
        this.menu = new Menu(this.board.selector)
        this.food = new Food(this.board.col, this.board.row)
        this.intervalID = undefined
        this.initSnake()
        this.init()
    }

    protected startGame() {
        if (this.getInterval() === undefined) {
            this.setInterval(setInterval(this.iterationTick.bind(this), this.getSpeed()))
        }
    }

    protected stopGame() {
        clearInterval(this.intervalID)
        this.setInterval(undefined)
    }

    protected restartGame() {
        this.stopGame()
        this.config.snake.body = [new Point(10, 10), new Point(10, 11), new Point(10, 12)]
        this.deleteSnake()
        this.initSnake()
    }

    init() {
        this.initEventListeners()
        this.food.createFoodSet(1)
        this.drawGameObjects()
    }

    initSnake() {
        this.snake = new Snake(this.config.snake.body)
        this.drawGameObjects()
    }

    initEventListeners() {
        const start = document.querySelector('.start')
        const stop = document.querySelector('.stop')
        const restart = document.querySelector('.restart')

        start?.addEventListener('click', this.startGame.bind(this))
        stop?.addEventListener('click', this.stopGame.bind(this))
        restart?.addEventListener('click', this.restartGame.bind(this))

        document.addEventListener('keydown', function (e) {
            if (e.code === 'D') {
                console.log(this)
            }
        })
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
        this.drawGameObjects()
        this.snake?.doMove()
        this.drawGameObjects()
    }

    drawGameObjects() {
        this.drawSnake()
        this.food.drawFood()
    }

    drawSnake(): void {
        if (this.snake) {
            this.snake.body.forEach(point => {
                if (this.snake) {
                    point.drawPointElement(this.snake.element)
                }
            })
        }
    }

    deleteSnake() {
        if (this.snake) {
            this.snake.delTail(this.snake.body, true)
        }
    }
}


const configGame = {
    speed: 200,
    board: {
        bordSelector: '#board',
        rowSize: 20,
        colSize: 20,
    },
    snake: {
        body: [new Point(10, 10), new Point(10, 11), new Point(10, 12)]
    },
}


const snakeGame = new SnakeGame(configGame)
