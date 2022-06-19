var colors=[{"back":"#354f52","backli": "#52796f","li":"#c8d5b9","darker":"#c8d5b9a9","nav":"#253638"},
            {"back":"#261C2C","backli": "#3E2C41","li":"#bf7fa0","darker":"#bf7fa0","nav":"#1b141f"}]
var index=1;
// localStorage.clear();
window.onload = function() {
    if(localStorage.getItem("lastname")==null){}
    else{
        const ch=localStorage.getItem("lastname");
        document.getElementsByTagName("ul")[1].innerHTML+=ch;
        console.log(ch);
        index=parseInt(localStorage.getItem("in"));
    }
    setTimeout(function(){ 
        document.getElementById("load").style.opacity=0;
    }, 500);
  };

function ad(){
    if(localStorage.getItem("lastname")==null){}
    else{
        const ch=localStorage.getItem("lastname");
        document.getElementsByTagName("ul")[1].innerHTML+=ch;
        console.log(ch);
    }
}
function add(){
    let text=document.getElementsByTagName("input")[0].value;
    if(text==""){
    }
    else{
        document.getElementsByTagName("ul")[1].innerHTML+='<div id="'+index+'"><li><div id="text">'+text+'</div><img class="trash"  id="'+index+'" onclick="remove(id)" src="images/trash.png"></li></div>';
        document.getElementsByTagName("input")[0].value="";
        // console.log(text);
        index++;
        localStorage.setItem("lastname", document.getElementsByTagName("ul")[1].innerHTML);
        localStorage.setItem("in",parseInt(index));
    }
}

function remove(id){
    // document.getElementsByClassName("list")[0].classList.toggle("active");
    document.getElementsByTagName("li")[id].classList.add("active");
    localStorage.setItem("lastname", document.getElementsByTagName("ul")[1].innerHTML);
    clear();
    // document.getElementById("1").classList.toggle("active");
    // console.log(document.getElementsByTagName("ul")[1].contains="Do this do");
    setTimeout(function(){ 
        document.getElementsByTagName("li")[id].style.display="none"; 
    }, 300);
}

document.addEventListener('keypress', (event) => {
    var name = event.key;
    if(name=="Enter"){
        add();
    }
  }, false);
var once=1;
var i=1;
function he(){
    if(document.getElementsByTagName("p")[0].classList.contains("color")){
        i=0;
        document.getElementsByTagName("p")[0].classList.remove("color");
    }
    else{
        i=1;
        while(once==1){
        setTimeout(function(){ 
            document.getElementsByTagName("p")[0].innerHTML="Made with 💖 by Hardik";
        }, 1500);
        document.getElementsByTagName("p")[0].innerHTML="Easter Egg Found! 🥚";
        once++;
        }
        document.getElementsByTagName("p")[0].classList.add("color");
    }
    for(var k=0;k<3;k++){
        document.getElementsByTagName("meta")[k].content=colors[i].nav;
    }
    document.documentElement.style.setProperty("--back", (colors[i].back));
    document.documentElement.style.setProperty("--backli",(colors[i].backli));
    document.documentElement.style.setProperty("--li",(colors[i].li));
    document.documentElement.style.setProperty("--darker",(colors[i].darker));
}

function clear(){
    const count = document.querySelectorAll('li');
    console.log(count.length);
    let con=0;
    for(k=1;k<count.length;k++){
        if(document.getElementsByTagName("li")[k].classList.contains("active")){}
        else{
            con++;
        }
    }
    if(con==0){
        localStorage.clear();
    }
}