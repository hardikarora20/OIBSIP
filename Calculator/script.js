
function tap(id){
console.log(document.getElementById("disptext").innerHTML);
console.log(id);
document.getElementById("disptext").innerHTML+=id;
}

function clr(){
    document.getElementById("disptext").innerHTML="";   
}

function calc(){
    var num=document.getElementById("disptext").innerHTML;
    document.getElementById("disptext").innerHTML=eval(num).toFixed(6);
}

function back(){
    var num=document.getElementById("disptext").innerHTML;
    var num2=num.substring(0,num.length-1);
    document.getElementById("disptext").innerHTML=num2;
}