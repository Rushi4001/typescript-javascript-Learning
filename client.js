"use strict";
exports.__esModule = true;
var server_1 = require("./server");
main();
function main() {
    var x = 10;
    var y = 20;
    var ret = 0;
    //addition
    ret = server_1.addition(x, y);
    console.log("sum  is :", ret);
    //subtraction
    ret = server_1.subtraction(x, y);
    console.log("subtraction  is :", ret);
    ret = server_1.fun(x, y);
    console.log("anonumus  is :", ret);
}
