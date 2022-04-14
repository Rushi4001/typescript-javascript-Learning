
 function addition(no1:number , no2:number):number
{
    var ans : number=0;
    ans=no1+no2;
    return ans;
}

function subtraction(no1:number , no2:number):number
{
    var ans : number=0;
    ans=no1-no2;
    return ans;
}

main()

function main()
{
    var x:number=10;
    var y:number=20;
    var ret:number=0;

    //addition
    ret=addition(x,y);
    console.log("sum  is :",ret); 

    //subtraction
    ret=subtraction(x,y);
    console.log("subtraction  is :",ret); 
}