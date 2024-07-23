var score = parseInt(localStorage.getItem("score")) || 0;
var bar1 = 1;
var level = parseInt(localStorage.getItem("level")) || 1;
var xp = parseInt(localStorage.getItem("xp")) || 0;
var xpreq = parseInt(localStorage.getItem("xpreq")) || 10;
var rank = parseInt(localStorage.getItem("rank")) || 1;
var rankreq = parseInt(localStorage.getItem("rankreq")) || 10;
var scoreplus = parseInt(localStorage.getItem("scoreplus")) || 1;
var buyscoreplus = parseInt(localStorage.getItem("buyscoreplus")) || 99;
var buyscoremultiplier = parseInt(localStorage.getItem("buyscoremultiplier")) || 250;
var scoremultiplier = parseInt(localStorage.getItem("scoremultiplier")) || 1;

function foknissiyon() {
    score += scoreplus * scoremultiplier * level * (rank ** rank);
    XpUp(scoreplus * scoremultiplier * level * (rank ** rank));
    barmov1(score);
}

function XpUp(inte){
    barmov2();
    xp+=inte;
    if(xp>xpreq){
        barmov3();
        xp-=xpreq;
        xpreq*=1.5;
        level++;
        document.getElementById("lvllab").textContent = "LvL:" + level;
        Rankup();
    }
}

function Rankup(){
    if(level>rankreq){
        rank++;
        level-=rankreq;
        rankreq*=2;
        document.getElementById("ranklab").textContent = "Rank:" + rank;
    }
    barmov3();
}

function resetart() {
    score = 0;
    scoreplus = 1;
    buyscoreplus = 99;
    scoremultiplier = 1;
    buyscoremultiplier = 250;
    level = 1;
    xpreq = 10;
    xp = 0 ;
    rank = 1;
    rankreq = 10;
}

function fonkonos() {
    if (score > buyscoreplus) {
        score -= buyscoreplus;
        scoreplus++;
        buyscoreplus += Math.ceil(scoreplus ** 1.7);
    }
    document.getElementById("buyscor").textContent = "scor+ moneh for only " + buyscoreplus + "$";
}

function multifonk() {
    if (score > buyscoremultiplier) {
        score -= buyscoremultiplier;
        scoremultiplier++;
        buyscoremultiplier += Math.ceil(scoremultiplier ** 1.7);
    }
    document.getElementById("buyscoremultiplier").textContent = "multip+ moneh for only" + buyscoremultiplier + "$";

}

function barmov1(movval) {
    document.getElementById("bar2").style.width = bar1 + (movval % 100) + "px";
    bar1 += (movval % 100);
    if (bar1 > 100) {
        document.getElementById("bar2").style.width = "1px";
        bar1 = 1;
        score += Math.floor(scoreplus ** 1.3);
    }
}

function barmov2() {
    document.getElementById("bar4").style.width = ((xp*100)/xpreq) + "px";
}

function barmov3() {
    document.getElementById("bar6").style.width = ((level*100)/rankreq) + "px";
}

setInterval(() => {
    document.getElementById("hahayes").textContent = score + "$";
    document.getElementById("hahayesplus").textContent = scoreplus + "$+";
}, 100);

setInterval(() => {
    localStorage.setItem("score", score);
    localStorage.setItem("scoreplus", scoreplus);
    localStorage.setItem("buyscoreplus", buyscoreplus);
    localStorage.setItem("buyscoremultiplierplus", buyscoremultiplier);
    localStorage.setItem("scoremultiplier", scoremultiplier);
    localStorage.setItem("xp", xp);
    localStorage.setItem("xpreq", xpreq);
    localStorage.setItem("level", level);
    localStorage.setItem("rank", rank);
    localStorage.setItem("rankreq", rankreq);
}, 1000);