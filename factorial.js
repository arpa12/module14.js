// 3 != 1 * 2 * 3
// 4 != 1 * 2 * 3 * 4

for (var i = 1; i <= 10; i++) {
    console.log(i);
}

for (var i = 1; i <= 8; i++) {
    console.log(i);
}

for (var i = 1; i <= 6; i++) {
    console.log(i);
}

// var factorial = 1;
// for (var i = 1; i <= 5; i++) {
//     factorial = factorial * i
//     console.log(i, factorial);
// }

function factorial(num) {
    var factorial = 1;
    for (var i = 1; i <= 10; i++) {
        factorial = factorial * i

    }
    return factorial;
}
var result = factorial(10);
console.log(result);