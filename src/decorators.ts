//decorator
function Logger(logString: string) { //convention for decorators, they use an uppercase letter for the first letter of the function name
    console.log('LOGGER FACTORY');
    return function(constructor: Function) {
        console.log(logString);
        console.log(constructor);
    };
}

function WithTemplate(template: string, hookID: string) {
    console.log('TEMPLATE FACTORY');
    return function<T extends { new (...args: any[]): {name: string} }> (originalConstructor: T) {
        return class extends originalConstructor {
            constructor(..._: any[]) {
                super(); //save everything from original class but added logic after
                console.log('Rendering Template');
                const hookEl = document.getElementById(hookID);
                if (hookEl) {
                    hookEl.innerHTML = template;
                    hookEl.querySelector('h1')!.textContent = this.name;
                }                
            }
        }
    }
}

//decorators are executed when your classes are defined not when instantiated
// execute order is bottom up
@Logger('LOGGING - PERSON') //this points to your decorator
@WithTemplate('<h1>My Person Object</h1>','app')
class Person {
    name = 'Aaron';

    constructor() {
        console.log('Creating person object...');
    }

}

const pers = new Person();

console.log(pers);


// AUTO BIND DECORATORS

function Autobind(_: any, _2: string | Symbol | number, descriptor: PropertyDescriptor){
    const originalMethod = descriptor.value;
    const adjDescriptor: PropertyDescriptor = {
        configurable: true,
        enumerable: false,
        get() {
            const boundFn = originalMethod.bind(this); // this will refer to the object that defined the getter/method
            return boundFn;
        }
    };
    return adjDescriptor;
}

class Printer {
    message = 'This works!';

    @Autobind
    showMessage() {
        console.log(this.message);
    }
}

const p = new Printer()
const button = document.querySelector('button')!;
button.addEventListener('click', p.showMessage);

// --- Other ways on including decorators
// for property
function Log(target: any, propertyName: string | Symbol) {
    console.log('Property decorator!');
    console.log(target, propertyName);

}

//for accessors
function Log2(target: any, name: string, descriptor: PropertyDescriptor){
    console.log('Accessor decorator!');
    console.log(target);
    console.log(name);
    console.log(descriptor);
}

//method decorators
function Log3(target: any, name: string | Symbol, descriptor: PropertyDescriptor){
    console.log('Method decorator!');
    console.log(target);
    console.log(name);
    console.log(descriptor);

}

//parameter decorators
function Log4(target: any, nameOfMethod: string | Symbol, positionOfArgument: number) {
    console.log('Parameter decorator!');
    console.log(target);
    console.log(nameOfMethod);
    console.log(positionOfArgument);

}

class Product {
    @Log // you can add a decorator to a property
    title: string;
    private _price: number;

    @Log2
    set price (val: number) {
        if (val > 0) {
            this._price = val;
        } else {
            throw new Error('Invalid price - should be positive!');
        }
    }

    constructor (t:string, p: number) {
        this.title = t;
        this._price = p;
    }

    @Log3
    getPriceWithTax (@Log4 tax: number) {
        return this._price * (1 + tax);
    }
}



// DECORATORS FOR VALIDATION

interface ValidatorConfig {
    [property: string]: {
        [validateableProp: string]: string[] //['required', 'positive']
    }
}

const registeredValidators: ValidatorConfig = {};

function Required(target: any, propName: string) {
    registeredValidators[target.constructor.name] = {
        ...registeredValidators[target.constructor.name],
        [propName]: ['required']
    };
}

function PositiveNumber(target: any, propName: string) {
    registeredValidators[target.constructor.name] = {
        ...registeredValidators[target.constructor.name],
        [propName]: ['positive']
    };
}

function validate(obj: any) {
    const objValidatorConfig = registeredValidators[obj.constructor.name];
    if (!objValidatorConfig){
        return true;
    }
    let isValid = true;
    for (const prop in objValidatorConfig) {
        for (const validator of objValidatorConfig[prop]) {
            switch (validator) {
                case 'required':
                    isValid = isValid && !!obj[prop];
                    break;
                case 'positive':
                    isValid = isValid && obj[prop] > 0;
                    break;
            }
        }
    }
    return isValid;
}

class Course {
    @Required
    title: string;
    @PositiveNumber
    price: number;

    constructor(t: string, p: number) {
        this.title = t;
        this.price = p;
    }
}

const courseForm =  document.querySelector('form')!;
courseForm.addEventListener('submit', event => {
    event.preventDefault();
    const titleEl = document.getElementById('title') as HTMLInputElement;
    const priceEl = document.getElementById('price') as HTMLInputElement;

    const title = titleEl.value;
    const price = +priceEl.value; //+ to convert it to number

    const createdCourse = new Course(title, price);

    if (!validate(createdCourse)){
        alert('Invalid input, please try again!');
        return;
    }
    console.log(createdCourse);

});
