// Daftar menu makanan beserta harganya
const menu = {
    nasiGoreng: 15000,
    mieGoreng: 12000,
    ayamGeprek: 18000,
    sotoAyam: 16000,
    bakso: 15000
  };
  
  // Menggunakan prompt untuk meminta pengguna memilih menu
  let pesanan = prompt("Menu makanan yang tersedia:\n1. Nasi Goreng\n2. Mie Goreng\n3. Ayam Geprek\n4. Soto Ayam\n5. Bakso\n\nMasukkan nomor menu yang diinginkan:");
  
  // Menggunakan pengkondisian untuk menentukan harga berdasarkan pilihan pengguna
  let harga = 0;
  if (pesanan === "1") {
    harga = menu.nasiGoreng;
  } else if (pesanan === "2") {
    harga = menu.mieGoreng;
  } else if (pesanan === "3") {
    harga = menu.ayamGeprek;
  } else if (pesanan === "4") {
    harga = menu.sotoAyam;
  } else if (pesanan === "5") {
    harga = menu.bakso;
  } else {
    alert("Nomor menu tidak valid.");
    // Keluar dari program jika nomor menu tidak valid
    throw new Error("Terminating program.");
  }
  
  // Menggunakan prompt untuk meminta pengguna memasukkan jumlah makanan yang diinginkan
  let jumlah = prompt("Masukkan jumlah makanan yang diinginkan:");
  
  // Menghitung total biaya
  let totalBiaya = harga * jumlah;
  
  // Menampilkan hasil kepada pengguna
  alert("Detail Pesanan:\nMenu: " + pesanan + "\nJumlah: " + jumlah + "\nTotal Biaya: Rp " + totalBiaya);