"use strict";
function tempToFahrenheit(tempCelsius) {
    return (9 / 5) * tempCelsius + 32;
}
function main() {
    while (true) {
        const celsius = Number(prompt("Enter Celsius temperature:"));
        if (isNaN(celsius)) {
            alert("Wrong entry. Try again.");
        }
        else {
            alert(tempToFahrenheit(celsius) + "'F");
            break;
        }
    }
}
main();
