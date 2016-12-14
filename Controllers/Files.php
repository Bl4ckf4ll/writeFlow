<?php

/**
* Class to create, delete and modify files
**/

class Files {

    protected $file;
    protected $filepath;

    function __construct ($filename) {
        $this->filepath = 'files/' . $filename . '.txt';
        $this->file = $filename;
    }

    function create ($contents) {
        $f = fopen($this->filepath, 'w') or die('Ooops, there\'s an error :o');

        fwrite($f, $contents);
        fclose($f);

        return true;
    }

    function read () {
        $f = fopen($this->filepath, 'r');
        $contents = fread($f, filesize($this->filepath));

        return ['filepath' => $this->filepath, 'filename' => $this->file, 'filecontent' => $contents];
    }
}