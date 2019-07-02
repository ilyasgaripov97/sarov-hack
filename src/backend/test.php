<?php

echo "test";

// connect to db

$servername = "localhost";
$username = "u0755299_default"; //u0755299_default  u0755299@localhost
$password = "Ti_xU5AP";
$dbname = "u0755299_default";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
	die("Connection failed: " . $conn->connect_error);
}

echo "Connected successfully";

$sql = "SELECT id, geo_place FROM garbage_list";
$output = $conn->query($sql);

if ($output->num_rows > 0) {
	// output data of each row
	while($row = $output->fetch_assoc()) {
		echo "id: " . $row["id"]. " - Geo place: " . $row["geo_place"] . "<br>";
	}
} else {
	echo "0 results";
}
$conn->close();