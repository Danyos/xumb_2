let num=0
let start=false
let countType=null
let numtag=document.querySelector('.num')
let mystart=document.querySelector('.mystart')
numtag.innerHTML=num
let setin=null
function decriment() {

    countType=-1

    if(start){
        mystart.classList.add("d-none")
        timer()
    }else{
        mystart.classList.remove("d-none")
    }
}
function incriment() {

    countType=1

    if(start){
        mystart.classList.add("d-none")
        timer()
    }else{
        mystart.classList.remove("d-none")
    }
}
function timer(){
    clearInterval(setin)
    setin=setInterval(function(){
        num+=countType
        numtag.innerHTML=num
    },100)
}
function starts(){
    start=true
    timer()
}