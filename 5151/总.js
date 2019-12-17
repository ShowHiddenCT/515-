window.onload=function(){
var container=document.getElementById("container");
var list=document.getElementById("list");
var buttons=document.getElementById("buttons").getElementsByTagName("span");
var prev=document.getElementById("prev");
var next=document.getElementById("next");
var containera= document.getElementById("containera");
var listbox=document.getElementById("listbox");
var preva=document.getElementById("preva");
var nexta=document.getElementById("nexta");
var Button=document.getElementById("Button").getElementsByTagName("span");
var Newleft;
var indey=1;
var newleft;
var index=1;
    function animatea(newSet){
        Newleft=parseInt(listbox.style.left)+newSet;
        var time=300;
        var dtime=10;
        var speed=newSet/(time/dtime);
        function went(){
            if((speed <0 && parseInt(listbox.style.left)>Newleft ) || (speed >0 && parseInt(listbox.style.left)<Newleft )){
                listbox.style.left=parseInt(listbox.style.left) + speed +"px";
                setTimeout(went,dtime);
        }else{
            listbox.style.left=Newleft+"px";
        if(Newleft>-1515){
            listbox.style.left=-4545+"px";
        }
        if(Newleft<-4545){
            listbox.style.left=-1515+"px";
        }
        }
    }
    went();
}
 for(var i=0;i<Button.length;i++){
        Button[i].onmouseover = function(){
            var newIndex = parseInt(this.getAttribute('index'));
            var Newleft = -1515*(newIndex-indey);
            animatea(Newleft);
            indey = newIndex;
           showImg();
        } 
 function ShowButton(){
 for (var i=0; i< Button.length; i++ ){
     if(Button[i].className=='hover'){
                Button[i].className='';
                break;
            }
        Button[indey-1].className="hover"     
 }
    }
    function showImg(){
        if( Newleft==-1515){
        Button[0].style.backgroundImage="url(图十九（2）.png)";
        Button[1].style.backgroundImage="url(图二十.png)";
        Button[2].style.backgroundImage="url(图二一.png)";
    }else if( Newleft==-3030){
        Button[0].style.backgroundImage="url(图十九.png)";
        Button[1].style.backgroundImage="url(图二十（2）.png)";
        Button[2].style.backgroundImage="url(图二一.png)";
    }else if( Newleft==-4545){
        Button[0].style.backgroundImage="url(图十九.png)";
        Button[1].style.backgroundImage="url(图二十.png)";
        Button[2].style.backgroundImage="url(图二一（2）.png)";
    }
 }
} 


function animate(offset){
    newleft=parseInt( list.style.left)+offset;
    // 平滑移动
    var time=300;
    var dtime=10;
    var speed= offset/(time/dtime);
    function go(){
        if((speed <0 && parseInt(list.style.left)>newleft ) || (speed >0 && parseInt(list.style.left)<newleft )){
        list.style.left=parseInt(list.style.left) + speed +"px";
        setTimeout(go,dtime);
    }
    else{
        list.style.left=newleft+"px";
        if(newleft>-1515){
            list.style.left=-4545+"px";
        }
        if(newleft<-4545){
            list.style.left=-1515+"px";
        }
    }
    }
   go();
}
function showButton(){
    for(var i = 0; i<buttons.length;i++) {
        if(buttons[i].className == 'on'){
            buttons[i].className = '';
            break;
        }
    }
    buttons[index - 1].className =   'on';


}
next.onclick = function(){
    if(index == 3 ){
        index = 1;
    }
    else{
        index += 1; 
    }
    showButton();
    animate(-1515);
}
prev.onclick = function(){
    if(index == 1 ){
        index = 3;
    }
    else{
        index -= 1; 
    }
    showButton();
    animate(1515);
}
 for (var  i = 0; i < buttons.length; i++) {
     buttons[i].onclick = function(){
         var myIndex = parseInt(this.getAttribute('index'));
         var offset = -1515*(myIndex-index);
         animate(offset);
          index = myIndex;
         showButton();
     }   
 }
function play(){
    timer =setInterval(function()  {
        next.onclick();
        
    },3000);
}
function stop(){
    clearInterval(timer);
}
container.onmouseover = stop;
container.onmouseout =play;
play();
} 