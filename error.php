<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login Gagal</title>
    <style>
        /* Background Styling */
        body {
            margin: 0;
            font-family: Arial, sans-serif;
            background: url(Image/1329267-orange-background-wallpaper-1920x1200-for-desktop.jpg);
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            text-align: center;
        }

        /* Box Error */
        .error-container {
            background: rgba(255, 0, 0, 0.6);
            padding: 30px;
            border-radius: 10px;
            color: white;
            box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
        }

        h1 {
            margin: 0;
            font-size: 40px;
        }

        p {
            font-size: 18px;
            margin-top: 10px;
        }

        /* Icon */
        .error-icon {
            width: 80px;
            margin-bottom: 20px;
        }

        .logo {
            width: 140px; /* Sesuaikan ukuran lebar */
            height: auto; /* Menjaga aspek rasio */
            display: block;
            margin: 0 auto 20px; /* Memposisikan di tengah */
        }

        /* Tombol Kembali */
        .button {
            background: yellow;
            color: black;
            padding: 10px 20px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            font-weight: bold;
            text-decoration: none;
            display: inline-block;
            margin-top: 10px;
        }

        .button:hover {
            background: orange;
        }
    </style>
</head>
<body>

<div class="error-container">
    <img class="logo" src="Image/kisspng-nobita-nobi-doraemon-illustration-sleep-image-png-2-14-5bf34f544bd379.7589474415426722123106.png" alt="Logo"> <!-- Tambahkan src dan alt -->
    <h1>Login Gagal!</h1>
    <p>Username atau password yang Anda masukkan salah.</p>
    <a href="index.html" class="button">Coba Lagi</a>
</div>

</body>
</html>
