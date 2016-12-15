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

		if ( $params['params'] ) {
			foreach ($params['params'] as $param => $value) {
				$query->bindParam($param, $value);
			}
		}

		$query->execute();

		$result = $query->fetchAll(PDO::FETCH_ASSOC);

		return $result;
	}
}