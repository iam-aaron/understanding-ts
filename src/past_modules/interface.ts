//interface can also be used to define the structure of a function

interface AddFn { //SAME AS type AddFn = (a: number, b: number) => number;
    (a: number, b: number): number;
}

let addn: AddFn;

addn = (n1: number, n2: number) => {
    return n1 + n2;
};

console.log('ADD ' + addn(24,2));


interface Person { //interface can be used for type checking and check if the object have the same structure
    name: string; // you can set readonly, but not private
    age: number;
    

    greet(phrase: string): void;
}

interface Greetable {
    readonly name: string;
    nickname?: string; // just add question mark at the end of the variable name
    greet(phrase: string): void;
}

class GreetableTest implements Greetable { //can only inherit one class but can implement multiple interface, just comma separated values
    name: string;
    nickname?: string;


    constructor(n: string, nick?: string) { // nick is optional
        this.name = n;
        if(nick){
            this.nickname = nick;
        }
        console.log(this.nickname);
    }

    greet(phrase: string) { //like abstract class, completely does not have complete methods.
        console.log(phrase + ' ' + this.name);
    }
}

let user1: Person;

user1 = {
    name: 'Aaron',
    age: 32,
    greet(phrase: string) {
        console.log(phrase + ' ' + this.name);
    }
};

user1.greet('Hi there, I am ');

let user2: Greetable;
user2 = new GreetableTest('Carmela', 'Melai');
user2.greet('Hello there, ');
console.log(user2);
