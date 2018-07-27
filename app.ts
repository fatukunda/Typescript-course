//TYPES.........................................................................................................
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

//ES6 REVIEW .....................................................................................................
//Exercise 1 -  Arrow Function
const double = (value:number) => value * 2;
console.log(double(10));
// Exercise 2 - provide some default values...
const greet = (name = 'Frank') => {
    console.log('Hello ' + name);
};
greet();
greet("Sara");
// Exercise 3 - Spread operator
const numbers = [-3, 33, 38, 5];
console.log(Math.min(...numbers));
// Exercise 4 - Rest operator ...
const newArray = [55, 20];
newArray.push(...newArray);
console.log(newArray);
// Exercise 5 - Array restructuring
const testResults = [3.89, 2.99, 1.38];
const [result1, result2, result3] = testResults;
console.log(result1, result2, result3);
// Exercise 6 - Object restructuring
const scientist = { firstName: "Will", experience: 12 };
const { firstName, experience } = scientist;
console.log(firstName, experience);

//CLASSES ---------------------------------------------------------------------------------------------------
// Exercise 1 - TypeScript Class
class Car {
    acceleration: number = 2;
    constructor(public name: string){
        
    }
    honk(){
        console.log('Tooooooooooooooot!')
    }
    accelerate(speed: number){
        this.acceleration + speed;
    }
}
const car = new Car("BMW");
car.honk();
console.log(car.acceleration);
car.accelerate(10);
console.log(car.acceleration);

//Inheritance ------------------------------------------------------------------------------------------

// Exercise 2 - Two objects, based on each other ...
class baseObject {
    constructor(public width: number = 2, public length: number = 4) {   
    }
}

class rectangle extends baseObject {
    constructor(width: number, length: number) {
        super()
        
    }
    calcSize(){
        return this.width* this.length;
    }
}
const newRectangle = new rectangle(5,2);
console.log(newRectangle.calcSize());

// Exercise 3 - Getters and setters
class Person {
    constructor(private _firstName: string = 'Frank') {   
    }
    
    get firstName() : string {
        return this._firstName;
    }
    
    set firstName(value : string) {
        if (value.length>3) {
            this._firstName = value
        }
    }
    
    
}
const person = new Person();
console.log(person.firstName);
person.firstName = "Ma";
console.log(person.firstName);
person.firstName = "Maximilian";
console.log(person.firstName);

