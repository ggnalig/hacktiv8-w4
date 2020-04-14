function countProfit(shoppers) {
    let listBarang = [ 
        ['Sepatu Stacattu', 1500000, 10],
        ['Baju Zoro', 500000, 2],
        ['Sweater Uniklooh', 175000, 1]
    ];

    let arrPenjualan = [];
    
    if (shoppers.length === 0) {
        return shoppers;
    }
    
    if (shoppers.length > 0) {
        for (let i in listBarang) {
            let objPenjualan = {};
            let arrShoppers = [];
            let stok = listBarang[i][2];
            for (let j in shoppers) {
                if (listBarang[i][0] === shoppers[j].product && stok >= shoppers[j].amount) {
                    arrShoppers.push(shoppers[j].name);
                    stok -= shoppers[j].amount;
                }
            }
            objPenjualan.product = listBarang[i][0];
            objPenjualan.shoppers = arrShoppers;
            objPenjualan.leftOver = stok;
            objPenjualan.totalProfit = (listBarang[i][2] - stok) * listBarang[i][1];
            
            arrPenjualan.push(objPenjualan);
        }
        
        
        return arrPenjualan;
    }
    
}

// TEST CASES
console.log(countProfit([
    {name: 'Windi', product: 'Sepatu Stacattu', amount: 2}, 
    {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 3}, 
    {name: 'Rani', product: 'Sweater Uniklooh', amount: 2}]));
    //[ { product: 'Sepatu Stacattu',
    //   shoppers: [ 'Windi', 'Vanessa' ],
    //   leftOver: 5,
    //   totalProfit: 7500000 },
    // { product: 'Baju Zoro',
    //   shoppers: [],
    //   leftOver: 2,
    //   totalProfit: 0 },
    // { product: 'Sweater Uniklooh',
    //   shoppers: [],
    //   leftOver: 1,
    //   totalProfit: 0 } ]
    
    console.log(countProfit([
        {name: 'Windi', product: 'Sepatu Stacattu', amount: 8}, 
        {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 10}, 
        {name: 'Rani', product: 'Sweater Uniklooh', amount: 1}, 
        {name: 'Devi', product: 'Baju Zoro', amount: 1}, 
        {name: 'Lisa', product: 'Baju Zoro', amount: 1}]));
        // [ { product: 'Sepatu Stacattu',
        //     shoppers: [ 'Windi' ],
        //     leftOver: 2,
        //     totalProfit: 12000000 },
        //   { product: 'Baju Zoro',
        //     shoppers: [ 'Devi', 'Lisa' ],
        //     leftOver: 0,
        //     totalProfit: 1000000 },
        //   { product: 'Sweater Uniklooh',
        //     shoppers: [ 'Rani' ],
        //     leftOver: 0,
        //     totalProfit: 175000 } ]
        console.log(countProfit([{name: 'Windi', product: 'Sepatu Naiki', amount: 5}]));
        // [ { product: 'Sepatu Stacattu',
        //     shoppers: [],
        //     leftOver: 10,
        //     totalProfit: 0 },
        //   { product: 'Baju Zoro',
        //     shoppers: [],
        //     leftOver: 2,
        //     totalProfit: 0 },
        //   { product: 'Sweater Uniklooh',
        //     shoppers: [],
        //     leftOver: 1,
        //     totalProfit: 0 } ]
        console.log(countProfit([])); //[]    