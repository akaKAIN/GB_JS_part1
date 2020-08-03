/*
3.7 Нарисовать горку с помощью console.log (используя цикл for), как показано на рисунке,
только у вашей горки должно быть 20 рядов, а не 5:
x
xx
xxx
xxxx
xxxxx
 */

/**
 * Функция вывода в консоль "горки"
 * @param hillSize - размер (колв-во строк) горки
 */
function drewHill(hillSize: number): void {
    for (let i=1; i<=hillSize; i++) {
        console.log('x'.repeat(i));
    }
}

console.log('\nЗадание №7')
drewHill(20);
