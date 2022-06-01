document.onkeydown = function(e) {
    if(event.keyCode == 123) {
    return false;
    }
    if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)){
    return false;
    }
    if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)){
    return false;
    }
    if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)){
    return false;
    }
    }
var savegame = JSON.parse(localStorage.getItem("gameSave"));
var gameData = {
score: 0,
cps:0,
cursorCount: 0,
cursorCost: 100,
cpc: 1,
cpcCost: 69,
gen2Count: 0,
gen2Cost: 5000,
}
if (savegame !== null) gameData = savegame;
document.getElementById("cursorCost").innerHTML = gameData.cursorCost;
document.getElementById("cpcCost").innerHTML = gameData.cpcCost;
document.getElementById("cursorCount").innerHTML = gameData.cursorCount;
document.getElementById("gen2Count").innerHTML = gameData.gen2Count;
document.getElementById("gen2Cost").innerHTML = gameData.gen2Cost;
function increase() {
    gameData.score += gameData.cpc;
    document.getElementById('counter').innerHTML = Math.round(gameData.score).toLocaleString();
    }
    document.getElementById("gen1Btn").onclick = function() {
        if (gameData.score >= gameData.cursorCost) {
            gameData.score -= gameData.cursorCost;
            gameData.cursorCount++;
            gameData.cps++;
            gameData.cursorCost = Math.floor(gameData.cursorCost + gameData.cursorCost * 0);
            document.getElementById('cursorCost').innerHTML = gameData.cursorCost.toLocaleString();
            cursorCountElement.innerHTML = gameData.cursorCount;
        }
    }
    document.getElementById("gen2Btn").onclick = function() {
        if (gameData.score >= gameData.gen2Cost) {
            gameData.score -= gameData.gen2Cost;
            gameData.gen2Count++;
            gameData.cps += 100;
            gameData.gen2Cost = Math.ceil(Math.pow(gameData.gen2Cost, 1.00));
            document.getElementById('gen2Cost').innerHTML = gameData.gen2Cost.toLocaleString();
            document.getElementById('gen2Count').innerHTML = gameData.gen2Count;
        }
    }
    function cpcPurchase() {
        if (gameData.score >= gameData.cpcCost) {
            gameData.score -= gameData.cpcCost;
            gameData.cpc++;
            gameData.cpcCost = Math.ceil(Math.pow(gameData.cpcCost, 1.00));
            document.getElementById('cpcCost').innerHTML = gameData.cpcCost.toLocaleString()
            cpcElement.innerHTML = gameData.cpc;
        }
    }
    document.getElementById("cpcMax").onclick = function() {
        while (gameData.score >= gameData.cpcCost) cpcPurchase()
    }
    cpcElement = document.getElementById("cpc");
        cpcElement.innerHTML = gameData.cpc;
    cursorCountElement = document.getElementById("cursorCount");
        setInterval(function(){
            gameData.score += gameData.cps * 0.004;
            document.getElementById('counter').innerHTML = Math.round(gameData.score).toLocaleString();
            document.getElementById('scorePerSec').innerHTML = gameData.cps
        }, 1);
var saveGameLoop = window.setInterval(function() {
    localStorage.setItem("gameSave", JSON.stringify(gameData))
     }, 5000)
function save() {
    localStorage.setItem("gameSave", JSON.stringify(gameData))
}
function dm() {
    var element = document.body;
    element.classList.toggle("dark-mode");
    if (element.classList.contains("dark-mode")) {
           localStorage.setItem("background", "dark-mode");
         } else {
           localStorage.setItem("background", "");
         }
       }
       
document.addEventListener("DOMContentLoaded", function(event) {
    var background = localStorage.getItem("background");
    if (background) {
        document.body.className += background;
        }
       })
function a() {
    localStorage.clear("gameSave")
    window.location.reload();
}
