
let arr=[111,222,103,44,56,66,78,44,11,22,33,44,56,66,78,44,11,22,33,44,56,66,78,44,11,22,33,44,56,66,78,44,]
console.log(arr)
arr=arr.sort((a,b)=>{
    console.log(a,b,a-b)
})
console.log(arr)
// let x=0
// for (const objElement of info) {
//     x+=objElement.price
// }
// console.log(x)

// 4:50

// let tarer=["a","b",'c',"a","e","f","g","a","b",'c',"d","e","f","g","a","b",'c',"d","e","f","g","a","b",'c',"d","e","f","g","a","b",'c',"d","e","f","g","a","b",'c',"d","e","f","g","a","b",'c',"d","e","f","g","a","b",'c',"d","e","f","g","a","b",'c',"d","e","f","g","a","b",'c',"d","e","f","g","a","b",'c',"d","e","f","g","a","b",'c',"d","e","f","g","a","b",'c',"d","e","f","g","a","b",'c',"d","e","f","g","a","b",'c',"d","e","f","g","a","b",'c',"d","e","f","g","a","b",'c',"d","e","f","g","a","b",'c',"d","e","f","g","a","b",'c',"d","e","f","g","a","b",'c',"d","e","f","g","a","b",'c',"d","e","f","g","a","b",'c',"d","e","f","g","a","b",'c',"d","e","f","g","a","b",'c',"d","e","f","g","a","b",'c',"d","e","f","g","a","b",'c',"d","e","f","g","a","b",'c',"d","e","f","g","a","b",'c',"d","e","f","g","a","b",'c',"d","e","f","g","a","b",'c',"d","e","f","g","a","b",'c',"d","e","f","g","a","b",'c',"d","e","f","g","a","b",'c',"d","e","f","g","a","b",'c',"d","e","f","g","a","b",'c',"d","e","f","g","a","b",'c',"d","e","f","g","a","b",'c',"d","e","f","g","a","b",'c',"d","e","f","g","a","b",'c',"d","e","f","g","a","b",'c',"d","e","f","g","a","b",'c',"d","e","f","g","a","b",'c',"d","e","f","g","a","b",'c',"d","e","f","g","a","b",'c',"d","e","f","g","a","b",'c',"d","e","f","g","a","b",'c',"d","e","f","g","a","b",'c',"d","e","f","g","a","b",'c',"d","e","f","g","a","b",'c',"d","e","f","g","a","b",'c',"d","e","f","g","a","b",'c',"d","e","f","g","a","b",'c',"d","e","f","g","a","b",'c',"d","e","f","g","a","b",'c',"d","e","f","g","a","b",'c',"d","e","f","g","a","b",'c',"d","e","f","g","a","b",'c',"d","e","f","g","a","b",'c',"d","e","f","g","a","b",'c',"d","e","f","g","a","b",'c',"d","e","f","g","a","b",'c',"d","e","f","g","a","b",'c',"d","e","f","g","a","b",'c',"d","e","f","g","a","b",'c',"d","e","f","g","a","b",'c',"d","e","f","g","a","b",'c',"d","e","f","g","a","b",'c',"d","e","f","g","a","b",'c',"d","e","f","g","a","b",'c',"d","e","f","g","a","b",'c',"d","e","f","g","a","b",'c',"d","e","f","g","a","b",'c',"d","e","f","g","a","b",'c',"d","e","f","g","a","b",'c',"d","e","f","g","a","b",'c',"d","e","f","g","a","b",'c',"d","e","f","g","a","b",'c',"d","e","f","g","a","b",'c',"d","e","f","g","a","b",'c',"d","e","f","g","a","b",'c',"d","e","f","g","a","b",'c',"d","e","f","g","a","b",'c',"d","e","f","g","a","b",'c',"d","e","f","g","a","b",'c',"d","e","f","g","a","b",'c',"d","e","f","g","a","b",'c',"d","e","f","g","a","b",'c',"d","e","f","g","a","b",'c',"d","e","f","g","a","b",'c',"d","e","f","g","a","b",'c',"d","e","f","g","a","b",'c',"d","e","f","g","a","b",'c',"d","e","f","g","a","b",'c',"d","e","f","g","a","b",'c',"d","e","f","g","a","b",'c',"d","e","f","g","a","b",'c',"d","e","f","g","a","b",'c',"d","e","f","g","a","b",'c',"d","e","f","g","a","b",'c',"d","e","f","g","a","b",'c',"d","e","f","g","a","b",'c',"d","e","f","g","a","b",'c',"d","e","f","g","a","b",'c',"d","e","f","g","a","b",'c',"d","e","f","g","a","b",'c',"d","e","f","g","a","b",'c',"d","e","f","g","a","b",'c',"d","e","f","g","a","b",'c',"d","e","f","g","a","b",'c',"d","e","f","g","a","b",'c',"d","e","f","g","a","b",'c',"d","e","f","g","a","b",'c',"d","e","f","g","a","b",'c',"d","e","f","g","a","b",'c',"d","e","f","g","a","b",'c',"d","e","f","g","a","b",'c',"d","e","f","g","a","b",'c',"d","e","f","g","a","b",'c',"d","e","f","g","a","b",'c',"d","e","f","g","a","b",'c',"d","e","f","g","a","b",'c',"d","e","f","g","a","b",'c',"d","e","f","g","a","b",'c',"d","e","f","g","a","b",'c',"d","e","f","g","a","b",'c',"d","e","f","g","a","b",'c',"d","e","f","g","a","b",'c',"d","e","f","g","a","b",'c',"d","e","f","g","a","b",'c',"d","e","f","g","a","b",'c',"d","e","f","g","a","b",'c',"d","e","f","g","a","b",'c',"d","e","f","g","a","b",'c',"d","e","f","g","a","b",'c',"d","e","f","g","a","b",'c',"d","e","f","g","a","b",'c',"d","e","f","g","a","b",'c',"d","e","f","g","a","b",'c',"d","e","f","g","a","b",'c',"d","e","f","g","a","b",'c',"d","e","f","g","a","b",'c',"d","e","f","g","a","b",'c',"d","e","f","g","a","b",'c',"d","e","f","g","a","b",'c',"d","e","f","g","a","b",'c',"d","e","f","g","a","b",'c',"d","e","f","g","a","b",'c',"d","e","f","g","a","b",'c',"d","e","f","g","a","b",'c',"d","e","f","g","a","b",'c',"d","e","f","g","a","b",'c',"d","e","f","g","a","b",'c',"d","e","f","g","a","b",'c',"d","e","f","g","a","b",'c',"d","e","f","g","a","b",'c',"d","e","f","g","a","b",'c',"d","e","f","g","a","b",'c',"d","e","f","g","a","b",'c',"d","e","f","g","a","b",'c',"d","e","f","g","a","b",'c',"d","e","f","g","a","b",'c',"d","e","f","g","a","b",'c',"d","e","f","g","a","b",'c',"d","e","f","g","a","b",'c',"d","e","f","g","a","b",'c',"d","e","f","g","a","b",'c',"d","e","f","g","a","b",'c',"d","e","f","g","a","b",'c',"d","e","f","g","a","b",'c',"d","e","f","g","a","b",'c',"d","e","f","g","a","b",'c',"d","e","f","g","a","b",'c',"d","e","f","g","a","b",'c',"d","e","f","g","a","b",'c',"d","e","f","g","a","b",'c',"d","e","f","g","a","b",'c',"d","e","f","g","a","b",'c',"d","e","f","g","a","b",'c',"d","e","f","g","a","b",'c',"d","e","f","g","a","b",'c',"d","e","f","g","a","b",'c',"d","e","f","g","a","b",'c',"d","e","f","g","a","b",'c',"d","e","f","g","a","b",'c',"d","e","f","g","a","b",'c',"d","e","f","g","a","b",'c',"d","e","f","g","a","b",'c',"d","e","f","g","a","b",'c',"d","e","f","g","a","b",'c',"d","e","f","g","a","b",'c',"f","g","a","b",'c',"f","g","a","b",'c',"z","g","a","b",'c',"f","q","a","b",'c',"d","w","f","g","a","b",'c',"d","e","z","g",]
//
// let WordCountObj=
//     tarer.reduce((previousValue,currentValue)=>{
//
//         previousValue[currentValue]=(previousValue[currentValue] || 0)+1
//
//         return previousValue
//     },{})
// console.log(WordCountObj)











// let obj={
// name:2
// }

// obj['name']=(obj['name'] || 0)+1



// let azganun="Surname"
// obj['name']="Levon"
// obj.age=17
// obj['year']=1997
// obj.azganun='Petrosyan'
// obj[azganun]='Avetisyan'
// console.log(obj)

//
// for (const string of tarer) {
//     if(obj[string]){
//         obj[string]+=1
//     }else{
//         obj[string]=1
//     }
// }
// console.log(obj)































// tnayain
// let info = [
//     {
//         id: 1,
//         title: "iPhone 9",
//         description: "An apple mobile which is nothing like apple",
//         price: 549,
//         brand: "Apple",
//         category: "smartphones",
//         images: "https://dummyjson.com/image/i/products/1/1.jpg",
//         status: 'progress'
//     },
//     {
//         id: 2,
//         title: "iPhone X",
//         description: "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
//         price: 899,
//         brand: "Apple",
//         category: "smartphones",
//         images: "https://dummyjson.com/image/i/products/2/1.jpg",
//         status: 'completed'
//     },
//     {
//         id: 3,
//         title: "Samsung Galaxy S11",
//         description: "Samsung's new variant which goes beyond Galaxy to the Universe",
//         price: 1249,
//         brand: "Samsung",
//         category: "smartphones",
//         images: "https://content.onliner.by/news/1100x5616/3e32826a6507f396652d0ad5cfe8cdb1.jpeg",
//         status: 'reject'
//     },
//     {
//         id: 4,
//         title: "OPPOF19",
//         description: "OPPO F19 is officially announced on April 2021.",
//         price: 280,
//         brand: "OPPO",
//         category: "smartphones",
//         images: "https://m.media-amazon.com/images/I/61Gj-pGyPyS._SX679_.jpg",
//         status: 'cancel'
//     },
//     {
//         id: 5,
//         title: "Huawei P30",
//         description: "Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.",
//         price: 499,
//         brand: "Huawei",
//         category: "smartphones",
//         images: "https://dummyjson.com/image/i/products/5/1.jpg",
//         status: 'progress'
//     },
//     {
//         id: 6,
//         title: "MacBook Pro",
//         description: "MacBook Pro 2021 with mini-LED display may launch between September, November",
//         price: 1749,
//         brand: "APPle",
//         category: "laptops",
//         images: "https://dummyjson.com/image/i/products/6/1.png",
//         status: 'progress'
//     },
//     {
//         id: 7,
//         title: "Samsung Galaxy Book",
//         description: "Samsung Galaxy Book S (2020) Laptop With Intel Lakefield Chip, 8GB of RAM Launched",
//         price: 1499,
//         brand: "Samsung",
//         category: "laptops",
//         images: "https://dummyjson.com/image/i/products/7/1.jpg",
//         status: 'cancel'
//     },
//     {
//         id: 8,
//         title: "Microsoft Surface Laptop 4",
//         description: "Style and speed. Stand out on HD video calls backed by Studio Mics. Capture ideas on the vibrant touchscreen.",
//         price: 1499,
//         discountPercentage: 10.23,
//         brand: "Microsoft Surface",
//         category: "laptops",
//         images: "https://dummyjson.com/image/i/products/8/1.jpg",
//         status: 'reject'
//     },
//     {
//         id: 9,
//         title: "Infinix INBOOK",
//         description: "Infinix Inbook X1 Ci3 10th 8GB 256GB 14 Win10 Grey – 1 Year Warranty",
//         price: 1099,
//         brand: "Infinix",
//         category: "laptops",
//         images: "https://dummyjson.com/image/i/products/9/1.jpg",
//         status: 'completed'
//     },
//     {
//         id: 10,
//         title: "HP Pavilion 15-DK1056WM",
//         description: "HP Pavilion 15-DK1056WM Gaming Laptop 10th Gen Core i5, 8GB, 256GB SSD, GTX 1650 4GB, Windows 10",
//         price: 1099,
//         brand: "HP Pavilion",
//         category: "laptops",
//         images: "https://dummyjson.com/image/i/products/10/1.jpg",
//         status: 'reject'
//     },
//     {
//         id: 11,
//         title: "perfume Oil",
//         description: "Mega Discount, Impression of Acqua Di Gio by GiorgioArmani concentrated attar perfume Oil",
//         price: 13,
//         brand: "Impression of Acqua Di Gio",
//         category: "fragrances",
//         images: "https://dummyjson.com/image/i/products/11/1.jpg",
//         status: 'cancel'
//     },
//     {
//         id: 12,
//         title: "Brown Perfume",
//         description: "Royal_Mirage Sport Brown Perfume for Men & Women - 120ml",
//         price: 40,
//         brand: "Royal_Mirage",
//         category: "fragrances",
//     },
// ]

// hashvel te vor brand ic inchqam gumar e spasvum
// {
//     apple:500,
//     samsung:700
// }

// 2./ unanaq prompt greq te inch modeli apranq eq uzum inqy dhez
// veradarcni inchqan vor gtav


// 3. 2 prompt unaq greq vor tvic vor tivy veradarcni ayd gnayin apranqnery