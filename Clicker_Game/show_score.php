<?php
 error_reporting(E_ALL & ~E_NOTICE);
 define('DB_HOST', 'localhost');
 define('DB_NAME', 'clicker'); 
 define('DB_CHARSET', 'utf8');
 define('DB_USER', 'clicker_user'); 
 define('DB_PASSWORD', 'zelda77L'); 

 // (B) CONNECT TO DATABASE
 try {
   $pdo = new PDO(
       "mysql:host=" . DB_HOST . ";charset=" . DB_CHARSET . ";dbname=" . DB_NAME, 
        DB_USER, DB_PASSWORD
   );
 } catch (Exception $ex) { exit($ex->getMessage()); }

 // (C) GET high_score
 $stmt = $pdo->prepare("SELECT * FROM `highscores`");
 $stmt->execute();
 $highscores = $stmt->fetchAll();
 foreach ($highscores as $u) {
   printf("<div>", $u['high_score'] ); 
 } 

 // (D) CLOSE DATABASE CONNECTION
 $pdo = null;
 $stmt = null;
