
//  let userInfo = [
//     {
//         id: 1,
//         name: "Inga"
//     },
//     {
//         id: 2,
//         name: "Meruj"
//     },
//     {
//         id: 3,
//         name: "Martun"
//     }
// ]
//
//
// function adds() {
//     let lists = document.querySelector('.list')
//
//     let firstName = document.querySelector('#firstName')
//     let uid=userInfo.length ? userInfo[userInfo.length - 1].id + 1 :1;
//     userInfo.push({
//         id:uid,
//         name: firstName.value
//     })
//     view()
//     firstName.value = ''
//
// }
//
// function view(arg) {
//     let ulTage
//     if (arg) {
//         ulTage = document.createElement('ul')
//         ulTage.classList.add('list')
//         document.body.appendChild(ulTage)
//     } else {
//         ulTage = document.querySelector('.list')
//         ulTage.innerHTML=''
//     }
//
//     userInfo.forEach(res => {
//         let liTage = document.createElement('li')
//         liTage.innerHTML = res.id+" - "+res.name
//         ulTage.appendChild(liTage)
//
//
//
//         liTage.addEventListener("dblclick",function (e){
//             e.target.remove()
//             userInfo=userInfo.filter(data=>data.id!==res.id)
//         })
//     })
// }
//
// view(true)



let arr=[1,10,20,30,47,12,86,989,99]
let mylist=document.querySelector('.mylist')
// v1

// arr.forEach(res=>{
//   mylist.innerHTML+=`<li ondblclick="deleted(event)">${res}</li>`
//
// })
//
// function deleted(e){
//     arr.splice(arr.indexOf(+e.target.innerHTML),1)
//     e.target.remove()
//     console.log(arr)
// }



// v2
// arr.forEach(res=>{
// let liTage=document.createElement('li')
//     liTage.innerHTML=res
//     mylist.appendChild(liTage)
//     liTage.addEventListener("dblclick",function deleted(e){
//         arr.splice(arr.indexOf(+e.target.innerHTML),1)
//         e.target.remove()
//         console.log(arr)
//     })
// })



// v3
// amenavat tarberak
arr.forEach(res=>{
   mylist.innerHTML+=`<li class="mytag">${res}</li>`
})
let mytag=document.querySelectorAll('.mytag')
mytag.forEach(res=> {
    res.addEventListener("dblclick",function deleted(e){
        arr.splice(arr.indexOf(+e.target.innerHTML),1)
        e.target.remove()
        console.log(arr)

    })
})

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








