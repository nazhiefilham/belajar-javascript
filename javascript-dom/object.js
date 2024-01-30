var siswa = new Object();
siswa.namaDepan = "Nazhief";
siswa.namaBelakang = "Ilham";
siswa.alamat = "Bandung";
siswa.namaLengkap = function() {
    return this.namaDepan + " " + this.namaBelakang;
};

var siswa2 = {
    namaDepan : "Akzal",
    namaBelakang : "Damusti",
    alamat : "Bandung",
    namaLengkap : function() {
        return this.namaDepan + " " + this.namaBelakang;
    },
};
alert("Nama : " + siswa.namaLengkap());
alert("Nama : " + siswa2.namaLengkap());
//function namaLengkap() {

// // }