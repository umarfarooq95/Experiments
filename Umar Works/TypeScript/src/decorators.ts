/**
 * Created by Umar on 1/25/2018.
 */

function logged(target:Function) {
    console.log(target())
}


@logged
class Person {
    constructor() {
        console.log("Hi")
    }
}

@logged
class Animal {
    constructor() {
        console.log("Animal")
    }
}


function printable(constructorFn:Function) {
    constructorFn.prototype.print = function () {
        console.log(this)
    }
}

@printable
class Plant {
    name = "Green Plant"
}

let plant = new Plant()

plant.print()

function editable(target:any, propName:string, descriptor:PropertyDescriptor) {
    console.log("target " + target)
    console.log("propName " + propName)
    console.log("descriptor " + descriptor);
    descriptor.writable = false; 

}

class Project {
    projectName:string;

    constructor(name:string) {
        this.projectName = name;
    }

    @editable
    calcBudget() {
        console.log(1000)
    }
}

const project = new Project("Super");
project.calcBudget()
project.calcBudget = function () {
    console.log(2000)
}
project.calcBudget()
