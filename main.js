$(document).ready(function(){

    $('#telefone').mask('(00) 00000-0000', { placeholder: '(00) 00000-0000'})

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true, email: true
            },
            mensagem: {
                required: true
            },
            telefone: {
                required: false
            }
        },
        messages: {
            nome: 'Por favor, insira o seu nome completo.',
            email: 'Por favor, insira seu email.',
            mensagem: 'Por favor, digite sua mensagem.',
        }
    })
})