function cariModus(arr) {
    let freq = {};
    let b = 0;
    let modus;
    
    for(var i = 0; i < arr.length; i++){
        var num = arr[i];
        
        if(freq[num] === undefined){
            freq[num] = 1;
        }else{
            freq[num] = freq[num] + 1;
        }
        if(freq[num] > b){
            b = freq[num];
            modus = arr[i];
        }
    }
    if (b >= arr.length) {
        return -1
    }
    if (b <= 1 ) {
        return -1
    }
    return modus;
}

// TEST CASES
console.log(cariModus([10, 4, 5, 2, 4])); // 4
console.log(cariModus([5, 10, 10, 6, 5])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7])); // -1