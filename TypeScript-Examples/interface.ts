/**
 * Created by Umar on 1/2/2018.
 */

interface IPerson {
    firstName:string;
    lastName:string;
    age:number;
    ssn?:string;
}

class Customer {
    constructor(person:IPerson) {

    }
}

let aPerson:IPerson = {
    firstName: "John",
    lastName: "Smith",
    age: 1,
}


let person = new Customer(aPerson);

console.log(person)