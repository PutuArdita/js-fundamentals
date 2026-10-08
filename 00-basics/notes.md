# [Basic JavaScript]

**Tanggal:** 2026-10-06 / 2026/10/08 /
**Durasi:** 30 Menit / 40 menit

## Apa yang dipelajari

- Konsep 1: Cara menjalankan kode js, variabel, tipe data.
- Konsep 2: Operator dan Kondisional
- Konsep 3:

## Contoh kode penting

```js
// contoh singkat + komentar penjelasan
```

## Kesalahan / hal yang membingungkan

- Masalah:
  - Penyebab:
  - Solusi:

## Pertanyaan yang belum terjawab

- ...

## Ringkasan dengan kata sendiri

yang dipelajari sampai di tipe data, untuk selanjutnya agar dilanjutkan ke oprator dan kondisional.

- gunakan const pada variabel jika nilainya tidak diubah ubah. kecuali nilai mungkin akan berubah.
- perbandingan menggunakan Loose equality (kesamaan longgar) dengan Strict Equality (kesamaan ketat) yaitu lebih aman menggunakan Strict equality karena tipe data dan nilai dicek secara bersamaan, sedangkan Loose equality akan hanya mengecek nilainya saja, sehingga hasil yang nantinya muncul itu berbeda.

- tanda koma bukan operator dan di JS, operator dan di js itu (&&)

- UNTUK CEK TAHUN KABISAT:
  Aturan:

1. Habis dibagi 4 → kabisat
2. Kecuali habis dibagi 100 → bukan kabisat
3. Kecuali habis dibagi 400 → kabisat

Apa yang dipelajari

- `%` (modulo) memberi **sisa bagi**. "Habis dibagi" berarti sisa bagi `=== 0`.
- `&&` (AND): hasilnya `true` kalau **kedua** kondisi benar.
- `||` (OR): hasilnya `true` kalau **salah satu** kondisi benar.
- `!==` (strict not equal): hasilnya `true` kalau nilai **tidak sama**.

  Kenapa memakai `!== 0`?

- `tahun % 100 === 0` artinya **habis dibagi 100** (sisa 0).
- `tahun % 100 !== 0` artinya **tidak habis dibagi 100** (sisa bukan 0).

Aturan kabisat butuh frasa "habis dibagi 4 **tetapi tidak** habis dibagi 100".
Karena itu bagian "tidak habis dibagi 100" ditulis `% 100 !== 0`.

Tanpa syarat ini, tahun seperti 1900 dan 2100 akan salah dianggap kabisat,
karena keduanya habis dibagi 4 padahal habis dibagi 100 juga (dan tidak habis dibagi 400).

## Sumber

- [judul](link)
