// let category=[
//     {
//         id:1,
//         name:"koshik"
//     },
//     {
//         id:2,
//         name:"hamazgest"
//     },{
//         id:3,
//         name:"pinjak"
//     },
// ]
let model_id=[
    {
        id:1,
        name:"ck"
    },
    {
        id:2,
        name:"Armeni"
    },{
        id:3,
        name:"Dg"
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
        cat_id:3,
        name:"txamardu pinjak",
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
// let item=[]
// category.forEach(res=>{
//     item.push(res.name)
//     let p=product.filter(data=>data.cat_id===res.id)
//     item.push(p)
// })
//
// item.forEach(res=>{
//    if(Array.isArray(res)){
//        res.forEach(data=>{
//            console.log(data.name, data.status?"arka":"verjacac")
//        })
//    }else{
//        console.log(res)
//    }
// })





// 2. unenal 2 knopka
    // 1-in te vor categoryai apranq e uzum
    // 2-rd knopken te vor model_idi
    // vori vra
    // sexmes kbaci prompt gres te vor model_idi kam kategory apranqernen
    // qez hetaqrum beri









function searchs(){
    let z=[]
    let searchVal=document.querySelector("#search")
    let chekck=document.querySelectorAll(".chekck")
    chekck.forEach(res=>{
        if(res.checked){
           z.push(+res.value)
        }
    })
    if(z.length){
        showproduct(z)
    }
    // console.log(searchVal.value)
    // if(chekck.checked){
    //     console.log(chekck.value)
    // }
    // searchVal.value=''
}



function showproduct(z){

   let x=product.filter(res=>z.includes(res.model_id))
    console.table(x)
}






