const buah = ["apel", "jeruk"];

buah.push("mangga"); // ["apel", "jeruk", "mangga"]
buah.unshift("pisang"); // ["pisang", "apel", "jeruk", "mangga"]
const keluar = buah.pop(); // keluar = "mangga"
buah.shift(); // hapus "pisang"

console.log(buah); // ["apel", "jeruk"]
