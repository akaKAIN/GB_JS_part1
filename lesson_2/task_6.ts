class Wallet {
    balance: number;
    history: number[];

    constructor(amount = 0) {
        this.balance = amount
        this.history = amount === 0 ? [] : [amount]
    }

    getBalanceDeclaration() {
        // Получение строки с состоянием счета клиента
        const suffix = this.getSuffix(this.balance)
        return `У Вас на счету ${this.balance} рубл${suffix}.`;
    }

    getOperationDeclaration(amount: number): string {
        // Получение строки с информацией о действиях со счетом
        const suffix = this.getSuffix(amount)
        const operation = amount > 0 ? 'увеличился' : 'уменьшился'
        return `Ваш счет ${operation} на ${Math.abs(amount)} рубл${suffix}.`
    }

    showBalance() {
        // Вывод в консоль строки с состоянием счета клиента
        console.log(this.getBalanceDeclaration())
    }

    showOperation() {
        // Вывод в консоль строки с информацией о последнем действии со счетом
        const lastOperation = this.history.slice(-1)
        console.log(this.getOperationDeclaration(lastOperation[0]))
    }



    protected getSuffix(amount: number): string {
        // Получение падежного окончания для д.е. РФ
        const rest = Math.abs(amount) % 10
        switch (true) {
            case rest === 1:
                return 'ь'
            case rest >= 2 && rest <= 4:
                return 'я'
            case rest === 0 || rest >= 5 && rest <= 9:
                return 'ей'
            default:
                return 'ясиков'
        }
    }

    add(money: number) {
        // Метод пополнения счета
        if (money > 0) {
            this.balance += money
            this.history.push(money)
            this.showOperation()
        }
    }

    cashOut(money: number) {
        // Метод снятия со счета
        if (money > 0 && this.balance >= money) {
            this.balance -= money
            this.history.push(-money)
            this.showOperation()
        }
    }
}

const w = new Wallet(51)
w.showBalance()
console.log('\nДобавляем 435 р.:')
w.add(435)
w.showBalance()
console.log('\nВычитаем 132 р.:')
w.cashOut(132)
w.showBalance()
console.log(w)
