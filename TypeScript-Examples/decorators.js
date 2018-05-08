"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Created by Umar on 1/25/2018.
 */
function decorate(target) {
    target.prototype.lipstick = "pink";
    console.log(target);
}
function methodDecorate(value) {
    return function (target, propName, descriptor) {
        /*decorator*/
        console.log(target, propName, descriptor);
        descriptor.writable = value;
    };
}
var Girl = /** @class */ (function () {
    function Girl(name) {
        this.targetName = name;
    }
    Girl.prototype.getName = function () {
        console.log(this.targetName);
    };
    __decorate([
        methodDecorate(false)
    ], Girl.prototype, "getName", null);
    Girl = __decorate([
        decorate
    ], Girl);
    return Girl;
}());
var girl = new Girl("A");
girl.getName();
girl.getName = function () {
    console.log("B");
};
girl.getName();
