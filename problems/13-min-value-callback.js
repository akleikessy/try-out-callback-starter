/*******************************************************************************
Write a function `minValueCallback` that accepts an array and an optional callback as arguments.
If a callback is not passed in, then the function should return the smallest
value in the array. If a callback is passed in, then the function should return
the result of the smallest value being passed into the given callback.

Examples:
console.log(minValueCallback([64, 25, 49, 9, 100]));             // 9
console.log(minValueCallback([64, 25, 49, 9, 100], Math.sqrt));  // 3

*******************************************************************************/

let minValueCallback = function(array, cb) {
    let result;
    if (cb === undefined) {
       result = minValue(array);
    } else {
       result = cb(minValue(array));
    }

    return result;
};

let minValue = function(nums) {
    let min = nums.reduce(function(acc, num) {
        if ( num < acc) {
            acc = num;
        }
        return acc;
    });
    return min;
}





/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
module.exports = minValueCallback;
