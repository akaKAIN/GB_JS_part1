"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const task_4_1 = require("./task_4");
function Calc(a, b, operation) {
    switch (operation) {
        case 'sum':
            return task_4_1.default.sum(a, b);
        case 'sub':
            return task_4_1.default.sub(a, b);
        case 'mul':
            return task_4_1.default.mul(a, b);
        case 'div':
            return task_4_1.default.div(a, b);
        default:
            return 'Wrong operator';
    }
}
console.log(Calc(3, 4, 'sum'));
