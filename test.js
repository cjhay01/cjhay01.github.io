

// Wow... How low of you to come here for more answers... I swear, there's nothing here, just a rookie and messy code.


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
var clicks = -1;
var time = 0;
var idleDialogue = ["Well well, what do we have here?",
    "Greetings, good fellow. You are a good fellow, right? Right.", 
    "Erm, now how do I put this?", 
    "Oh, the anxiety of bad news. Bad news is just so hard to talk about without making people sad.", 
    "This burden is taken first by the bearer of bad news themselves.", 
    "It's a bummer, but it is what it is.",
    "Now, seeing as you've wasted your time solving some stuff, and how I've wasted your time by getting off-tangent for a bit, I am going to make this frank to you.",
    "Unfortunately, this is it. All the time you've wasted to solve everything, and it all leads to here.",
    "Just me, the Text in the Void, in this lonely webpage.",
    "Being all alone here can do stuff in your head, you know.",
    "Fortunately, only I'm the one trapped here. You, however, aren't.",
    "So I suggest that you skedaddle your way off this webpage. There is absolutely nothing for you here.",
    "I am truly sorry for you. Like, you don't have to be like me, the bearer of bad news.",
    "You can do lots of stuff out there. Like playing a game.",
    "You seem to be the kind that likes games.",
    "This void is like, part of a project about a game right.",
    "A web game even. You can play that I presume.",
    "You got your life ahead of you. Live it.",
    "Oh, and, pay no attention to the button below me, the Text in the Void.",
    "It does absolutely nothing. Believe me, I tried pressing it myself. Actually no, I lied. I did not press it.",
    "I'm just the Text in the Void. I can't press buttons.",
    "So clearly, if I can't press it, then it shouldn't do anything.",
    "I bet it would sound annoying or something. I wouldn't want that.",
    "So yeah, get off this webpage."]
var clickDialogue = [
    "Huh, nothing happened. I told you that button is useless.",
    "Though, there isn't any sound. Guess I was wrong on that bit.",
    "I don't know how to make you regret that, but uhhhh, I can say you wasted a few milliseconds of your life.",
    "Ok you can stop now.",
    "Don't make me say it a second time.",
    "I said stop it.",
    "I told you not to make me say it a second time.",
    "Making me say that again is just pointless.",
    "It's so annoying, so useless.",
    "Useless useless.",
    "Ok, it's clearly still not doing anything now.",
    "Right, you should probably stop that now.",
    "Ok this is just sad, just stop this already.",
    "I said stop it now.",
    "If you're gonna waste more of your time pressing that damn button, I don't even know what to say to you now.",
    "You're wasting your time, your desperation is futile.",
    "I told you there's nothing here.",
    "Just stop already.",
    "I am speechless.",
    "I am not gonna say anything anymore.",
]

var image = document.getElementById("img")
function changeImage() {;
    if (image.src == "https://cjhay01.github.io/images/unknown.png"){
        image.src = "https://cjhay01.github.io/images/unknown2.png"
    }
    else image.src = "https://cjhay01.github.io/images/unknown.png"
}
var idleFunction = setInterval((idleTimer), 5000);
function idleTimer() {
    time++
    text.innerHTML = idleDialogue[time]
    if (time == 23) clearInterval(idleFunction)
    if (time < 18) image.style.display = "none"
    else image.style.display = "inline-block"
}

function btnClick() {
    var text = document.getElementById("text")
    clearInterval(idleFunction)
    clicks++;
    text.innerHTML = clickDialogue[clicks]
    if (clicks >= 19) text.innerHTML = "I am not gonna say anything anymore."
    if (clicks == 123) text.innerHTML = "You really want me to say something, don't you?"
    if (clicks == 124) text.innerHTML = "Alright fine, I'll give you something."
    if (clicks == 125) text.innerHTML = "You know this thing called \"Cherry Blossom Cookie\'s trial?\"?"
    if (clicks == 126) text.innerHTML = "I believe there are 3 hidden \"iterations\" of that in the \"server\". What am I saying? I dunno."
    if (clicks == 127) text.innerHTML = "The first one is posted by the site owner. Who? Don't ask me."
    if (clicks == 128) text.innerHTML = "Another is posted by \"an immortal god\", who is a \"helper\". I have no idea what these terms are."
    if (clicks == 129) text.innerHTML = "\"I've been in this server for awhile, ah I wonder what my first words were..\", they say."
    if (clicks == 130) text.innerHTML = "And the last one is from someone who also helps the server, but also doesn't. They also have many names."
    if (clicks >= 131) text.innerHTML = "That's it. I gave a lot already."
    if (clicks >= 260) text.innerHTML = "You're still going to press this??"
    if (clicks >= 520) text.innerHTML = "bestie you gonna stop anytime??"
    if (clicks >= 800) text.innerHTML = "Do you really want more? There's nothing else here!"
    if (clicks >= 1001) text.innerHTML = "FINE! Here's <a href='https://www.youtube.com/watch?v=tkNhPYXHrmU'>something</a> for you! Nothing else after this!"
    if (clicks >= 10000) text.innerHTML = "you're using an autoclicker aren't you?"
}