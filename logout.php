<?php
session_start();
$_SESSION['role'] = 0;
$_SESSION['id'] = '';
session_destroy();
header( 'location:login.php' );
