var firstName = 'John';
var lastName  = 'Watson';


var user = {
  firstName :"Peter",
  lastName : "Jack",
  getNameFn : function (firstName,lastName){
      firstName = this.firstName;
      lastName = this.lastName;
       return  firstName + " " + lastName
  }
};

var userBoundFn =user.getNameFn.bind(this);
//console.log(userBoundFn(firstName,lastName));

var myObj = {
    specialFn : function () {
        console.log("Specail Fn")
    },
    anotherSpecialFn : function () {
        console.log("Another Special Fn")
    },
    getTwoFnCall : function (cb) {
        cb()
    },
    render : function (){
        var self = this;
        this.getTwoFnCall(function () {
            self.anotherSpecialFn();
            self.specialFn()
        })
    }
};
//console.log(myObj.render());

var logger = {
  x : 0,
  updateCount : function () {
      this.x++;
      if(this.x % 2 == 0){
          document.querySelector('.img').setAttribute('src','./Website/images/bg3.jpg');
      }
      else{
          document.querySelector('.img').setAttribute('src','./Website/images/Responsive-Web-Design.png');
      }
      //console.log(this.x)
  }
};
document.querySelector('#change').addEventListener('click',logger.updateCount.bind(logger));

var timeoutObj = {
    sayHiAfterDelay : function () {
        setTimeout(function () {
            this.sayHi()
        }.bind(this),1000)
    },
    sayHi : function () {
        console.log("Hello")
    }
};
//timeoutObj.sayHiAfterDelay();

var thisObj = {
    handler : function () {
        console.log(this);
    }
};
document.querySelector('#change').addEventListener('click',thisObj.handler);
document.querySelector('#change').addEventListener('click',thisObj.handler.bind(thisObj));

function add (a,b,c){
    return a + b + c;
}
var intermediate = add.bind(null,2,3);

console.log(intermediate(1));

