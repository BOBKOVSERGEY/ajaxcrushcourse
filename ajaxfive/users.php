<?php

require __DIR__ . '/DB.php';
$db = new DB("localhost", "ajaxcrushcourse", "root", "");


$users = $db->query('SELECT * FROM user');
if (!empty($users)) {
    echo json_encode($users);
}