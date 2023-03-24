// let question = [
//     {
//         id: 1,
//         level_id: 1,
//         name: "Նշվածներից ո՞րն է Հայաստանի մայրաքաղաքը։",
//         a: " A. Արարատ ",
//         b: " B. Գյումրի ",
//         c: " C. Գառնի ",
//         d: " D. Երևան ",
//         current: 'd',
//     },
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
// let gumar =[
//     {
//         id: 1,
//         price: 500
//     },
//     {
//         id: 2,
//         price: 1000
//     },
//     {
//         id: 3,
//         price: 2000
//     },
//     {
//         id: 4,
//         price: 4000
//     },
//     {
//         id: 5,
//         price: 8000
//     },
//     {
//         id: 6,
//         price: 16000
//     },
//     {
//         id: 7,
//         price: 32000
//     },
//     {
//         id: 8,
//         price: 64000
//     },
//     {
//         id: 9,
//         price: 125000
//     },
//     {
//         id: 10,
//         price: 250000
//     },
//     {
//         id: 11,
//         price: 500000
//     },
//     {
//         id: 12,
//         price: 1000000
//     },
//     {
//         id: 13,
//         price: 2000000
//     },
//     {
//         id: 14,
//         price: 3000000
//     },
//     {
//         id: 15,
//         price: 50000000
//     },
// ]
//
//
// // console.log(harc)
// // console.log(rand)
// // console.log(harc[rand])
// let i=1
// for (i;i<=15;i++){
//     let harc=question.filter((res)=>res.level_id===i)
//
//     let rand=Math.floor(Math.random()*harc.length)
//
//     let p=prompt(`
//     ${harc[rand].level_id}
//     ${harc[rand].name}
//     ${harc[rand].a}
//     ${harc[rand].b}
//     ${harc[rand].c}
//     ${harc[rand].d}
//     `,harc[rand].current)
//     console.log(gumar[i-1].price)
//     if(p!==harc[rand].current){
//       if(gumar[i-1].price>8000 && gumar[i-1].price<=125000){
//           alert("duq shahel eq 8000 dram")
//       }else if(gumar[i-1].price>250000 && gumar[i-1].price<=50000000){
//           alert("duq shahel eq 250000 dram")
//       }else{
//           alert("duq shahel eq 0 dram")
//       }
//         break
//     }
//
//
//
// }
// if(i===16){
//     alert("Duq shahel eq 5 000 000 ml drama")
// }


// __________________________________________________




//_________________________________________________________________________________
// 1.xndir        lucel mi qani guynov


// let x=0
// let arr=["white","red","blue","black"]
// function guyn(){
//     localStorage['color']=arr[x]
//     document.body.style.background=arr[x]
//     x++
//     if(!arr[x]){
//         x=0
//     }
// }

// if(localStorage['color']){
//  document.body.style.background=localStorage['color'];
// }
// console.log(localStorage['color'])



// ___________________________________________________________________________________________________________________
// 1.xndir          lucel mi qani guynov   2 tarberak

// let x=0
//     localStorage.getItem('color')
//     let color=document.querySelector(".guyn")

//     color.addEventListener('click',  function(){
//     if(x==0){
//         document.body.style.background='white'
//         localStorage.setItem('color',0)
//         x=1
//     }else if(x==1){
//         document.body.style.background='black'
//         localStorage.setItem('color',1)
//         x+=1
//     }else if(x==2){
//         document.body.style.background='red'
//         localStorage.setItem('color',2)
//         x=0
//     }
//     })

// let y=localStorage.getItem('color')
// if(y){
//     if(y==0){
//         document.body.style.background='white'
//     }else if(y==1){
//         document.body.style.background='black'
//     }else if(y==2){
//         document.body.style.background='red'
//     }
// }



// _______________________________________________________________________
// 2.xndir      lucel 2 guynov


// function yntrel() {
//     let x = document.body;
//     x.classList.toggle("black");
//     if (x.classList.contains("black")) {
//       localStorage.setItem("color", "black");
//     } else {
//       localStorage.setItem("color", "white");

//     }
//   }

// let y = localStorage.getItem("color");
//     if (y) {
//       document.body.className += y;
//     }






// __________________________________________________________________________________________
// 2.xndir          lucel 2 guynov 2 tarberak




// x=0
// function yntrel(){
//     localStorage.getItem('color')
//     if(x==0){
//         document.body.style.background='white'
//         localStorage.setItem("color", 0);
//         x++
//     }else{
//         document.body.style.background='black'
//         localStorage.setItem("color", 1);
//         x--
//     }
// }

// let y=localStorage.getItem("color");
// if(y){
//     if(y==0){
//         document.body.style.background='white'
//     }else{
//         document.body.style.background='black'
//     }
// }




// _____________________________________________________________________
// 3.xndir              lucel inputov


// let color=document.getElementById('color');
//
// color.addEventListener('change', ev=>{
//     localStorage['color']=color.value;
//     document.body.style.background=color.value;
// })
//
// if(localStorage['color']){
//     color.value=localStorage['color'];
//     document.body.style.background=localStorage['color'];
// }



// ________________________________________________________________________
//4.xndir             stexcel lamp



function lamp(){
    let x=0
    localStorage.getItem('luys')
    let luys=document.querySelector(".lampuchka")
    luys.addEventListener('click',  function(){
        if(x==0){
            luys.src='anjatvac.png'
            document.body.style.background='white'
            localStorage.setItem('luys',0)
            x++
        }else{
            luys.src='miacvac.png'
            document.body.style.background='black'
            localStorage.setItem('luys',1)
            x--
        }
    })
    let y=localStorage.getItem('luys')
    if(y){
        if(y==0){
            luys.src='anjatvac.png'
            document.body.style.background='white'
        }else{
            luys.src='miacvac.png'
            document.body.style.background='black'

        }
    }
}
lamp()