// let i=0
// if(localStorage['count']){
//     i=parseInt(localStorage['count'])
// }else{
//     localStorage['count']=0
// }
// function decriment() {
//     localStorage['count']-=1
//     i--
//     view()
//
// }
// function incriment() {
//     localStorage['count']=parseFloat(localStorage['count'])+1
//     i++
//     view()
// }
// function view(){
//     console.log(i)
// }
// view()

// ["bgnfg","dfvgrg"]

let arr=[]
if(!localStorage['info']){
    localStorage['info']=JSON.stringify([])
}else{
    arr=JSON.parse(localStorage['info'])
}

function addinfo(){
    let info=prompt('greq dher anun@')
    arr.push(info)
    localStorage['info']=JSON.stringify(arr)

}
// menq aystex arel enq zangvacov


// tnayin avelacnel nuyn bany arden objectov
// [{
//     id:1,
//     name:"Levon"
// },
//     {
//         id:2,
//         name:"Martun"
//     }
// ]














// alert("[1,2,3,4]")
// let x="7"
// console.log(JSON.parse(localStorage['info']))


// alert(JSON.stringify([1,2,3,4]))
// let obj={
//     name:"martun"
// }
// alert(JSON.stringify(
//     obj
// ))





