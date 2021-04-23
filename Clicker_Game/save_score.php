<?php
$servername = "localhost";
$username = "clicker_user";
$password = "zelda77L";
$dbname = "clicker";

$conn = new mysqli($servername, $username, $password, $dbname); // Create connection
if ($conn->connect_error) {     // Check connection
    die("Connection failed: " . $conn->connect_error);
} 

$highscore = mysqli_real_escape_string($conn, $_POST['score']);

if (strlen($times) > 200000) {  $times = "";    }

$sql = "INSERT INTO highscores (high_score)
VALUES ('$highscore');

$conn->close();
?>