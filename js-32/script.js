

let infoCard = [{
    id: 1,
    name: "Poghos",
    code: "5896",
    status: true,
    try: 0,
    price: Math.round(Math.random() * 20000),
    qaxvacq:[

    ]

},
    {
        id: 2,
        name: "Arman",
        code: "1111",
        status: true,
        try: 0,
        price: Math.round(Math.random() * 2000) + "$",
        qaxvacq:[

        ]
    },
    {
        id: 3,
        name: "grish",
        code: "5555",
        status: true,
        try: 0,
        price: Math.round(Math.random() * 2000) + "$",
        qaxvacq:[]
    },
    {
        id: 4,
        name: "Muxi",
        code: "4321",
        status: true,
        try: 0,
        price: Math.round(Math.random() * 2000) + "$",
        qaxvacq:[]
    },
    {
        id: 5,
        name: "Hrant",
        code: "1234",
        status: true,
        try: 0,
        price: Math.round(Math.random() * 2000) + "$",
        qaxvacq:[]
    }
]



function info(id) {

    let x=infoCard.find(res => res.id === +id)


    if(!x.status){
        alert("block")
        return;
    }
let vichak=confirm("duq canaknum eq kanxikacnel te avelacnel")
    if(vichak){

        vich()
        return;
    }

    let p = prompt("գրեք գախտնաբառը")


    if (p === x.code) {
        let qaxvacq=confirm("uzum eq tesnel qaxvacqy")
        if(qaxvacq){
            qax(x['qaxvacq'])
        }
        x.try=0
        alert("Ձեր հաշվին կա " + x.price)

        let p1 = prompt("Ինչքան գումար եք ցանկանում կանխիկացնել")

        if (parseFloat(x.price) < p1) {
            alert("Ձեր հաշվին չկա բավական գումար")
            return
        }
        alert("Դուք կանխիկացրեցիք " + p1 + "$")
         x.price =parseFloat(x.price)- p1

        x.qaxvacq.push({
            id:(x.qaxvacq.length)?x.qaxvacq[x.qaxvacq.length-1].id+1:1,
            price:p1,
            vichak:"elq",
        })
        alert("Ձեր հաշվին մնաց " + x.price + "$")

    } else {
        alert("Սխալ գախտնաբառ")
        x.try += 1
        if (x.try === 3) {
            alert("Ձեր քարտը արգելափակվեց")
            x.status = false
        }

    }
}
function  qax(arg){
    console.table(arg)
}

function vich(){
    alert("barev")
}





local storage sarqel vichaky ev informacyayi pahpanum