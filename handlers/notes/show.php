<?php
include_once '../../load.php';

$notes = new writeFlow\Notes();
$id = $_POST['id'];

echo json_encode( $notes->read('first', $id) );
?>