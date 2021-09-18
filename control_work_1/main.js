// Task 1
let myName = "Ilya";
// Task 2
const myBirthYear = 2002;

// Task 3
function sayHello(name = null) {
    let trueName = name == null ? myName : name;
    alert('Hello, ' + trueName + '!');
}

// Task 4
function range(start, end) {
    let result = [];
    let index = 0;
    for (let i = start; i <= end; i++, index++)
        result[index] = i;
    return result;
}

// Task 5
function rangeOdd(start, end) {
    let result = range(start, end);
    for (let i = 0; i < result.length; i++) {
        if (result[i] % 2 === 0)
        {
            result.splice(i, 1);
            i--;
        }
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
    for (let i = 0; i <= numbers; i++)
        result[i] = average(square(i), cube(i));
    return result;
}

// Document writer
function writeP(str) {
    document.writeln('<p>' + str + '</p>');
}

function main() {
    writeP('Task 1: ' + myName);
    writeP('Task 2: ' + myBirthYear);

    let arr = range(15, 30);
    writeP('Task 4: ' + arr);

    arr = rangeOdd(15, 30)
    writeP('Task 5: ' + arr);

    writeP('Task 6 (numbers 2, 3): ' + average(2, 3));
    writeP('Task 7 (number 5): ' + square(5));
    writeP('Task 8 (number 4): ' + cube(4));
    writeP('Task 9: ' + calculate());
}


main()
