
// class decclaration
class Arithmatic
{
    //characteristic
    no1 : number;
    no2 : number;
    ans : number;

    constructor(x:number,y:number)
    {
        this.no1=x;
        this.no2=y;
        this.ans=0;
    }

    //behavier 
    Addition()
    {
        this.ans = this.no1 + this.no2;
        return this.ans;
    }

    subtraction()
    {
        this.ans = this.no1 - this.no2;
        return this.ans;
    }
}

var ret : number=0;
var obj1 = new Arithmatic(10,11);
var obj2 = new Arithmatic(5,6);

ret = obj1.Addition();
console.log("Addition is :" + ret);

ret = obj2.subtraction();
console.log("subtraction is :" + ret);
