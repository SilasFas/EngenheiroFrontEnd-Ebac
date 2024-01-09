// $(document).ready(function () {
//     alert('Olá jquery')
// })

// $('#AddImage').on('click', botao)

// function botao() {
//     $('form').fadeOut('1000')
// }

// $('#AddImage').click(() => {
//     $('form').fadeIn('1000')
// })

$(document).ready(function () {

    $(' header button').click(() => {
        $('form').slideDown()
    })
})

$('#botaoCancelar').click(() => {
    $('form').slideUp()
})

// .slideToggle()
// Display or hide the matched elements with a sliding motion.


$('form').on('submit', (event) => {
    event.preventDefault()

    const enderecoDaNovaImagem = $("#imagemNova").val();
    const novoItem = $('<li style="display: none"></li>');
    $(`<img src="${enderecoDaNovaImagem}"/>`).appendTo(novoItem);
    $(`
    <div class="overlay-imagem-link"> 
        <a href="${enderecoDaNovaImagem}" target="_blank" title="Ver imagem em tamanho real">Ver imagem em tamanho real</a>
    </div>
`).appendTo(novoItem);
    $(novoItem).appendTo('ul');
    $(novoItem).fadeIn(1000)
    $('#imagemNova').val('');
})