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
