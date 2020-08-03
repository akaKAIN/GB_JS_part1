"use strict";
class Player {
    constructor(name) {
        this.winSum = 0;
        this.name = name;
    }
}
class Question {
    constructor(questionText, answerList, price) {
        this.questionText = questionText;
        this.answerList = answerList;
        this.price = price;
    }
    askQuestion() {
        let table = `${this.questionText}\n`;
        this.answerList.forEach(answer => {
            table += `${answer.option}. ${answer.answerText}\n`;
        });
        return table;
    }
}
class Answer {
    constructor(option, answerText, isItRight = false) {
        this.option = option;
        this.answerText = answerText;
        this.isItRight = isItRight;
    }
}
class GameMillionaire {
    constructor(player, listQuestions) {
        this.round = 1;
        this.roundLimit = 12;
        this.mistakeCounter = 3;
        this.balance = 0;
        this.player = player;
        this.listQuestions = listQuestions;
    }
    greetingPlayer() {
        return `Hello ${this.player.name}. Welcome to game, and good luck!`;
    }
    getRoundTitle() {
        return `Round #${this.round}. You balance is ${this.balance}`;
    }
    startGame() {
        alert(this.greetingPlayer());
        this.listQuestions.forEach(question => {
            const titleRound = this.getRoundTitle();
            const textRound = question.askQuestion();
            const answer = question.answerList.find(a => a.isItRight);
            const playerAnswer = prompt(`${titleRound}\n${textRound}\nWhat is your answer?`);
            if (answer !== undefined && answer.isItRight && playerAnswer !== null) {
                if (playerAnswer === answer.option) {
                    this.balance += question.price;
                    this.round++;
                    alert("Great answer! You right.");
                }
                else if (playerAnswer !== answer.option) {
                    this.mistakeCounter--;
                    alert(`Sorry, but you answer is wrong. Right is: ${answer.option}: ${answer.answerText}`);
                    if (this.mistakeCounter === 0) {
                        alert(`You lose. But your win: ${this.balance}$`);
                        return;
                    }
                }
            }
        });
        alert(`Questions was over and you win ${this.balance}$!!!`);
    }
}
