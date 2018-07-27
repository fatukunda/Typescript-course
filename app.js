"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var bankAccount = {
    money: 2000,
    deposit: function (value) {
        this.money += value;
    }
};
var myself = {
    name: "Frank",
    bankAccount: bankAccount,
    hobbies: ['Swimming', 'Dancing']
};
myself.bankAccount.deposit(3000);
console.log(myself);
//ES6 REVIEW .....................................................................................................
//Exercise 1 -  Arrow Function
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
//CLASSES ---------------------------------------------------------------------------------------------------
// Exercise 1 - TypeScript Class
var Car = /** @class */ (function () {
    function Car(name) {
        this.name = name;
        this.acceleration = 2;
    }
    Car.prototype.honk = function () {
        console.log('Tooooooooooooooot!');
    };
    Car.prototype.accelerate = function (speed) {
        this.acceleration + speed;
    };
    return Car;
}());
var car = new Car("BMW");
car.honk();
console.log(car.acceleration);
car.accelerate(10);
console.log(car.acceleration);
//Inheritance ------------------------------------------------------------------------------------------
// Exercise 2 - Two objects, based on each other ...
var baseObject = /** @class */ (function () {
    function baseObject(width, length) {
        if (width === void 0) { width = 2; }
        if (length === void 0) { length = 4; }
        this.width = width;
        this.length = length;
    }
    return baseObject;
}());
var rectangle = /** @class */ (function (_super) {
    __extends(rectangle, _super);
    function rectangle(width, length) {
        return _super.call(this) || this;
    }
    rectangle.prototype.calcSize = function () {
        return this.width * this.length;
    };
    return rectangle;
}(baseObject));
var newRectangle = new rectangle(5, 2);
console.log(newRectangle.calcSize());
// Exercise 3 - Getters and setters
var Person = /** @class */ (function () {
    function Person(_firstName) {
        if (_firstName === void 0) { _firstName = 'Frank'; }
        this._firstName = _firstName;
    }
    Object.defineProperty(Person.prototype, "firstName", {
        get: function () {
            return this._firstName;
        },
        set: function (value) {
            if (value.length > 3) {
                this._firstName = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    return Person;
}());
var person = new Person();
console.log(person.firstName);
person.firstName = "Ma";
console.log(person.firstName);
person.firstName = "Maximilian";
console.log(person.firstName);
