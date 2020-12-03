let userInput: unknown; //we can store any value without getting error, unknown is more restrictive than any
let userName: string;

userInput = 5;
userInput = 'Aaron'; //these are okay since we set it to unknown

if(typeof userInput === 'string') { //just add extra check to skip issue
    userName = userInput;
}

function generateError(message: string, code: number){ // this never return anything NEVER is returned, infinite loop also never returns never used for throw/crashes the app
    throw {message: message, errorCode: code};
}

generateError('An error occured!', 500);