var userInput; //we can store any value without getting error, unknown is more restrictive than any
var userName;
userInput = 5;
userInput = 'Aaron'; //these are okay since we set it to unknown
if (typeof userInput === 'string') { //just add extra check to skip issue
    userName = userInput;
}
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
generateError('An error occured!', 500);
