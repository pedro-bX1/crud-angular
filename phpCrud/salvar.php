<?php
    include_once('conexao.php');

    $nome = $_GET['nome'];
    $matricula = $_GET['matricula'];
    $salario = $_GET['salario'];
    $cargo = $_GET['cargo'];
    $especializacao = $_GET['especializacao'];

    mysqli_query($conn, "INSERT INTO funcionarios (nome, matricula, salario, cargo, especializacao) VALUES ('$nome', '$matricula', '$salario', '$cargo', '$especializacao')");
    $res=json_encode("Exito");
    echo $res;
    return $res;

?>