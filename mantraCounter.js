var res = document.getElementById("result");
var n = 0;
var formettedNum;

function calculate() {
    n += 1;

    if (n<10){
        formettedNum = "000"+n;
    }
    else if (n<100){
        formettedNum = "00"+n;
    }
    else if (n<1000){
        formettedNum = "0"+n;
    }
    else if (n >= 1000) {
        n = 0;
        formettedNum = '0000';
    }    
    res.textContent = formettedNum;
}

function reset(){
    n = -1;
    formettedNum = "0000";
}

document.addEventListener("click", calculate);