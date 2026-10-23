# [Functions]

**Tanggal:** 2026/10/22
**Durasi:**

# Apa yang dipelajari

memahami tentang function dalam JavaScript.
function merupakan barisan kode yang dapat digunakan ulang untuk tugas tertentu, dieksekusi ketika function itu dipanggil dan diikutsertakan.

# Ringkasan

1. deklarasi function : function namaFunction(){}
2. function akan jalan ketika dipanggil, dengan cara menambahkan `parentheses/tanda kurung`, contoh: name();
3. parameter => nama-nama yang tercantum dalam function, ditaruh di dalam parentheses function itu sendiri.
4. arguments => nilai yang diterima oleh function

`bentuk lain function`

- function expression (function dalam variable), contoh: const f = function (){}
- arrow function: const f = () => {}
- parameter default digunakan jika argumen tidak dikirim

`callback function dipanggil dalam function penerima`

... di parameter mengumpulkan sisa argumen menjadi array, dan harus di posisi terakhir.
Closure: function mengingat variabel dari scope tempat ia dibuat, meskipun scope itu sudah selesai.
Tiap pemanggilan function pembuat closure menghasilkan variabel yang terpisah.

# Sumber

https://www.w3schools.com/js/js_functions.asp
