"use strict";
class Snake extends SnakeMove {
    constructor(body) {
        super();
        this.body = body;
        this.len = body.length;
        this.element = 'snake';
    }
    doMove() {
        this.doStepIteration(this.body);
        this.calculateLength();
    }
    calculateLength() {
        this.len = this.body.length;
    }
}
