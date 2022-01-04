// This program takes a number input and returns prime numbers up to and including input, and also states if input is prime.
// If input isn't prime it generates the numbers it is divisible by.

function isPrime(num) {
    let dividingNum = [];
    for (let i = 1; i <= num; i++) {
        if (num % i === 0) {
            dividingNum.push(i);
        } else {
            continue;
        }
    }

    if (dividingNum.length == 2) {
        return true;
    } else {
        return false;
    }
}

// function only to be used by generatePrime if not a prime number
function divisibleBy(num) {
    let dividingNum = [];
    for (let i = 1; i <= num; i++) {
        if (num % i === 0) {
            dividingNum.push(i);
        } else {
            continue;
        }
    }
    return dividingNum;
}

function generatePrime(num) {
    let primeNum = [];
    for (let i = 1; i <= num; i++) {
        if (isPrime(i) == true) {
            primeNum.push(i);
        } else {
            continue;
        }
    }

    if (isPrime(num)) {
        console.log(num + " is a prime number.");
        console.log("The prime numbers up to " + num + " are " + primeNum);
    } else {
        console.log(num + " is NOT a prime number.");
        console.log(num + " is divisible by  " + divisibleBy(num));
    }

}