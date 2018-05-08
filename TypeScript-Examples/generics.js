"use strict";
/**
 * Created by Umar on 1/2/2018.
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/*Allow To Specify a type Constraint to
 * Class
 * Instance Member or static member
 * Functions
 */
var Person = /** @class */ (function () {
    function Person() {
    }
    return Person;
}());
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Employee;
}(Person));
var Animal = /** @class */ (function () {
    function Animal() {
    }
    return Animal;
}());
var workers = [];
workers[0] = new Person();
workers[1] = new Employee();
workers[2] = new Animal();
console.log(workers);
var List = /** @class */ (function () {
    function List() {
        this.items = [];
    }
    List.prototype.add = function (item) {
        this.items.push(item);
    };
    List.prototype.get = function (index) {
        return this.items[index];
    };
    return List;
}());
var stringList = new List();
stringList.add("a");
stringList.add("b");
var numList = new List();
numList.add(2);
numList.add(2);
function identity(arg) {
    console.log(arg);
    return arg;
}
console.log(identity("j"));
