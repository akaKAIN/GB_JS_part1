"use strict";
class SnakeGame {
    constructor(config) {
        this.config = config;
        this.snake = new Snake(this.config.snake.body);
        this.board = new Board(this.config.board);
        this.intervalID = undefined;
        this.init();
    }
    startGame() {
        this.setInterval(setInterval(this.iterationTick.bind(this), this.getSpeed()));
    }
    stopGame() {
        clearInterval(this.intervalID);
        this.setInterval(undefined);
    }
    init() {
        this.drawSnake();
        this.initEventListeners();
    }
    initEventListeners() {
        const start = document.querySelector('.start');
        const stop = document.querySelector('.stop');
        start === null || start === void 0 ? void 0 : start.addEventListener('click', this.startGame.bind(this));
        stop === null || stop === void 0 ? void 0 : stop.addEventListener('click', this.stopGame.bind(this));
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
        this.drawSnake();
        this.snake.doMove();
        this.drawSnake();
    }
    drawSnake() {
        this.snake.body.forEach(point => {
            this.drawCell(point, this.snake.element);
        });
    }
    drawCell(point, className) {
        var _a;
        (_a = point.getPointElement()) === null || _a === void 0 ? void 0 : _a.classList.add(className);
    }
    cleanCell(point) {
        const cell = point.getPointElement();
        if (cell && cell.hasAttribute('class')) {
            cell.removeAttribute('class');
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
};
const snakeGame = new SnakeGame(configGame);
