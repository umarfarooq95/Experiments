/**
 * Created by Umar on 12/20/2017.
 */

function sample(firstName:string, lastName:string = 'sd'):any {
    console.log(firstName + lastName);
    return function () {
        console.log("sssssss");
        return 1
    }
}

console.log(sample("Hello")());