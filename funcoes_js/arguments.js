function findMax() {

    let max = -Infinity;

    for (let i = 0; i < arguments.lenght; i++) {

        if (arguments[i] > max) {
            max = arguments[i];
        }
    }
    return max;

}

findMax(1, 2, 3, 6, 90, 1)