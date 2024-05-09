//Function, wadah yang digunakan untuk menyimpan baris kode -> reusable
// tahapan membuat function
//1. create function
//2. call function

//type function
//1. Declaration Function
// function output(){
//     console.log('hello world')
// }

// output()

// //2. expression function
// const printOutput = function (){
//     console.log('Hi, JCWD!')
// }
// printOutput ()

// //3. arrow function
// const showOutput = () => {
//     console.log('hello student')
// }
// showOutput()

// Function With Parameter====================================
// input = parameter
// output = return
// function outputGreeting(greeting){
//     console.log(`hello ${greeting}`)
// }
// outputGreeting('world')

// case menampilkan angka dari 1-5 dan 1-100

// function showNumber (number){
//     for(let i=1; i<=number; i++){
//         console.log(i)
//     }
// }
// showNumber(5)
// showNumber(100)

// function penjumlahan (num1,num2){
//     console.log(num1+num2)
// }
// penjumlahan(10,5)

// Function with RETURN
function perkalian(num1,num2){
    return num1 * num2
}
const resultPerkalian = perkalian (10,5) +  5
console.log(resultPerkalian)