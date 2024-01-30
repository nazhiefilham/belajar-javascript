var user = prompt('Pilih Suit \n1.Semut \n2.Orang \n3.Gajah')
var computer = Math.random();

if (computer < 0.34) {
    computer = "Semut";
} else if (computer <= 0.67) {
    computer = "Orang";
} else {
    computer = "Gajah";
}

if (user == 1 && computer == "Semut") { // User 1
    alert('Kamu Memilih Semut Komputer Seri Memilih ' + computer)
} else if (user == 1 && computer == "Semut") {
    alert('Kamu Memilih Gajah Komputer Menang Memilih ' + computer)
} else if (user == 1 && computer == "Orang") {
    alert('Kamu Memilih Semut Komputer Menang Memilih ' + computer)
} else if (user == 2 && computer == "Gajah") { // User 2
    alert('Kamu Memilih Orang Komputer Menang Memilih ' + computer)
} else if (user == 2 && computer == "Semut") {
    alert('Kamu Memilih Orang Komputer Kalah Memilih ' + computer)
} else if (user == 2 && computer == "Orang") {
    alert('Kamu Memilih Orang Komputer Seri Memilih ' + computer)
} else if (user == 3 && computer == "Gajah") { // User 3
    alert('Kamu Memilih Gajah Komputer Seri Memilih ' + computer)
} else if (user == 3 && computer == "Semut") {
    alert('Kamu Memilih Gajah Komputer Menang Memilih ' + computer)
} else if (user == 3 && computer == "Orang") {
    alert('Kamu Memilih Gajah Komputer Kalah Memilih ' + computer)
} else {
    alert('Masukan Input yang Benar')
}