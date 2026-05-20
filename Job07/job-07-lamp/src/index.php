<?php
$host = getenv('DB_HOST') ?: 'db';
$port = getenv('DB_PORT') ?: '3306';
$db = getenv('MYSQL_DATABASE') ?: 'lamp_demo';
$user = getenv('MYSQL_USER') ?: 'dev';
$pass = getenv('MYSQL_PASSWORD') ?: 'devpass';

$mysqli = @new mysqli($host, $user, $pass, $db, (int)$port);
if ($mysqli->connect_errno) {
    $error = htmlspecialchars($mysqli->connect_error, ENT_QUOTES, 'UTF-8');
    echo "<p>MySQL connection failed: {$error}</p>";
} else {
    echo '<p>MySQL connection successful.</p>';
    $mysqli->close();
}

phpinfo();
