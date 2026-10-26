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

// SESI 3, FUNCTION CALLBACK
function jalankan(aksi) {
  aksi();
}
jalankan(() => console.log("Kalimat"));

function proses(angka, aksi) {
  return aksi(angka);
}
console.log(proses(5, (x) => x * x));
console.log(proses(5, (x) => x + x));
console.log(proses(5, (x) => x + 100));

// soal 3
function forAny(array, action) {
  for (const item of array) {
    action(item);
  }
}
forAny([3, 8, 1], (x) => console.log(x * 2));

console.log("\n");

// SESI 4, REST PARAMETER DAN CLOSURE
function rataRata(...angka) {
  let hasil = 0;
  for (const item of angka) {
    hasil += item;
  }
  return hasil / angka.length;
}

console.log(rataRata(3, 2, 3, 4));

function buatPenghitung() {
  let hitung = 0;
  return () => {
    hitung = hitung + 1;
    return hitung;
  };
}

const a = buatPenghitung();
const b = buatPenghitung();

console.log(a());
console.log(a());
console.log(b());

// soal 3
function kalikanDengan(faktor) {
  return (angka) => faktor * angka;
}

const kaliDua = kalikanDengan(2);
const kaliTiga = kalikanDengan(3);
console.log(kaliDua(5));
console.log(kaliTiga(5));

// review soal 3
/**? - kalikanDengan(2) dipanggil, dan parameter faktor bernilai argumen 2
 * - kemudian function baru dibuat dan dikembalikan melalui return (angka) => faktor * angka;
 * - setelah itu, function kalikanDengan itu selesai, dan biasanya parameter faktor hilang disini,
 * tapi function di dalamnya yang dikembalikan masih memerlukannya sehingga disimpan di kaliDua,
 * dengan faktor = 2.
 * - kaliDua dipanggil dengan argumen (5) yang dimana menjadi argumen dari parameter angka,
 *   kemudian menjadi angka = 5 dan faktor = 2 yang tadi disimpan, menjadi hasilnya 10.
 *
 */
