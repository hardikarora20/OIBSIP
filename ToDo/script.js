var colors=[{"back":"#354f52","backli": "#52796f","li":"#c8d5b9","darker":"#c8d5b9a9","nav":"#253638"},
            {"back":"#05445E","backli": "#377690","li":"#7dbcd6","darker":"#7dbcd6a9","nav":"#032635"}]
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
  
var i=1;
function he(){
    if(document.getElementsByTagName("p")[0].classList.contains("color")){
        i=0;
        document.getElementsByTagName("p")[0].classList.remove("color");
    }
    else{
        i=1;
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