//2000 1 rute

function naikAngkot(arrPenumpang) {
  let rute = ['A', 'B', 'C', 'D', 'E', 'F'];
  let arrHasil =[];
  let ongkos = 2000;
  
  
  if (arrPenumpang == 0) {
    return arrPenumpang;
  }
  
  for (let i = 0; i < arrPenumpang.length; i++) {
    let objTemp = {};
    objTemp.penumpang = arrPenumpang[i][0];
    objTemp.naikDari =  arrPenumpang[i][1];
    objTemp.tujuan = arrPenumpang[i][2];
    objTemp.bayar = ongkos * (rute.indexOf(objTemp.tujuan) - rute.indexOf(objTemp.naikDari));
    arrHasil.push(objTemp);
  }
  return arrHasil;
}

//TEST CASE
console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

console.log(naikAngkot([])); //[]