
import{addition,subtraction,fun} from "./server"

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

    ret=fun(x,y);
    console.log("anonumus  is :",ret); 

}






