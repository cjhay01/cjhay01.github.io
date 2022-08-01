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
document.getElementById("cursorCost").innerHTML = nFormatter(gameData.cursorCost, 3);
document.getElementById("cpcCost").innerHTML = nFormatter(gameData.cpcCost, 3);
document.getElementById("cursorCount").innerHTML = nFormatter(gameData.cursorCount, 3);
document.getElementById("gen2Count").innerHTML = nFormatter(gameData.gen2Count, 3);
document.getElementById("gen2Cost").innerHTML = nFormatter(gameData.gen2Cost, 3);

function nFormatter(num, digits) {
    const lookup = [
      { value: 1, symbol: "" },
      { value: 1e3, symbol: "K" },
      { value: 1e6, symbol: "M" },
      { value: 1e9, symbol: "B" },
      { value: 1e12, symbol: "T" },
      { value: 1e15, symbol: "q" },
      { value: 1e18, symbol: "Q" },
      { value: 1e21, symbol: "s" },
      { value: 1e24, symbol: "S" },
      { value: 1e27, symbol: "O" },
      { value: 1e30, symbol: "N" },
      { value: 1e33, symbol: "D" },
      { value: 1e36, symbol: "UD" },
      { value: 1e39, symbol: "DD" },
    ];
    const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
    var item = lookup.slice().reverse().find(function(item) {
      return num >= item.value;
    });
    return item ? (num / item.value).toFixed(digits).replace(rx, "$1") + item.symbol : "0";
  }

function increase() {
    gameData.score += gameData.cpc;
    document.getElementById('counter').innerHTML = nFormatter(Math.round(gameData.score), 3);
    }
    document.getElementById("gen1Btn").onclick = function() {
        if (gameData.score >= gameData.cursorCost) {
            gameData.score -= gameData.cursorCost;
            gameData.cursorCount++;
            gameData.cps++;
            gameData.cursorCost = Math.floor(gameData.cursorCost + gameData.cursorCost * 1);
            document.getElementById('cursorCost').innerHTML = nFormatter(gameData.cursorCost, 3);
            cursorCountElement.innerHTML = gameData.cursorCount;
        }
    }
    document.getElementById("gen2Btn").onclick = function() {
        if (gameData.score >= gameData.gen2Cost) {
            gameData.score -= gameData.gen2Cost;
            gameData.gen2Count++;
            gameData.cps += 100;
            gameData.gen2Cost = Math.ceil(Math.pow(gameData.gen2Cost, 1.00));
            document.getElementById('gen2Cost').innerHTML = nFormatter(gameData.gen2Cost, 3);
            document.getElementById('gen2Count').innerHTML = gameData.gen2Count;
        }
    }
    function cpcPurchase() {
        if (gameData.score >= gameData.cpcCost) {
            gameData.score -= gameData.cpcCost;
            gameData.cpc++;
            gameData.cpcCost = Math.ceil(Math.pow(gameData.cpcCost, 1.00));
            document.getElementById('cpcCost').innerHTML = gameData.cpcCost.toLocaleString()
            cpcElement.innerHTML = nFormatter(gameData.cpc, 3);
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
            document.getElementById('counter').innerHTML = nFormatter(Math.round(gameData.score), 3);
            document.getElementById('counter').title = gameData.score.toLocaleString();
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
