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

document.addEventListener('keydown', function(e) {
    if(["(",")","*","+","-","/","%",".","Backspace","Enter","1","2","3","4","5","6","7","8","9","0"].includes(e.key)){
        if(e.key === "Backspace"){
            backspace()
        }
        else if(e.key === "Enter"){
            e.preventDefault()
            equalto()
        }
        else{
            str = str + e.key
            document.getElementById("answer").value = str
        }
    }
});
