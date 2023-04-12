// let gamesword=['index','home','about','services','skills','teams','contact','category']
// function randLeter(anun) {
//     let messageArray=anun.split('')
//     let result=''
//     for (let i=0; i<messageArray.length; i++){
//
//         let randId=Math.floor(Math.random()*messageArray.length)
//         result+=messageArray[randId]
//         messageArray.splice(randId,1)
//         i--
//     }
//    return result
// }
//
// let res={
//     current:0,
//     worning:0,
//     refresh:0,
// }
// for (let i=0; i<gamesword.length;i++){
//     let randId=Math.floor(Math.random()*gamesword.length)
//     let x=prompt(randLeter(gamesword[randId]))
//
//
//     if (x===gamesword[randId]){
//        res.current++
//
//     }else{
//         res.worning++
//     }
//     gamesword.splice(randId,1)
//     i--
// }
// console.log(res)




let time=24
let k=null

function mystop(){
    clearInterval(k)
}

function mystart(){

    if(k){
        clearInterval(k)
    }
    k=setInterval(function(){
        console.log(time)
        time--
        // if(time==0){
        //     clearInterval(k)
        // }

    },1000)
}