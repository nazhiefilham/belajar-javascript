var x = prompt(" Masukkan angka anda :");
//alert("Selamat datang " + nama);

if (x % 2 == 0) {
    alert(x + " adalah bilangan genap");
} else if (x % 2 == 1) {
    alert(x + " adalah bilangan ganjil");
} else {
    alert(" data bukan angka")
}

if(confirm ("Apakah anda manusia ?")) {
    location = "http://google.com";
} else {
    alert("Anda Masuk Sel");
}