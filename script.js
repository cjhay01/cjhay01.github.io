var cps = 0;
var cursorCount = 0;
var cursorCost = 0;
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
            cursorCountElement.innerHTML = cursorCount;
        }
    }
    cursorCountElement = document.getElementById("cursorCount");
    setInterval(function() {
        score += cps;
        document.getElementById('counter').innerHTML = score;
    },1000);