<?php
include_once('conexao.php');

$result=mysqli_query($conn, "SELECT * from funcionarios ORDER BY id DESC")or die('Erro no SELECT');
$row=array();
while($r=mysqli_fetch_assoc($result)){
    $row[]=$r;
}
$resposta = json_encode($row);
echo $resposta;
return $resposta;









?>