
let mySimpleReduce = function(array, cb) {

    let result = array[0];

    for (let i = 1; i < array.length; i++) {
        let el = array[i];
        result = cb(result, el);
    }

    return result;
};


let result1 = mySimpleReduce([5, 3, 2, 4], function(sum, el) {
    return sum + el;
});
console.log(result1); // 14

let result2 = mySimpleReduce([4, 6, 2], function(product, el) {
    return product * el;
});
console.log(result2); // 48

let result3 = mySimpleReduce([4, 6, 2, 8, 3], function(max, el) {
    if (el > max) {
        return el;
    } else {
        return max;
    }
});
console.log(result3); // 8
