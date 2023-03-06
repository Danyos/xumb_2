//  let userInfo = [
//     {
//         id: 1,
//         name: "Inga",
//         status:true,
//         images:[1,2,3,4,5,6],
//         info:{
//             country:"Yerevan",
//             from:"Bangladesh",
//             phoneNumber:"123456789"
//         }
//     },
//     {
//         id: 2,
//         name: "Meruj"
//     },
//     {
//         id: 3,
//         name: "Martun"
//     },
//     {
//         id: 4,
//         name: "levon"
//     },
//     {
//         id: 5,
//         name: "vahe"
//     }
// ]


let infos = {
    id: 1,
    name: "Inga",
    status: true,
    images: [1, 2, 3, 4, 5, 6],
    info2 : {
        name: "Inga",
        country: "Yerevan",
        from: "Bangladesh",
        phoneNumber: "123456789"
    }

}


let x = Object.keys(infos.info2)
// //
for (let i=0;i<x.length;i++){
infos[infos.info2[x[i]]]=i
    // console.log(x[i],)
}

console.log(infos)
//
// let arr=[10,20,30,40,50,60,70]
//
// for (let x  in arr) {
//     console.log(arr[x])
// }

//
// let info2 = {
//     name: "Inga",
//     country: "Yerevan",
//     from: "Bangladesh",
//     phoneNumber: "123456789"
// }
//
// for (const info2Key in info2) {
//     console.log(info2Key+" -> "+ info2[info2Key])
// }
//
//






// let infos = {
//     id: 1,
//     name: "Inga",
//     status: true,
//     images: [1, 2, 3, 4, 5, 6],
//     info2 : {
//         name: "Inga",
//         country: "Yerevan",
//         from: "Bangladesh",
//         phoneNumber: "123456789"
//     }
//
// }

// for (const infosKey in infos.info2) {
//     console.log(infosKey,infos.info2[infosKey])
// }

// let infoCart=[
//     {
//         id:1,
//         productName:"item-1",
//         price:"700$"
//     },
//     {
//         id:2,
//         productName:"item-2",
//         price:"800$"
//     },
//     {
//         id:3,
//         productName:"item-3",
//         price:"450$"
//     },
//     {
//         id:4,
//         productName:"item-4",
//         price:"300$"
//     },
//     {
//         id:5,
//         productName:"item-5",
//         price:"200$"
//     },
//     {
//         id:6,
//         productName:"item-6",
//         price:"250$"
//     }
// ]
//
// let arrinfo=["250$","400$","200$","300$","450$","800$","700$"]
//
// let max={
//     price:0
// }
// for (const infoValue of infoCart) {
//     if( parseFloat(infoValue.price)>parseFloat(max.price)){
//         max=infoValue
//
//     }
// }
//
// console.log(max)














// for (const num of arrinfo) {
//
//     if(max<parseFloat(num)){
//         max=parseFloat(num)
//     }
// }

// console.log(max)

















// const price=[
//     {
//         id:1,
//         name:"Valod",
//         payment_way:"visa",
//         price:"1500$"
//     },
//     {
//         id:2,
//         name:"Vazgen",
//         payment_way:"paypal",
//         price:"1400$"
//     },
//     {
//         id:3,
//         name:"grish",
//         payment_way:"bitcoin",
//         price:"1700$"
//     },
//     {
//         id:4,
//         name:"Karo",
//         payment_way:"visa",
//         price:"100$"
//     },
//     {
//         id:5,
//         name:"Serob",
//         payment_way:"bitcoin",
//         price:"500$"
//     },
// ]
//
//
// {
//     bitcoin:"yndhanur gumar", //2200$
//     visa:"yndhanur gumar",
//     paypal:"yndhanur gumar"
//
// }













