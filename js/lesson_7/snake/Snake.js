"use strict";
class Snake extends SnakeMove {
    constructor(body) {
        super();
        this.body = body;
        this.len = body.length;
        this.element = 'snake';
    }
    doMove() {
        this.body = this.doStepIteration(this.body);
    }
}
