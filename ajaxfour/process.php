<?php

require __DIR__ . '/DB.php';
$db = new DB("localhost", "ajaxcrushcourse", "root", "");

echo 'Processing...';

// Check for get variable
if (isset($_GET['name'])) {

    echo 'Get: Your name is ' . $_GET['name'];
}
if (isset($_POST['name'])) {

    $name = $db::security($_POST['name']);

    if (!empty($name)) {
        $db->query('INSERT INTO user (name) VALUES (:name)', [':name' => $name]);
    }


    echo 'Post: Your name is ' . $_POST['name'];
}

$users = $db->query('SELECT * FROM user');
var_dump($users);