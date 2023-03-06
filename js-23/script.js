// let lift=1
//
// let flor=document.querySelectorAll('.flor')
// let lifBar=document.querySelector('.lifBar')
// function a(arg){
//     flor.forEach(element=>{
//         if(element.classList.contains('activeFlor')){
//             element.classList.remove('activeFlor')
//         }
//         if(+element.innerText === lift){
//             element.classList.add('activeFlor')
//         }
//         if(arg){
//             element.addEventListener('click',function (e){
//
//                 if (lift>e.target.innerText){
//                     lift= +e.target.innerText
//                     lifBar.innerHTML=`<i class="fa fa-arrow-up" aria-hidden="true"></i>`
//                     a()
//                 }else{
//
//                     lift= +e.target.innerText
//                     lifBar.innerHTML=`<i class="fa fa-arrow-down" aria-hidden="true"></i>`
//
//                     a()
//                 }
//
//                 console.log(lift)
//
//             })
//         }
//
//     })
// }
// a(true)


// let userInfo = [
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
//     userInfo.push({
//         id: userInfo[userInfo.length - 1].id + 1,
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
//     })
// }
//
// view(true)
//
//


// let num=77
// let num2=""+num
// let num3=`${num}`
// let num4=num.toString()
// console.log(num4)
// let x=alert("sdc ") // underfned
// void
//
// type-value
// let y=prompt("sd")
// console.log(y)














