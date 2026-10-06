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
