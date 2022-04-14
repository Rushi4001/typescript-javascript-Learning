function addition(no1, no2) {
    var ans = 0;
    ans = no1 + no2;
    return ans;
}
function subtraction(no1, no2) {
    var ans = 0;
    ans = no1 - no2;
    return ans;
}
main();
function main() {
    var x = 10;
    var y = 20;
    var ret = 0;
    //addition
    ret = addition(x, y);
    console.log("sum  is :", ret);
    //subtraction
    ret = subtraction(x, y);
    console.log("subtraction  is :", ret);
}
