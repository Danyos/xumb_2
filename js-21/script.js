let lamp=document.querySelector(".lamp")


// lamp.src //veradarcnum e tvyal mapi nkari hascen
// lamp.src='img/anjatvac.png' //poxum enq nkari hascen


// let data=document.querySelector(".data")
// // data.value
// data.value="hajox"


// let obj={
//     value:"deff",
//     name:"sdfedf"
//
// }
//
// obj.value +="dfwsdw"

// let container=document.querySelector(".container")
//
// console.log(container.innerHTML)
// console.log(container.innerText)
// container.innerHTML=`<h3>barev expayr</h3>`
// container.innerHTML=`<h3>barev expayr</h3>`





let container=document.querySelectorAll(".container")
let ress=document.querySelector(".res")
//
// container.forEach(res=>{
//     res.addEventListener("click",function (e){
//         if(e.target.innerHTML==='+'){
//            ress.innerHTML= +ress.innerHTML + 1
//         }else if(e.target.innerHTML==='-'){
//             ress.innerHTML-=1
//         }
//     })
//
// })
// container.forEach(res=>{
//     res.addEventListener("click",function (e){
//         console.log(e.target.dataset.id)
//
//     })
//
// })
//




// let question = [
//     {
//     id: 1,
//     level_id: 1,
//     name: "Նշվածներից ո՞րն է Հայաստանի մայրաքաղաքը։",
//     a: " A. Արարատ ",
//     b: " B. Գյումրի ",
//     c: " C. Գառնի ",
//     d: " D. Երևան ",
//     current: 'd',
// },
//     {
//         id: 2,
//         level_id: 2,
//         name: "Հետևյալ ֆիլմերից ո՞րում չի նկարահանվել Լեոնարդո Դի Կապրիոն:",
//         a: " A. Տիտանիկ ",
//         b: " B. Ուոլ Սթրիթի գայլը ",
//         c: " C. Ֆոկուս ",
//         d: " D. Բռնիր ինձ, թե կարող ես ",
//         current: 'c',
//     },
//     {
//         id: 3,
//         level_id: 3,
//         name: "Մարդու ուղեղը քանի՞ տոկոսով է բաղկացած ջրից:",
//         a: " A. 40% ",
//         b: " B. 80% ",
//         c: " C. 60% ",
//         d: " D. 20% ",
//         current: 'b',
//     },
//     {
//         id: 4,
//         level_id: 4,
//         name: "Որտե՞ղ է մեծացել հայտնի արվեստագետ Միքելանջելոն:",
//         a: " A. Փարիզ ",
//         b: " B. Հռոմ ",
//         c: " C. Վիենա ",
//         d: " D. Ֆլորենցիա ",
//         current: 'd',
//     },
//     {
//         id: 5,
//         level_id: 5,
//         name: "Որ երկիրն է արձակել երկրագնդի առաջին արհեստական արբանյակը։",
//         a: " A. Ճապոնիա ",
//         b: " B. Չինաստան ",
//         c: " C. ԱՄՆ ",
//         d: " D. ԽՍՀՄ ",
//         current: 'd',
//     },
//     {
//         id: 6,
//         level_id: 6,
//         name: "Ո՞ր քաղաքն է ամենախիտ բնակեցվածը աշխարհում:",
//         a: " A. Լոնդոն ",
//         b: " B. Տոկիո ",
//         c: " C. Նյու Յորք ",
//         d: " D. Փարիզ ",
//         current: 'b',
//     },
//     {
//         id: 7,
//         level_id: 7,
//         name: "Ո՞վ է Բիլ Գեյթսը։",
//         a: " A. Microsoft-ի հիմնադիր ",
//         b: " B. Apple-ի հիմնադիր ",
//         c: " C. Google-ի հիմնադիր ",
//         d: " D. Samsung-ի հիմնադիր ",
//         current: 'a',
//     },
//     {
//         id: 8,
//         level_id: 8,
//         name: "Եր՞բ է հիմնադրվել GOOGLE-ը։",
//         a: " A. 2000 ",
//         b: " B. 2004 ",
//         c: " C. 1996 ",
//         d: " D. 1998 ",
//         current: 'c',
//     },
//     {
//         id: 9,
//         level_id: 9,
//         name: "Որ շախմատի ֆիգուռը գոյություն չունի՞։",
//         a: " A. Զինոր ",
//         b: " B. Ձի ",
//         c: " C. Թագավոր ",
//         d: " D. Տանգ ",
//         current: 'd',
//     },
//     {
//         id: 10,
//         level_id: 10,
//         name: "Նշվածներից ո՞րը չի համարվում ծրագրավորման լեզու։",
//         a: " A. JavaScript ",
//         b: " B. HTML ",
//         c: " C. PHP ",
//         d: " D. Python ",
//         current: 'b',
//     },
//     {
//         id: 11,
//         level_id: 11,
//         name: "Ո՞ր երկիրն է առաջինն ընդունել Քրիստոնեությունը։",
//         a: " A. Հռոմ ",
//         b: " B. Ռուսաստան ",
//         c: " C. Հայաստան ",
//         d: " D. Իզրաել ",
//         current: 'c',
//     },
//     {
//         id: 12,
//         level_id: 12,
//         name: "Նշվածներից ո՞րը մոլորակ չէ։",
//         a: " A. Վեներա ",
//         b: " B. Մերկուրի ",
//         c: " C. Մարս ",
//         d: " D. Պլուտոն ",
//         current: 'd',
//     },
//     {
//         id: 13,
//         level_id: 13,
//         name: "",
//         a: " A. ",
//         b: " B. ",
//         c: " C. ",
//         d: " D. ",
//         current: 'c',
//     },
//     {
//         id: 14,
//         level_id: 14,
//         name: "",
//         a: " A. ",
//         b: " B. ",
//         c: " C. ",
//         d: " D. ",
//         current: 'c',
//     },
//     {
//         id: 15,
//         level_id: 15,
//         name: "",
//         a: " A. ",
//         b: " B. ",
//         c: " C. ",
//         d: " D. ",
//         current: 'd',
//     },
//     {
//         id: 16,
//         level_id: 1,
//         name: "Հարց 1-ինչ կտպի հետևյալ կոդը? - console.log( 0 == [ ]) ",
//         a: "Ա․ true",
//         b: "Բ․ Error",
//         c: "Գ․ false",
//         d: "Դ․ undefined",
//         current: 'a'
//     },
//     {
//         id: 17,
//         level_id: 2,
//         name: "Հարց 2-ինչ կտպի հետևյալ կոդը?- eval('console.log('hello world')')",
//         a: "Ա․ Error",
//         b: "Բ․ hello world",
//         c: "Գ․ console.log(hello world)",
//         d: "Դ․ null",
//         current: 'b'
//     },
//     {
//         id: 18,
//         level_id: 3,
//         name: "const num=parseInt('1+2',10) console.log(num)",
//         a: "Ա․ 1",
//         b: "Բ․ hello world",
//         c: "Գ․ NaN",
//         d: "Դ․ 12",
//         current: 'c'
//     },
//     {
//         id: 19,
//         level_id: 4,
//         name: "Ով է Դանիել Համբարձումյանը ? ",
//         a: "Ա․ Ա․ժ պատգամավոր",
//         b: "Բ․ Հանրահայտ Պոկերիստ։)",
//         c: "Գ․ Գրող-հրապարակախոս",
//         d: "Դ․ Ծրագրավորող",
//         current: 'd'
//     },
//     {
//         id: 20,
//         level_id: 5,
//         name: "Հարց 5-ինչ կտպի հետևյալ կոդը?- console.log(typeof NaN)",
//         a: "Ա․ number",
//         b: "Բ․ undefined",
//         c: "Գ․ object",
//         d: "Դ․ string",
//         current: 'a'
//     },
//     {
//         id: 21,
//         level_id: 2,
//         name: "Հարց 6-ինչ կտպի հետևյալ կոդը?- const arr=[1,2,3,4,5] const otherArr=[1,2,3,4,5] console.log(arr == otherArr)",
//         a: "Ա․ true",
//         b: "Բ․ false",
//         c: "Գ․ Error",
//         d: "Դ․ arr == otherArr",
//         current: 'b'
//     },
//     {
//         id: 22,
//         level_id: 2,
//         name: "Հարց 7-ինչ կտպի հետևյալ կոդը?- let x=10    x==10 && console.log('hello world')",
//         a: "Ա․ hello world",
//         b: "Բ․ Error",
//         c: "Գ․ undefined",
//         d: "Դ․ false",
//         current: 'a'
//     },
//     {
//         id: 23,
//         level_id: 1,
//         name: "Հարց 8-ինչ կտպի հետևյալ կոդը?- console.log([] + [])",
//         a: "Ա․ [Object,Object]",
//         b: "Բ․ Error",
//         c: "Գ․ '' ",
//         d: "Դ․ ,[Object,Object][Object,Object]",
//         current: 'c'
//     },
//     {
//         id: 24,
//         level_id: 1,
//         name: "Հարց 9-ինչ կտպի հետևյալ կոդը? - console.log({} == true) console.log(!{} == true) console.log(!!{} == true)",
//         a: "Ա․ false,false,false",
//         b: "Բ․ false,true,true",
//         c: "Գ․ true,false,true",
//         d: "Դ․ false,false,true",
//         current: 'd'
//     },
//     {
//         id: 25,
//         level_id: 10,
//         name: "Հարց 10-ինչ կտպի հետևյալ կոդը? - console.log( 3 > 2 > 3)",
//         a: "Ա․ true",
//         b: "Բ․ false",
//         c: "Գ․ ReferenceError",
//         d: "Դ․ 3 > 2 > 3",
//         current: 'b'
//     },
//     {
//         id: 26,
//         level_id: 1,
//         name: "Հարց 11-Քանի տեսակ Primitive թայփ կա JavaScript-ում",
//         a: "Ա․ 7",
//         b: "Բ․ 8",
//         c: "Գ․ 9",
//         d: "Դ․ 6",
//         current: 'd'
//     },
//     {
//         id: 27,
//         level_id: 12,
//         name: "Հարց 12-ինչ կտպի հետևյալ կոդը? - class Human {   }   console.log(typeof Human)",
//         a: "Ա․ object",
//         b: "Բ․ class",
//         c: "Գ․ function",
//         d: "Դ․ constructor",
//         current: 'c'
//     },
//     {
//         id: 28,
//         level_id: 1,
//         name: "Հարց 3-ինչ կտպի հետևյալ կոդը? - console.log(name)    var name='Barev Vahag'",
//         a: "Ա․ ReferenceError",
//         b: "Բ․ undefined",
//         c: "Գ․ console.log(name)",
//         d: "Դ․ Barev Vahag",
//         current: 'd'
//     },
//     {
//         id: 29,
//         level_id: 14,
//         name: "Հարց 14-Ինչ է Promise-ը",
//         a: "Ա․ Խոստում է",
//         b: "Բ․ տվյալների տարրա է",
//         c: "Գ․ զանգվաց է",
//         d: "Դ․ շղթայական աշխատող կոդ",
//         current: 'a'
//     },
//     {
//         id: 30,
//         level_id: 15,
//         name: "Հարց 15-Ինչպես օգնել հարևան տատիկին,երբ նա խնդրում է սարքել իր skype-ն ?",
//         a: "Ա․ ասել որ skype-ից ոչինչ չես հասկանում",
//         b: "Բ․ ցրել տատիկին",
//         c: "Գ․ միացնել տատիկի տան wi-fi_ն",
//         d: "Դ․ մեռած ձևանալ ։)",
//         current: 'c'
//     },
// ]
//
// let level=1
// for (let i=0;i<15;i++){
//     let this_question=question.filter(res=>res.level_id===level)
//     this_question=this_question[Math.floor(Math.random()*this_question.length)]
//     let p=prompt(this_question.name+"___"+this_question.a+"__"+this_question.b+this_question.c+"__"+this_question.d+"__",this_question.current )
//     if (p===this_question.current){
//         alert("ok")
//         level++
//     }else{
//         alert("duq sxal eq patasxanl dher harcin")
//         break
//     }
//
// }
