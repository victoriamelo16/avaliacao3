<?php


if(isset($_POST["acao"])){
    if ($_POST["acao"]=="cadastrar"){
        cadastrar();
    }
    if ($_POST["acao"]=="logar"){
        logar();
    }
    if($_POST["acao"]=="alterar"){
        alterar();
    }
    
}
if(isset($_GET["acao"])){
    if($_GET["acao"]=="sair"){
        sair();
    }
    if($_GET["acao"]=="excluir"){
        excluir();
    }
}


function abrirBanco() {
    $conexao = new mysqli("localhost", "root", "");
    if ($conexao->connect_error) {
        die("Conexão falhou: " . $conexao->connect_error);
    }

    $sql = "
        CREATE DATABASE IF NOT EXISTS lifeevents;
        USE lifeevents;
        CREATE TABLE IF NOT EXISTS usuarios (
            id INT NOT NULL AUTO_INCREMENT,
            user VARCHAR(100) NOT NULL,
            email VARCHAR(100) NOT NULL,
            senha VARCHAR(60) NOT NULL,
            PRIMARY KEY (id)
        ) ENGINE=InnoDB;
    ";

    if (!$conexao->multi_query($sql)) {
        die("Erro ao executar o SQL: " . $conexao->error);
    }
    $conexao->close();

    $conexao = new mysqli("localhost", "root", "root", "lifeevents");
    if ($conexao->connect_error) {
        die("Conexão falhou: " . $conexao->connect_error);
    }

    return $conexao;
}

function cadastrar() {
    $conexao = abrirBanco();
    $sql = $conexao->prepare("INSERT INTO usuarios(user, email, senha) VALUES (?, ?, ?)");
    $sql->bind_param('sss', $_POST['user'], $_POST['email'], $_POST['senha']);
if ($sql->execute()) {
    $user_id = $conexao->insert_id;
    $_SESSION['user_id'] = $user_id;
    $conexao->close();
    header('Location: http://localhost/avaliacao3/html/perfil.php');
    exit();
} else {
    $_SESSION['error_message'] = "Erro ao cadastrar usuario";
    header('Location: http://localhost/avaliacao3/html/cad.html');
    exit();
}
}

function logar() {
session_start();
$conexao = abrirBanco();
$sql = $conexao->prepare("SELECT id, user FROM usuarios WHERE user = ? AND senha = ?");
    $sql->bind_param('ss', $_POST['user'], $_POST['senha']);
    $sql->execute();
    $result = $sql->get_result();
    if ($result->num_rows == 1) {
        $dados = $result->fetch_assoc();
        $user_id = $dados['id'];
        $_SESSION['user_id'] = $user_id;
        $conexao->close();
        header('Location: http://localhost/avaliacao3/html/perfil.php');
    } else {
        header('Location: http://localhost/avaliacao3/html/cad.html');
        $conexao->close();
        session_destroy();
    }
}



function buscarDados() {
    $conexao = abrirBanco();
    $sql = $conexao->prepare("SELECT user, email FROM usuarios WHERE id = ?");
    $sql->bind_param('i', $_SESSION['user_id']);
    $sql->execute();
    $result = $sql->get_result();


    if ($result->num_rows > 0) {
        $dados = $result->fetch_assoc();
        $conexao->close();
        return (object) $dados;
    } else {
        $conexao->close();
        return false;
    }
}

function alterar() {
    session_start();
    $conexao = abrirBanco();
    $sql = $conexao->prepare("SELECT senha FROM usuarios WHERE id = ?");
    $sql->bind_param('i', $_SESSION['user_id']);
    echo $_SESSION['user_id'];
    $sql->execute();
    $result = $sql->get_result();
    
    if ($result->num_rows > 0) {
        $dados = $result->fetch_assoc();
        $senha_armazenada = $dados['senha'];
        
        if ($_POST['senhaAtual'] === $senha_armazenada) {
            $sql = $conexao->prepare("UPDATE usuarios SET senha = ? WHERE id = ?");
            $sql->bind_param('si', $_POST['senhaNova'], $_SESSION['user_id']);
            if ($sql->execute()) {
                $conexao->close();
                header('Location: http://localhost/avaliacao3/html/index.html');
                return "Senha alterada com sucesso";
            } else {
                header('Location: http://localhost/avaliacao3/html/perfil.php');
                $conexao->close();
                return "Erro ao alterar a senha";
            }
        } else {
            header('Location: http://localhost/avaliacao3/html/perfil.php');
            $conexao->close();
            return "Senha atual incorreta";
        }
    } else {
        header('Location: http://localhost/avaliacao3/html/perfil.php');
        $conexao->close();
        return "Usuário não encontrado";
    }
}

function excluir() {
    session_start();
    $conexao = abrirBanco();
    $sql = $conexao->prepare("DELETE FROM usuarios WHERE id = ?");
    $sql->bind_param('i', $_SESSION['user_id']);
    if ($sql->execute()) {
        echo 'abc';
        session_destroy();
        header('Location: http://localhost/avaliacao3/html/index.html');
        $conexao->close();
    }
    else {
        return "Erro na exclusão";
    }
}
function sair() {
    session_start();
    session_destroy();
    header('Location: http://localhost/avaliacao3/html/index.html');
}
?>