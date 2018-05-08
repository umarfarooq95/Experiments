"use strict";
/**
 * Created by Umar on 1/2/2018.
 */
var Customer = /** @class */ (function () {
    function Customer(person) {
    }
    return Customer;
}());
var aPerson = {
    firstName: "John",
    lastName: "Smith",
    age: 1,
};
var person = new Customer(aPerson);
console.log(person);
