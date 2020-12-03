"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var userName = 'Aaron';
// userName = 'Aaron';
// let age = 30;
// age = 29;
// function add(a: number, b: number) {
//   let result;
//   result = a + b;
//   return result;
// }
// if (age > 20) {
//   let isOld = true;
// }
// console.log(isOld);
// console.log(result);
// const add = (a: number, b: number = 1) => a + b;
// const printOutput: (a: number | string) => void = output => console.log(output);
// const button = document.querySelector('button');
// if (button) {
//   button.addEventListener('click', event => console.log(event));
// }
// printOutput(add(5));
var hobbies = ['Sports', 'Cooking'];
var activeHobbies = ['Hiking'];
activeHobbies.push.apply(activeHobbies, hobbies);
var person = {
    firstName: 'Aaron',
    age: 30
};
var copiedPerson = __assign({}, person);
var add = function () {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    return numbers.reduce(function (curResult, curValue, curIndex) {
        console.log('(Current Result: ' + curResult + ')(Current Value: ' + curValue + ')(Current Index: ' + curIndex + ')');
        return curResult + curValue;
    }, 0);
};
var addedNumbers = add(5, 10, 2, 3.7);
console.log(addedNumbers);
// const hobby1 = hobbies[0];
// const hobby2 = hobbies[1];
var hobby1 = hobbies[0], hobby2 = hobbies[1]; //array destructuring same as previous 2 lines
console.log(hobbies, hobby1, hobby2);
var uname = person.firstName, age = person.age; //firstName: uname this is not type assignment, this is overriding the variable name
console.log(uname, age, person);
