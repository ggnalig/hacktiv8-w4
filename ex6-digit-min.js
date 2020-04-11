function digitPerkalianMinimum(angka) {
    let arrHasil = [];
    for (let i = 0; i <= angka; i++) {
      let temp = '';
      for (let j = 0; j <= angka; j++) {
        if (angka == j*i) {
          temp = temp + i +j;
          arrHasil.push(temp);
        }
      }
    }
    let hasil = arrHasil[0].length;
      for (let k = 0; k < arrHasil.length; k++) {
        if (arrHasil[k].length < hasil) {
          hasil = arrHasil[k].length;
        }
      }
    return hasil;
  }
  
  // TEST CASES
  console.log(digitPerkalianMinimum(24)); // 2
  console.log(digitPerkalianMinimum(90)); // 3
  console.log(digitPerkalianMinimum(20)); // 2
  console.log(digitPerkalianMinimum(179)); // 4
  console.log(digitPerkalianMinimum(1)); // 2