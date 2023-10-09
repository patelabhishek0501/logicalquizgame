
let hitrn=0;
let timer=60;
let score=0;
function scoreDecrease(){
    score-=10;
    document.querySelector("#score").textContent=score;
}
function scoreIncrease(){
    score+=10;
    document.querySelector("#score").textContent=score;
}
function getnewhit(){
    hitrn=Math.floor(Math.random()*10);
    document.querySelector("#hit").textContent=hitrn;
}
function makeBubble(){
 let clutter ="";
for(let i =1; i<=168;i++){
    let rn=Math.floor(Math.random()*10);
    clutter+=`<div class="bubble">${rn}</div>`;
}
document.querySelector("#pbtm").innerHTML=clutter;
}
function runtimer(){
    let interval=setInterval(function(){
    if(timer>0){
        timer--;
       document.querySelector("#timer").textContent=timer;
    }
    else{
        clearInterval(interval);
        document.querySelector("#pbtm").textContent="Game Over!";
    }
}, 1000);
document.getElementById("#pbtm").addEventListener("click",function(dets){
    dets.target;
});}
document.querySelector("#pbtm")
.addEventListener("click",function (dets){
let clickedno=(Number(dets.target.textContent));
if(hitrn===clickedno){
    scoreIncrease();
    makeBubble();
    getnewhit();
}
});

document.querySelector("#startbtn")
.addEventListener("click",function (){
    makeBubble();
    getnewhit();
    runtimer();
;});
