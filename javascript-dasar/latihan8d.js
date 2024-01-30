var tinggi = prompt("Masukkan tinggi segitiga:");

tinggi = parseInt(tinggi);

var hasilSegitiga = '';

for (var i = 1; i <= tinggi; i++) {
  for (var j = 1; j <= i; j++) {
    hasilSegitiga += '* ';
  }
  hasilSegitiga += '\n';
}
alert(hasilSegitiga);