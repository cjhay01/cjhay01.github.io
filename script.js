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