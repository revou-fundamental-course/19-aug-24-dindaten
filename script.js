document.addEventListener('DOMContentLoaded', function() {
    var tombolMenu = document.getElementsByClassName('tombol-menu')[0];
    var menu = document.getElementsByClassName('menu')[0];

    tombolMenu.onclick = function() {
        menu.classList.toggle('active');
    };

    menu.onclick = function() {
        menu.classList.toggle('active');
    };

    document.getElementById('contactForm').addEventListener('submit', function(event) {
        event.preventDefault();

        // Ambil data formulir
        const name = document.getElementById('name').value;
        const dob = document.getElementById('dob').value;
        const gender = document.getElementById('gender').value;
        const message = document.getElementById('message').value;

        // Tampilkan pesan konfirmasi
        document.getElementById('messageSent').style.display = 'block';

        // Tampilkan pesan yang diketik di sebelah kanan
        document.getElementById('displayMessage').innerHTML = `
            Nama: ${name}<br>
            Tanggal Lahir: ${dob}<br>
            Jenis Kelamin: ${gender}<br>
            Pesan: ${message}
        `;

        // Reset form
        this.reset();
    });
});
