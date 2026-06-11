//PEGANDO ELEMENTOS DO DOM
const formDados = document.querySelector('#formulario')
const divResultado = document.querySelector('#resultado')

//CAPTURANDO O EVENTO DE SUBMIT
formDados.addEventListener('submit', (evt) => {
    evt.preventDefault()

    const form_num = new FormData(formDados)

    let altura = parseFloat(form_num.get('altura'))
    let lagura = parseFloat(form_num.get('largura'))

    let area = altura * lagura

    divResultado.innerHTML = `A área calculada é ${area.toFixed(2).replace('.',',')}m². Total de tinta é de ${area / 2}l`

})