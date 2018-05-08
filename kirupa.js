//Block Scoping

function say (weight){
    var text;
    if(weight>100){
        text = "Greater";
       console.log(text)
    }
    else{
        text = "smaller";
        console.log(text)
    }
}
say(1000);

// Object Prototype

var parent = {};
parent.getName = function () {
    return this.firstName + " " + this.lastName
};

var funnyGuy = {};
funnyGuy.firstName = "OCoran";
funnyGuy.lastName = "Watson";
funnyGuy.__proto__ = parent;

//console.log(funnyGuy.getName());

//Object defineProperty
var person1 = {};
Object.defineProperty(person,'firstName',{
    value:'John',
    writable : true,
    enumerable : true,
    configurable : false
});
delete person1['firstName'];
console.log(person1);

//Object Prototype Chain
var person = Object.create(null);
person.fullname = function () {
    return this.firstName + " " + this.lastName
};
var man = Object.create(person);
man['sex']  = 'Male';

var yehuda = Object.create(man);
yehuda['firstName'] = 'John';
yehuda['lastName'] = 'Watson';

console.log(person);
console.log(man);
console.log(yehuda['fullname']());

