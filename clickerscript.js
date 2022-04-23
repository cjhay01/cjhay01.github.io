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
cps:0,
cursorCount: 0,
cursorCost: 100,
cpc: 1,
cpcCost: 69,
score: 0
}
if (savegame !== null) gameData = savegame;
function increase() {
    gameData.score += gameData.cpc;
    document.getElementById('counter').innerHTML = Math.round(gameData.score).toLocaleString();
    }
    document.getElementById("buyCursorBtn").onclick = function() {
        if (gameData.score >= gameData.cursorCost) {
            gameData.score -= gameData.cursorCost;
            gameData.cursorCount++;
            gameData.cps++;
            gameData.cursorCost = Math.ceil(Math.pow(gameData.cursorCost, 1.00));
            document.getElementById('cursorCost').innerHTML = gameData.cursorCost.toLocaleString();
            cursorCountElement.innerHTML = gameData.cursorCount;
        }
    }
    document.getElementById("cpcBtn").onclick = function() {
        if (gameData.score >= gameData.cpcCost) {
            gameData.score -= gameData.cpcCost;
            gameData.cpc++;
            gameData.cpcCost = Math.ceil(Math.pow(gameData.cpcCost, 1.02));
            document.getElementById('cpcCost').innerHTML = gameData.cpcCost.toLocaleString()
            cpcElement.innerHTML = gameData.cpc;
        }
    }
    cpcElement = document.getElementById("cpc");
        document.getElementById('cpc').innerHTML = gameData.cpc;
    cursorCountElement = document.getElementById("cursorCount");
        setInterval(function(){
            gameData.score += gameData.cps * 0.004;
        }, 1)
        setInterval(() => {
            document.getElementById('counter').innerHTML = Math.round(gameData.score).toLocaleString();
        }, 1);


var saveGameLoop = window.setInterval(function() {
    localStorage.setItem("gameSave", JSON.stringify(gameData))
     }, 5000)

function myFunction() {
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