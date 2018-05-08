/**
 * Created by Umar on 1/25/2018.
 */
function decorate(target){
    target.lipstick = "pink"
}

@decorate
class Girl {
    
}

const girl = new Girl()
console.log(girl.lipstick)