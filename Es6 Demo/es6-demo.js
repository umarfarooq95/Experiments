var  obj = {
    name : "safi",
    getName : function(){

        console.log("inside getname " + this.name)
        setTimeout( ()=> {
            console.log(this.name)
        })

    }
}


obj.getName(); ///
 obj.getName.call({name : "gobi"});
 