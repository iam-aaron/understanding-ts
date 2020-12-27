interface CourseGoal {
    title: string;
    description: string;
    completeUntil: Date;
}

//Partial type, helps you set generic objects with incomplete values 
function createCourseGoal(
    title: string,
    description: string,
    date: Date
): CourseGoal {
    let courseGoal: Partial<CourseGoal> = {};
    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.completeUntil = date;
    return courseGoal as CourseGoal;
}

//Readonly type
const names: Readonly<string[]> = ['Aaron', 'Carmela']; //Forbids from popping or adding items or elements.
// names.push('Hanzo'); this will not work
// names.pop(); this will not work