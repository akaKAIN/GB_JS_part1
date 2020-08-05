class Slider {
    mainImage: Element;
    body: Element[];

    constructor(products: Element[]) {
        this.body = products
        this.mainImage = products[0]
    }

    /**
     * Метод присваивает переменой класса mainImage следующий элемент массива
     * в переменную body или нулевой, если массив закончился.
     */
    nextImage(): void {
        const index = this.body.indexOf(this.mainImage)
        if (index === -1) {
            return
        }
        const validIndex = index === this.body.length - 1 ? 0 : index + 1
        this.mainImage = this.body[validIndex]
    }

    /**
     * Метод присваивает переменой класса mainImage предыдущий элемент массива
     * в переменную body или последний, если массив закончился.
     */
    previousImage(): void {
        const index = this.body.indexOf(this.mainImage)
        if (index === -1) {
            return
        }
        const validIndex = index === 0 ? this.body.length - 1 : index - 1
        this.mainImage = this.body[validIndex]
    }



}
