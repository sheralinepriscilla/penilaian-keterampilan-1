let tinggi = 1.7 //meter
let berat = 90 //kg

var BMI = (berat / (tinggi**2));

//output
console.log ("--------------------------------");
console.log ("Tinggi Badan Rhodey      = 170 cm");
console.log ("Berat Badan Rhodey       = 90 kg");
console.log ("------- Status Berat Badan ------");

if (BMI < 18.5) {
    console.log ("Kekurangan berat badan");
}
else if (BMI <= 24.9){
    console.log ("Normal (ideal)");
}
else if (BMI <= 29.9){
    console.log ('kelebihan berat badan');
}
else {
    console.log ("Kegemukan (obesitas)");
}
