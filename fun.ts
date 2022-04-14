//  Addition of two number

function add(num1:number,num2:number)
{
    var result : number = 0
    result=num1+num2;
    console.log(result);
}

    var num1 : number = 11;
    var num2 : number = 15;
    add(num1,num2);
 //////////////////////////////////     Function    ////////////////////////////////////////////

function gun()
{
    console.log("Inside fun");
}

gun();

////////////////////////////////////////////////////////
/////////   addition of two number      ////////////////
/////////    positional argument   /////////////////////
////////////////////////////////////////////////////////

function addition(num1 : number,num2 : number)
{
    var ans : number = 0;
    ans = num1 + num2;
    console.log(ans);

}

var no1 : number = 10;
var no2 : number =12;
addition(no1,no2);


//////////////////////////////////////////////////////
////// return statment (subtraction of two no) ///////
/////////////  positional argument ///////////////////
//////////////////////////////////////////////////////

function subtraction(num1:number,num2:number)
{
    var result:number=0;
    result=num1-num2;
    return result;

}

var n1 : number =13;
var n2 : number = 5;
var ret : number=0;
ret = subtraction(n1,n2);
console.log(ret);

////////////////////////////////////////////////////////
/////////////    Default argument     //////////////////
////////////////////////////////////////////////////////

function area(Radius:number,PI:number=3.14)
{
    var res:number=0;
    res=PI*Radius*Radius;
    return res;
}

var no : number = 10.2;
var ret : number = 0;
ret=area(no,7.14);
console.log(ret);

ret=area(no);
console.log(ret);


/////////////////////////////////////////////////////////
////////////   optional argument     ///////////////////
////////////////////////////////////////////////////////

function mun(name : String, passport ? , nationality="Indian")
{
    console.log("Name is :",name);

    if(passport == undefined)
    {
        console.log("sorry id dont have passport");
    }
    else
    {
        console.log("passport number is :",passport);
    }
    console.log("nationality is :",nationality);
}

mun("Rushi", 4001);

/////////////////////////////////////////////////////////
/////////   variable number of argument    //////////////
/////////////////////////////////////////////////////////

function sun( ...data:number[])
{
    console.log(data);
}

//mun(10,20,30);
