//  Addition of two number
function add(num1, num2) {
    var result = 0;
    result = num1 + num2;
    console.log(result);
}
var num1 = 11;
var num2 = 15;
add(num1, num2);
//////////////////////////////////     Function    ////////////////////////////////////////////
function gun() {
    console.log("Inside fun");
}
gun();
////////////////////////////////////////////////////////
/////////   addition of two number      ////////////////
/////////    positional argument   /////////////////////
////////////////////////////////////////////////////////
function addition(num1, num2) {
    var ans = 0;
    ans = num1 + num2;
    console.log(ans);
}
var no1 = 10;
var no2 = 12;
addition(no1, no2);
//////////////////////////////////////////////////////
////// return statment (subtraction of two no) ///////
/////////////  positional argument ///////////////////
//////////////////////////////////////////////////////
function subtraction(num1, num2) {
    var result = 0;
    result = num1 - num2;
    return result;
}
var n1 = 13;
var n2 = 5;
var ret = 0;
ret = subtraction(n1, n2);
console.log(ret);
////////////////////////////////////////////////////////
/////////////    Default argument     //////////////////
////////////////////////////////////////////////////////
function area(Radius, PI) {
    if (PI === void 0) { PI = 3.14; }
    var res = 0;
    res = PI * Radius * Radius;
    return res;
}
var no = 10.2;
var ret = 0;
ret = area(no, 7.14);
console.log(ret);
ret = area(no);
console.log(ret);
/////////////////////////////////////////////////////////
////////////   optional argument     ///////////////////
////////////////////////////////////////////////////////
function mun(name, passport, nationality) {
    if (nationality === void 0) { nationality = "Indian"; }
    console.log("Name is :", name);
    if (passport == undefined) {
        console.log("sorry id dont have passport");
    }
    else {
        console.log("passport number is :", passport);
    }
    console.log("nationality is :", nationality);
}
mun("Rushi", 4001);
/////////////////////////////////////////////////////////
/////////   variable number of argument    //////////////
/////////////////////////////////////////////////////////
function sun() {
    var data = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        data[_i] = arguments[_i];
    }
    console.log(data);
}
mun(10, 20, 30, 40, 50);
