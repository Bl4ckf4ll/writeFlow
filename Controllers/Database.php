<?php

namespace writeflow;

use PDO;

class Database {
	protected $conn;
	private $host = "localhost";
	private $username = "access";
	private $password = "echelon";
	private $dbname = "writeFlow";

	public function __construct () {
		try {
			$conn = $this->conn = new PDO("mysql:host={$this->host};dbname={$this->dbname}", $this->username, $this->password);
			$conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
			return true;
		} catch (PDOException $e) {
			echo "Connection Failed: " . $e->getMessage();
			return false;
		}
	}

	public function query ($params) {
		$query = $this->conn->prepare($params['query']);

		try {
			$query->execute();

			if ($params['fetch']) {
				$result = $query->fetchAll(PDO::FETCH_ASSOC);
			} else {
				$result = $this->conn->LastInsertId();
			}
		} catch (PDOException $e) {
			return $e->getMessage();
		}

		return $result;
	}
}