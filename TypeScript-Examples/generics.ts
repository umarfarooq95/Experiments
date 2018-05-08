/**
 * Created by Umar on 1/2/2018.
 */

/*Allow To Specify a type Constraint to
 * Class
 * Instance Member or static member
 * Functions
 */

class Person {
    name:string
}

class Employee extends Person {
    employeeName:string
}


class Animal {
    name:string
    breed:string
}


let workers:Array<Person> = [];

workers[0] = new Person();
workers[1] = new Employee();
workers[2] = new Animal();

console.log(workers)


class List<T> {

    private items:T[]

    constructor() {
        this.items = []
    }

    add(item:T):void {
        this.items.push(item)
    }

    get(index:number):T {
        return this.items[index]
    }
}


let stringList = new List<string>()

stringList.add("a")
stringList.add("b")


let numList = new List<number>()

numList.add(2)
numList.add(2)


function identity<T>(arg: T): T {
    console.log(arg)
    return arg;
}

console.log(identity("j"))
