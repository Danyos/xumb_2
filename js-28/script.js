// let obj={
//     name:"Martun",
//     age:45,
//     year:1996,
// }
// // 1.
// // obj add
// let car='cars'
//
// obj.car='koshik'
//
// obj[car]='bmw'
//
// console.log(obj)

// // 2.
// obj.age=27
// //
// delete obj.year
// console.log(obj)


// let aa="Meruj"
//
//
// aa="Inga"

// console.log(aa)
//
// var bb="Martun"
// bb=77

//
// window.bb=88
// console.log(bb)
// const primNum=77
// primNum=88


// const  anun="meruj"
// anun="Meruj"
// const classRoom=["Meruj","Inga","Martun","Vahe"]
// classRoom.push("Lyov")
// let obj={
//     name:"Martun",
//     age:45,
//     year:1996,
// }
// const class1={
//     year:1996
// }
// for (const objKey in obj) {
//     class1[objKey]=obj[objKey]
// }
// console.log(class1)

// let class2={
//     year:2004
// }
// class2={
//     ...obj,
//     ...class2,
// }
// console.log(class2)

// class1.n="123456"
// class1.year="2007"


// console.log(class1)


//
// console.log(window.bb)
//
// console.log(window)
// window.alert()

// console.log(7+7)




let obj={
    name:"Martun",
    age:45,
    year:1996,
    img:{
        avatar:'1.jpg'
    },
}

//1. Object.preventExtensions(obj)
// miayn chi toxum avelacnel obji mej no andam

// 2.
// Object.seal(obj)
// miayn karox enq edit anel


// 3.
// Object.freeze(obj)
// Object.freeze(obj.img)
//
//
// obj.name="Meruj"
//
// obj.surnname="Avetisyan"
//
// delete obj.year
// obj.img.cover="2.jpg"
//
//
// console.log(obj)


let arr=[
    {
        id:1,
        type:"usd",
        price:"100$",
    },
    {
        id:2,
        type:"usd",
        price:"120$",
    },
    {
        id:3,
        type:"usd",
        price:"80$",
    },
    {
        id:4,
        type:"eur",
        price:"100$",
    },
    {
        id:5,
        type:"eur",
        price:"120e",
    },
    {
        id:6,
        type:"eur",
        price:"80e",
    },
    {
        id:7,
        type:"usd",
        price:"100$",
    },
    {
        id:8,
        type:"amd",
        price:"120d",
    },
    {
        id:9,
        type:"usd",
        price:"80$",
    },
    {
        id:10,
        type:"eur",
        price:"100e",
    },
    {
        id:11,
        type:"amd",
        price:"120d",
    },
    {
        id:12,
        type:"eur",
        price:"80e",
    }
]
let result={}

// {
//     usd:"500$",
//     eur:"800$",
// }




arr.forEach( function (res){

    if(result[res.type]){
        result[res.type]+=parseFloat(res.price)
    }else{
        result[res.type]=parseFloat(res.price)
    }
    // result[res.type]= result[res.type] ?result[res.type]+parseFloat(res.price) :parseFloat(res.price)
})

console.log(result)



let games=[
    {
        id:1,
        name:"1+1",
        result:"2"
    },
    {
        id:2,
        name:"1+2",
        result:"3"
    },
    {
        id:3,
        name:"1+3",
        result:"4"
    },  {
        id:4,
        name:"1+1",
        result:"2"
    },
    {
        id:5,
        name:"1+2",
        result:"3"
    },
    {
        id:6,
        name:"1+3",
        result:"4"
    },
    {
        id:7,
        name:"1+1",
        result:"2"
    },
    {
        id:8,
        name:"1+2",
        result:"3"
    },
    {
        id:9,
        name:"1+8",
        result:"9"
    },
    {
        id:10,
        name:"1+9",
        result:"10"
    },
]
prompt(games[0].name)



// {
//     chisht:5,
//     sxal:1
// }


















