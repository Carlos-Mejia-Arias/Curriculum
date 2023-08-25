//TOP mkt
let mkt= new Array

mkt[0] = './img/resultadosTop/MKT0.png'
mkt[1] = './img/resultadosTop/MKT1.png'
mkt[2] = './img/resultadosTop/MKT2.png'

function resultMKT(){
    for(let i=0; i< mkt.length; i++){
        let node = document.createElement("IMG")
        node.setAttribute('src', mkt[i])
        document.getElementById('resultadosMKT').appendChild(node)
    }
}

//TOP web

let web= new Array

web[0] = './img/resultadosTop/web0.png'
web[1] = './img/resultadosTop/web1.png'
web[2] = './img/resultadosTop/web2.png'

function resultWeb(){
    for(let i=0; i< web.length; i++){
        let node = document.createElement("IMG")
        node.setAttribute('src', web[i])
        document.getElementById('resultadosWEB').appendChild(node)
    }
}