var ovr = 1;
var ball = 0;
var rns = 0;

const myDict = {0:0};

var rr = 0;
var denominator;

var isChange = false;

var isError = false;

var ovrInp = document.getElementById("ovrInp");
var ballInp = document.getElementById("ballInp");
var rnsInp = document.getElementById("rnsInp");

var tballs = document.getElementById("tballs");

var tlballs = 0;

var resText = document.getElementById("ResText");

var lstItm;

showText();

function calc(){
    isChange = false;
    isError = false;
    if (ovrInp.value != ovr){
        isChange = true;
        ovr = Number(ovrInp.value);
    }
    if (ballInp.value != ball){        
        isChange = true;
        if (Number(ballInp.value) > 6) {
            isError = true;
            resText.textContent = "Invalid ball input!"
            ballInp.value = ball;
        }
        else {
        ball = Number(ballInp.value);
        }
    }

    if (rns != rnsInp.value){
        rns = Number(rnsInp.value);
    }

    if (!isChange && !isError){
        ball += 1;
        if (ball>6){
           ovr += 1;
           ball = 1;
        }
    }
    showText();
    total_balls();
    myDict[tlballs]=rns;
    
    denominator = ovr + (ball/6);
    rr = rns/denominator;

    resText.textContent = "Result: "+rr.toFixed(2);   
}

function addRuns(x){
    rns += Number(x.textContent);
    showText();
    calc();
}

function showText(){
    ovrInp.value = ovr;
    ballInp.value = ball;
    rnsInp.value = rns;
    tballs.textContent = "Total Balls: " + tlballs;
}

function prevs(){
    if (tlballs == 0){
        alert("Can't go to previous in the first ball!")
    }
    else{
        if (ovr == 1 && ball == 1){
            ovr = 1;
            ball = 0;
        }
        else {
        ball -= 1;
        if (ball <= 0){
            ovr -= 1;
            ball = 6;
            }
        }

        rns = myDict[tlballs - 1];
    }
    showText();
    total_balls();
}

function clr(){
    ovr = 1;
    ball = 0;
    rns = 0;
    tlballs = 0;
    lstItm = 0;

    ovrInp.value = 1;
    ballInp.value = 0;
    rnsInp.value = '';
}

function total_balls(){
    tlballs = ((Number(ovr) - 1)*6) + (Number(ball));
    showText();
}

function nxt(){    
    lstItm = Number(Object.keys(myDict)[Object.keys(myDict).length - 1]);
    if (tlballs == lstItm) {
        alert("Error!")
    }
    else{
        ball += 1;
        if (ball>6){
            ovr += 1;
        }

        rns = myDict[tlballs+1];
    }
    total_balls();    
}