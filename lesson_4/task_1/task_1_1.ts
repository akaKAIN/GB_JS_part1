/*
Сделайте в стиле es5, а затем в стиле es6 (по аналогии из урока), конструктор Product, который
принимает параметры name и price, сохраните их как свойства объекта. Также объекты типа Product
должны иметь метод make25PercentDiscount, который будет уменьшать цену в объекте на 25%.
 */

class Product {
    name: string;
    price: number;

    constructor(name: string, price: number) {
        this.name = name
        this.price = price
    }

    make25PercentDiscount(): void {
        this.price = this.price - this.price/4
    }
}


const milk = new Product('Milk', 120)
console.log(milk)
milk.make25PercentDiscount()
console.log(milk)
