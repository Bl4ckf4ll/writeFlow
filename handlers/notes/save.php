<?php
include_once '../../load.php';
extract($_POST, EXTR_PREFIX_ALL, 'post');

$note = new writeFlow\Notes();

echo json_encode( $note->save( $post_id, htmlentities($post_title, ENT_QUOTES), htmlentities($post_content, ENT_QUOTES) ) );