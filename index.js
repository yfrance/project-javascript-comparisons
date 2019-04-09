// Javascript String
const cityA = "Jakarta";
const cityB = "Bandung";
const nameCompared = cityA != cityB;

console.log(cityA);
console.log(cityB);
console.log(nameCompared);

// Javascript Number
const ricePrice = 7000;
const wheatPrice = 10000;

if (ricePrice < wheatPrice) {
  console.log("Pakai sayur");
} else if (ricePrice < wheatPrice) {
  console.log("Tambah lauk");
} else {
  console.log("Tambah seporsi");
}

// Javascript Object
const personA = {
  name: "Ali",
  age: 9
};

const personB = {
  name: "Budi",
  age: 5
};

switch (personA.age < personB.age) {
  case true:
    console.log("selamat anda benar");
    break;

  case false:
    console.log("maaf jawaban anda salah");
    break;

  default:
    console.log("coba cari jawaban yang paling benar");
}
