import BaseCalc from './task_4'

function Calc(a: number, b: number, operation: string): number | string {
    switch (operation) {
        case 'sum':
            return BaseCalc.sum(a, b)
        case 'sub':
            return BaseCalc.sub(a, b)
        case 'mul':
            return BaseCalc.mul(a, b)
        case 'div':
            return BaseCalc.div(a, b)
        default:
            return 'Wrong operator'
    }
}

console.log(Calc(3, 4, 'sum'))
