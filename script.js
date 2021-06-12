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
            cursorCount++
            cps++;
            Math.floor(Math.pow(cursorCost, 1.005));
            cursorCountElement.innerHTML = cursorCount;
        }
    }
    cursorCountElement = document.getElementById("cursorCount");
    setInterval(function() {
        score += cps;
        document.getElementById('counter').innerHTML = score;
    },1000);