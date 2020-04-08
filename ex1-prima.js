function angkaPrima(angka) {
    let hasil =  true;
    for (let i = 2; i < angka; i++) {
        if (angka % i === 0) {
            hasil = false;
        }
    }
    if (hasil == true) {
        return true;
    } else {
        return false;
    }
}


// TEST CASES
console.log(angkaPrima(3)); // true
console.log(angkaPrima(7)); // true
console.log(angkaPrima(6)); // false
console.log(angkaPrima(23)); // true
console.log(angkaPrima(33)); // false