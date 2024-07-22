




function validarUsuario(cadastroUsuario){
    if (cadastroUsuario.includes(' ') === true){
        console.log("usurio contém espaço")
        alert('Usuário contém espaço')
        var usuarioIcone = document.getElementById('usuarioIcone').style.color = "red"
        return false;
    } else{
        var usuarioIcone = document.getElementById('usuarioIcone').style.color = '#acacac'
        return true;
    }
}
function validarEmail(cadastroEmail){
    if (!cadastroEmail.includes("@") || !cadastroEmail.includes(".com") || cadastroEmail.split("@")[0].length < 10 || cadastroEmail.split("@")[1].split(".com")[0].length < 1){
        alert('E-mail inválido')
        var emailIcone = document.getElementById('emailIcone').style.color = "red"
        return false;
    } else{
        var emailIcone = document.getElementById('emailIcone').style.color = '#acacac'
        return true;
    }
}
    
function validarSenha(CadastroSenha){
    if(CadastroSenha.length <= 6){
        console.log('Senha menor que 6 digitos')
        alert('A senha deve conter pelo menos 7 caracteres')
        var senhaIcone = document.getElementById('senhaIcone').style.color = "red"
        return false;
    } else{
        var senhaIcone = document.getElementById('senhaIcone').style.color = '#acacac'
        return true;
    }
}