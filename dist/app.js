"use strict";
//intersection types
var _a;
var e1 = {
    name: 'Aaron',
    privileges: ['create-server'],
    startDate: new Date()
};
function combine(a, b) {
    if (typeof a === 'string' || typeof b === 'string') { //typeof is 1 example of type guard for supported types of JS
        return a.toString() + b.toString();
    }
    return a + b;
}
var res = combine('Mommy ', 'Daddy');
res.split(' '); // this is only possible because we did prepare function overload and TS interprets that this is possible due to the combinations that we created.
function printEmployeeInfo(emp) {
    console.log('Name: ' + emp.name);
    if ('privileges' in emp) { // checks if there's a privilege property in emp
        console.log('Privileges: ' + emp.privileges);
    }
    if ('startDate' in emp) { // checks if there's a privilege property in emp
        console.log('Start Date: ' + emp.startDate);
    }
}
printEmployeeInfo(e1);
printEmployeeInfo({ name: 'Hanzo', startDate: new Date() });
var Car = /** @class */ (function () {
    function Car() {
    }
    Car.prototype.drive = function () {
        console.log('Driving...');
    };
    return Car;
}());
var Truck = /** @class */ (function () {
    function Truck() {
    }
    Truck.prototype.drive = function () {
        console.log('Driving a truck...');
    };
    Truck.prototype.loadCargo = function (amount) {
        console.log('Loading cargo ...' + amount);
    };
    return Truck;
}());
var v1 = new Car();
var v2 = new Truck();
function useVehicle(vehicle) {
    vehicle.drive();
    if (vehicle instanceof Truck) { //another way for type guard only for classes, not applicable for interface
        vehicle.loadCargo(1000);
    }
}
useVehicle(v1);
useVehicle(v2);
//sample of discriminated union
function moveAnimal(animal) {
    var speed;
    switch (animal.type) {
        case 'Bird':
            speed = animal.flyingSpeed;
            break;
        case 'Horse':
            speed = animal.runningSpeed;
            break;
    }
    console.log('Moving with speed: ' + speed);
}
moveAnimal({ type: 'Bird', flyingSpeed: 10 });
//   const userInputElement = <HTMLInputElement>document.getElementById('user-input')!; //one way of casting
// const userInputElement = document.getElementById('user-input')! as HTMLInputElement; // another way of casting
// userInputElement.value = 'TESTING INPUT FROM TS';
//Another Casting Example
var userInputElement = document.getElementById('user-input');
if (userInputElement) {
    userInputElement.value = 'Hello there';
}
var errorBag = {
    email: 'Not a valid email',
    username: 'Must start with a capital character!',
};
//EXAMPLE OF OPTIONAL CHAINING
var fetchUserData = {
    id: 'u1',
    name: 'Aaron',
};
console.log((_a = fetchUserData === null || fetchUserData === void 0 ? void 0 : fetchUserData.job) === null || _a === void 0 ? void 0 : _a.title); //prevents run time error, checks per level, secure way of preventing a run-time error, but might encounter a compile error in TSC depending on the config
// NULLISH COALESCING
var testNull = null; //or undefined
var storedData = testNull !== null && testNull !== void 0 ? testNull : 'DEFAULT'; //if value is null or undefined use DEFAULT
console.log(storedData);
testNull = ''; //or null or undefined
storedData = testNull || 'DEFAULT'; //if value is '', null or undefined use DEFAULT
console.log(storedData);
