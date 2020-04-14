//2000 1 rute

function naikAngkot(arrPenumpang) {
  let rute = ['A', 'B', 'C', 'D', 'E', 'F'];
  let arrHasil =[];
  let ongkos = 2000;
  
  
  if (arrPenumpang == 0) {
    return arrPenumpang;
  }
  
  let indexNaik = [];
  let indexTurun = [];
  
  for (let k = 0; k < arrPenumpang.length; k++) {
    let naik = arrPenumpang[k][1];
    let turun = arrPenumpang[k][2];
    for (let j = 0; j < rute.length; j++) {
      if (naik == rute[j]) {
        indexNaik.push(j);
      }
      if (turun == rute[j]) {
        indexTurun.push(j);
      }
    }
  }

  for (let i = 0; i < arrPenumpang.length; i++) {    
    let objTemp = {};
    objTemp.penumpang = arrPenumpang[i][0];
    objTemp.naikDari =  arrPenumpang[i][1];
    objTemp.tujuan = arrPenumpang[i][2];
    for (let m = 0; m < indexTurun.length; m++) {
      hasil = ongkos * (indexTurun[i] - indexNaik[i]);
    }
    objTemp.bayar = hasil;
    arrHasil.push(objTemp);
  }
  return arrHasil;
}

//TEST CASE
console.log(naikAngkot([
  ['Dimitri', 'B', 'F'], 
  ['Icha', 'A', 'B']
]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]
console.log(naikAngkot([])); //[]
console.log(naikAngkot([
  ['Aryo', 'C', 'E'], 
  ['Joni', 'B', 'E']
]));
/* let arr = ['a','i','a','s','x']
index = 0;
asal = 'a';


for (let i = 0; i < arr.length - 1; i++) {
  if (asal == arr[i]) {
    index = i
  }
}

console.log(index); */