<?php
    require_once("../../../wp-load.php");
	$user_id = get_current_user_id();
    $user_id++;
    echo $user_id;
?>