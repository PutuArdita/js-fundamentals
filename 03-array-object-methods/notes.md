# [Functions]

**Tanggal:** 2026/10/29 / 2026/10/30
**Durasi:**

# Apa yang dipelajari

Array dasar meliputi menambah dan menghapus (push, pop, shift, unshift), mengambil bagian (slice, splice), mencari (includes, indexOf)

Method array dengan callback (forEach versi resmi dari untukSetiap, map: mengubah tipe elemen menjadi hasil baru, filter: menyaring elemen berdasarkan kondisi, find: mencari satu elemen)

reduce, yaitu proses menggabungkan semua elemen menjadi satu nilai

Object, untuk membuat dan mengakses properti seperti (. dan []), menambah, mengubah dan menghapus properti. Object.keys, Object.values, Object.entries. Array berisi object, misalnya [{nama: "Ar", nilai:80}]

Destructuring, spread, dan rest yaitu mengambil nilai dari array atau object dengan ringkas, Spread (...) untuk menyalin dan menggabungkan, dan berkaitan dengan rest parameter.

another method (sort, reverse, join, split | Math.min / Math.max, method string toUpperCase, includes, slice, trim)

# Ringkasan

1. menambah dan menghapus elemen
   Method | Fungsi | Posisi | Mengembalikan
   push(x) tambah belakang panjang array baru
   pop() hapus belakang elemen yang dihapus
   unshift(x) tambah depan panjang array baru
   shift() hapus depan elemen yang dihapus

   push/pop bekerja di belakang, unshift/shift di depan.

2. mengambil bagian array, nama slice dan splice mirip, slice tidak mengubah dan splice mengubah.

3. mencari elemen (includes: menjawab ada atau tidak (true/false), indexOf: berada di index berapa, jika tidak ada maka -1)

4. forEach menjalankan sesuatu untuk tiap elemen, tanpa hasil.
5. map mengubah tiap elemen jadi array baru, dan filter menyaring jadi array baru. Keduanya tidak mengubah array asli.
6. find mengembalikan satu elemen pertama yang cocok, atau undefined.
7. { } pada arrow function wajib memakai return.

# Sumber

https://www.w3schools.com/js
