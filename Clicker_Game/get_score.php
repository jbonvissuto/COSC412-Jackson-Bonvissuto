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
if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        $response['high_score'] = $row["high_score"];
    }
    echo json_encode($response);
} else {
    echo "  0 results";
}
$conn->close();
?>