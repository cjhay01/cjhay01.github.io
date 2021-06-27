var cps = 0;
var cursorCount = 0;
var cursorCost = 10;
var score = 0;
    function increase() {
      score++;
      document.getElementById('counter').innerHTML = score;
    }
    document.getElementById("buyCursorBtn").onclick = function() {
        if (score >= cursorCost) {
            score -= cursorCost;
            cursorCount++;
            cps++;
            cursorCost = Math.floor(Math.pow(cursorCost, 1.05));
            document.getElementById('cursorCost').innerHTML = cursorCost;
            cursorCountElement.innerHTML = cursorCount;
        }
    }
    cursorCountElement = document.getElementById("cursorCount");
    if (cps > 0) {
        setInterval(function() {
            score++;
            document.getElementById('counter').innerHTML = score;
        }, 1000 / cps);
    }