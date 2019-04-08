// Javascript String
const cityA = "Jakarta";
const cityB = "Bandung";
const nameCompared = cityA != cityB;

console.log(cityA);
console.log(cityB);
console.log(nameCompared);

// Javascript Number
const beras = 7000;
const gandum = 10000;

if (beras < gandum) {
  console.log("pakai sayur");
} else if (beras < gandum) {
  console.log("tambah lauk");
} else {
  console.log("tambah seporsi");
}

// Javascript Array
const siA = {
    name= 'Ali',
    age= 9
}

const siB = {
    name= 'budi',
    age= 5
}

switch (siA.age < siB.age) {
    case true: console.log ('selamat anda benar')
break

case false: console.log ('maaf jawaban anda salah')
break

default: console.log ('coba cari jawaban yang paling benar')
}
