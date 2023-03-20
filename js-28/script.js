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

let info = [
    {
        id: 1,
        title: "iPhone 9",
        description: "An apple mobile which is nothing like apple",
        price: 549,
        brand: "Apple",
        category: "smartphones",
        images: "https://dummyjson.com/image/i/products/1/1.jpg",
        status: 'progress'
    },
    {
        id: 2,
        title: "iPhone X",
        description: "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
        price: 899,
        brand: "Apple",
        category: "smartphones",
        images: "https://dummyjson.com/image/i/products/2/1.jpg",
        status: 'completed'
    },
    {
        id: 3,
        title: "Samsung Galaxy S11",
        description: "Samsung's new variant which goes beyond Galaxy to the Universe",
        price: 1249,
        brand: "Samsung",
        category: "smartphones",
        images: "https://content.onliner.by/news/1100x5616/3e32826a6507f396652d0ad5cfe8cdb1.jpeg",
        status: 'reject'
    },
    {
        id: 4,
        title: "OPPOF19",
        description: "OPPO F19 is officially announced on April 2021.",
        price: 280,
        brand: "OPPO",
        category: "smartphones",
        images: "https://m.media-amazon.com/images/I/61Gj-pGyPyS._SX679_.jpg",
        status: 'cancel'
    },
    {
        id: 5,
        title: "Huawei P30",
        description: "Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.",
        price: 499,
        brand: "Huawei",
        category: "smartphones",
        images: "https://dummyjson.com/image/i/products/5/1.jpg",
        status: 'progress'
    },
    {
        id: 6,
        title: "MacBook Pro",
        description: "MacBook Pro 2021 with mini-LED display may launch between September, November",
        price: 1749,
        brand: "APPle",
        category: "laptops",
        images: "https://dummyjson.com/image/i/products/6/1.png",
        status: 'progress'
    },
    {
        id: 7,
        title: "Samsung Galaxy Book",
        description: "Samsung Galaxy Book S (2020) Laptop With Intel Lakefield Chip, 8GB of RAM Launched",
        price: 1499,
        brand: "Samsung",
        category: "laptops",
        images: "https://dummyjson.com/image/i/products/7/1.jpg",
        status: 'cancel'
    },
    {
        id: 8,
        title: "Microsoft Surface Laptop 4",
        description: "Style and speed. Stand out on HD video calls backed by Studio Mics. Capture ideas on the vibrant touchscreen.",
        price: 1499,
        discountPercentage: 10.23,
        brand: "Microsoft Surface",
        category: "laptops",
        images: "https://dummyjson.com/image/i/products/8/1.jpg",
        status: 'reject'
    },
    {
        id: 9,
        title: "Infinix INBOOK",
        description: "Infinix Inbook X1 Ci3 10th 8GB 256GB 14 Win10 Grey – 1 Year Warranty",
        price: 1099,
        brand: "Infinix",
        category: "laptops",
        images: "https://dummyjson.com/image/i/products/9/1.jpg",
        status: 'completed'
    },
    {
        id: 10,
        title: "HP Pavilion 15-DK1056WM",
        description: "HP Pavilion 15-DK1056WM Gaming Laptop 10th Gen Core i5, 8GB, 256GB SSD, GTX 1650 4GB, Windows 10",
        price: 1099,
        brand: "HP Pavilion",
        category: "laptops",
        images: "https://dummyjson.com/image/i/products/10/1.jpg",
        status: 'reject'
    },
    {
        id: 11,
        title: "perfume Oil",
        description: "Mega Discount, Impression of Acqua Di Gio by GiorgioArmani concentrated attar perfume Oil",
        price: 13,
        brand: "Impression of Acqua Di Gio",
        category: "fragrances",
        images: "https://dummyjson.com/image/i/products/11/1.jpg",
        status: 'cancel'
    },
    {
        id: 12,
        title: "Brown Perfume",
        description: "Royal_Mirage Sport Brown Perfume for Men & Women - 120ml",
        price: 40,
        brand: "Royal_Mirage",
        category: "fragrances",
    },
]

















