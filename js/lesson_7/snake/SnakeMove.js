"use strict";
class SnakeMove {
    constructor() {
        this.directionSets = ['up', 'right', 'down', 'left', 'up', 'right', 'down', 'left'];
        this.directions = ['up', 'right', 'down', 'left'];
        this.keyBoards = ['ArrowUp', 'ArrowRight', 'ArrowDown', 'ArrowLeft'];
        this.currentDirection = 'down';
        this.directionMap = this.fillDirectionMap();
        this.init();
    }
    doStepIteration(snakeBody) {
        const head = this.getHead(snakeBody);
        const nextCell = this.calculateNewPositionPoint(head);
        if (this.validateStep(nextCell)) {
            this.makeStep(snakeBody);
        } // else { TODO: false result logic
    }
    init() {
        this.initKeyDirectionEventListener();
    }
    initKeyDirectionEventListener() {
        document.addEventListener('keydown', this.directionHandler.bind(this));
    }
    fillDirectionMap() {
        const map = new Map();
        for (let i = 0; i < 4; i++) {
            map.set(this.keyBoards[i], this.directions[i]);
        }
        return map;
    }
    directionHandler(e) {
        if (this.keyBoards.includes(e.key)) {
            e.preventDefault();
            const direction = this.directionMap.get(e.key);
            if (direction !== undefined && this.validDirections(direction).includes(this.currentDirection)) {
                this.currentDirection = direction;
            }
        }
    }
    validDirections(newDirection) {
        let forwardInd = this.directionSets.indexOf(newDirection);
        if (forwardInd === 0) {
            forwardInd = 4;
        }
        return this.directionSets.slice(forwardInd - 1, forwardInd + 2);
    }
    // TODO: Добавлить проверку, для избежания выхода за пределы поля
    calculateNewPositionPoint(point) {
        let x = point.x;
        let y = point.y;
        switch (this.currentDirection) {
            case 'up':
                y--;
                break;
            case 'right':
                x++;
                break;
            case 'down':
                y++;
                break;
            case 'left':
                x--;
        }
        return new Point(x, y);
    }
    getCellClass(point) {
        const forwardCellEl = this.calculateNewPositionPoint(point).getPointElement();
        if (forwardCellEl) {
            return forwardCellEl.getAttribute('class');
        }
        return null;
    }
    getHead(snakeBody) {
        return snakeBody.slice(-1)[0];
    }
    addHead(snakeBody) {
        const head = this.getHead(snakeBody);
        const newCell = this.calculateNewPositionPoint(head);
        snakeBody.push(newCell);
    }
    delTail(snakeBody, isTotal = false) {
        if (isTotal) {
            snakeBody.forEach(partOfTail => partOfTail.cleanPointElement());
            snakeBody = [];
        }
        const tail = snakeBody.shift();
        tail === null || tail === void 0 ? void 0 : tail.cleanPointElement();
    }
    validateStep(nextPoint) {
        switch (this.getCellClass(nextPoint)) {
            case undefined:
            case null:
                return true;
            case 'snake':
                return false;
            default:
                return false;
        }
    }
    makeStep(snakeBody) {
        this.addHead(snakeBody);
        this.delTail(snakeBody);
    }
}
