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
