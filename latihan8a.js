// Menggunakan prompt untuk meminta pengguna memasukkan nilai
let nilai = prompt("Masukkan nilai kuliah:");

// Mengonversi nilai dari string ke angka
nilai = parseFloat(nilai);

// Menggunakan pengkondisian untuk menentukan grade
let grade = "";
if (nilai < 40) {
  grade = "E";
} else if (nilai < 65) {
  grade = "D";
} else if (nilai < 75) {
  grade = "C";
} else if (nilai < 85) {
  grade = "B";
} else if (nilai <= 100) {
  grade = "A";
} else {
  alert("Nilai tidak valid. Harap masukkan nilai antara 0 dan 100.");
  // Keluar dari program jika nilai tidak valid
  throw new Error("Terminating program.");
}

// Menampilkan hasil kepada pengguna
alert("Grade untuk nilai " + nilai + " adalah: " + grade);