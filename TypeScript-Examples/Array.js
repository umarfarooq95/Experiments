"use strict";
/**
 * Created by Umar on 12/21/2017.
 */
var Names;
(function (Names) {
    Names[Names["karthik"] = 0] = "karthik";
    Names[Names["santhosh"] = 1] = "santhosh";
    Names[Names["p"] = 1.2] = "p";
})(Names || (Names = {}));
var a = [1, 2, 3];
var b = ["1", "1"];
var c = [{ name: Names[Names.karthik] }, { name: Names[Names.santhosh] }, { name: Names.p }];
console.log(c);
for (var k = 0; k < c.length; k++) {
    console.log(c[k]);
}
