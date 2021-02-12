<!DOCTYPE html>
<html>
<head>
	<title>Sign Up</title>
	<link rel="stylesheet" type="text/css" href="resources/css/main_style.css">
</head>
<body>
     <form action="signin_login.php" method="post">
     	<h2>SIGN UP</h2>
     	<?php if (isset($_GET['error'])) { ?>
     		<p class="error"><?php echo $_GET['error']; ?></p>
     	<?php } ?>
		<label>Name</label>
     	<input type="text" name="name" placeholder="Your Name"><br>

     	<label>User Name</label>
     	<input type="text" name="uname" placeholder="User Name"><br>

     	<label>Password</label>
     	<input type="password" name="password" placeholder="Password"><br>

     	<button type="submit">Sign up</button>
		<a href="main.php">Login</a>
     </form>
</body>
</html>