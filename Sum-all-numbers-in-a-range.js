function sumAll(arr) {
    //find highest number in array
    var max = arr.reduce(function (a, b) {
        return Math.max(a, b);
    });
    //find lowest number in array
    var min = arr.reduce(function (a, b) {
        return Math.min(a, b);
    });
    //add each number in between lowest and highest number to array
    for (var i = min + 1; i < max; i++) {
        arr.push(i);
    }
    //add all values of array together
    var result = arr.reduce(function (total, currentValue) {
        return total + currentValue;
    });
    return result;
}
//example
sumAll([1, 4]);
