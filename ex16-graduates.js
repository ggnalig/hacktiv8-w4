function graduates (students) {
  
  let namaKelas = [];
  let kelas = [];
  let hasil = {};
  
  if (students.length == 0) {
    return hasil;
  }

  for (let i = 0; i < students.length; i++) {
    kelas.push(students[i].class);
  }
  
  found = false;
  count = 0;
  for (let x = 0; x < kelas.length; x++) {
    for (let y = 0; y < namaKelas.length; y++) {
      if (kelas[x] == namaKelas[y]) {
        found = true;
      }
    }
    count++;
    if (count == 1 && found == false) {
      namaKelas.push(kelas[x]);
    }
    count = 0;
    found = false; 
  }
  
  for (let j = 0; j < namaKelas.length; j++) {
    let arrStudents = [];
    for (let k = 0; k < students.length; k++) {
      let objStudents = {}
      if (namaKelas[j] === students[k].class && students[k].score > 75) {
        objStudents.name = students[k].name;
        objStudents.score = students[k].score;
        arrStudents.push(objStudents);
      }
    }
    hasil[namaKelas[j]] = arrStudents;
  }
  return hasil;
}

console.log(graduates([
  {
    name: 'Dimitri',
    score: 90,
    class: 'foxes'
  },
  {
    name: 'Alexei',
    score: 85,
    class: 'wolves'
  },
  {
    name: 'Sergei',
    score: 74,
    class: 'foxes'
  },
  {
    name: 'Anastasia',
    score: 78,
    class: 'wolves'
  }
]));

// {
//   foxes: [
//     { name: 'Dimitri', score: 90 }
//   ],
//   wolves: [
//     { name: 'Alexei' , score: 85 },
//     { name: 'Anastasia', score: 78 }
//   ]
// }

console.log(graduates([
  {
    name: 'Alexander',
    score: 100,
    class: 'foxes'
  },
  {
    name: 'Alisa',
    score: 76,
    class: 'wolves'
  },
  {
    name: 'Vladimir',
    score: 92,
    class: 'foxes'
  },
  {
    name: 'Albert',
    score: 71,
    class: 'wolves'
  },
  {
    name: 'Viktor',
    score: 80,
    class: 'tigers'
  }
]));

// {
//   foxes: [
//     { name: 'Alexander', score: 100 },
//     { name: 'Vladimir', score: 92 }
//   ],
//   wolves: [
//     { name: 'Alisa', score: 76 },
//   ],
//   tigers: [
//     { name: 'Viktor', score: 80 }
//   ]
// }


console.log(graduates([])); //{}