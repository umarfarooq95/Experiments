/**
 * Created by Umar on 12/19/2017.
 */

function PrintStuff(myDoc){
    this.documents = myDoc
}

PrintStuff.prototype.print = function () {
    console.log(this.documents)
};

var newObj = new PrintStuff("I am Obj");
var newObj2 = new PrintStuff("I am Obj");

newObj.print();
newObj2.print();



function Account() {

}
var myObj = new Object();
var Arr = new Array();
var UserAcc = new Account();

console.log(UserAcc);
console.log(Arr);
console.log(myObj);



function Plant(){
    this.country = "Mexico";
    this.organic = true;
}

Plant.prototype.showNameAndColor  = function(){
    console.log("I am a " + this.name + " and my color is " + this.color);
};

Plant.prototype.amIOrganic   = function(){
    if(this.organic){
        console.log('I am Organic')
    }
};

function Fruit(name,color) {
    this.name = name;
    this.color = color;
}

console.log(Fruit.prototype)

Fruit.prototype = new Plant();

var aBanana = new Fruit("Mango",'Yellow');

console.log(aBanana)







function Bear(type) {
    this.type = type
}
Bear.prototype.growl = function() {
    console.log('The ' + this.type + ' bear says grrr')
}

function Grizzly() {
    Bear.call(this, 'grizzly')
}
Grizzly.prototype = Object.create(Bear.prototype)
// Grizzly.prototype.growl = function() {
//   console.log('on the Grizzly.prototype')
// }

//var grizzly = new Bear('grizzly')

var grizzly = new Grizzly()
var polar = new Bear('polar')


//grizzly.growl = function() { console.log('override') }
console.log(grizzly.growl())