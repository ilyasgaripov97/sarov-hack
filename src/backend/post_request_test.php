<?php
/**
 * Created by PhpStorm.
 * User: forpa
 * Date: 7/2/2019
 * Time: 9:20 PM
 */

if ($_POST["latitude"] && $_POST["longitude"]) {
	$latitude = htmlspecialchars($_POST["latitude"]);
	$longitude = htmlspecialchars($_POST["longitude"]);
} else
{
	$latitude = 0;
	$longitude = 0;
}

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
echo $latitude . " " . $longitude;
$sql = "INSERT INTO geo (latitude, longitude) VALUES ($latitude, $longitude)";
$conn->query($sql);

$conn->close();