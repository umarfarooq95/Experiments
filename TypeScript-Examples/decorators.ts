/**
 * Created by Umar on 1/25/2018.
 */
function decorate(target){
    target.prototype.lipstick = "pink"
    console.log(target)
}

function methodDecorate(value:boolean){/*decorator factory*/
    return function (target,propName,descriptor) {
        /*decorator*/
        console.log(target,propName,descriptor);
        descriptor.writable = value
    }
}

@decorate
class Girl {
    targetName:string;

    constructor (name:string){
        this.targetName = name
    }
    @methodDecorate(false)
    getName(){
        console.log(this.targetName)
    }
}
const girl = new Girl("A");

girl.getName()
girl.getName = function (){
   console.log("B")
}
girl.getName()
