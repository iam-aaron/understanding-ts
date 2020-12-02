//aliases to prevent retyping the union type, literals, etc..
type Combinable = number | string;
type ConversionDescriptor = 'as-number' | 'as-text';

//union example, flexible combination that works with strings and numbers
function combine(
    input1: Combinable, 
    input2: number | string, 
    resultConversion: ConversionDescriptor //LITERAL type exact 2 possible values only for type safety
){
    let result;
    if (typeof input1 === 'number' && typeof input2=== 'number' || resultConversion === 'as-number'){
        result = +input1 + +input2; //adding plus (+) in the variable forced the type to become a number
    }else{
        result = input1.toString() + input2.toString();
    }
    // if (resultConversion === 'as-number') {
    //     return +result; //converts to number
    // } else {
    //     return result.toString();
    // }

    return result;
    
}

const combinedAges = combine(30, 26, 'as-number');
console.log(combinedAges);

const combinedStringAges = combine('30', '26', 'as-number');
console.log(combinedStringAges);

const combinedNames = combine('Max', 'Anna', 'as-text');
console.log(combinedNames);