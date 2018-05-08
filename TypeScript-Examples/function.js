"use strict";
/**
 * Created by Umar on 12/20/2017.
 */
function sample(firstName, lastName) {
    if (lastName === void 0) { lastName = 'sd'; }
    console.log(firstName + lastName);
    return function () {
        console.log("sssssss");
        return 1;
    };
}
console.log(sample("Hello")());
