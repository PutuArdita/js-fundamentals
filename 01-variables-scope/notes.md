# [Variables and Scope]

**Tanggal:** 2026/10/21
**Durasi:**

# Apa yang dipelajari

Tujuan terakhir dari segmen ini yaitu akan mampu menjawab dimana atau kapan suatu variable bisa dipakai, dan apa nilainya saat ini.

`Ada beberapa hal yang akan dipelajari:`

1. variable: var, let, const (mengenai perbedaan cara kerja, kapan memakai const (nilai default) dan kapan memakai let (nilai berubah), dan `kenapa var` mesti dihindari).
2. scope (`area berlaku variable`) => global, fuction, dan block scope
3. Hoizting dan TDZ (Kenapa var bisa dipakai sebelum dideklarasikan `hasil undefined`, sedangkan const dan let error),
4. Shadowing dan scope chain

# Ringkasan dengan kata sendiri

- variabel const mengunci label (variabelnya) bukan nilai di dalamnya atau objeknya;
- var dapat dideklarasikan ulang, sementara `const\let` tidak bisa.
- untuk variabel, const dulu, jika nilainya kedepannya ingin berubah, pakai let, hindari var.

_scope_

- visibilitas dari sebuah variabel ( aksesibilitas dari suatu variabel)
- memiliki 3 scope, yaitu:

1. global scope berada diluar function, dan bisa diakses dari mana saja
2. function scope yaitu variable berada di dalam function, dan hanya function itu yang dapat mengakses
3. block scope yaitu variable berada di dalam {} block if atau for

function tryFnct itu termasuk function scope, kenapa karena var memiliki function scope, variable berlaku di seluruh function dia dideklarasikan, sedangkan let dan const hanya di dalam {}.

_hoisting_ : deklarasi terangkat (deklarasi function) namun nilainya tidak

_TDZ (Temporal Dead Zone)_ : var menghasilkan undefined sedangkan let/const menghasilkan error (TDZ)

- `var`: tidak ada error, tapi nilainya `undefined`, sehingga bug sulit dilacak.
- `let` / `const`: error jelas, sehingga bug cepat ketahuan.
- Alasan lain `var` dihindari, selain tidak punya block scope.
- Kebiasaan baik: deklarasikan variabel di atas, sebelum dipakai.

_Shadowing dan scope chain_

- Shadowing ketika variabel di scope dalam punya nama sama dengan variabel di scope luar, pencarian terhenti di variabel terdalam, jadi variabel terluar menjadi tertutup.

- scope chain ketika Js mencari variabel akan dimulai dari yang terdalam, kemudian naik satu tingkat hingga terluar, jika tidak ada maka akan muncul error `is not defined`.

- scope chain mengikuti tempat function ditulis, bukan urutan pemanggilan.
