var user = prompt('Pilih Suit \n1.Semut \n2.Orang \n3.Gajah')
var computer = Math.random();

if (computer < 0.34) {
    computer = "Semut";
} else if (computer <= 0.67) {
    computer = "Orang";
} else {
    computer = "Gajah";
}

if (user == 1 && computer == "Gajah") { // User 1
    alert('Kamu Menang Komputer Memilih ' + computer)
} else if (user == 1 && computer == "Semut") {
    alert('Seri Komputer Memilih ' + computer)
} else if (user == 1 && computer == "Orang") {
    alert('Kamu Kalah Komputer Memilih ' + computer)
} else if (user == 2 && computer == "Gajah") { // User 2
    alert('Kamu Kalah Komputer Memilih ' + computer)
} else if (user == 2 && computer == "Semut") {
    alert('Kamu Menang Komputer Memilih ' + computer)
} else if (user == 2 && computer == "Orang") {
    alert('Seri Komputer Memilih ' + computer)
} else if (user == 3 && computer == "Gajah") { // User 3
    alert('Seri Komputer Memilih ' + computer)
} else if (user == 3 && computer == "Semut") {
    alert('Kamu Kalah Komputer Memilih ' + computer)
} else if (user == 3 && computer == "Orang") {
    alert('Kamu Menang Komputer Memilih ' + computer)
} else {
    alert('Masukan Input yang Benar')
}