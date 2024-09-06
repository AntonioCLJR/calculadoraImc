let altura = document.querySelector('#altura');
let peso = document.querySelector('#peso');
let resultado = document.querySelector('span');
const nome = prompt("Digite seu Nome")

const calculaimc = () => {

    if (altura.value !== '' && peso.value !== '') {
    let imc = (peso.value / (altura.value * altura.value)).toFixed(2)
    let classification = ''

    if (imc < 17) {
      classification = nome + ', está muito baixo do peso'
    } else if ( imc  < 18.49) {
      classification = nome + ', está abaixo do peso'
    } else if (imc < 24.99) {
      classification = nome + ', está com peso normal'
    } else if (imc < 29.99) {
      classification = nome + ', está acima do peso'
    } else if (imc < 34.99) {
      classification = nome + ', está com obesidade I'
    } else if ( imc < 39.99) {
        classification = nome + ', está com obesidade II'
    } else {
      classification = nome + ', está com obesidade III'
    }
    
    resultado.innerHTML = `IMC: ${imc} (${classification})`
  } else{
    resultado.innerHTML = 'Preencha os campos'
  }
  }