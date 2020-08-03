interface ISignOperation {
    sum: number
    mul: number
}
/*
- если a и b положительные, вывести их разность (ноль можно считать положительным числом);
- если а и b отрицательные, вывести их произведение;
- * (этот пункт по сложнее, делайте по желанию) если а и b разных знаков, вывести их сумму;
 */
class TwiceNumbers {
    a: number;
    b: number;
    result: number;
    operation: string = ''

    constructor() {
        this.a = this.GetRandomInt()
        this.b = this.GetRandomInt()
        this.result = this.CalcResultAtr()
    }

    protected GetRandomInt(): number {
        //Возвращает случайное число в диапазоне [-99..99]
        return Math.floor(Math.random() * 100) - Math.floor(Math.random() * 100)
    }

    private SumSign(): ISignOperation {
        // Возвращает объектб атрибуты которого сумма и произведение результатов работы функции Math.sign для "a" & "b"
        return {sum: Math.sign(this.a) + Math.sign(this.b), mul: Math.sign(this.a) * Math.sign(this.b)}
    }

    protected CalcResultAtr(): number {
        // Выполнение условий исходя из знаков сгенерированных атрибутов
        const result: ISignOperation = this.SumSign()
        switch (true) {
            case result.sum === -2:
                // оба числа отрицательные
                this.operation = 'умножаем'
                return this.a * this.b
            case result.sum === 0 && result.mul === 0:
                // оба числа равны нулю
                this.operation = 'оба числа равны 0. Че хотим - то и делаем (кроме деления)'
                return 0
            case result.sum === 1 && result.mul === 0:
                // одно число положительное, второе равно 0 (ноль по условию - положительный)
            case result.sum === 2:
                // оба числа положительные
                this.operation = 'вычитаем'
                return this.a - this.b
            default:
                // знаки чисел - различны
                this.operation = 'суммируем'
                return this.a + this.b
        }
    }
}


const myObj = new TwiceNumbers()
console.log(myObj)



