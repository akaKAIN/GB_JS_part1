"use strict";
/*
4.1 Написать функцию, преобразующую число в объект. Передавая на вход число в диапазоне [0, 999],
мы должны получить на выходе объект, в котором в соответствующих свойствах описаны разряды числа:
- единицы (в свойстве units)
- десятки (в свойстве tens)
- сотни (в свойстве hundereds)
Например, для числа 45 мы должны получить следующий объект:
{
units: 5, //это единицы
tens: 4, //это десятки
hundreds: 0, //это сотни
}
Если число было передано вне [0, 999] диапазона, не целое число или вообще не число,
необходимо выдать соответствующее сообщение с помощью console.log и вернуть пустой объект.
 */
class NumberSplitter {
    constructor(someNumber) {
        if (isNaN(Number(someNumber))) {
            console.error("You insert NaN");
        }
        else if (someNumber < 0 || someNumber > 999) {
            console.error("You number is out of range [0, 999]");
        }
        else if (typeof (someNumber) === "number") {
            this.create(someNumber);
        }
        else {
            console.error("Some another happened");
        }
    }
    create(someNumber) {
        this.hundreds = Math.floor(someNumber / 100);
        someNumber %= 100;
        this.tens = Math.floor(someNumber / 10);
        this.units = someNumber % 10;
    }
}
const n = new NumberSplitter(45);
console.log(n);
const m = new NumberSplitter(4567);
console.log(m);
const s = new NumberSplitter("awd");
console.log(s);
