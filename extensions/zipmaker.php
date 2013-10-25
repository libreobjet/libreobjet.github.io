<?php

// Load composer
require __DIR__.'/../vendor/autoload.php';

function error_404() {
  header('HTTP/1.0 404 Not Found');
  exit('Not found');
}

// No project name?
if (!isset($_GET['zipname'])) {
  error_404();
}

$name = $_GET['zipname'];

// Content dir (realpath() removes ../, ./, etc. in path)
define('CONTENT_PATH', realpath(__DIR__.'/../content/1.objects'));

// Archives path (on the filesystem)
define('ARCHIVES_PATH', realpath(__DIR__.'/../public/archives'));

// Archives URL base
define('ARCHIVES_URL', '../public/archives/');

// List files in the content directory
$projects = glob(CONTENT_PATH."/*", GLOB_ONLYDIR);

// One more filter to get only ". + digit" patterns
$projects = array_filter($projects, function($dir) {
  return preg_match('/^[0-9]+\./', basename($dir));
});

$found_project = NULL;

// Loop on the projects list
foreach ($projects as $project_path) {

  // Project directory name only
  $project_name = basename($project_path);

  // Remove the digit before the project name
  $project_name = preg_replace('/^[0-9]+\./', '', $project_name);

  // Check if the name is the URL’s $name
  if ($project_name === $name) {
    // Let’s put it in an object, and fill the $found_project variable
    $found_project = (object)array('name' => $name, 'path' => $project_path);
    // Then stop the loop
    break;
  }
}

// No project found?
if ($found_project === NULL) {
  error_404();
}

// Make zip
$archive_path = ARCHIVES_PATH."/{$found_project->name}.zip";
if (!file_exists($archive_path)) {
  $zippy = Alchemy\Zippy\Zippy::load();
  $archive = $zippy->create($archive_path, array(
    'folder' => $found_project->path
  ));
}

// Redirect to the zip file
header('Location: '.ARCHIVES_URL."{$found_project->name}.zip");
