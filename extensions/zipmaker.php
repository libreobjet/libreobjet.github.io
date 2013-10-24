<?php
 
if (!isset($_GET['zipname'])) {
exit('Error'); // Pas de nom de projet
}
 
$name = $_GET['zipname'];
 
// Content dir
$content = __DIR__.'/../content';
 
// Remove ../, ./, etc. in path
// http://php.net/manual/en/function.realpath.php
$content = realpath($content);
 
// glob(): list files in a directory
// http://www.php.net/manual/en/function.glob.php
$projects = glob("$content/*", GLOB_ONLYDIR);
 
// One more filter to get only ". + digit" patterns
$projects = array_filter($projects, function($dir) {
return preg_match('/^[0-9]+\./', basename($dir));
});
 
$found_project = NULL;
 
// Loop on list
foreach ($projects as $project_path) {
// Keep only project names
$project_name = basename($project_path);
 
// Remove number before project name
$project_name = preg_replace('/^[0-9]+\./', '', $project_name);
 
// Check if the name is the URL’s $name
if ($project_name === $name) {
// Let’s put it in an array
$found_project = array($name, $project_path);
// then stop the loop
  break;
}
}
 
if ($found_project === NULL) {
echo ($projects);
exit('Error'); // No project found
}
 
// Make zip
$autoload_path = __DIR__.'/../vendor/autoload.php';
?>