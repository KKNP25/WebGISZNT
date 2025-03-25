<?php
session_start();
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST['username'];
    $password = $_POST['password'];

    // Cek login (gunakan username dan password tetap)
    if ($username === "Pekalongan25" && $password === "kknp") { 
        $_SESSION['username'] = $username;
        $_SESSION['last_activity'] = time(); // Simpan waktu login

        header("Location: dashboard.php"); // Arahkan ke dashboard jika login berhasil
        exit();
    } else {
        header("Location: error.php?error=1"); // Redirect ke halaman login dengan error
        exit();
    }
}
?>
