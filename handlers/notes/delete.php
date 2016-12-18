<?php
include_once '../../load.php';

$note = new writeFlow\Notes();

$note->delete($_POST['id']);

echo json_encode(['message' => 'test delete note']);