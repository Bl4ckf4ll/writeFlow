<?php
include_once '../../load.php';

$notes = new writeFlow\Notes();

$id = isset($_POST['id']) ? $_POST['id'] : false;

if ($id) {
    $note = $notes->read('first', $id);


    echo json_encode([
        "id" => $note['id'],
        "title" => htmlspecialchars_decode($note['title']),
        "content" => htmlspecialchars_decode($note['content'])
    ]);

} else {
    $notes = $notes->read('all');
    $result = [];

    foreach ($notes as $note) {
        $result[] = [
            "id" => $note['id'],
            "title" => html_entity_decode($note['title']),
            "content" => html_entity_decode($note['content'])
        ];
    }

    echo json_encode( $result );
}
?>