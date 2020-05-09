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

function generateNumber() {
    document.getElementById('after').style.display = 'block';
    seed = elapsedTime;
    // alert("seed: " + seed);
    mod = document.getElementById('mod').value;
    // alert("mod: " + mod);
    number = createRand(elapsedTime);
    document.getElementById("result").innerHTML = "<h1> Generated number is: " + number + "</h1><hr><br> ";

}

function createRand(seed) {
    var a = seed % 99;
    var c = (seed * seed) % 99;
    alert("Calculation completed.");
    result = (a * seed + c) % mod;
    explain(seed, a, c, mod, result);
    return result;
}

function validate() {
    name = document.getElementById('fname').value;
    mod = document.getElementById('mod').value;
    if (!name || !mod) {
        alert("Please Enter Fields");
        window.location.reload();
    }
}
function explain(seed, a, c, mod, result) {
    document.getElementById("seed").innerHTML = "Seed is : " + seed;
    document.getElementById("a").innerHTML = "a is : " + a;
    document.getElementById("c").innerHTML = "c is : " + c;
    document.getElementById("modulus").innerHTML = "modulus is : " + mod;
    document.getElementById("denklem").innerHTML = "result is = " + "(" + a + " * " + seed + " + " + c + ")" + " % " + mod + " = " + "<b>" + result + "</b>";
}