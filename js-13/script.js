function num(arg,astichan=2){

    return arg**astichan
}
// let a=num(2)//4
// let b=num(a)//16
// let c=num(b)//256
// let d=num(num(num(2,3),2))
//
// console.log(d)
// let a1=(arg,arg2)=>1?"chisht":"sxal"
//
// let a2=function (arg,arg2){
//     if(1){
//         return "chisht"
//     }else{
//         return "sxal"
//     }
//
// }

// function hi(arg){
//    return arg(77)
// }
// let x=hi(function (arg){
//     return arg*2
// })
// console.log(x)


// let arr=[1,4,7,9,2,5,8,3,false,-11,15,14,12,19,18]
// arr.forEach( (arg,index)=>{
//     console.log(arg)
// })

// map
// let x=arr.map((res,index)=>res*2






//
// console.log(x)
// console.log(y)
// let x=arr.filter(res =>typeof res==='number' && res>0)
// console.log(x)
// let arr=[1,4,7,9,2,5,8,3,false,-11,15,14,12,19,18]

// filter
// reduce

// let x=arr.reduce((previousValue, currentValue)=>{
//     if(currentValue>0 && currentValue%2===0){
//         previousValue[1].push(currentValue)
//
//     }else if(currentValue>0 && currentValue%2===1){
//         previousValue[0].push(currentValue)
//     }
//     return previousValue
// },[[],[]])
// let y=arr.reduce(function (previousValue, currentValue){
//
//     if(currentValue>0){
//          previousValue+=currentValue
//     }
//     return previousValue
// },0)
// let pv=0
// for (let i=0;i<arr.length;i++){
//     if(arr[i]>0) {
//         pv+=arr[i]
//     }
//
// }
//
// console.log(y)


// let arr=[1,4,7,9,2,5,8,3,false,-11,15,14,12,19,18]
// console.log(arr)
// // let x=arr.find(res=>res===90)
// // console.log(x)
// // find
// // sort
// let x= arr.sort((a,b)=>{
//  return b-a
// })
// console.log(x)




// 1. drakan tareri mijin tvabanakan@ //[1,5,-1,7,-5,-4,9,8,7,2,-10],
// tveri gumary bajanac qanaki  [13,3] lucel redusov

// 2.1. zuyg index unecox tareri gumary

// 2.2. zuyg index unecox tareri artadryal@

// 2.3. kent tar unecox indexneri gumary

// 3. drakan ev bacasakan tarri qanak@ //[1,5,-1,7,-5,-4,9,8,7,-10]  //7//4[[2],[3]]

// 4. gtnel ayn tary vor ir indexi vra kbajanvi anmnacord [1,5,4,15,-5,-4,9,8,7,2,-10]// [4,15]

// 5. gtnel ayn tareri qanaky vor indexy mets e tvyal x tvic veradarcnel nor zagvaci tesqov

// 6.gtnel zagvaci metsaguyn tary
// 7. zangvaci 2 rd amenaets arjeqy

// 8. gtnel zagvaci poqraguyn tary

// 9. gtnel zagvaci mej ayn tarery
// voronq chunen ayd zangvaci mej voreve andam vor kbajanvi ir vra anmnacord






// let arr = [1, 5, -1, 7, -5, -4, 9, 8, 10, 2, -10]
// let x = arr.reduce((previousValue, currentValue) =>{
//     if(currentValue>0){
//         previousValue[0]+=currentValue
//         previousValue[1]++
//
//     }
//     return previousValue
// } ,[0,0])
// console.log(x[0]/x[1])
// let arr = [1, 5, -1, 7, -5, - 4, 9, 8, 17, -10]
// let y = []
// let z = []
// let x = arr.filter((arg, index) => {
//     if(arg>7){
//         return arg
//     }
// })
// console.log(x)
