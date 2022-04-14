// class decclaration
var Arithmatic = /** @class */ (function () {
    function Arithmatic(x, y) {
        this.no1 = x;
        this.no2 = y;
        this.ans = 0;
    }
    //behavier 
    Arithmatic.prototype.Addition = function () {
        this.ans = this.no1 + this.no2;
        return this.ans;
    };
    Arithmatic.prototype.subtraction = function () {
        this.ans = this.no1 - this.no2;
        return this.ans;
    };
    return Arithmatic;
}());
var ret = 0;
var obj1 = new Arithmatic(10, 11);
var obj2 = new Arithmatic(5, 6);
ret = obj1.Addition();
console.log("Addition is :" + ret);
ret = obj2.subtraction();
console.log("subtraction is :" + ret);
