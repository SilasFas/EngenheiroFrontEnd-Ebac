const numeroA = document.querySelector('#numberA')
const numeroB = document.querySelector('#numberB')
const inputButton = document.querySelector('#inputBtn')
const mensagem = document.getElementById('mensagem')

inputButton.addEventListener('click', ((event) => {
    // bloqueia a envio do formulário e o recarregamento da página 
    event.preventDefault()

    //Verifica se os campos estão vazios
    if (numeroB.value && numeroA.value) {

        //Verifica se o valor B é maior do que o A
        if (numeroB.value > numeroA.value) {
            // Se o valor B for maior do que o A 
            mensagem.innerText = 'POSITIVO - Formulário válido pois o número B é maior do que o número A'
            mensagem.style.color = 'green'
            mensagem.style.display = 'block'

            numeroA.value = ''
            numeroB.value = ''

        } else {
            // Se o valor A for maior do que o B 
            mensagem.innerText = 'NEGATIVO Formulário inválido: pois o número B precisa ser maior do que o A'
            mensagem.style.color = 'red'
            mensagem.style.display = 'block'

            numeroA.value = ''
            numeroB.value = ''
        }

    } else {
        // Se um dos campos ou os dois campos estiverem vazios
        mensagem.innerText = 'Os campos estão vazios'
        mensagem.style.color = 'red'
        mensagem.style.display = 'block'
    }
}))