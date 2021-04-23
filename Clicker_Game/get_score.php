<?php
$servername = "localhost";
$username = "clicker_user";
$password = "zelda77L";
$dbname = "clicker";

$conn = new mysqli($servername, $username, $password, $dbname); // Create connection
if ($conn->connect_error) {     // Check connection
    die("Connection failed: " . $conn->connect_error);
} 

$sql = "SELECT high_score FROM highscore WHERE ID=1 ;"; //Get the high schore from the database 
$result = $conn->query($sql);
echo $result['high_score'];
echo "test\n";
$conn->close();
?>