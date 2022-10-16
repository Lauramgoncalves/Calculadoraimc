function calcular() {
const peso = document.getElementById('peso').value;
const altura = document.getElementById('altura').value;
const resultado = document.getElementById('res');
let classificação = '';

if(altura !=='' && peso !== '') {
    
const valorimc = (peso / (altura * altura)).toFixed(1);


if (valorimc < 18.5) {
    classificação = 'abaixo do peso.'
}else if (valorimc < 25) {
    classificação = 'com o peso ideal'
}
else if (valorimc > 25){
    classificação = 'acima do peso'
}

 resultado.textContent = `Seu imc é ${valorimc}, voce está ${classificação}`

} 

else {
    window.alert('Preencha todos os campos!')
    
}
}