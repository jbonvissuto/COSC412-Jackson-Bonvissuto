<?php
$servername = "localhost";
$username = "clicker_user";
$password = "zelda77L";
$dbname = "clicker";

$conn = new mysqli($servername, $username, $password, $dbname); // Create connection
if ($conn->connect_error) {     // Check connection
    die("Connection failed: " . $conn->connect_error);
} 

$highscore = mysqli_real_escape_string($conn, $_POST['score']);//Gets the value of the passed variable after score:

if (strlen($times) > 200000) {  $times = "";    }//Checks if to many requests or something 

$sql = "UPDATE highscore set high_score=$highscore WHERE ID=1 ;";//update the highscore value in the database 

$conn->close();
?>