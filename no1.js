//Membuat program untuk mengetahui nominal yang harus dibayar

let panjang = 20.5
let lebar = 30
let hargaTanah = 15000000
let ppn = 0.15

var luasTanah = (panjang * lebar)
var totalHarga = (luasTanah * hargaTanah)

//output
console.log("Luas tanah yang di beli = " + luasTanah + "m2");
console.log("Harga tanah per meter = Rp. " + hargaTanah);
console.log("PPN pembelian = 15%");
console.log("-----------------------------------------------");
console.log("Harga tanah yang di beli = Rp. " + totalHarga);
console.log("Total pajak = Rp. " + (totalHarga * 0.15));
console.log("------- Harga yang harus di bayar -------------");
console.log("Total harga   = Rp." + (totalHarga + (totalHarga * ppn)));
console.log("-----------------------------------------------");
