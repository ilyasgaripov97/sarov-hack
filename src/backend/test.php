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

echo "Connected successfully<br>";

$sql = "SELECT * FROM garbage_list";
$output = $conn->query($sql);

if ($output->num_rows > 0) {
	// output data of each row
	while($row = $output->fetch_assoc()) {
		$data[] = array(
			'id' => $row['id'],
			'img_path' => $row['img_path'],
			'geo_place' => $row['geo_place'],
			'comment' => $row['comment'],
			'importance' => $row['importance'],
			'date' => $row['date']
		);
	}
} else {
	echo "0 results<br>";
}
//echo '<pre>'; print_r($output); echo '</pre>';
$conn->close();
$output = array('data' => $data);
$output = json_encode($output);


echo $output;