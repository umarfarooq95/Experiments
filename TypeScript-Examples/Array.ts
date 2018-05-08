/**
 * Created by Umar on 12/21/2017.
 */

enum Names {karthik,santhosh,p=1.2}
let a :number[] = [1,2,3];

let b:[string] = ["1","1"];

let c:Array<any> = [{name:Names[Names.karthik]},{name:Names[Names.santhosh]},{name:Names.p}];


console.log(c)

for(var k = 0;k<c.length;k++){
    console.log(c[k])
}
 