
$(document).ready(function(){

    $("#btnlogin").click(function(){

        var loginemail = "ulisses@ocara.com"
        var loginpass = "12345"

        var email = $("#login-email").val();
        var senha = $("#login-pass").val();

        if((loginemail == email) && (loginpass == senha)){
                Swal.fire(
                'Login feito com sucesso!',
                '',
                'success'
                )
                return false;
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Tente novamente!',
                footer: '<a href>Redefinir sua Senha?</a>'
                })
                return false;
        }
    })

})