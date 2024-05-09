/*
Exercise
Write a code to convert celsius to fahrenheit
 Example: 60 Celcius → 140 Fahrenheit
Write a code to check whether the number is odd or even
Example: 25 → odd number, 2 → even number
Write a code to check whether the number is prime number or not
o Example: 7 → 7 is a prime number
Example: 6 → 6 is not a prime number
Write a code to find the sum of the numbers 1 to N
o Example:5 →1+2+3+4+5=15
o Example:3→1+2+3=6
Write a code to find factorial of a number
o Example:4!→4×3x2×1=24
Example:6!→6×5x4x3x2x1=720
Write a code to print the first N fibonacci numbers
Example: 15 →610

*/

// //Write a code to convert celsius to fahrenheit
//  let celcius = 60
// let fahrenheit = celcius * 1.8 +32
// console.log(`${celcius} celcius = ${fahrenheit} fahrenheit`)

// //Write a code to check whether the number is odd or even
// var number = 2

//     if (number % 2 == 0) {
//         console.log(`${number} adalah bilangan genap`);
//     } else {
//         console.log(`${number} adalah bilangan ganjil`);
//     }
//     number++
// }

//Write a code to check whether the number is prime number or not

let primeNumber = 8;

let isPrime = true;

if (primeNumber === 1) {
  isPrime = false;
} else if (primeNumber > 1) {
  for (let i = 2; i < primeNumber; i++) {
    if (primeNumber % i === 0) {
      isPrime = false;
      break;
    }
  }
}

if (isPrime) {
  console.log(primeNumber + " adalah bilangan prima.");
} else {
  console.log(primeNumber + " bukan bilangan prima.");
}

//Write a code to find the sum of the numbers 1 to N

let N =  5
let sum = 0

for (i=1; i<=N; i++){
    sum += i
}
console.log(`sum of the number 1 to ${N} is ${sum}`)