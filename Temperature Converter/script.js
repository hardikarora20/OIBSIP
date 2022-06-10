var num=0;
function conv(temp){
    var c=document.getElementById("input").value;
    document.getElementById(temp).classList.toggle("active");
    if(temp=="cel"){
        num=(c*9/5)+32;
    }
    if(temp=="fah"){
        num=(c-32)*5/9;
    }
    if(temp=="kel"){
        num+=273.15;
    }
    console.log(temp);
    console.log(document.getElementById(temp).classList);
    console.log(document.getElementById(temp).classList.add("active"));
}

function calc(){
    document.getElementById("output").setAttribute("value",num);
    console.log(num);
}

if(document.getElementById("toggle").classList.contains("active")){
    console.log("yeas");
}