function ArrayAvg(myArray) {
    var i = 0, summ = 0, ArrayLen = myArray.length;
    while (i < ArrayLen) {
        summ = summ + myArray[i++];
}
    return summ / ArrayLen;
}
var myArray = [1, 5, 2, 3, 7];
console.log(`Numeros = ${myArray}`)
var a = ArrayAvg(myArray);
console.log(`El promedio es ${a}`)
