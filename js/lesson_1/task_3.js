"use strict";
const a = 10 + 10 + "10"; // "2010"
/*
1. суммирование 10 + 10 = 20
2. конкатенация 20 + "10" = "2010"
 */
const b = 10 + "10" + 10; // "101010"
/*
1. конкатенация 10 + "10" = "1010"
2. конкатенация "1010" + 10 = "101010"
 */
const c = 10 + 10 + +"10"; // 30
/*
1. суммирование 10 + 10 = 20
2. приведение string to number через оператор сложения +"10" = 10
3. суммирование 20 + 10 = 30
 */
const d = 10 / -""; // -Infinity
/*
1. приведение string to number -"" = -0
2. деление 10 / -0 = - inf
 */
const e = 10 / +"2,5"; // NaN
/*
1. +"2,5" попытка приведения к типу number строки содержащей строковое представление двух чисел через запятую. = NaN
2. Любые мат. операции с NaN дают NaN: 10 / NaN = NaN
 */
const result = { a, b, c, d, e };
console.log(result);
