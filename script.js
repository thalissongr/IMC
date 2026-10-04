function calcular(){
const peso = document.querySelector('input#P')
const altura = document.querySelector('input#Al')
const Res = document.querySelector('div#R')

let P = Number(peso.value.replace(',', '.'))
let A = Number(altura.value.replace(',', '.'))

if(!P || !A || P <= 0 || A <= 0){
 Res.innerHTML = 'Por favor, preencha os campos corretamente!!!'
 return
}
const imc = P / (A * A)
Res.innerHTML = ''

if(imc < 18.5){
 Res.innerHTML = 'Magreza ' + `Seu IMC é <strong>${imc.toFixed(2)}</strong>`
}
else if( imc <= 24.9){
Res.innerHTML = 'Normal ' + `Seu IMC é <strong>${imc.toFixed(2)}</strong>`
}
else if(imc <= 29.9 ){
    Res.innerHTML = 'Sobrepeso I ' + `Seu IMC é <strong>${imc.toFixed(2)}</strong>`
}
else if(imc <= 39.9){
    Res.innerHTML = 'Obesidade II ' + `Seu IMC é <strong>${imc.toFixed(2)}</strong>`
}
else{
    Res.innerHTML = 'Obesidade III ' + `Seu IMC é <strong>${imc.toFixed(2)}</strong>`
}

}

