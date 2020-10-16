class HitungDeretGeometri {
    constructor(a,r,n){
        this.suku_pertama = a
        this.rasio = r
        this.suku_ke = n
    }

    hitungJumlahRasioLebihDari1  ()  {
        return (this.suku_pertama * ((this.rasio**this.suku_ke) -1 )) / (this.rasio - 1)
    }

    hitungJumlahRasioKurangDari1  ()  {
        return (this.suku_pertama * (1- (this.rasio**this.suku_ke))) / (1- this.rasio)
    }
}

let a = 4
let r = 3 
let n = 10

let geometri = new HitungDeretGeometri(a,r,n)

//output
console.log ("----------------------------------");
console.log ("Suku Pertama " + a);
console.log ("Rasio = " + r);
console.log ("Suku ke-" + n);
console.log ("----------------------------------");

if(r > 1){
    console.log ("Jumlah 10 suku pertama = " + geometri.hitungJumlahRasioLebihDari1());
}else{
    console.log ("Jumlah 10 suku pertama = " + geometri.hitungJumlahRasioKurangDari1());
}