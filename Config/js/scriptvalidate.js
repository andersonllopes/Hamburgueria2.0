$(document).ready(function(){

    $("#cadastrar").validate({

        rules: {

            nome: {
                required: true,
                maxlength: 100,
                minlength: 7,
                digits: false
            },

            email: {

                required: true,
                email: true
            },

            confirmacaoemail: {

                required: true,
                equalTo: "#email"
            },

            senha: {

                required: true,
                rangelength: [4, 10]

            },

            confirmacaosenha: {

                required: true,
                equalTo: "#senha"

            },

            termo: {

                required: true
            }
        },

        messages: {

            nome: {
                required: "Este campo é obrigatório.",
                minlength: "O nome deve ter no minimo 5 caracteres"    
            },

            email: {

                required: "Este campo é obrigatório.",
                email: "Informe um email válido."
            },

            confirmacaoemail: {

                required: "Este campo é obrigatório.",
                equalTo: "Os emails não diferem, verifique."
            },

            senha: {

                required: "Este campo é obrigatório.",
                rangelength: "Sua senha deve ter de 4 a 10 caracteres."

            },

            confirmacaosenha: {

                required: "Este campo é obrigatório.",
                equalTo: "As senhas não diferem, verifique."

            },

            termo: {

                required: "Você deve aceitar os termos e condições."
            }
        }
    })
});
    