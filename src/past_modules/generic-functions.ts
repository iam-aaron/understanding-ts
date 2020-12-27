//Creating a generic function

function merge<T extends object, U extends object>(objA: T, objB: U){ //<T, U> this notation makes it possible for us to call mergedObj.name/age, "extends object" sets constraints and makes sure that we are passing an object and not just any type
    return Object.assign(objA, objB);
}
// console.log(merge({name:'Aaron'}, {age:30}));

const mergedOBj = merge({name:'Aaron', hobbies: ['Sports']}, {age:30})
console.log(mergedOBj);


//Sample of creating an object type for generic function
interface Lengthy {
    length: number;
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string]{
    let descriptionText = 'Got no value.';
    if (element.length === 1) {
        descriptionText = 'Got 1 element.';
    } else if (element.length > 1) {
        descriptionText = 'Got ' + element.length + ' elements';
    }
    return [element,descriptionText];
}

console.log(countAndDescribe([]));

//Sample of keyof constraint
function extractAndConvert<T extends Object, U extends keyof T>(obj: T, key: U) { //U extends keyof T, informing  key is any key ob object T, ensures correct structure
    return 'Value: '+obj[key];
}

console.log(extractAndConvert({name: 'Aaron'}, 'name'));