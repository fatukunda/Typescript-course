type bankAccount = { money: number, deposit: (value: number) => void}

let bankAccount: bankAccount = {
    money: 2000,
    deposit(value: number){
        this.money += value;
    }
}


let myself: { name: string, bankAccount: bankAccount, hobbies: string[]} = {
    name: "Frank",
    bankAccount: bankAccount,
    hobbies: ['Swimming', 'Dancing']

}

myself.bankAccount.deposit(3000);
console.log(myself);