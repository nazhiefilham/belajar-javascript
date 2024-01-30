var siswa = new Object();
siswa.namaDepan = "nazhief";
siswa.namaBelakang = "ilham";
siswa.alamat = "bandung";
siswa.namaLengkap = function() {
    return this.namaDepan + " " + this.namaBelakang;
};

alert("Nama : " + siswa.namaLengkap());

//function namaLengkap() {

// // }