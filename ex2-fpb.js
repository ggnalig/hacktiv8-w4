function fpb(angka1, angka2) {
    tempAngka1 = 0;
    tempAngka2 = tempAngka1;
    for (let i = 0; i < angka1; i++) {
        if (angka1 % i == 0 && angka2 %i == 0) {
            tempAngka1 = i;
            tempAngka2 = i;
        } 
    }
    return tempAngka2;
}



// TEST CASES
console.log(fpb(12, 16)); // 4
console.log(fpb(50, 40)); // 10
console.log(fpb(22, 99)); // 11
console.log(fpb(24, 36)); // 12
console.log(fpb(17, 23)); // 1 