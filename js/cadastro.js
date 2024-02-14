
function validarUsuario(userCadastro){
    const numeros = [0,1,2,3,4,5,6,7,8,9,]
    console.log(userCadastro.length)
    if (userCadastro.length > 12 && userCadastro.length < 4){
        console.log("user invalido")
    } else if(userCadastro.){

    }
    else {
        console.log("user valido")
    }

}


function validarCadastro(){
    event.preventDefault()

    const userCadastro = document.getElementById("cadastroUsuario").value;
    const emailCadastro = document.getElementById("cadastroEmail").value;
    const senhaCadastro = document.getElementById("cadastroSenha").value;

    validarUsuario(userCadastro)
    
}





