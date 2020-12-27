//intersection types

type Admin = {
    name: string;
    privileges: string[];
};

type Employee = {
    name: string;
    startDate: Date;
};

type ElevatedEmployee = Admin & Employee; //combined type -- intersections

const e1: ElevatedEmployee = {
    name: 'Aaron',
    privileges: ['create-server'],
    startDate: new Date()
}


type Combinable = string | number;
type Numeric = number | boolean;
type Universal = Combinable & Numeric; //string | number | boolean -- intersection

//FUNCTION OVERLOAD EXAMPLE
function combine(a: string, b: string): string;
function combine(a: number, b: number): number;
function combine(a: Combinable, b: Combinable){// example of type guard
    if (typeof a === 'string' || typeof b === 'string'){ //typeof is 1 example of type guard for supported types of JS
        return a.toString() + b.toString();
    }
    return a+b;

}

let res = combine('Mommy ','Daddy');
res.split(' '); // this is only possible because we did prepare function overload and TS interprets that this is possible due to the combinations that we created.

type UnknownEmployee = Employee | Admin;
function printEmployeeInfo(emp: UnknownEmployee) {
    console.log('Name: ' + emp.name);
    if ('privileges' in emp) { // checks if there's a privilege property in emp
        console.log('Privileges: ' + emp.privileges);
    }
    if ('startDate' in emp) { // checks if there's a privilege property in emp
        console.log('Start Date: ' + emp.startDate);
    }
    
}

printEmployeeInfo(e1);

printEmployeeInfo({name: 'Hanzo', startDate: new Date()});


class Car {
    drive() {
      console.log('Driving...');
    }
  }
  
  class Truck {
    drive() {
      console.log('Driving a truck...');
    }
  
    loadCargo(amount: number) {
      console.log('Loading cargo ...' + amount);
    }
  }
  
  type Vehicle = Car | Truck;
  
  const v1 = new Car();
  const v2 = new Truck();
  
  function useVehicle(vehicle: Vehicle) {
    vehicle.drive();
    if (vehicle instanceof Truck) { //another way for type guard only for classes, not applicable for interface
      vehicle.loadCargo(1000);
    }
  }
  
  useVehicle(v1);
  useVehicle(v2);


  interface Bird {
      type: 'Bird'; // this is just a literal type 
      flyingSpeed: number;
  }

  interface Horse {
      type: 'Horse'; // this is just a literal type 
      runningSpeed: number;
  }

  type Animal = Bird | Horse;

  //sample of discriminated union
  function moveAnimal(animal: Animal){
      let speed;
      switch (animal.type){
        case 'Bird':
            speed = animal.flyingSpeed;
            break;
        case 'Horse':
            speed = animal.runningSpeed;
            break;
            
      }

      console.log('Moving with speed: ' + speed);
  }

  moveAnimal({type: 'Bird', flyingSpeed: 10});


//   const userInputElement = <HTMLInputElement>document.getElementById('user-input')!; //one way of casting
// const userInputElement = document.getElementById('user-input')! as HTMLInputElement; // another way of casting
// userInputElement.value = 'TESTING INPUT FROM TS';

//Another Casting Example
const userInputElement = document.getElementById('user-input');
if(userInputElement) {
    (userInputElement as HTMLInputElement).value = 'Hello there';
}


interface ErrorContainer { // {email: 'Not a valid email', username: 'Must start with a character'}
    [prop: string]: string; //must have property name string and must have a value of string
}

const errorBag: ErrorContainer = {
    email: 'Not a valid email',
    username: 'Must start with a capital character!',
};


//EXAMPLE OF OPTIONAL CHAINING
const fetchUserData = {
    id: 'u1',
    name: 'Aaron',
    job: {title: 'CTO', description: 'in your dreams'}
}

console.log(fetchUserData?.job?.title); //prevents run time error, checks per level, secure way of preventing a run-time error, but might encounter a compile error in TSC depending on the config


// NULLISH COALESCING
let testNull = null; //or undefined
let storedData = testNull ?? 'DEFAULT'; //if value is null or undefined use DEFAULT
console.log(storedData);
testNull = ''; //or null or undefined
storedData = testNull || 'DEFAULT'; //if value is '', null or undefined use DEFAULT
console.log(storedData);