/**
 * Created by Umar on 12/26/2017.
 */

/*function Point (x,y){
    this.x = x
    this.y = y
}

Point.prototype.transform = function(newX,newY){
    this.x = newX;
    this.y = newY;
}*/

class Point {

    x= 0;y=0
    constructor(x:number,y:number){
        this.x = x;
        this.y = y;
    }

    transform(newX:number,newY:number){
        this.x = newX;
        this.y = newY;
    }

    static List = []

    static getIdx(idx){
        return Point.List[idx]
    }
}
