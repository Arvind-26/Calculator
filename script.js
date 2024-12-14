let str = ""
function equation(v){
    str = str + v
    document.getElementById("answer").value = str
}

function allclear(){
    str = ""
    document.getElementById("answer").value = str
}

function equalto(){
    document.getElementById("answer").value = eval(str)
    str = ""
}

function backspace(){
    str = str.slice(0, -1);
    document.getElementById("answer").value = str
}

