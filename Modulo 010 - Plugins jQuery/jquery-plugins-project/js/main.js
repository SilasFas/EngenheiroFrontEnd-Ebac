$(document).ready(function () {
    $('#carousel-imagens').slick({
        autoplay: true,
        prevArrow: false, // This line removes the previous arrow
        nextArrow: false // This line removes the next arrow
    })
})

$('.menu-hamburguer').click(function () {
    $('nav').slideToggle()
})

$('#telefone').mask('(00) 00000-0000')

// $('#telefone').mask('00/00/0000', {
//     placeholder: '__/__/____'
// })

// $('#telefone').mask('SSS-0000', {
//     placeholder: 'ABC-1234'
// })

$('form').validate({
    rules: {
        nome: {
            required: true
        },
        email: {
            required: true,
            email: true
        },
        telefone: {
            required: true
        },
        mensagem: {
            required: true
        },
        veiculoInteresse: {
            required: false
        }
    },
    messages: {
        nome: 'Por favor, insira o seu nome'
    },
    submitHandler: function (form) {
        console.log(form)
    },
    invalidHandler: function (event, validador) {
        let camposIncorretos = validador.numberOfInvalids();
        console.log(camposIncorretos);
        if (camposIncorretos) {
            alert(`Existem ${camposIncorretos} campos incorretos`);
        }
    }
})

$('.lista-veiculos button').click(function () {
    const destino = $('#contato')

    const nomeVeiculo = $(this).parent().find('h3').text()
    $('#veiculo-interesse').val(nomeVeiculo)

    $('html').animate({
        scrollTop: destino.offset().top
    }, 1000)
})