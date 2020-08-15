"use strict";
class BoardElements extends BaseElement {
    constructor() {
        super();
        this.boardObjects = new Map();
        this.fillGameObjects();
    }
    get(key) {
        return this.boardObjects.get(key);
    }
    set(key, val) {
        this.boardObjects.set(key, val);
    }
    fillGameObjects() {
        this.set('snake', 'snake');
        this.set('food-fire', 'fire');
        this.set('food-water', 'water');
        this.set('food-wood', 'wood');
    }
}
