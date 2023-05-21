<?php
$sname = "sql101.epizy.com";
$uname = "epiz_34255809";
$password = "v112cjSu15";
$db_name = "epiz_34255809_test_db";

$conn = mysqli_connect($sname, $uname, $password, $db_name);
if (!$conn) {
    echo "Connection Failed";
}
?>
