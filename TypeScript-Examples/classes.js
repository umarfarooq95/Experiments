"use strict";
/**
 * Created by Umar on 12/22/2017.
 */
var Person1 = /** @class */ (function () {
    function Person1(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
        console.log('person');
    }
    Object.defineProperty(Person1.prototype, "age", {
        get: function () {
            return this._age;
        },
        set: function (age) {
            this._age = age;
        },
        enumerable: true,
        configurable: true
    });
    return Person1;
}());
var david = new Person1('d', 'a');
david.age = 12;
console.log(david);
