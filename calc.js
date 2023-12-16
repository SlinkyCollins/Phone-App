function calWork(digit) {
    showdisplay.innerHTML += digit;
}

function onOperator (operator) {
    showdisplay.innerHTML += operator;
}


function equalTo() {

    var k = showdisplay.innerHTML;
    var i = showresult.innerHTML;

    if (k.search("sin") == -1 && k.search("cos") == -1 && k.search("tan") == -1 && k.search("log") == -1  && k.search("√") == -1) {
    eval(showdisplay.innerHTML);
    showresult.innerHTML = eval(showdisplay.innerHTML); 
    } else if (k.search("sin") != -1) {
        var dd = k.replace("sin", "(Math.PI/180)*");
        var tt = eval(dd);
        var xx = eval(Math.sin(tt));
        var gg = xx.toPrecision(4);
        showresult.innerHTML = gg;
    } else if (k.search("cos") != -1) {
        var dd = k.replace("cos", "(Math.PI/180)*");
        var tt = eval(dd);
        var xx = eval(Math.sin(tt));
        var gg = xx.toPrecision(4);
        showresult.innerHTML = gg;
    } else if (k.search("tan") != -1) {
        var dd = k.replace("tan", "(Math.PI/180)*");
        var tt = eval(dd);
        var xx = eval(Math.sin(tt));
        var gg = xx.toPrecision(4);
        showresult.innerHTML = gg;
    }  else if (k.search("log") != -1) {
        var dd = k.replace("log", "Math.log10");
        var tt = eval(dd);
        var gg = tt.toPrecision(4);
        showresult.innerHTML = gg;
    } else if (k.search("√") != -1) {
        var dd = k.replace("√", "Math.sqrt");
        var tt = eval(dd);
        var gg = tt.toPrecision(4);
        showresult.innerHTML = gg;
    }
}


function clean() {
    showdisplay.innerHTML = ""
    showresult.innerHTML = "0"
}

function answer() {
    showdisplay.innerHTML = showresult.innerHTML
}

showdisplay.style.display = "none"
showresult.style.display = "none"


function onOff() {
    if (btn2.innerHTML == "ON") {
        btn2.innerHTML = "OFF"
        showdisplay.innerHTML = " "
        showresult.innerHTML = "0"
        showresult.style.display = "block"
        showdisplay.style.display = "block"
    } else {
        btn2.innerHTML = "ON"
        showdisplay.style.display = "none"
        showresult.style.display = "none"
    }
}

function deleteOne() {
    showdisplay.innerHTML = showdisplay.innerHTML.substr(0,showdisplay.innerHTML.length-1)
}


function sci(science) {
showdisplay.innerHTML += science;

}
