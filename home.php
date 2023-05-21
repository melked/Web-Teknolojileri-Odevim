<?php
session_start();
if(isset($_SESSION['user_name'])){
    $username = $_SESSION['user_name'];
    echo "Merhaba, " . $username . "! kullanıcı adım";
    header("Location: hakkimda.html");
    exit();
}
?>

