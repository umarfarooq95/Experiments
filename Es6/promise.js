/**
 * Created by Umar on 1/11/2018.
 */


var d = new Promise((res, rej) => {

        setTimeout(()=>{
    if(false){
        res("hello")
    }
    else{
        rej("err")
    }
},2000)


})

d.then((data)=>console.log(data));
d.catch((err)=>console.log(err));