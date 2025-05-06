var isStart=false;
var btn=document.getElementById("btn");
var min=0;
var mn=0;
var milli=0;
var m;
var sec=0;
var s;
var h1=document.getElementById("h1");
var timer;
var h3=document.getElementById("h3");
var now12;
var now24;
var clockh1=document.getElementById("Clock");
var is24=true;

function updateClock(){
var date=new Date();
var h=date.getHours();
var Hour;
var m=date.getMinutes();
var s=date.getSeconds();

var amOrPm="AM";

if (h<10){
    Hour='0'+h;
}
if (m<10){
    m='0'+m;
}
if (s<10){
    s='0'+s;
}

if (h>12){
    amOrPm='PM';
    if ((h-12)<10){
        now12='0'+h-12+' : '+m+' : '+s+' '+amOrPm;
    }
    else{
    now12=h-12+' : '+m+' : '+s+' '+amOrPm;
}
}
else{
    amOrPm='AM';
    if ((h)<10){
        now12='0'+h+' : '+m+' : '+s+' '+amOrPm;
    }
    else{
    now12=h+' : '+m+' : '+s+' '+amOrPm;
}
}
now24=Hour+' : '+m+' : '+s;

if (is24==true){
    clockh1=now24;
}
else{
    clockh1=now12;
}

}

setInterval(updateClock, 1000);
updateClock();


function start(){

isStart=true;
timer=setInterval(update,100)
function update(){

    milli+=1;
    if (milli>9){
        sec+=1;
        milli=0;
    }
    else if (milli<10){
        m='0'+milli;
    }

    if (sec<10){
        s='0'+sec;
    }
    else{
        s=sec;
    }
    if (sec>59){
        min+=1
        sec=0
    }
    if (min<10){
        mn='00'+min;
    }
    if (min>1000){
        reset();
    }
    h1.textContent=mn+' : '+s+" : "+m;
    }}

function stop(){
    isStart=false;
    clearTimeout(timer);
}

function toogle(){
    if (!isStart){
        start();
    }
    else{
        stop();
    }
}
function reset(){
    stop();
    sec=0
    milli=0
    min=0
    h1.textContent="000 : 00 : 00"
}

function toggleMode() {
    var body = document.body;
    body.classList.toggle("dark-mode");
  }

  function c12(){
    is24=false
  }

  function c24(){
    is24=true;
  }