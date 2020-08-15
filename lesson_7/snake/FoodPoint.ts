class FoodPoint extends Point {
    element: string;

    constructor(x: number, y: number, element: string) {
        super(x, y);
        this.element = element
    }
}
