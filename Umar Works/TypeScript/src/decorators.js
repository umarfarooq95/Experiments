/**
 * Created by Umar on 1/25/2018.
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function logged(target) {
    console.log(target());
}
var Person = (function () {
    function Person() {
        console.log("Hi");
    }
    Person = __decorate([
        logged
    ], Person);
    return Person;
}());
var Animal = (function () {
    function Animal() {
        console.log("Animal");
    }
    Animal = __decorate([
        logged
    ], Animal);
    return Animal;
}());
function printable(constructorFn) {
    constructorFn.prototype.print = function () {
        console.log(this);
    };
}
var Plant = (function () {
    function Plant() {
        this.name = "Green Plant";
    }
    Plant = __decorate([
        printable
    ], Plant);
    return Plant;
}());
var plant = new Plant();
plant.print();
function editable(target, propName, descriptor) {
    console.log("target " + target);
    console.log("propName " + propName);
    console.log("descriptor " + descriptor);
    descriptor.writable = false;
}
var Project = (function () {
    function Project(name) {
        this.projectName = name;
    }
    Project.prototype.calcBudget = function () {
        console.log(1000);
    };
    __decorate([
        editable
    ], Project.prototype, "calcBudget");
    return Project;
}());
var project = new Project("Super");
project.calcBudget();
project.calcBudget = function () {
    console.log(2000);
};
project.calcBudget();
//# sourceMappingURL=decorators.js.map