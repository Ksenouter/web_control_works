// Task 1
let myName = "Ilya";
// Task 2
let myBirthYear = 2002;
// For tasks 4-5
let arraysLength = 10;

// Task 3
function sayHello(name) {
    alert('Hello, ' + myName + '!');
}

// For tasks 4-5
function randomIntFromInterval(min, max) { // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min)
}

// Task 4
function range(start, end) {
    let result = [];
    for (let i = 0; i < arraysLength; i++)
        result[i] = randomIntFromInterval(start, end);
    return result;
}

// Task 5
function rangeOdd(start, end) {
    let result = range(start, end);
    for (let i = 0; i < result.length; i++) {
        if (result[i] % 2 === 0)
            result[i] += result[i] > 0 ? -1 : 1;
    }
    return result;
}

// Task 6
function average(a, b) {
    return (a + b) / 2;
}

// Task 7
function square(x) {
    return x * x;
}

// Task 8
function cube(x) {
    return x * x * x;
}

// Task 9
function calculate(numbers = 9) {
    let result = [];
    for (let i = 0; i < numbers; i++)
        result[i] = average(square(i), cube(i));
    return result;
}

function main() {
    let arr = range(15, 30);
    console.log('Task 4: ' + arr);

    arr = rangeOdd(15, 30)
    console.log('Task 5: ' + arr);

    console.log('Task 6 (numbers 2, 3): ' + average(2, 3));
    console.log('Task 7 (number 5): ' + square(5));
    console.log('Task 8 (number 4): ' + cube(4));
    console.log('Task 9: ' + calculate());
}


main()
