"use strict";
class SnakeGame {
    constructor(config) {
        this.snake = null;
        this.config = config;
        this.board = new Board(this.config.board);
        this.menu = new Menu(this.board.selector);
        this.food = new Food(this.board.col, this.board.row);
        this.intervalID = undefined;
        this.initSnake();
        this.init();
    }
    startGame() {
        if (this.getInterval() === undefined) {
            this.setInterval(setInterval(this.iterationTick.bind(this), this.getSpeed()));
        }
    }
    stopGame() {
        clearInterval(this.intervalID);
        this.setInterval(undefined);
    }
    restartGame() {
        this.stopGame();
        this.config.snake.body = [new Point(10, 10), new Point(10, 11), new Point(10, 12)];
        this.deleteSnake();
        this.initSnake();
    }
    init() {
        this.initEventListeners();
        this.food.createFoodSet(1);
        this.drawGameObjects();
    }
    initSnake() {
        this.snake = new Snake(this.config.snake.body);
        this.drawGameObjects();
    }
    initEventListeners() {
        const start = document.querySelector('.start');
        const stop = document.querySelector('.stop');
        const restart = document.querySelector('.restart');
        start === null || start === void 0 ? void 0 : start.addEventListener('click', this.startGame.bind(this));
        stop === null || stop === void 0 ? void 0 : stop.addEventListener('click', this.stopGame.bind(this));
        restart === null || restart === void 0 ? void 0 : restart.addEventListener('click', this.restartGame.bind(this));
        document.addEventListener('keydown', function (e) {
            if (e.code === 'D') {
                console.log(this);
            }
        });
    }
    setInterval(id) {
        this.intervalID = id;
    }
    getInterval() {
        return this.intervalID;
    }
    setSpeed(speed) {
        this.config.speed = speed;
    }
    getSpeed() {
        return this.config.speed;
    }
    iterationTick() {
        var _a;
        this.drawGameObjects();
        (_a = this.snake) === null || _a === void 0 ? void 0 : _a.doMove();
        this.drawGameObjects();
    }
    drawGameObjects() {
        this.drawSnake();
        this.food.drawFood();
    }
    drawSnake() {
        if (this.snake) {
            this.snake.body.forEach(point => {
                if (this.snake) {
                    point.drawPointElement(this.snake.element);
                }
            });
        }
    }
    deleteSnake() {
        if (this.snake) {
            this.snake.delTail(this.snake.body, true);
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
};
const snakeGame = new SnakeGame(configGame);
