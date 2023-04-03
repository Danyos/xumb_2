// let infoCard = [
//     {
//         id: 1,
//         name: "Armen",
//         code: "1",
//         price: Math.round(Math.random() * 20000) + "$",
//         status: true,
//         try: 0,
//         qaxvacq: []
//
//     },
//     {
//         id: 2,
//         name: "Seroj",
//         code: "2",
//         price: Math.round(Math.random() * 2000) + "$",
//         status: true,
//         try: 0,
//         qaxvacq: []
//     },
//     {
//         id: 3,
//         name: "Gevor",
//         code: "3",
//         price: Math.round(Math.random() * 2000) + "$",
//         status: true,
//         try: 0,
//         qaxvacq: []
//     },
//     {
//         id: 4,
//         name: "Gugo",
//         code: "4",
//         price: Math.round(Math.random() * 2000) + "$",
//         status: true,
//         try: 0,
//         qaxvacq: []
//     },
//     {
//         id: 5,
//         name: "Meruzh",
//         code: "5",
//         price: Math.round(Math.random() * 2000) + "$",
//         status: true,
//         try: 0,
//         qaxvacq: []
//     }
// ]
//
// if (localStorage['info']) {
//     infoCard = JSON.parse(localStorage['info'])
// } else {
//     localStorage['info'] = JSON.stringify(infoCard)
// }
//
//
// function info(id) {
//
//     let x = infoCard.find(res => res.id === +id)
//
//
//     if (!x.status) {
//         alert("block")
//         return;
//     }
//
//     let vichak = confirm("duq canaknum eq kanxikacnel te avelacnel? " + " kanxikacnelu hamar sexmel  Ok hraman@" + "sharunakelu hamar sexmel CANCEL")
//     if (vichak) {
//
//
//         let k = +prompt("vorqan gumareq uzum avelacne")
//         alert("duq avlecrel eq cer hashvinn" + k + "$")
//         x.price = parseFloat(x.price) + k
//         x.qaxvacq.push({
//             id: (x.qaxvacq.length) ? x.qaxvacq[x.qaxvacq.length - 1].id + 1 : 1,
//             price: k + "$",
//             vichak: "mutq",
//         })
//         localStorage['info'] = JSON.stringify(infoCard)
//         console.log(x.qaxvacq)
//         alert("cer hashvi mnacordn kazmum e" + x.price)
//
//         return;
//
//     }
//     let p = prompt("գրեք գախտնաբառը")
//
//
//     if (p === x.code) {
//         x.try = 0
//         let qaxvacq = confirm("uzum eq tesnel qaxvacqy")
//         if (qaxvacq) {
//             qax(x['qaxvacq'])
//             return;
//         }
//
//         alert("Ձեր հաշվին կա " + x.price)
//
//         let p1 = prompt("Ինչքան գումար եք ցանկանում կանխիկացնել")
//
//         if (parseFloat(x.price) < p1) {
//             alert("Ձեր հաշվին չկա բավական գումար")
//             return
//         }
//         x.price = parseFloat(x.price) - p1
//
//
//         x.qaxvacq.push({
//             id: (x.qaxvacq.length) ? x.qaxvacq[x.qaxvacq.length - 1].id + 1 : 1,
//             price: p1 + "$",
//             vichak: "elq",
//         })
//
//         localStorage['info'] = JSON.stringify(infoCard)
//         alert("Դուք կանխիկացրեցիք " + p1 + "$")
//         alert("Ձեր հաշվին մնաց " + x.price + "$")
//
//     } else {
//         alert("Սխալ գախտնաբառ")
//         x.try += 1
//         if (x.try === 3) {
//             alert("Ձեր քարտը արգելափակվեց")
//             x.status = false
//
//         }
//     }
// }
//
// function qax(arg) {
//     console.table(arg)
// }
//
//
//
//
//
// sessionStorage['barev']=1
// sessionStorage['barev']=2
// localStorage['y']=7

let loginDb={
    name:false,
    login:false,
    psw:false
}



function takeInfo(){
    let name=document.querySelector('#firstName')
    let login=document.querySelector('#login')
    let psw=document.querySelector('#psw')

    if(name.value.length<2){
        loginDb.name=false
        errorDirect("firstName-error")
    }else{
           errorDirect("firstName-error",true)
        loginDb.name=true
    }
    if(login.value.length<5){
        loginDb.login=false
        errorDirect("login-error")
    }else{
        loginDb.login=true
           errorDirect("login-error",true)
    }
    if(psw.value.length<5){
        loginDb.psw=false
        errorDirect("psw-error")
    }else{
        loginDb.psw=true
           errorDirect("psw-error",true)
    }

    if(!loginDb.name || !loginDb.login || !loginDb.psw){

        return ;
    }

    alert("chisht")
    // name.value=''
    // login.value=''
    // psw.value=''
}


function errorDirect(from,status=false){
    let errors=document.querySelector(`.${from}`)
    if(status){
        errors.innerHTML=""
    }else{
        errors.innerHTML="Saxl "+from
    }

}







// tnayin
// login psw

// anun azganun

// herxosahamar

// email

// username


// psw && conform password


// charcodeat


let name="aZzAd"
let statusss=true
for (let i=0;i<name.length;i++){
    if(name.charCodeAt(i)<65 || name.charCodeAt(i)>122){
        statusss=false
        break
    }
}
console.log(statusss)





// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/RegExp