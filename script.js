function calcLeiOhm(resistencia, corrente){
    return resistencia * corrente
}

let resposta = document.getElementById('resposta')
let calcular = document.getElementById('calcular')

calcular.addEventListener('click' , ()=>{

    let resistencia = Number(document.getElementById('resistencia').value)
    let corrente = Number(document.getElementById('corrente').value)

    volts = calcLeiOhm(resistencia, corrente)
    
    resposta.innerHTML = ``
    resposta.innerHTML += `O valor em Volts: <b>${volts.toFixed(3)}</b>`
})