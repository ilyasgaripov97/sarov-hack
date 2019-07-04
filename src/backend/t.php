<?php


$target_dir = "/var/www/u0755299/public_html/scripts/maidan/";
$target_file = $target_dir . basename($_FILES["fileToUpload"]["name"]);
$uploadOk = 1;
$imageFileType = strtolower(pathinfo($target_file, PATHINFO_EXTENSION));

$image = $_FILES["fileToUpload"];

if (!file_exists($image['tmp_name']))
    throw new Exception('Image file is missing in the server');
else
    echo "file is exists<br>";

if (move_uploaded_file($_FILES['fileToUpload']['tmp_name'], $target_file)) {
    echo "File is valid, and was successfully uploaded.\n";
} else {
    echo "Upload failed";
}

//// Check if image file is a actual image or fake image
//if (isset($_POST["submit"])) {
//    $check = getimagesize($_FILES["fileToUpload"]["tmp_name"]);
//    if ($check !== false) {
//        echo "File is an image - " . $check["mime"] . ".";
//        $uploadOk = 1;
//    } else {
//        echo "File is not an image.";
//        $uploadOk = 0;
//    }
//}
//
