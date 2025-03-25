<?php
session_start();
$timeout = 1200; // 30 menit (1800 detik)

// Cek apakah user sudah login
if (!isset($_SESSION['username'])) {
    header("Location: index.html");
    exit();
}

// Cek apakah sudah melebihi batas waktu
if (isset($_SESSION['last_activity']) && (time() - $_SESSION['last_activity']) > $timeout) {
    session_unset();
    session_destroy();
    header("Location: index.html?message=Session Expired");
    exit();
}

// Perbarui waktu aktivitas terakhir
$_SESSION['last_activity'] = time();

// Redirect ke WebGIS
header("Location: map.html");
exit();
?>
