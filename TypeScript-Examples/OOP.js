"use strict";
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
var Point = /** @class */ (function () {
    function Point(x, y) {
        this.x = 0;
        this.y = 0;
        this.x = x;
        this.y = y;
    }
    Point.prototype.transform = function (newX, newY) {
        this.x = newX;
        this.y = newY;
    };
    Point.getIdx = function (idx) {
        return Point.List[idx];
    };
    Point.List = [];
    return Point;
}());
