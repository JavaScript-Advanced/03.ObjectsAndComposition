function solve(array) {
    let obj = {};
    let arrayLength = array.length;

    for (let i = 0; i < arrayLength; i += 2) {
        let productName = array[i];
        let calories = Number(array[i + 1]);
        obj[productName] = calories;
    }

    console.log(obj);
}

solve(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);

