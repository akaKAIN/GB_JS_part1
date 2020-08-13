class Point {
    x: number;
    y: number;

    constructor(x: number, y: number) {
        this.x = x
        this.y = y
    }

    getPointElement() {
        return document.querySelector(`tr:nth-child(${this.y}) td:nth-child(${this.x})`)
    }
}
