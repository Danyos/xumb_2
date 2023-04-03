let info=[]
if(localStorage['info']){
    info=JSON.parse(localStorage['info'])
}
function insert(){
    let i=prompt("greq anun@")
    let id= info.length ? info[info.length-1].id+1 : 1
    info.push({
        id:id,
        info:i
    })
    localStorage['info']=JSON.stringify(info)
    console.log(info)


    // let id=null
    // if(info.length){
    //     id=info[info.length-1].id+1
    // }else{
    //     id=1
    // }

    console.log(i,id)
}




function trash(){
    let p=prompt(JSON.stringify(info))
    info=info.filter(res=>res.id!== +p)
    localStorage['info']=JSON.stringify(info)
    console.log(info)
}

function edit(){
    let names
    let id=+prompt(JSON.stringify(info))
    let x=info.find(res=>res.id===id)
    if(x){
         names=prompt("",x.name)
        x.name=names
        localStorage['info']=JSON.stringify(info)
    }
}




// Bankomati xndiry lucel u arjeqnery pahel localstorage

// 1. try
// 2. price














