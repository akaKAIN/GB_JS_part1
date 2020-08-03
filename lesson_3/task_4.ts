/*
3.4 Перед вами находится массив с продуктами, сегодня распродажа и вам нужно на каждый товар применить скидку
15%, можете использовать метод forEach https://mzl.la/1AOMMWX :
 */

interface IProduct {
    id: number,
    price: number
}

const products = [
    {
        id: 3,
        price: 200,
    },
    {
        id: 4,
        price: 900,
    },
    {
        id: 1,
        price: 1000,
    },
];

/**
 * Применение переданного значения скидки discount к свойству объектов product массива products
 * @param {object[]} products - массив объектов product.
 * @param {number} discount - размер скидки в %.
 * @return {object[]} products - массив объектов product с примененной к свойству price скидки.
 */
function applyDiscount(products: IProduct[], discount: number): IProduct[] {
    products.forEach(product => product.price = (1 - discount/100) * product.price)
    return products
}

console.log('\nЗадание №4')
console.log(applyDiscount(products, 15));
