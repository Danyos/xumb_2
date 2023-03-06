let category=[
    {
        id:1,
        name:"koshik"
    },
    {
        id:2,
        name:"hamazgest"
    },{
        id:3,
        name:"pinjak"
    },
]
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
        price:"2020$",
        status:true,
        mod_id:1
    },
    {
        id:2,
        cat_id:1,
        name:"Ked",
        price:"320$",
        status:false,
        mod_id:1
    },
    {
        id:3,
        cat_id:1,
        name:"Charox",
        price:"270$",
        status:false,
        mod_id:2
    },
    {
        id:4,
        cat_id:2,
        name:"Knacishalvar",
        price:"210$",
        status:true,
        mod_id:1
    },{
        id:4,
        cat_id:3,
        name:"txamardu glxark",
        price:"250$",
        status:true,
        mod_id:3
    },{
        id:5,
        cat_id:1,
        name: "tapchka",
        price: "200$",
        status: true,
        mod_id: 1
    },
    {
        id: 6,
        cat_id: 1,
        name: "Butsi",
        price: "1220$",
        status: false,
        mod_id: 2
    },
    {
        id: 7,
        cat_id: 1,
        name: "Salitni",
        price: "120$",
        status: false,
        mod_id: 3
    },
    {
        id: 8,
        cat_id: 2,
        name: "Tabat",
        price: "50$",
        status: true,
        mod_id: 2
    },
    {
        id: 9,
        cat_id: 2,
        name: "txamardu maika",
        price: "100$",
        status: true,
        mod_id: 1
    }, {
        id: 10,
        cat_id: 2,
        name: "txamardu prpur",
        price: "20$",
        status: true,
        mod_id: 2
    }, {
        id: 11,
        cat_id: 2,
        name: "txamardu txabat",
        price: "60$",
        status: true,
        mod_id: 3
    }
]
let filter_by_list={
    category:[],
    model:[],
    status:'',
    price:{
        min:null,
        max:null
    }
}
let categori=document.querySelectorAll('.categori')
categori.forEach(res=>{
  res.addEventListener("change",function (e){
     if (filter_by_list.category.includes(+e.target.value)){
         filter_by_list.category.splice(filter_by_list.category.indexOf(+e.target.value),1)
     }else{
         filter_by_list.category.push(+e.target.value)
     }
      showProduct()
  })
})
let model=document.querySelectorAll('.model')
model.forEach(res=>{
  res.addEventListener("change",function (e){
      if (filter_by_list.model.includes(+e.target.value)){
          filter_by_list.model.splice(filter_by_list.model.indexOf(+e.target.value),1)
      }else{
          filter_by_list.model.push(+e.target.value)
      }
      showProduct()
  })
})
function price_result(){
    let price=document.querySelectorAll('.price')
    price.forEach((res)=>{
        console.log(res.value,res.name)
        filter_by_list.price[res.name]=res.value
    })
    showProduct()
}

function showProduct(){
   let myproduct=product.filter(
       (n)=>(
           (!filter_by_list.category.length || filter_by_list.category.includes(n.cat_id))
           && (!filter_by_list.model.length || filter_by_list.model.includes(n.mod_id))
           && (!filter_by_list.status==='' || filter_by_list.status===n.status)
           &&(!filter_by_list.price.min || filter_by_list.price.min<=parseFloat(n.price))
           &&(!filter_by_list.price.max || filter_by_list.price.max>=parseFloat(n.price))
   ))
    console.log(myproduct)
}
console.table(product)
let type=document.querySelector('#type')
type.addEventListener("change",function (e){
    filter_by_list.status=Boolean(+e.target.value)
    showProduct()
})