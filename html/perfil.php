<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Meu Perfil</title>
    <link rel="icon" type="image/x-icon" href="../img/Design_sem_nome__1_-removebg-preview.png">
    <link rel="stylesheet" href="../css/perfil.css">
    <link rel="stylesheet" href="../css/modelo.css">
    <link rel="stylesheet" href="https://unicons.iconscout.com/release/v4.0.0/css/line.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">


</head>

<body>
    <?php
include("../php/conexao.php");
session_start();
if (!isset($_SESSION['user_id'])) {
    header('Location: http://localhost/avaliacao3/html/cad.html');
    exit();
} else{
    $dados = buscarDados();
    
}

?>

    <main>
        <div class="container">
            <div class="forms-container">
                <div class="sejaParceiro">
                    <form action="../php/conexao.php" method="POST" class="parceria-form">
                        <h2 class="title">Meu Perfil</h2>
                        <div class="input-field">
                            <i class="fas fa-user"></i>
                            <input type="text" placeholder="<?php echo htmlspecialchars($dados->user);?>"
                                id="parceriaUsuario" disabled>
                        </div>
                        <div class="input-field">
                            <i class="fas fa-envelope"></i>
                            <input type="text" placeholder="<?php echo htmlspecialchars($dados->email);?>"
                                id="parceriaEmail" disabled>
                        </div>
                        <div class="input-field">
                            <i class="fas fa-lock"></i>
                            <input type="password" placeholder="Senha Atual" name="senhaAtual" id="senhaatual" required>
                        </div>
                        <div class="input-field">
                            <i class="fas fa-lock"></i>
                            <input type="password" placeholder="Senha Nova" name="senhaNova" id="senhanova" required>
                        </div>
                        <input type="hidden" name="acao" value="alterar">
                        <input type="submit" class="btn"></input>

                </div>
                </form>
                <form action="../php/conexao.php" method="GET">
                    <input type="hidden" name="acao" value="excluir">
                    <input type="submit" class="btn" value="Excluir">
                </form>
                <form action="../php/conexao.php" method="GET">
                    <input type="hidden" name="acao" value="sair">
                    <input type="submit" class="btn" value="Sair">
                </form>

            </div>
        </div>
        </div>
    </main>


</body>

</html>