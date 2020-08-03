class Player {
    name: string;
    winSum: number = 0;

    constructor(name: string) {
        this.name = name
    }
}

class Question {
    questionText: string;
    answerList: Answer[];
    price: number

    constructor(questionText: string, answerList: Answer[], price: number) {
        this.questionText = questionText
        this.answerList = answerList
        this.price = price
    }

    askQuestion(): string {
        let table = `${this.questionText}\n`
        this.answerList.forEach(answer => {
            table += `${answer.option}. ${answer.answerText}\n`
        })
        return table
    }
}

class Answer {
    option: string;
    answerText: string;
    isItRight: boolean;

    constructor(option: string, answerText: string, isItRight: boolean = false) {
        this.option = option
        this.answerText = answerText
        this.isItRight = isItRight
    }

}

class GameMillionaire {
    round: number = 1;
    roundLimit: number = 12;
    mistakeCounter: number = 3;
    balance: number = 0;
    player: Player;
    listQuestions: Question[];

    constructor(player: Player, listQuestions: Question[]) {
        this.player = player
        this.listQuestions = listQuestions
    }

    greetingPlayer() {
        return `Hello ${this.player.name}. Welcome to game, and good luck!`
    }

    getRoundTitle() {
        return `Round #${this.round}. You balance is ${this.balance}`
    }

    startGame() {
        alert(this.greetingPlayer())
        this.listQuestions.forEach(question => {
            const titleRound = this.getRoundTitle()
            const textRound = question.askQuestion()
            const answer = question.answerList.find(a => a.isItRight)
            const playerAnswer = prompt(`${titleRound}\n${textRound}\nWhat is your answer?`)
            if (answer !== undefined && answer.isItRight && playerAnswer !== null) {
                if (playerAnswer === answer.option) {
                    this.balance += question.price
                    this.round++
                    alert("Great answer! You right.")
                } else if (playerAnswer !== answer.option) {
                    this.mistakeCounter--
                    alert(`Sorry, but you answer is wrong. Right is: ${answer.option}: ${answer.answerText}`)
                    if (this.mistakeCounter === 0) {
                        alert(`You lose. But your win: ${this.balance}$`)
                        return
                    }
                }
            }
        })
        alert(`Questions was over and you win ${this.balance}$!!!`)
    }
}
