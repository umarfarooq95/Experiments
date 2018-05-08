/**
 * Created by Umar on 12/22/2017.
 */

class Person1 {
    private _age:number;
    constructor (public firstname:string, public lastname:string){

        console.log('person')
    }
    get age():number{
        return this._age
    }
    set age(age:number){
         this._age =age
    }
}

var david = new Person1('d','a');
david.age = 12;
console.log(david)