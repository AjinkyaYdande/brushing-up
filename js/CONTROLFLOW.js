function isUserValid(bool){
    return bool
}

var answer = isUserValid(true) ? "You may enter" : "Access Denied";

function condition (){
    if(isUserValid(true)){
        return "You may enter"
    }else{
        return "Access Denied"
    }
}

var answer2 = condition();