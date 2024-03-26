"use strict";
function add(num1, num2) {
    return num1 + num2;
}
add(2, 3);
const addArrow = (num1, num2) => num1 + num2;
addArrow(10, 20);
const arr = [1, 2, 3, 4];
const nuwArr = arr.map((ele) => ele * ele);
const person = {
    name: "Ms",
    balance: 5,
    addBlance(money) {
        console.log(`My New Balance is ${this.balance + money}`);
    },
};
