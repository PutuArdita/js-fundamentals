//Function JavaScript
function sayHello() {
  console.log("Say Hello");
}

sayHello();

// menghitung luas persegi panjang dengan function;
function luasPersegiPanjang(p, l) {
  return p * l;
}

const hasil = luasPersegiPanjang(5, 3);
console.log(hasil);

// ubah celcius ke fahrenheit
function ubahSatuanSuhu(suhu) {
  return (suhu * 9) / 5 + 32;
}

const hasilSuhu = ubahSatuanSuhu(37);
console.log(hasilSuhu);

//mengembalikan angka terbesar dari 3 angka
function angkaTerbesar(a, b, c) {
  let terbesar = a;
  if (b > terbesar) {
    terbesar = b;
  }
  if (c > terbesar) {
    terbesar = c;
  }
  //   console.log(terbesar);
  return terbesar; //RETURN DAPAT LANGSUNG MENGHENTIKAN FUNCTION.
}

const angkaMax = angkaTerbesar(100, 12, 79);
console.log(angkaMax);

// Sesi 2 ARROW FUNCTION

// menulis arrow function tanpa return
const persegiPjg = (p, l) => p * l;
console.log(persegiPjg(5, 3));

// arrow function dengan default parameter
const sapa = (nama = "Kawan") => "Selamat Pagi " + nama;
console.log(sapa()); //akan menampilkan Selamat Pagi dengan default parameter ("kawan")
console.log(sapa("Ardita")); // akan menampilkan Selamat pagi dengan nilai argumen yang dikirimkan ("Ardita")

// arrow function diskon
const diskonHarga = (harga, persen = 10) => harga - harga * (persen / 100);
console.log(diskonHarga(100000, 25));
