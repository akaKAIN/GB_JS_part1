"use strict";
const modal = document.getElementById('myModal');
const button = document.getElementById('button-addon2');
const greeting = document.getElementById('greeting');
if (modal) {
    modal.addEventListener('click', function () {
        modal.style.display = 'none';
    });
}
if (button && modal) {
    button.addEventListener('click', function () {
        if (greeting) {
            const inputText = document.getElementById('input-name').value;
            const userName = inputText ? inputText : "noname user";
            greeting.innerText = `Hello, ${userName}`;
        }
        modal.style.display = 'block';
    });
}
