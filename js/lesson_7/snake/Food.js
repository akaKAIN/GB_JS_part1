"use strict";
class Food extends BoardElements {
    constructor(boardCol, boardRow) {
        super();
        this.activeFoodPoints = [];
        this.foodList = ['food-fire', 'food-water', 'food-wood'];
        this.boardColSize = boardCol;
        this.boardRowSize = boardRow;
    }
    createFoodSet(count) {
        for (let i = 0; i < count; i++) {
            this.foodList.forEach(foodType => {
                const element = this.get(foodType);
                const position = this.getRandomEmptyFoodPoint(foodType);
                if (element) {
                    this.addFood(position);
                }
            });
        }
    }
    drawFood() {
        this.activeFoodPoints.forEach(food => {
            food.drawPointElement(food.element);
        });
    }
    addFood(point) {
        this.activeFoodPoints.push(point);
    }
    delFood(point) {
        const ind = this.getFoodIndex(point);
        this.activeFoodPoints.splice(ind, 1);
    }
    getFoodIndex(point) {
        return this.activeFoodPoints.indexOf(point);
    }
    getRandomEmptyFoodPoint(element) {
        while (true) {
            const x = Math.floor(Math.random() * this.boardColSize);
            const y = Math.floor(Math.random() * this.boardRowSize);
            const freshFoodPoint = new FoodPoint(x, y, element);
            if (freshFoodPoint.getPointElement() !== null) {
                return freshFoodPoint;
            }
        }
    }
}
