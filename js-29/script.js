// const info={
//     name:"Varujan",
//     Surname:"badalyan"
// }
// const info_country={
//     address:"Zoravar Andranik",
//     name:"Armenia"
// }
// info_country.country=info_country.name
// delete info_country.name
//
// // let x=Object.assign({},info_country)
// // console.log(x)
//
// Object.assign(info,info_country)
// console.log(info)
// console.log(info_country)

//

//

// let count=localStorage.getItem('counter')
// if(!count){
//     localStorage.setItem("counter",999)
// }
// count=localStorage.getItem('counter')
// console.log(count)
function changelange(){
    // document.body.classList.add('red')
    let pLang=prompt("ynterq lezun am, ru, en ")
    localStorage.setItem('lang',pLang)
    lang=pLang
    console.clear()
    console.log(lang)
}
let lang=localStorage.getItem('lang')
if(!lang){
    changelange()
}
console.log(lang)

// document.body.classList.add('red')

// document.body.classList.contains('black')
// document.body.classList.remove('black')
