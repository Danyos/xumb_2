// let men=[
//     {
//         id:1,
//         name:"Vardush",
//         gender:"girl"
//     },{
//         id:2,
//         name:"Vaspur",
//         gender:"man"
//     },{
//         id:3,
//         name:"Geghanush",
//         gender:"girl"
//     },{
//         id:4,
//         name:"Pilipos",
//         gender:"man"
//     },{
//         id:5,
//         name:"Marlen",
//         gender:"girl"
//     },{
//         id:6,
//         name:"Gvidon",
//         gender:"man"
//     },
// ]


// let obj={
//     man:[2,4,6],
//     girl:[1,3,5]
// }
// for (const objKey in obj) {
//     console.log(objKey)
//     obj[objKey].forEach(res=>{
//        let m= men.find(data=>data.id===res)
//        // obj[objKey].splice(obj[objKey].indexOf(res),1,m)
//             obj[objKey][obj[objKey].indexOf(res)]=m
//
//     })
// }
// console.log(obj)


let price=[
    {
        id:1,
        name:"Valod",
        payment_way:"visa",
        price:"1500$"
    }, {
        id:2,
        name:"Vazgen",
        payment_way:"paypal",
        price:"1400$"
    }, {
        id:3,
        name:"grish",
        payment_way:"bitcoin",
        price:"1700$"
    }, {
        id:4,
        name:"Karo",
        payment_way:"visa",
        price:"100$"
    }, {
        id:5,
        name:"Serob",
        payment_way:"bitcoin",
        price:"700$"
    },
    {
        id:6,
        name:"Garevan",
        payment_way:"idram",
        price:"500$"
    }
]
 function hightolow(){
        let hitolo=price.sort((a,b)=>parseFloat(a.price)-parseFloat(b.price))
     console.table(hitolo)
}
 function lowtohigh(){
     let hitolo=price.sort((a,b)=>parseFloat(b.price)-parseFloat(a.price))
     console.table(hitolo)
 }










// tnayin

let category=[
    {
        id:1,
        name:"koshik"
    },
    {
        id:2,
        name:"hamazgest"
    },
]
let model_id=[
    {
        id:1,
        name:"ck"
    },
    {
        id:2,
        name:"armani"
    },{
        id:3,
        name:"dg"
    },
]
let product=[
    {
        id:1,
        cat_id:1,
        name:"basanoshka",
        price:"20$",
        status:true,
        model_id:1
    },
    {
        id:2,
        cat_id:1,
        name:"Ked",
        price:"20$",
        status:false,
        model_id:1
    },
    {
        id:3,
        cat_id:1,
        name:"Charox",
        price:"20$",
        status:false,
        model_id:2
    },
    {
        id:4,
        cat_id:2,
        name:"Knaci vernshapik",
        price:"20$",
        status:true,
        model_id:1
    },{
        id:4,
        cat_id:2,
        name:"txamardu vernshapik",
        price:"20$",
        status:true,
        model_id:3
    },{
        id:5,
        cat_id:1,
        name:"tapchka",
        price:"20$",
        status:true,
        model_id:1
    },
    {
        id:6,
        cat_id:1,
        name:"Butsi",
        price:"20$",
        status:false,
        model_id:2
    },
    {
        id:7,
        cat_id:1,
        name:"Salitni",
        price:"20$",
        status:false,
        model_id:3
    },
    {
        id:8,
        cat_id:2,
        name:"Tabat",
        price:"20$",
        status:true,
        model_id:2
    },
    {
        id:9,
        cat_id:2,
        name:"txamardu txabat",
        price:"20$",
        status:true,
        model_id:1
    },
]
// 1.// tpel yst kategoryaneri apranqnery  u vori status false gri arka che



// 2. unenal 2 knopka
    // 1-in te vor categoryai apranq e uzum
    // 2-rd knopken te vor model_idi
    // vori vra
    // sexmes kbaci prompt gres te vor model_idi kam kategory apranqernen
    // qez hetaqrum beri

