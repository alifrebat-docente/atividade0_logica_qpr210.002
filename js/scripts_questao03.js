//PEGANDO ELEMENTOS DO DOM
const formDados = document.querySelector('#formulario')
const divResultado = document.querySelector('#resultado')

//CAPTURANDO O EVENTO DE SUBMIT
formDados.addEventListener('submit', (evt) => {
    evt.preventDefault()

    const form_num = new FormData(formDados)

    let km = parseFloat(form_num.get('km'))
    let consumo = parseFloat(form_num.get('consumo'))
    let valor = parseFloat(form_num.get('valor'))

    let totalCombustivel = km / consumo

    divResultado.innerHTML = `Total de combustível necessário ${totalCombustivel.toFixed(2).replace('.',',')}l. Valor a pagar R$ ${parseFloat(totalCombustivel * valor).toFixed(2).replace('.',',')}`

})