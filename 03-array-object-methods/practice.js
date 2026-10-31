const buah = ["apel", "jeruk"];

buah.push("mangga"); // tambah di belakang, menambahkan mangga ke dalam array buah ["apel", "jeruk", "mangga"]
buah.unshift("pisang"); // ["pisang", "apel", "jeruk", "mangga"]
const keluar = buah.pop(); // keluar = "mangga"
buah.shift(); // hapus "pisang"

console.log(buah); // ["apel", "jeruk"]

/**Method   |	Fungsi	|   Posisi      |	Mengembalikan
push(x)	        tambah	    belakang	    panjang array baru
pop()	        hapus	    belakang	    elemen yang dihapus
unshift(x)	    tambah	    depan	        panjang array baru
shift()	        hapus	    depan	        elemen yang dihapus */

// mengambil bagian array (use slice (awal, akhir) index akhir tidak ikut diambil)
const angka = [10, 20, 30, 40, 50];

console.log(angka.slice(1, 3)); // [20,30]
console.log(angka.slice(2)); // [30, 40, 50] (sampai akhir)
console.log(angka); // tetap [10, 20, 30, 40, 50]

// splice (awal, jumlah hapus) menghapus elemen dan mengubah array asli

const huruf = ["a", "b", "c", "d"];

huruf.splice(1, 3); //hapus 3 elemen mulai index 1
console.log(huruf); //["a"]

//mencari elemen
const warna = ["merah", "biru", "hijau"];

console.log(warna.includes("biru")); // true
console.log(warna.includes("ungu")); // false
console.log(warna.indexOf("hijau")); // 2
console.log(warna.indexOf("ungu")); // -1 (tidak ditemukan)

// LATIHAN SESI 1
const tugas = ["belajar", "makan"];

// coba tambahkan tidur di belakang dan bangun di depan
tugas.push("tidur");
tugas.unshift("bangun");
console.log(tugas);
//hapus elemen terakhir dan simpan ke variabel selesai
const selesai = tugas.pop();
console.log("Tugas yang dikeluarkan " + selesai);
console.log(tugas);

// soal 2
const numberSlice = [10, 20, 30, 40, 50];
// ambil [20,30,40] dengan slice
console.log(numberSlice.slice(1, 4)); //[20,30,40]
console.log(numberSlice);
// hapus 30 dan 40 dengan splice
numberSlice.splice(2, 2);
console.log(numberSlice);

// soal 3
const daftar = ["a", "b"];

function tambahJikaBelum(array, nilai) {
  if (!array.includes(nilai)) {
    array.push(nilai);
  } else {
    console.log(`nilai ${nilai} sudah ada`);
  }
}

tambahJikaBelum(daftar, "c");
console.log(daftar);
tambahJikaBelum(daftar, "a");
console.log(daftar);

console.log("\n");

// sesi 2
const numberSection2 = [3, 8, 1, 9, 4];

// forEach: menjalankan callback setiap elemen, dan tidak menghasilkan array baru
numberSection2.forEach((x) => console.log(x * 2));

// map: mengubah setiap elemen, hasilnya array baru dengan jumlah elemen yang sama
const kaliDua = numberSection2.map((x) => x * 2);
console.log(kaliDua);
console.log(numberSection2);

// filter: menyaring elemen, hasilnya array baru yang berisi nilai yang lolos
const moreThan = numberSection2.filter((x) => x > 3);
console.log(moreThan);

// find: mengambil elemen pertama yang cocok, kalau tidak ada hasilnya undefined.
console.log(numberSection2.find((x) => x > 5));
console.log(numberSection2.find((x) => x > 100)); //undefined

// soal sesi 2
// dari const harga = [10000, 25000, 5000], buat array baru berisi harga setelah dinaikkan 10% memakai map.
const harga = [10000, 25000, 5000];

const markUp = harga.map((x) => x + x * 0.1);
console.log(markUp);

/**dari const nilai = [80, 55, 90, 40, 70]:
Ambil nilai yang lulus (≥ 70) dengan filter. Hasil: [80, 90, 70].
Cari nilai pertama yang kurang dari 60 dengan find. Hasil: 55. */
const nilai = [80, 55, 90, 40, 70];
const lulus = nilai.filter((x) => x >= 70);
console.log(nilai.find((x) => x < 60));

// soal 3
const siswa = [
  { nama: "Ar", nilai: 80 },
  { nama: "Budi", nilai: 55 },
  { nama: "Citra", nilai: 90 },
];
//Buat array berisi nama saja dengan map. Hasil: ["Ar", "Budi", "Citra"].

const nameOf = siswa.map((x) => x.nama);
console.log(nameOf);
//Buat array berisi nama siswa yang lulus (nilai ≥ 70). Gabungkan filter lalu map. Hasil: ["Ar", "Citra"].
const daftarLulus = siswa
  .filter((score) => score.nilai >= 70)
  .map((orang) => orang.nama);
console.log(daftarLulus);

// sesi 3 (reduce)

// soal sesi 3
// hitung total [3, 8, 1, 9, 4] dengan reduce. Hasil: 25. Lalu hitung rata-ratanya (total dibagi length). Hasil: 5.
const totalAngka = [3, 8, 1, 9, 4];

const hitungTotal = totalAngka.reduce((total, item) => total + item, 0);
// const hitungRata = totalAngka.reduce(
//   (total, item) => total + item / item.length,
//   0,
// );
// console.log(hitungRata);
console.log(hitungTotal);
console.log(hitungTotal / totalAngka.length);

//cari angka terbesar di array menggunakan reduce
const cariAngka = [3, 8, 18, 9, 4];

const cariJuara = cariAngka.reduce((juara, item) => {
  if (juara > item) {
    return juara;
  }
  return item;
}, cariAngka[0]); //Nilai awalnya cariAngka[0], bukan 0, supaya array berisi angka negatif tetap benar.
console.log(cariJuara);

/**hitung total belanja dari array object berikut (harga dikali jumlah): */

const belanja = [
  //array berisi object
  { nama: "Buku", harga: 20000, jumlah: 2 },
  { nama: "Pensil", harga: 3000, jumlah: 5 },
  { nama: "Penghapus", harga: 2000, jumlah: 1 },
];

const totalBelanja = belanja.reduce(
  (total, item) => total + item.harga * item.jumlah,
  0,
);

console.log(totalBelanja);
// ini soal tambahan untuk reduce
const hargaLebih = belanja.reduce((total, item) => {
  if (item.harga >= 3000) {
    return total + item.harga * item.jumlah;
  }
  return total;
}, 0);
console.log("Ini Harga Lebih: " + hargaLebih);
// tambahan soal mengenai reduce

//Menghitung kemunculan: dari ["a", "b", "a", "c", "a"], hitung berapa kali "a" muncul dengan reduce.

const karakter = ["a", "b", "a", "c", "a"];

const munculHuruf = karakter.reduce((muncul, item) => {
  if (item === "a") {
    return muncul + 1;
  }
  return muncul;
}, 0);

console.log(munculHuruf);
