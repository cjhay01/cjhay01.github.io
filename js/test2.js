document.onkeydown = function(e) {
    if(e.keyCode == '37'){
    return false;
    }
    if(e.keyCode == '38'){
        return false;
    }
    if(e.keyCode == '39'){
        return false;
    }
    if(e.keyCode == '40'){
        return false;
        }
    if(e.keyCode == '190'){
        return console.log("preiod")
    }
    if(e.key == ','){
        return console.log("coma")
    }
    if(e.keyCode == '32'){
        return console.log("spac")
    }
    if(e.keyCode == 'J'.charCodeAt(0)){
        return false;
    }
    if(e.keyCode == 'L'.charCodeAt(0)){
        return false;
    }
    }