var index=1;
function add(){
    let text=document.getElementsByTagName("input")[0].value;
    if(text==""){
    }
    else{
        
    document.getElementsByTagName("ul")[1].innerHTML+='<div id="'+index+'"><li><div id="text">'+text+'</div><img class="trash"  id="'+index+'" onclick="remove(id)" src="images/trash.png"></li></div>';
    document.getElementsByTagName("input")[0].value="";
    console.log(text);
    index++;
    }
}

function remove(id){
    // document.getElementsByClassName("list")[0].classList.toggle("active");
    document.getElementsByTagName("li")[id].classList.add("active");
    // document.getElementById("1").classList.toggle("active");
    console.log(document.getElementsByTagName("ul")[1].contains="Do this do");
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
  