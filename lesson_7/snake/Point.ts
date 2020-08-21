class Point {
    x: number;
    y: number;

    constructor(x: number, y: number) {
        this.x = x
        this.y = y
    }

    getPointElement(): Element | null {
        return document.querySelector(`tr:nth-child(${this.y}) td:nth-child(${this.x})`)
    }

    drawPointElement(className: string): void {
        this.getPointElement()?.classList.add(className)
    }

    cleanPointElement(): void {
        this.getPointElement()?.removeAttribute('class')
    }
}
