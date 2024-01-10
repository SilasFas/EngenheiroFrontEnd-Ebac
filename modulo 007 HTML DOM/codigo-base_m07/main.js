const form = document.getElementById('form-deposito')

function validaNome(nomeCompleto) {
    const nomeComoArray = nomeCompleto.split(' ')
    return nomeComoArray.length >= 2
}

form.addEventListener('submit', (event) => {
    let formEValido = false
    event.preventDefault()

    const nomeBneficiario = document.getElementById('nomeBeneficiario')
    const numeroContaBeneficiario = document.getElementById('numeroConta')
    const valorDeposito = document.getElementById('valorDeposito')
    const mensagemSucesso = `Montante de: ${valorDeposito.value} depositado para o cliente: ${nomeBneficiario.value} - conta ${numeroContaBeneficiario.value}`

    formEValido = validaNome(nomeBneficiario.value)

    if (formEValido) {
        alert(mensagemSucesso)

        nomeBneficiario.value = ''
        numeroContaBeneficiario.value = ''
        valorDeposito.value = ''
    } else {
        alert('O nome não está completo')
    }

})