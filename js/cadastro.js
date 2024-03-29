
var dadosUsuarios = []

function cadastrar(){
    event.preventDefault()
    const CadastroUsuario = document.getElementById('cadastroUsuario').value 
    const CadastroSenha = document.getElementById('cadastroSenha').value 
    const CadastroEmail = document.getElementById('cadastroEmail').value
    var validacao1 = validarUsuario(CadastroUsuario)
    var validacao2 = validarSenha(CadastroSenha)
    var validacao3 = validarEmail(CadastroEmail)

    if(validacao1 && validacao2 && validacao3 === true){
        usuario = [
            {usuario: CadastroUsuario, senha: CadastroSenha, email: CadastroEmail}
        ]    
        dadosUsuarios.push(usuario)
        console.log('Registro feito')
        console.log(dadosUsuarios)
    }
}

function login(){
    event.preventDefault()
    const loginUsuario = document.getElementById('loginUsuario').value
    const loginSenha = document.getElementById('loginSenha').value

    const validar = dadosUsuarios.find(u => u[0].usuario === loginUsuario && u[0].senha === loginSenha);
    
    if(validar){
        console.log('usuario encontrado')
        window.location.href = '../html/index.html'
    } else{
        console.log('usuario invalido')
    }
}



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