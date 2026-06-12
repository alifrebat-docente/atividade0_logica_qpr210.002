//PEGANDO ELEMENTOS DO DOM
const formDados = document.querySelector('#formulario')
const divResultado = document.querySelector('#resultado')

//CAPTURANDO O EVENTO DE SUBMIT
formDados.addEventListener('submit', (evt) => {
    evt.preventDefault()

    const form_num = new FormData(formDados)

    let nome = form_num.get('nome')
    let altura = parseFloat(form_num.get('altura'))
    let peso = parseFloat(form_num.get('peso'))

    let imc = parseFloat(peso) / parseFloat((altura * altura))

    let faixa_risco = ''

    if (imc < 20) {
        faixa_risco = 'Abaixo do peso'
    } else if (imc < 25) {
        faixa_risco = 'Normal'
    } else if (imc < 30) {
        faixa_risco = 'Sobrepeso'
    } else if (imc < 35) {
        faixa_risco = 'Obesidade I'
    } else {
        faixa_risco = 'Obesidade II'
    }

    divResultado.innerHTML = `${nome}, seu imc é de ${imc.toFixed(2).replace('.', ',')}, sua faxia de risco é  ${faixa_risco}`

    formDados.reset()

})