function substituirPares(array) {
    for (let i = 0; i < array.lenght; i++) {
        if (array[i] === 0) {
            console.log("Voce já é zero!!!");

        } else if (array[i] % 2 === 0) {
            console.log(`substituindo ${array[i]} por 0 `);
            array[i] = 0;
        }
        ///return array;
    }

    return array;

}

let arr = [1, 3, 4, 6, 80, 33, 23, 90];

console.log(substituirPares(arr));

///substituirPares(arr);