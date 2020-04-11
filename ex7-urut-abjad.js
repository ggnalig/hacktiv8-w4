function urutkanAbjad(str) {
    let kamus = 'abcdefghijklmnopqrstuvwxyz'
    let hasil = '';
    
    for (let i = 0; i < kamus.length; i++) {
        var abjad = kamus[i];
        for (let j = 0; j < str.length; j++) {
            if (abjad === str[j]) {
                hasil += abjad;
            }
        }
    }
    return hasil;
}

// TEST CASES
console.log(urutkanAbjad('hello')); // 'ehllo'
console.log(urutkanAbjad('truncate')); // 'acenrttu'
console.log(urutkanAbjad('developer')); // 'deeeloprv'
console.log(urutkanAbjad('software')); // 'aeforstw'
console.log(urutkanAbjad('aegis')); // 'aegis'