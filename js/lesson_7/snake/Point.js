"use strict";
class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    getPointElement() {
        return document.querySelector(`tr:nth-child(${this.y}) td:nth-child(${this.x})`);
    }
}
