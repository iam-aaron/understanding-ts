abstract class Department { //if you have at least 1 abstract method, make it to abstract class
    // private readonly id: string; // you can skip double initialization by directly declaring them in the parameter of the constructor
    // private name: string;
    protected employees: string[] = [];

    constructor(protected readonly id: string, public name: string) { //readonly, once set, value can't be changed
        // this.name = id; // you can skip double initialization by directly declaring them in the parameter of the constructor
        // this.name = n;
    }

    abstract describe(this: Department): void;

    addEmployee(employee: string){
        this.employees.push(employee);
    }

    printEmployeeInformation(){
        console.log(this.employees.length);
        console.log(this.employees);
    }
}

class ITDepartment extends Department {
    admins: string[];
    constructor(id: string, admins: string[]) {
        super(id, 'IT');
        this.admins = admins;
    }

    describe (){
        console.log('IT Department - ID: ' + this.id);
    }
}

class AccountingDepartment extends Department {
    private lastReport: string;

    get mostRecentReport() {
        if(this.lastReport) {
            return this.lastReport;
        }
        throw new Error('No Report Found.');
    }

    set mostRecentReport(value: string) {
        if (!value) {
            throw new Error('Please pass in a valid value!');
        }
        this.addReport(value);
    }

    constructor(id: string, private reports: string[]) {
        super(id, 'Accounting');
        this.lastReport = reports[0];
    }

    describe() {
        console.log('Accounting Department - ID: ' + this.id);
    }

    addEmployee(name: string) {
        if (name === 'Aaron') {
            return;
        }
        this.employees.push(name);
    }

    addReport(text: string) {
        this.reports.push(text);
        this.lastReport = text;
    }

    printReports(){
        console.log(this.reports);
    }
}

// const accounting = new Department('id1','Accounting');

// accounting.addEmployee('Daddy');
// accounting.addEmployee('Mommy');

// accounting.describe();
// accounting.printEmployeeInformation();

const it = new ITDepartment('d1', ['Aaron']);

it.addEmployee('Daddy');
it.addEmployee('Mommy');

it.describe();
it.name = 'NEW NAME';
it.printEmployeeInformation();

console.log(it);

const accounting = new AccountingDepartment('d2', []);
accounting.mostRecentReport = 'Test Report';
accounting.addReport('Something went wrong..');
console.log(accounting.mostRecentReport);
accounting.addEmployee('Aaron');
accounting.addEmployee('Carmela');
accounting.printReports();
accounting.printEmployeeInformation();

accounting.describe();


// const accountingCopy = { name: 'DUMMY', describe: accounting.describe };
// accountingCopy.describe();

//SINGLETON CODE NOT IMPLEMENTED