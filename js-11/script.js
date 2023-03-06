// let num = [1, 2, 3, 4, 5, 6, 7, 8]
// let res = []
// for (let i = 0; i < num.length; i++) {
//     res.push(num[i])
//
// }
// console.log(res)

//
// let arr= [1,"Barev ",NaN,"Grish",false,"jan",5,4,2,3,"Vonces","34", "48dd"]
//
// let i=0
// while(i<arr.length){
//     if(typeof arr[i]==='number' && !isNaN(arr[i]) || typeof arr[i]==='string' && !isNaN(arr[i])){
//         console.log(arr[i])
//     }
//     i++
// }

// let arr= [1,"Barev ",'true',"Grish",false,"jan",5,4,2,3,"Vonces"]
// let i=0
// while(i<arr.length){
//     if(typeof arr[i]==='number'){
//         arr[i]**=2
//     }
//     i++
// }
// console.log(arr)

// ____________________________
// let arr= [1,"barev",'true',"Grish",false,"ghh",5,4,2,3,"ghdt",7]
// arr.splice(1,1)
// arr.indexOf("jan")

// console.log(arr.slice(1,3))
// arr.splice(1,1,2)
// console.log(arr)
// let i=0




//// let arr= [1,"barev",'true',"Grish",false,"ghh",5,4,2,3,"ghdt",7]
// while (i<arr.length){
//     if((typeof arr[i])!='number'){
//         arr.splice(i,1)
//       continue
//     }
//     i++
// }
// console.log(arr)
// let arr= [1,"a","b",7,"c",8,"d",9,10]
//
//
// for (let i=0; i<arr.length; i++){
//
//     if(typeof arr[i]!=='number'){
//         arr.splice(i,1)
//         i--
//     }
// }
// console.log(arr)




// let x=[1,1,7,18,74,54,71,21,4,7,54,44,21,18,22]

// x=x.sort((a,b)=>a-b)
// console.log(x)
// for (let i=0;i<x.length;i++){
//     if (x.indexOf(x[i])!==x.lastIndexOf(x[i])){
//         x.splice(x.indexOf(x[i]),1)
//         x.splice(x.lastIndexOf(x[i]),1)
//         i--
//     }
// }
// console.log(x)
// let i=0
// while (i<x.length){
//
//     if (x.indexOf(x[i])!==x.lastIndexOf(x[i])){
//         x.splice(x.indexOf(x[i]),1)
//         x.splice(x.lastIndexOf(x[i]),1)
//         i--
//     }
//     i++
// }
// console.log(x)



let x=[1,1,7,-18,74,54,71,21,4,7,54,-44,21,18,22]
let res=0
let count=0
for (let i=0;i<x.length;i++){
    if(x[i]<0){
        res+=x[i]
        count++
    }
}
console.log(res/count)