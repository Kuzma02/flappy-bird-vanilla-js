var l=true;
var i=0;
var bird=document.getElementById('bird');
function run(){

//pomeranje ekrana i detektovanje da li je pticica udarila od cev
screenmove();
function screenmove(){
terain.style.left=(parseInt(getComputedStyle(terain,null).left,10)-3)+"px";
i++;

if(i>=207 & i<251){
if(getComputedStyle(bird,null).top<="170"){gameover();}
if(getComputedStyle(bird,null).top>"300"){gameover();}
}

if(i>306 & i<350){if(getComputedStyle(bird,null).top<="130" || getComputedStyle(bird,null).top>="255"){gameover();}}

if(i>408 & i<451){if(getComputedStyle(bird,null).top<"106" || getComputedStyle(bird,null).top>"230"){gameover();}}
if(l==true){
	var raf1=requestAnimationFrame(screenmove);
}else{
cancelAnimationFrame(raf1);
}
}

function gameover(){
	document.body.removeEventListener('click',birdjump1);
bird.style.transform="rotate(1deg)";
gameover2();
function gameover2(){
bird.style.transform="rotate(4deg)";
gameover3();
function gameover3(){
bird.style.transform="rotate(7deg)";
gameover4();
function gameover4(){
bird.style.transform="rotate(11deg)";
gameover5();
function gameover5(){
bird.style.transform="rotate(14deg)";
requestAnimationFrame(gameover6);
function gameover6(){
bird.style.transform="rotate(17deg)";
requestAnimationFrame(gameover7);
function gameover7(){
bird.style.transform="rotate(20deg)";
requestAnimationFrame(gameover8);
function gameover8(){
bird.style.transform="rotate(23deg)";
requestAnimationFrame(gameover9);
function gameover9(){
bird.style.transform="rotate(26deg)";
requestAnimationFrame(gameover10)
function gameover10(){
bird.style.transform="rotate(29deg)";
requestAnimationFrame(gameover11);
function gameover11(){
bird.style.transform="rotate(32deg)";
requestAnimationFrame(gameover12);
function gameover12(){
bird.style.transform="rotate(35deg)";
requestAnimationFrame(gameover13);
function gameover13(){
bird.style.transform="rotate(38deg)";
requestAnimationFrame(gameover14);
function gameover14(){
bird.style.transform="rotate(41deg)";
requestAnimationFrame(gameover15);

function gameover15(){
bird.style.transform="rotate(44deg)";
requestAnimationFrame(gameover16);
function gameover16(){
bird.style.transform="rotate(47deg)";
requestAnimationFrame(gameover17);
function gameover17(){
bird.style.transform="rotate(50deg)";
requestAnimationFrame(gameover18);
function gameover18(){
bird.style.transform="rotate(53deg)";
requestAnimationFrame(gameover19);
function gameover19(){
bird.style.transform="rotate(56deg)";
requestAnimationFrame(gameover20);
function gameover20(){
bird.style.transform="rotate(59deg)";
requestAnimationFrame(gameover21);
function gameover21(){
bird.style.transform="rotate(62deg)";
requestAnimationFrame(gameover23);

function gameover23(){
bird.style.transform="rotate(65deg)";
requestAnimationFrame(gameover24);
function gameover24(){
bird.style.transform="rotate(68deg)";
l=false;
}}}}}}}}}}}}}}}}}}}}}}}
//na klik skok
document.body.addEventListener('click',birdjump1,false);
function birdjump1(){
bird.style.top=(parseInt(getComputedStyle(bird,null).top,10)-10)+"px";	
requestAnimationFrame(birdjump2);
function birdjump2(){
bird.style.top=(parseInt(getComputedStyle(bird,null).top,10)-10)+"px";	
requestAnimationFrame(birdjump3);
function birdjump3(){
bird.style.top=(parseInt(getComputedStyle(bird,null).top,10)-10)+"px";	
requestAnimationFrame(birdjump4);
function birdjump4(){
bird.style.top=(parseInt(getComputedStyle(bird,null).top,10)-10)+"px";	
requestAnimationFrame(birdjump5);
function birdjump5(){
bird.style.top=(parseInt(getComputedStyle(bird,null).top,10)-10)+"px";	
requestAnimationFrame(birdjump6);
function birdjump6(){
bird.style.top=(parseInt(getComputedStyle(bird,null).top,10)-10)+"px";	
requestAnimationFrame(birdjump7);
function birdjump7(){
bird.style.top=(parseInt(getComputedStyle(bird,null).top,10)-10)+"px";	
requestAnimationFrame(birdjump8);
function birdjump8(){
bird.style.top=(parseInt(getComputedStyle(bird,null).top,10)-10)+"px";	
requestAnimationFrame(birdjump9);
function birdjump9(){
bird.style.top=(parseInt(getComputedStyle(bird,null).top,10)-10)+"px";	
requestAnimationFrame(birdjump10);
function birdjump10(){
bird.style.top=(parseInt(getComputedStyle(bird,null).top,10)-10)+"px";	
requestAnimationFrame(birdjump11);
function birdjump11(){
bird.style.top=(parseInt(getComputedStyle(bird,null).top,10)-10)+"px";	
requestAnimationFrame(birdjump12);
function birdjump12(){
bird.style.top=(parseInt(getComputedStyle(bird,null).top,10)-10)+"px";	
requestAnimationFrame(birdjump13);
function birdjump13(){
bird.style.top=(parseInt(getComputedStyle(bird,null).top,10)-10)+"px";
requestAnimationFrame(birdjump14);	
function birdjump14(){
bird.style.top=(parseInt(getComputedStyle(bird,null).top,10)-10)+"px";	
requestAnimationFrame(birdjump15);
function birdjump15(){
bird.style.top=(parseInt(getComputedStyle(bird,null).top,10)-10)+"px";	
requestAnimationFrame(birdjump16);
function birdjump16(){
bird.style.top=(parseInt(getComputedStyle(bird,null).top,10)-10)+"px";	
requestAnimationFrame(birdjump17);
function birdjump17(){
bird.style.top=(parseInt(getComputedStyle(bird,null).top,10)-10)+"px";	
requestAnimationFrame(birdjump18);
function birdjump18(){
bird.style.top=(parseInt(getComputedStyle(bird,null).top,10)-10)+"px";	
}}}}}}}}}}}}}}}}}}
//gravitacija
slobodanpad();	
function slobodanpad(){
bird.style.top=(parseInt(getComputedStyle(bird,null).top,10)+6)+"px";
document.body.removeEventListener('click',run);
requestAnimationFrame(slobodanpad);
}}
document.body.addEventListener('click',run);
