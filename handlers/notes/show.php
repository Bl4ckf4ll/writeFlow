<?php
include_once '../../load.php';

$notes = new writeFlow\Notes();

$id = isset($_POST['id']) ? $_POST['id'] : false;

if ($id) {
    echo json_encode( $notes->read('first', $id) );
} else {
    echo json_encode( $notes->read('all') );
}
?>