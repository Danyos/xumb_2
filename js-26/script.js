// const patmentList = [
//     {
//         id: 1,
//         name: "Valod",
//         payment_way: "visa",
//         exchange: 'usd',
//         price: "1500$"
//     },
//     {
//         id: 2,
//         name: "Vazgen",
//         payment_way: "paypal",
//         exchange: 'usd',
//         price: "1400$"
//     },
//     {
//         id: 3,
//         name: "grish",
//         payment_way: "bitcoin",
//         exchange: 'usd',
//         price: "1700$"
//     },
//     {
//         id: 4,
//         name: "Karo",
//         payment_way: "visa",
//         exchange: 'usd',
//         price: "100$"
//     },
//     {
//         id: 5,
//         name: "Serob",
//         payment_way: "bitcoin",
//         exchange: 'usd',
//         price: "500$"
//     },
//     {
//         id: 6,
//         name: "Valod",
//         payment_way: "visa",
//         exchange: 'eur',
//         price: "1500e"
//     },
//     {
//         id: 7,
//         name: "Vazgen",
//         payment_way: "paypal",
//         exchange: 'eur',
//         price: "1400e"
//     },
//     {
//         id: 8,
//         name: "grish",
//         payment_way: "bitcoin",
//         exchange: 'eur',
//         price: "1700e"
//     },
//     {
//         id: 9,
//         name: "Karo",
//         payment_way: "visa",
//         exchange: 'amd',
//         price: "100d"
//     },
//     {
//         id: 10,
//         name: "Serob",
//         payment_way: "bitcoin",
//         exchange: 'amd',
//         price: "500d"
//     },
//     {
//         id: 11,
//         name: "Valod",
//         payment_way: "visa",
//         exchange: 'amd',
//         price: "1500d"
//     },
//     {
//         id: 12,
//         name: "Vazgen",
//         payment_way: "paypal",
//         exchange: 'amd',
//         price: "1400d"
//     },
//     {
//         id: 13,
//         name: "grish",
//         payment_way: "bitcoin",
//         exchange: 'rub',
//         price: "1700r"
//     },
//     {
//         id: 14,
//         name: "Karo",
//         payment_way: "visa",
//         exchange: 'rub',
//         price: "100r"
//     },
//     {
//         id: 15,
//         name: "Serob",
//         payment_way: "bitcoin",
//         exchange: 'rub',
//         price: "500r"
//     },
//     {
//         id: 16,
//         name: "Serob",
//         payment_way: "bitcoin",
//         exchange: 'rub',
//         price: "500r"
//     },
//
// ]

// let pay = {
//     bitcoin: {
//         amd: 1000,
//         rub: 300,
//         eur: 1802,
//         usd: 700
//     },
//     visa: {
//         amd: 1000,
//         rub: 300,
//         eur: 1802,
//         usd: 700
//     },
//     paypal: {
//         amd: 1000,
//         rub: 300,
//         eur: 1802,
//         usd: 700
//     }
// }


// 1. hashvel tveri gumary

// let list={
//     amd: 1000,
//     rub: 300,
//     eur: 1802,
//     usd: 700,
//     asd: 1700,
// }
//
// let sum=0
// for(let res in list){
//    sum+=list[res]
// }
// console.log(sum)
//

// **********************************

// 2. sax tveri gumary

// let pay = {
//     bitcoin: {
//         amd: 1,
//         rub: 2,
//         eur: 3,
//         usd: 4
//     },
//     visa: {
//         amd: 5,
//         rub: 6,
//         eur: 7,
//         usd: 8
//     },
//     paypal: {
//         amd: 9,
//         rub: 10,
//         eur: 11,
//         usd: 12
//     }
// }
// let sum = {}

// for (const Key1 in pay) {
//     for (const Key2 in pay[Key1]) {
//         if (sum[Key2]) {
//             sum[Key2] += pay[Key1][Key2]
//         } else {
//             sum[Key2] = pay[Key1][Key2]
//         }
//     }
// }
// console.log(sum)


//
// {
//     amd:15,
//     rub: 18,
//     eur: 21,
//     usd: 24
// }


// 3
// amen meky arandzin

//
// let pay2 =
//     [
//         {
//             bitcoin: {
//                 amd: 1,
//                 rub: 2,
//                 eur: 3,
//                 usd: 4
//             }
//         },
//         {
//             visa: {
//                 amd: 5,
//                 rub: 6,
//                 eur: 7,
//                 usd: 8
//             },
//         },
//         {
//             paypal: {
//                 amd: 9,
//                 rub: 10,
//                 eur: 11,
//                 usd: 12
//             }
//         }
//     ]
//
// console.log(pay2)
// let x=pay2.reduce((previousValue,currentValue)=>{
//     for (let Key1 in currentValue){
//         for (const key2 in currentValue[Key1]) {
//         if (previousValue[key2]) {
//
//             previousValue[key2]  +=  currentValue[Key1][key2]
//         } else {
//
//             previousValue[key2] = currentValue[Key1][key2]
//         }
//         }
//
//     }
//
//  return previousValue
// },{})
//
// console.log(x)


// let pay2 =
//     [
//         {
//             bitcoin: {
//                 amd: 1,
//                 rub: 2,
//                 eur: 3,
//                 usd: 4
//             }
//         },
//         {
//             visa: {
//                 amd: 5,
//                 rub: 6,
//                 eur: 7,
//                 usd: 8
//             },
//         },
//         {
//             paypal: {
//                 amd: 9,
//                 rub: 10,
//                 eur: 11,
//                 usd: 12
//             }
//         }
//     ]


// let x= []
// // console.log(x)
// for (const pay2Element in pay2) {
//    x=[
//        ...x,
//        ...pay2[pay2Element]
//    ]
// }
// console.log(x)


// tnayin

let men = [
    {
        id: 1,
        name: "Vardush",
        gender: "girl"
    }, {
        id: 2,
        name: "Vaspur",
        gender: "man"
    }, {
        id: 3,
        name: "Geghanush",
        gender: "girl"
    }, {
        id: 4,
        name: "Pilipos",
        gender: "man"
    }, {
        id: 5,
        name: "Marlen",
        gender: "girl"
    }, {
        id: 6,
        name: "Gvidon",
        gender: "man"
    },
]
// 1  //{
//     man:[2,4,6],
//     girl:[1,3,5]
// }


// 2

// erb stanaq object

let obj = {
    man: [2, 4, 6],
    girl: [1, 3, 5]
}


// man
// Vaspur,
//Pilipos,
// Gvidon

// girl

//  Vardush
//  Geghanush
//  Marlen


// 3
// stanaq ays tesqy
let obj2 = {
    man: [
        {
            id: 1,
            name: "Vardush",
            gender: "girl"
        },
        {
            id: 2,
            name: "Vaspur",
            gender: "man"
        },
        {
            id: 6,
            name: "Gvidon",
            gender: "man"
        }]
    ,
    girl: [{
        id: 1,
        name: "Vardush",
        gender: "girl"
    },
        {
            id: 3,
            name: "Geghanush",
            gender: "girl"
        },
        {
            id: 5,
            name: "Marlen",
            gender: "girl"
        }]
}











































