// let x=true
//
// function incriment(){
//
//     // x+=1
//     x=!x
//     console.log(x)
// }
// function decriment(){
//
//     x--
//     console.log(x)
// }

function luys(){
    document.body.classList.toggle('luys')
    localStorage['luys']=document.body.classList.contains('luys')

}
if (localStorage['luys']==='true'){
    document.body.classList.add('luys')
}



// let res='10,50'

// 1
// let a=res.slice(0,res.indexOf(','))
// let b=res.slice(res.indexOf(',')+1)

// 2
// let [a,b]=res.split(',')
// let [a,b]=[10,50]
// let c=[10,50]
// let s=c[0]
// let b=c[1]

//
// console.log(a)
// console.log(b)




// console.log(res)
//a=17
//b=50

// indexof
// slice

//
// let a=7
// let b=5

//
//
// let text='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci assumenda do adipisci'
//
// text=text.split(' ')
// text[0]=text[0].toLowerCase()
//
//
// text=text.reverse()
// /// ["dolor", "ipsum","lorem"  ]
//
// let x1=text[0].split('')
// //[D,o,l,o,r]
// x1[0]=x1[0].toUpperCase()
//
//
// text[0]=x1.join('')
// //["Dolor", "ipsum","lorem"  ]
// text=text.join(' ')
//
// console.log(text)


// text=text.join(" ")





//
// let str="barev"
// str[0]=str[0].toUpperCase()
// console.log(str)
//
//




// let card="4318290000010492"//4318-2900-0001-0492

let infoCard=[
    {
        id:1,
        name:"Poghos",
        code:"5403",
        status:true,
        try:1,
        price:Math.round(Math.random()*2000)+"$"
    },
    {
        id:2,
        name:"Arman",
        code:"5403",
        status:true,
        try:1,
        price:Math.round(Math.random()*2000)+"$"
    },
    {
        id:3,
        name:"grish",
        code:"5403",
        status:true,
        try:1,
        price:Math.round(Math.random()*2000)+"$"
    },
    {
        id:4,
        name:"Muxi",
        code:"5403",
        status:true,
        try:1,
        price:Math.round(Math.random()*2000)+"$"
    },
    {
        id:5,
        name:"Hrant",
        code:"5403",
        status:true,
        try:1,
        price:Math.round(Math.random()*2000)+"$"
    }
]


function info(id){
    console.log(infoCard.find(res=>res.id === +id))
}



///sexmel button-i vra bacvi prompt vor@ kharcni mer objecti kodn,
// inchqan sxal grenq mer  try-@ avelana
// ereq anagm sxal grelu depqum alert ani block
//chisht grelu depqum bacvi object@ yev promtov harcni kanxikacvox gumari chapn
//grelov inchvor tiv mer unecac naxnakan gumaric minus ani mer uzac chapov












