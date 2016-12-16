<?php
include_once '../../load.php';
extract($_POST, EXTR_PREFIX_ALL, 'post');

$note = new writeFlow\Notes();
var_dump($note->update($post_id, $post_title, $post_content));