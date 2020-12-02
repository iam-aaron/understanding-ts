//explicit type assignment for objects
// const person: { 
//     name: string;
//     age: number;
//     hobbies: string[];
//     role: [number, string]; //this is a tuple
// } = { 
//     name: 'Aaron',
//     age: 32,
//     hobbies: ['Sports', 'Cooking'], //this is an array
//     role: [2, 'author'],
// };

// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;

enum Role {ADMIN, READ_ONLY, AUTHOR}; //this assigns labels to numbers, starts with 0 if not set, you can also set values explicitly like enum Role {ADMIN = 5, READ_ONLY, AUTHOR} starts with 5 then others will auto increment if not assigned, you can also set STRINGS as values or mixed enum Role {ADMIN = 'ADMIN', READ_ONLY = 100, AUTHOR = 'AUTHOR'};

const person = {  
    name: 'Aaron',
    age: 32,
    hobbies: ['Sports', 'Cooking'], //this is an array
    role: Role.ADMIN,
};

let favoriteActivities: string[]; //use any[] to create any type of elements within the array
favoriteActivities = ['Sport'];

console.log(person.name);

for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
}

if (person.role === Role.ADMIN){
    console.log('is admin');
}
