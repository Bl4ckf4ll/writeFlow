<?php
namespace writeFlow;

use writeFlow\Database;

class Notes {

    protected $file;
    protected $filepath;
    protected $conn;

    function __construct () {
        $this->conn = new Database();
    }

    function create ($contents) {
        echo 'create code to create note';
        return true;
    }

    function read ($option = false, $noteId = null) {
        switch ($option) {
            case 'first':
                $query = "SELECT * FROM notes WHERE id = :id";
                $params = [
                    ':id' => $noteId
                ];
                break;
            case 'all':
                $query = "SELECT * FROM notes";
                $params = false;
                break;
        }
        
        $result = $this->conn->query([
           'query' => $query,
           'params' => $params
        ]);

        if ($option === 'all') {
            return $result;
        } else {
            return $result[0];
        }
    }

    public function update ($noteId, $title, $content) {
        $this->conn->query([
            'query' => "UPDATE notes SET title = :title, content = :content",
            'params' => [
                ':title' => $title,
                ':content' => $content
            ]
        ]);
    }
}