function add(n1: number, n2: number) {
    return n1 + n2;
}

function printResult(num: number): void { //does not need to state void, does not result anything
    console.log('Result: ' + num);
}

function addAndHandle(n1: number, n2: number, cb: (number: number) => void){
    const result =n1 + n2;
    cb(result);
}

printResult(add(5,12));

//let combineValues: Function; // strict to assign only to a Function

let combineValues: (a: number, b: number) => number; //made stricter to create a type function and strictly accept 2 number parameters and a number return type

combineValues = add; // assign function to a variable

console.log(combineValues(8, 8));

addAndHandle(10, 20, (result) => {
    console.log(result);
});