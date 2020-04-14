function highestScore (students) {
  
  let namaKelas = [];
  let kelas = [];
  let hasil = {};
  
  if (students.length === 0) {
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
    let objStudents = {};
    let nilai = 0;
    for (let k = 0; k < students.length; k++) {
      if (namaKelas[j] === students[k].class && students[k].score > nilai) {
        nilai = students[k].score;
        objStudents.name = students[k].name;
        objStudents.score = students[k].score;
      }
      hasil[namaKelas[j]] = objStudents;
    }
  }
  return hasil;
}

// TEST CASE
console.log(highestScore([
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
//   foxes: { name: 'Dimitri', score: 90 },
//   wolves: { name: 'Alexei', score: 85 }
// }


console.log(highestScore([
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
//   foxes: { name: 'Alexander', score: 100 },
//   wolves: { name: 'Alisa', score: 76 },
//   tigers: { name: 'Viktor', score: 80 }
// }


console.log(highestScore([])); //{}


