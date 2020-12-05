"use strict";
//interface can also be used to define the structure of a function
var addn;
addn = function (n1, n2) {
    return n1 + n2;
};
console.log('ADD ' + addn(24, 2));
var GreetableTest = /** @class */ (function () {
    function GreetableTest(n, nick) {
        this.name = n;
        if (nick) {
            this.nickname = nick;
        }
        console.log(this.nickname);
    }
    GreetableTest.prototype.greet = function (phrase) {
        console.log(phrase + ' ' + this.name);
    };
    return GreetableTest;
}());
var user1;
user1 = {
    name: 'Aaron',
    age: 32,
    greet: function (phrase) {
        console.log(phrase + ' ' + this.name);
    }
};
user1.greet('Hi there, I am ');
var user2;
user2 = new GreetableTest('Carmela', 'Melai');
user2.greet('Hello there, ');
console.log(user2);
