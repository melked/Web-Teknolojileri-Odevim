<!DOCTYPE html>
<html>
<head>
    <title>LOGIN</title>
    <link rel="stylesheet" type="text/css" href="style.css">
</head>
<body>
    <form action="login.php" method="post">
        <h2>LOGIN</h2>
        <?php if (isset($_GET['error'])) { ?>
            <p class="error"><?php echo $_GET['error']; ?></p>
        <?php } ?>
        <label for="uname">User Name</label>
        <input type="text" name="uname" id="uname" placeholder="User Name"><br>
        <label for="password">Password</label>
        <input type="password" name="password" id="password" placeholder="Password"><br>

        <button type="submit">Login</button>
    </form>
</body>
</html>
