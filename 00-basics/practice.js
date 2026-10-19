// Komentar
// basic output
console.log("hello world"); //jika ingin tampil wajib console log.

// how tu run code:
// use terminal => node foldername/filename.js
//use website => with HTML File.

// variable
let angka = 10;

// penamaan variabel dengan camelCase
const kataSaya = "Selamat Pagi";

console.log(kataSaya + angka); //menampilkan output

// template literal
let kondisi = true;
let namaSaya = "Ardita";
let umurSaya = 23;

console.log(`Nama saya ${namaSaya} umur saat ini ${umurSaya} tahun.`); //tamplate literal

// hitung luas persegi
const panjang = 10;
const lebar = 25;

const luas = panjang * lebar;
console.log(
  `Luas persegi dengan panjang ${panjang} dan lebar ${lebar} = ${luas}`,
);

// cek tipe data
console.log(typeof namaSaya);
console.log(typeof panjang);
console.log(typeof kondisi);

// variabel JS: let, const, var
// tipe data: string, int, boolean, BigInt, symbol

//menukar nilai 2 variabel
let a = 24;
let b = 49;
let temp; //variabel untuk menyimpan nilai sementara.

temp = a;
a = b;
b = temp;

console.log(b);

// perbandingan jumlah 2 angka
let angka1 = "123";
let angka2 = 40;
// sebelum dikonversi
let hasil = angka1 + angka2;
// setelah dikonversi
let hasilC = Number(angka1) + angka2;

// output
console.log(`Penjumlahan ${hasil}`);
console.log(`Penjumlahan Konversi ${hasilC}`);

// mengubah celcius ke fahrenheit
let celcius = 37;
let fahrenheit = (celcius * 9) / 5 + 32;

console.log(`${celcius}C = ${fahrenheit}F`);

//day 2 (oprator & conditional)

/*The Assignment Operator = assigns values

The Addition Operator + adds values

The Multiplication Operator * multiplies values

The Comparison Operator > compares values*/

// MENENTUKAN SUATU BILANGAN GANJIL ATAU GENAP
let tesAngka = 15;

if (tesAngka % 2 === 0) {
  //=== adalah strict equality
  //jika tesAngka sisa hasil bagi 2 sama dengan 0, maka genap.
  console.log("Bilangan Genap");
} else {
  console.log("Bilangan Ganjil");
}

// cek angka apakah positif, negatif atau nol
let cekAngka = 0;

if (cekAngka > 0) {
  console.log("Positif");
} else if (cekAngka === 0) {
  console.log("Nol");
} else {
  console.log("Negatif");
}

// perbandingan dengan loose dan strict equality (kesamaan)
console.log(`5 == "5"`, 5 == "5");
console.log(`5 === "5"`, 5 === "5");
// console.log("0 == false :", 0 == false);
// console.log("0 === false :", 0 === false);
// console.log("'' == 0 :", "" == 0);
// console.log("null == undefined :", null == undefined);
// console.log("null === undefined :", null === undefined);

// cek skor dengan huruf
const nilaiSiswa = 90;

if (nilaiSiswa >= 90) {
  console.log("A");
} else if (nilaiSiswa >= 80) {
  console.log("B");
} else if (nilaiSiswa >= 70) {
  console.log("C");
} else {
  console.log("D");
}

// mengecek tahun kabisat
const cekTahun = 2024;
//cara 1
if (cekTahun % 400 === 0) {
  console.log("Tahun Kabisat");
} else if (cekTahun % 100 === 0) {
  console.log("Bukan Kabisat");
} else if (cekTahun % 4 === 0) {
  console.log("Tahun Kabisat");
} else {
  console.log("Bukan Kabisat");
}
// cara 2
if ((cekTahun % 4 === 0 && cekTahun % 100 !== 0) || cekTahun % 400 === 0) {
  // bacanya, jika tahun habis dibagi 4 dan tahun tidak habis dibagi 100, atau tahun habis dibagi 400.
  console.log(`${cekTahun} Tahun Kabisat`);
} else {
  console.log(`${cekTahun} Bukan Tahun Kabisat`);
}

// masih dalam kondisional (mengecek atau mengubah nama hari dari nomor menjadi nama hari)
const hariIni = 6;
// untuk input angka yaitu 0-6
switch (hariIni) {
  case 0:
    console.log("Minggu");
    break;
  case 1:
    console.log("Senin");
    break;
  case 2:
    console.log("Selasa");
    break;
  case 3:
    console.log("Rabu");
    break;
  case 4:
    console.log("Kamis");
    break;
  case 5:
    console.log("Jumat");
    break;
  case 6:
    console.log("Sabtu");
    break;
  default:
    console.log("Hari tidak cocok");
}

// masih di kondisional
const a1 = 9;
const b2 = 10;
const c3 = 16;

let terbesar = a1;

if (b2 > terbesar) {
  terbesar = b2;
}
if (c3 > terbesar) {
  terbesar = c3;
}

console.log(`Angka terbesar ${terbesar}`);

// SESI 3 LOOPING (PERULANGAN), DASAR STRING, ARRAY
// cetak angka 1 sampai 10 dengan for

for (let i = 1; i <= 10; i++) {
  console.log(`Angka ke ${i}`);
}

// soal 2 (menghitung jumlah nilai 1 sampai n)
const n = 4;
let total = 0;
for (let i = 1; i <= n; i++) {
  total += i; //ini merupakan singkatan dari total = total = total +i
}
console.log(`Hasil ${total}`); //ini ditaruh di luar loop supaya hasil yang tampil itu hasil dari proses terakhir loop

// soal 3 (mencetak tabel perkalian, misal 5x1 sampai 5x10)

const kali = 5;

for (let i = 1; i <= 10; i++) {
  const hasilKali = kali * i;
  console.log(`Hasil Perkalian ${kali} x ${i} = ${hasilKali}`);
}

// soal 4, (cetak FizzBuzz jika kelipatan 3 dan 5, jika 3 cetak Fizz, dan 5 cetak Buzz, sisanya angka biasa)
for (let i = 1; i <= 50; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    //urutan cek paling spesifik dicek terlebih dahulu
    console.log(`FizzBuzz`);
  } else if (i % 3 === 0) {
    console.log(`Fizz`);
  } else if (i % 5 === 0) {
    console.log(`Buzz`);
  } else {
    console.log(i);
  }
}

// soal pemanasan string
const karakterJs = "javascript";

// cetak karakter pertama dan terakhir
console.log(karakterJs[0]);
console.log(karakterJs[karakterJs.length - 1]); //kenapa -1, karena index dimulai dari 0, jadi panjangnya dikurangi 1 untuk menentukan nilai terakhir
// cetak karakter
for (let i = 0; i < karakterJs.length; i++) {
  console.log(karakterJs[i]);
}
// cetak karakter dari belakang
for (let i = karakterJs.length - 1; i >= 0; i--) {
  //karena index mulai dari 0
  console.log(karakterJs[i]);
}
// mengisi variabel kosong
let strKosong = "";

strKosong += "a";
strKosong += "b";
strKosong += "c";
console.log(strKosong);

//membalik kata javascript
let hasilJs = "";
for (let i = karakterJs.length - 1; i >= 0; i--) {
  hasilJs += karakterJs[i];
}
console.log(hasilJs);

// menghitung total dan rata rata dari sebuah array

const angkaArry = [3, 8, 1, 9, 4];
let hasilArry = 0;
for (const item of angkaArry) {
  hasilArry += item;
}

let rataArry = hasilArry / angkaArry.length;

console.log(`jumlah array angka = ${hasilArry}`);
console.log(`rata rata array angka = ${rataArry}`);

// soal 7: cek kata apakah palindrom

const kataPal = "olah";
let kataKosong = "";
for (let i = kataPal.length - 1; i >= 0; i--) {
  kataKosong += kataPal[i];
}
if (kataKosong === kataPal) {
  console.log("Kata Sama / Palindrom");
} else {
  console.log("kata tidak sama / Bukan Palindrom");
}

// soal 8: mencari angka terbesar dari array tanpa Math.max
const angkaArrMax = [3, 8, 1, 9, 4];
let angkaTerbesar = angkaArrMax[0];

for (const item of angkaArrMax) {
  if (item > angkaTerbesar) {
    angkaTerbesar = item;
  }
}
console.log(`Angka Terbesar adalah ${angkaTerbesar}`);
