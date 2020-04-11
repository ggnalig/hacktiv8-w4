function graduates (students) {
  
  let namaKelas = [];
  let hasil = {};
  
  if (students.length == 0) {
    return hasil;
  }
  
  for (let i = 0; i < students.length; i++) {
    let kelasKey = students[i].class;
    if (namaKelas.includes(kelasKey)) {
      continue;
    } else {
      namaKelas.push(kelasKey);
    }
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