"use strict";
//TYPES.........................................................................................................
// type bankAccount = { money: number, deposit: (value: number) => void}
// let bankAccount: bankAccount = {
//     money: 2000,
//     deposit(value: number){
//         this.money += value;
//     }
// }
// let myself: { name: string, bankAccount: bankAccount, hobbies: string[]} = {
//     name: "Frank",
//     bankAccount: bankAccount,
//     hobbies: ['Swimming', 'Dancing']
// }
// myself.bankAccount.deposit(3000);
// console.log(myself);
//ES6 REVIEW .....................................................................................................
// Exercise 1 -  Arrow Function
var double = function (value) { return value * 2; };
console.log(double(10));
// Exercise 2 - provide some default values...
var greet = function (name) {
    if (name === void 0) { name = 'Frank'; }
    console.log('Hello ' + name);
};
greet();
greet("Sara");
// Exercise 3 - Spread operator
var numbers = [-3, 33, 38, 5];
console.log(Math.min.apply(Math, numbers));
// Exercise 4 - Rest operator ...
var newArray = [55, 20];
newArray.push.apply(newArray, newArray);
console.log(newArray);
// Exercise 5 - Array restructuring
var testResults = [3.89, 2.99, 1.38];
var result1 = testResults[0], result2 = testResults[1], result3 = testResults[2];
console.log(result1, result2, result3);
// Exercise 6 - Object restructuring
var scientist = { firstName: "Will", experience: 12 };
var firstName = scientist.firstName, experience = scientist.experience;
console.log(firstName, experience);
