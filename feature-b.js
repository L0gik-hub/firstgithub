// arrow function
let percent1
let percent2
let percentage

document.getElementById("button").onclick=function(){
    percent1=Number(document.getElementById("inputNum").value)
    percent2=Number(document.getElementById("inputDen").value)
    percentage=percent1/percent2 *100
    document.getElementById("show").innerHTML=percentage
    
}

