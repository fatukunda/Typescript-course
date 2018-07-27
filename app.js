"use strict";
let bankAccount = {
    money: 2000,
    deposit(value) {
        this.money += value;
    }
};
let myself = {
    name: "Frank",
    bankAccount: bankAccount,
    hobbies: ['Swimming', 'Dancing']
};
myself.bankAccount.deposit(3000);
console.log(myself);
