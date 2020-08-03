"use strict";
/*
  5 Перед вами находится массив с продуктами в интернет-магазине. Вам нужно:
    1 Получить все товары, у которых есть фотографии, можете использовать метод filter https://mzl.la/2qROQkT
    2 Отсортируйте товары по цене (от низкой цены к высокой), можете использовать метод sort
    https://mzl.la/2Y79hbZ , как устроен sort можно посмотреть например здесь https://youtu.be/O2pusOp0gC0

 */
const newProducts = [
    {
        id: 3,
        price: 127,
        photos: [
            "1.jpg",
            "2.jpg",
        ]
    },
    {
        id: 5,
        price: 499,
        photos: []
    },
    {
        id: 10,
        price: 26,
        photos: [
            "3.jpg"
        ]
    },
    {
        id: 8,
        price: 78
    },
];
/**
 * Валидация в объекте product свойства photos. Проверяется наличие непустого массива со строками (photo).
 * @param {object} product - объект содержащий данные о продукте.
 * @return {boolean} - результат валидации
 */
function validateProductPhotos(product) {
    return product.hasOwnProperty('photos') && product.photos !== undefined && product.photos.length > 0;
}
/**
 * Сортировка массива с объектами product по свойству price (по возрастанию)
 * @param {object} a - объект массива под индексом n
 * @param {object} b - объект массива под индексом n+1
 */
function sortProductByPrice(a, b) {
    if (a.price > b.price) {
        return 1;
    }
    else if (a.price < b.price) {
        return -1;
    }
    else {
        return 0;
    }
}
function filterProducts(products) {
    const validProducts = products.filter(prod => validateProductPhotos(prod));
    return validProducts.sort(sortProductByPrice);
}
console.log('\nЗадание №5');
console.log('Массив товаров с валидными фотографиями:\n', filterProducts(rawProducts));
