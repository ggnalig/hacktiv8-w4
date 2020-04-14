function fpb(angka1, angka2) {
    let besar = 0;
    let kecil = 0;

    if (angka1 > angka2) {
        besar = angka1;
    } else {
        kecil = angka1;
    }

    if (angka2 > angka1) {
        besar = angka2;
    } else {
        kecil = angka2;
    }
    
    let tempAngka2 = [];
    for (let i = 0; i < besar; i++) {
        if (besar % i == 0 && kecil %i == 0) {
            tempAngka2.push(i);
        } 
    }
    return Math.max(...tempAngka2);
}



// TEST CASES
console.log(fpb(12, 16)); // 4
console.log(fpb(50, 40)); // 10
console.log(fpb(22, 99)); // 11
console.log(fpb(24, 36)); // 12
console.log(fpb(17, 23)); // 1
console.log(fpb(88, 22));
console.log(fpb(22, 88)); // 1
console.log(fpb(44, 22));
console.log(fpb(66, 22));
console.log(fpb(22, 110));