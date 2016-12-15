<?php

namespace writeflow;

use PDO;

class Database {
	private $db;
	private $host = "localhost";
	private $username = "access";
	private $password = "echelon";
	private $dbname = "writeFlow";

	public function __construct () {
		try {
			$conn = $this->db = new PDO("mysql:host={$this->host};dbname={$this->dbname}", $this->username, $this->password);
			$conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
			echo "Connection Succesful";
			return true;
		} catch (PDOException $e) {
			echo "Connection Failed: " . $e->getMessage();
			return false;
		}
	}
}