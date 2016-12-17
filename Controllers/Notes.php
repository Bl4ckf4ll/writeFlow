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
                $query = "SELECT * FROM notes WHERE id = '$noteId'";
                break;
            case 'all':
                $query = "SELECT * FROM notes WHERE active = 1";
                break;
        }
        
        $result = $this->conn->query([
            'fetch' => true,
            'query' => $query,
        ]);

        if ($option === 'all') {
            return $result;
        } else {
            return $result[0];
        }
    }

    public function save ($noteId, $title, $content) {
        $title = $title;
        $content = $content;

        if ($noteId != 0) {
            $query = "UPDATE notes SET title = '$title', content = '$content' WHERE id = '$noteId'";
        } else {
            $query = "INSERT INTO notes (title, content, user_id, board_id) VALUES ('$title', '$content', 1, 1)";
        }

        $query = $this->conn->query([
            'fetch' => false,
            'query' => $query
        ]);

        if ($noteId == 0) {
            $id = $query;
        } else {
            $id = $noteId;
        }

        return ["id" => $id, "title" => $title, "content" => $content];
    }
}