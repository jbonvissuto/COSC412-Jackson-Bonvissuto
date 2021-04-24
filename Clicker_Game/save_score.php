<?php
$servername = "localhost";
$username = "clicker_user";
$password = "zelda77L";
$dbname = "clicker";

$conn = new mysqli($servername, $username, $password, $dbname); // Create connection
if ($conn->connect_error) {     // Check connection
    die("Connection failed: " . $conn->connect_error);
} 

//$highscore = mysqli_real_escape_string($conn, $_POST['score']);//Gets the value of the passed variable after score:

$sql = "UPDATE highscore SET `high_score`=0 WHERE ID=1";//update the highscore value in the database 

$conn->close();
?>