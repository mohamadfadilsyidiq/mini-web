const express = require('express');
const app = express();
const PORT = 3000;

// Menyimpan waktu server mulai dijalankan
const waktuJalan = new Date().toLocaleString('id-ID');

// Route 1: /
app.get('/', (req, res) => {
    res.send('Selamat datang di server Kelompok Chernobyl');
});

// Route 2: /info
app.get('/info', (req, res) => {
    res.send(`Server ini mulai dijalankan pada: ${waktuJalan}`);
});

// Route 3: /anggota
app.get('/anggota', (req, res) => {
    res.json({
        kelompok: 'Chernobyl',
        anggota: [
            { id: 11, nama: 'fadil' },
            { id: 22, nama: 'rahmat' },
            { id: 33, nama: 'tatang' }
        ]
    });
});

// Jalankan Server
app.listen(PORT, () => {
    console.log(`Server Express berjalan di http://localhost:${PORT}`);
});