<?php

class DB {
    private $pdo;
    public function __construct($host, $dbname, $username, $password) {
        $pdo = new PDO('mysql:host='.$host.';dbname='.$dbname.';charset=utf8', $username, $password);
        $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        $this->pdo = $pdo;
    }
    public function query($query, $params = array()) {
        $statement = $this->pdo->prepare($query);
        $statement->execute($params);
        if (explode(' ', $query)[0] == 'SELECT') {
            $data = $statement->fetchAll(PDO::FETCH_ASSOC);
            return $data;
        }
    }
    public function countRows()
    {
        return $this->pdo->rowCount();
    }
    public function createSession($sessionName, $sessionValue)
    {
        $_SESSION[$sessionName] = $sessionValue;
    }
    public static function security($data)
    {
        return trim(strip_tags($data));
    }
}