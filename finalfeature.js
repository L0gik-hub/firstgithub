let a; 
let b;
let c;

// a= Number(window.prompt("enter side a:"))
// b= Number(window.prompt("enter side b:"))

// c=Math.sqrt((a**2) + (b**2))

// console.log("side c=", c)

document.getElementById("submitButton").onclick= function(){
    a= Number(document.getElementById("aTextBox").value)
    b= Number(document.getElementById("bTextBox").value)
    c=Math.sqrt((a**2) + (b**2))

    document.getElementById("cLabel").innerHTML="side c = " +c

}