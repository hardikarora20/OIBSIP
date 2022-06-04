var colors=[{"button":"#ffffff","back": "#4d8ac7","lkey":"#cce5ff","lkeytext":"#5089be","fkey":"#a2d0f8","dkeytext":"#153c5a","calc":"#EBF5FF","backg":"#4d8ac7","ckeytext":"#ffffff"},
            {"button":"#8c8c8c","back":"#ffffff","backg":"#000000","lkey":"#393939","ckeytext":"#000000","lkeytext":"#cfcfcf","fkey":"#535353","dkeytext":"#d9e3ea","calc":"#1b1b1b"}];

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
    document.getElementById("disptext").innerHTML=eval(num);
}

function back(){
    var num=document.getElementById("disptext").innerHTML;
    var num2=num.substring(0,num.length-1);
    document.getElementById("disptext").innerHTML=num2;
}

function check(){
    if(document.getElementById("dark").classList.contains("dark")){
        theme(0);
        document.getElementById("dark").classList.toggle("dark");
        document.getElementById("dark").style.backgroundColor="black";
        document.getElementById("dark").style.transform="rotate(-180deg)";
    }
    else{
        theme(1);
        document.getElementById("dark").classList.toggle("dark");
        document.getElementById("dark").style.backgroundColor="white";
        document.getElementById("dark").style.transform="rotate(0deg)";
    }
}
function theme(index){
      document.documentElement.style.setProperty("--button", (colors[index].button));
      document.documentElement.style.setProperty("--back",(colors[index].back));
      document.documentElement.style.setProperty("--lkey",(colors[index].lkey));
      document.documentElement.style.setProperty("--lkeytext",(colors[index].lkeytext));
      document.documentElement.style.setProperty("--fkey",(colors[index].fkey));
      document.documentElement.style.setProperty("--dkeytext",(colors[index].dkeytext));
      document.documentElement.style.setProperty("--calc",(colors[index].calc));
      document.documentElement.style.setProperty("--ckeytext",(colors[index].ckeytext));
      document.documentElement.style.setProperty("--backg",(colors[index].backg));
  }
  
  // Add event listener on keypress
document.addEventListener('keypress', (event) => {
    var name = event.key;
    if(name=='0'||name=='1'||name=='2'||name=='3'||name=='4'||name=='5'||name=='6'||name=='7'||name=='8'||name=='9'){
        tap(name);
    }
    if(name=='c'||name=='C'){
        clr();
    }
    if(name=="Enter"){
        calc();
    }
    if(name=="b"||name=="B"){
        back();
    }
    if(name=='+'||name=='-'||name=='*'||name=='/'||name=='%'||name=='.'){
        tap(name);
    }
  }, false);

