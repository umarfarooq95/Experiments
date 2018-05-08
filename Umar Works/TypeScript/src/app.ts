/**
 * Created by Umar on 1/26/2018.
 */

class Person {
    name:string
    private type:string
    protected age:number = 22

    constructor(name:string, public userName:string) {
        this.name = name;
    }

    getAge() {
        console.log(this.age)
        this.setType("old")
    }

    private setType(type:string) {
        this.type = type
        console.log(this.type)
    }

}

const person = new Person("Max", "max");
console.log(person)
person.getAge()


class Umar extends Person {
    //name:string = "umar"

    constructor(username:string) {
        super("umar", username)
        console.log(this.age)
    }
}
const umar = new Umar("bb")
console.log(umar)

//singleton instance
class OnlyOne {
    private static instance:OnlyOne

    private constructor(public name:string) {
    }

    static getInstance() {
        return this.instance || (this.instance = new this("Instane"))
    }
}
console.log(OnlyOne.getInstance())


/*namespace*/

console.log(myMath.calculateCircumference(2));

const PI = 2.56;
console.log(PI);

