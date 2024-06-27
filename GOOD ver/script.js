var score = parseInt(localStorage.getItem("score")) || 0;
var bar = 1;
var scoreplus = parseInt(localStorage.getItem("scoreplus")) || 1;
var buyscoreplus = parseInt(localStorage.getItem("buyscoreplus")) || 99;

function foknissiyon() {
    score += scoreplus;
    barmov(score);
}

function resetart() {
    score = 0;
    scoreplus = 1;
    buyscoreplus = 99;
}
function fonkonos() {
    if (score > buyscoreplus) {
        score -= buyscoreplus;
        scoreplus++;
        buyscoreplus += scoreplus;
    }
    document.getElementById("buyscor").textContent = "scor+ moneh for only " + buyscoreplus + "$";
}

function barmov(movval) {
    document.getElementById("bar2").style.width = bar + (movval % 100) + "px";
    bar += (movval % 100);
    if (bar > 100) {
        document.getElementById("bar2").style.width = "1px";
        bar = 1;
        score += scoreplus ** 2;
    }
}

setInterval(() => {
    document.getElementById("hahayes").textContent = score + "$";
    document.getElementById("hahayesplus").textContent = scoreplus + "$+";
}, 100);

setInterval(() => {
    localStorage.setItem("score", score);
    localStorage.setItem("scoreplus", scoreplus);
    localStorage.setItem("buyscoreplus", buyscoreplus);
}, 1000);