"use strict";
class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    getPointElement() {
        return document.querySelector(`tr:nth-child(${this.y}) td:nth-child(${this.x})`);
    }
    drawPointElement(className) {
        var _a;
        (_a = this.getPointElement()) === null || _a === void 0 ? void 0 : _a.classList.add(className);
    }
    cleanPointElement() {
        var _a;
        (_a = this.getPointElement()) === null || _a === void 0 ? void 0 : _a.removeAttribute('class');
    }
}
