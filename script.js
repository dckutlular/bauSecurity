var interval;
var elapsedTime;

function toggleExplain() {
    if (document.getElementById("explainToggle").style.display == 'block') {
        document.getElementById("explainToggle").style.display = 'none';
    }
    else {
        document.getElementById("explainToggle").style.display = 'block';
    }
}

function toggleCounter() {
    if (document.getElementById("chkCounter").checked) {
        document.getElementById('timer').style.display = 'block';
    }
    else {
        document.getElementById('timer').style.display = 'none';
    }
}
function startCounting() {
    var startTime = Date.now();
    interval = setInterval(function () {
        elapsedTime = Date.now() - startTime;
        document.getElementById("timer").innerHTML = elapsedTime;
    });
}


function validate() {
    name = document.getElementById('fname').value;
    mod = document.getElementById('mod').value;
    if (!name || !mod) {
        //alert("Please Enter Fields");
        //window.location.reload();
        return false
    }
    return true
}

function generate() {
    if (validate()) {
        clearInterval(interval);
        generateNumber();
    }
    else {
        alert("Please Enter Fields");
        window.location.reload();
    }
}

function generateNumber() {
    document.getElementById('after').style.display = 'block';
    seed = elapsedTime;
    mod = document.getElementById('mod').value;
    number = createRand(elapsedTime);
    document.getElementById("result").innerHTML = "<h1> Generated number is: " + "<b style='color:red'>" + number + "</b>" + "</h1></br><hr>";
}

function createRand(seed) {
    var a = seed % 97;
    var c = (seed * seed) % 97
    alert("Number is generated!");
    result = (a * seed + c) % mod;
    explain(seed, a, c, mod, result);
    return result;
}


function explain(seed, a, c, mod, result) {
    document.getElementById("seed").innerHTML = "Seed is : " + seed;
    document.getElementById("a").innerHTML = "a is : " + a;
    document.getElementById("c").innerHTML = "c is : " + c;
    document.getElementById("modulus").innerHTML = "mod is : " + mod;
    document.getElementById("denklem").innerHTML = "Result = " + "(" + a + " * " + seed + " + " + c + ")" + " % " + mod + " = " + "<b style='color:red'>" + result + "</b>" + "<hr>";
}