class Food extends BoardElements{
    boardColSize: number;
    boardRowSize: number;
    activeFoodPoints: FoodPoint[] = [];
    foodList: string[] = ['food-fire', 'food-water', 'food-wood'];

    constructor(boardCol: number, boardRow: number) {
        super()
        this.boardColSize = boardCol
        this.boardRowSize = boardRow
    }

    createFoodSet(count: number) {
        for (let i = 0; i < count; i++) {
            this.foodList.forEach( foodType => {
                const element = this.get(foodType)
                const position = this.getRandomEmptyFoodPoint(foodType)
                if (element) {
                    this.addFood(position)
                }
            })
        }
    }

    drawFood() {
        this.activeFoodPoints.forEach( food => {
            food.drawPointElement(food.element)
        })
    }

    private addFood(point: FoodPoint): void {
        this.activeFoodPoints.push(point)
    }

    private delFood(point: FoodPoint) {
        const ind = this.getFoodIndex(point)
        this.activeFoodPoints.splice(ind, 1)
    }

    private getFoodIndex(point: FoodPoint): number {
        return this.activeFoodPoints.indexOf(point)
    }

    private getRandomEmptyFoodPoint(element: string): FoodPoint {
        while (true) {
            const x = Math.floor(Math.random() * this.boardColSize)
            const y = Math.floor(Math.random() * this.boardRowSize)
            const freshFoodPoint = new FoodPoint(x, y, element)
            if (freshFoodPoint.getPointElement() !== null) {
                return freshFoodPoint
            }
        }
    }
}
