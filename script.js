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
var cps = 0;
var cursorCount = 0;
var cursorCost = 100;
var cpc = 1;
var cpcCost = 69;
var score = 0;
    function increase() {
    score += cpc;
    document.getElementById('counter').innerHTML = Math.round(score).toLocaleString();
    }
    document.getElementById("buyCursorBtn").onclick = function() {
        if (score >= cursorCost) {
            score -= cursorCost;
            cursorCount++;
            cps++;
            cursorCost = Math.ceil(Math.pow(cursorCost, 1.00));
            document.getElementById('cursorCost').innerHTML = cursorCost.toLocaleString();
            cursorCountElement.innerHTML = cursorCount;
        }
    }
    document.getElementById("cpcBtn").onclick = function() {
        if (score >= cpcCost) {
            score -= cpcCost;
            cpc++;
            cpcCost = Math.ceil(Math.pow(cpcCost, 1.02));
            document.getElementById('cpcCost').innerHTML = cpcCost.toLocaleString()
            cpcElement.innerHTML = cpc;
        }
    }
    cpcElement = document.getElementById("cpc");
        document.getElementById('cpc').innerHTML = cpc;
    cursorCountElement = document.getElementById("cursorCount");
        setInterval(function(){
        score += cps * 0.004;
        }, 1)
        setInterval(() => {
            document.getElementById('counter').innerHTML = Math.round(score).toLocaleString();
        }, 1);
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