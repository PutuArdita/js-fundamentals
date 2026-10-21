const list = [1, 2, 3];

list.push(4);

console.log(list);

// coba deklarasi dan ganti value suatu variable
// misal menggunakan const
let nama = "Ar"; //jika menggunakan const, maka akan error, jika let maka akan jalan
console.log(nama);

nama = "Ardita"; //ini error karena variable menggunakan const, dimana nilainya tetap (tidak dapat diubah)
console.log(nama);

let usia = 20;
// proses ganti nilai
usia = 21;
console.log(`usia saat ini ${usia}`);

// let kota = "Denpasar"; //ini error karena variable let tidak dapat deklarasi nama yang sama
// let kota = "Jakarta";

var kota = "Denpasar"; //ini bisa dan tidak ada error, karena var membolehkan deklarasi 2 nama variabel yang sama, ini perlakuan JS lama.
var kota = "Jakarta"; // ini dapat menimpa variabel kota yang lain, maka dari itu var sangat dihindari.

const buah = ["apel", "jeruk"];
// push nilai
buah.push("mangga");
// buah = ["pisang"]; //point ini saya masih bingung, kenapa bisa error?
// cetak
console.log(buah);

const siswa = { nama: "Ar", nilai: 89 };
siswa.nilai = 90; //nah ini kan variable const, kenapa ketika nilainya diubah tidak error?

console.log(siswa);

console.log("\n");

// memilih 3 variabel dari segmen sebelumnya

// SESI 2 SCOPE
const salamLuar = "Salam dari luar";

function dariLuar() {
  console.log(salamLuar);
}

dariLuar();

// batas function
function dariDalam() {
  const salamDalam = "Salam dari dalam";
}

dariDalam(); //ini tidak dapat menampilkan variabel salamDalam (undefined)

// batas kondisi let
if (true) {
  let x = 10;
}

console.log(x); //undefined

// batas kondisi var
if (true) {
  var x = 10;
}

console.log(`ini menggunakan var ${x}`);

// batas let
for (let i = 0; i < 3; i++) {}
console.log(i); //undefined

// batas var
for (var i = 0; i < 3; i++) {}
console.log(`ini menggunakan var ${i}`);

let hitung = 0;
function hitungAngka() {
  hitung = hitung + 1;
}

hitungAngka();
hitungAngka();
hitungAngka(); //ini tidak mau tampil

console.log(hitung);

// let hitungA = 0;
// function hitungAngkaB() {
//   let hitungA = hitungA + 1; //ini error karena shadowing
// }

// hitungAngkaB();
// hitungAngkaB();
// hitungAngkaB(); //ini tidak mau tampil

// console.log(hitungA);

function tryFnct() {
  if (true) {
    var tryAct = "Hello world";
  }
  console.log(tryAct); //var bocor dari block if, tetapi tidak dari function
}

tryFnct();

// console.log(tryAct); not defined

// SESI 3 HOISTING DAN TEMPORAL DEAD ZONE (TDZ)
console.log(namaSaya);
var namaSaya = "Ar"; //hasilnya undefined

// console.log(myName);
// let myName = "Ardita"; //error cannot access variable before initialization.

// console.log(myName);
// const myName = "Ardita"; //sama eror seperti di atas

sapa();
function sapa() {
  console.log("Hello World");
}

var x = 1;
function tes() {
  console.log(x); //terangkat menutupi x luar, sehingga masuk ke undefined, ini merupakan gabungan shadowing dan hoisting
  var x = 2;
}
tes(); //ini hasilnya undefined

// SESI 4: SHADOWING AND SCOPE CHAIN

const warna = "Merah"; //baru variable globalnya

function colorHunt() {
  const warna = "Biru"; //ini dulu dicetak
  //   const warna = "Ungu"; //maka yang tercetak adalah ungu, karena shadowing dan scope chain (dimana variabel paling dalam di suatu function itu akan digunakan)
  console.log(warna);
}
colorHunt();
console.log(warna);

const nilai = "global";
function f1() {
  const nilai = "f1"; //variabel dalam function 1
  function f2() {
    console.log(nilai); //function 2 dan 3 sejajar, jadi cetak function 2 dulu yang mengambil nilai dari const f1
  }
  function f3() {
    const nilai = "f3";
    console.log(nilai);
  }
  f3(); //karena f2 dipanggil pertama, maka dicetak nilai variable dari f1, karena f2 tidak memiliki variabel dan mencari ke scope luar.
  f2();
}
f1();
console.log(nilai);
