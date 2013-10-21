<?php
// Based on PHPZip https://github.com/Grandt/PHPZip

$zipName = $_GET["zipname"];
$fileDir = $_GET["folder"];

$extime = ini_get('max_execution_time');
ini_set('max_execution_time', 600);

include_once("ZipStream.php");

$zip = new ZipStream($zipName.".zip");

$zip->addFile("Libre Objet - Archive of ".$zipName."\r\n", "README.txt");
$zip->addFile($zipName.$fileDir, "test.txt");


//Dir test, using the stream option on $zip->addLargeFile
@$handle = opendir($fileDir);
if ($handle) {
    /* This is the correct way to loop over the directory. */
    while (false !== ($file = readdir($handle))) {
        if (($file != '.') && ($file != '..') && is_file($file)) {
            $zip->addLargeFile(($fileDir . $file), "sources/".$file, filectime($fileDir . $file));
        }
    }
}

$zip->finalize(); // Mandatory, needed to send the Zip files central directory structure.
?>
