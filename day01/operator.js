//Aritmatik operator

//Numbers
//substitusi
const a = 23
const b = 3
const c = 3.14
const add = a + b + c
const min = a-b
const multiply = b*(-c)
const log = c/b
console.log (add)
console.log(min)
console.log(multiply)
console.log(log)

//langsung
console.log(5+5)
console.log(5-5)
console.log(5*5)
console.log(5/5)

//modul0 : sisa pembagian
console.log(10 % 3) //1
console.log(9 % 4) //1
console.log(8 % 3) //2

//string concate
const str1 = "PWD"
const str2 = "BSD"
console.log(str1 + str2)

const num1 = 1
const num2 = "100"
console.log(num1 + num2)

const num3 = 1000
const num4 = "2"
console.log(num3 + num4)
console.log(num3 - num4)
console.log(num3 * num4)
console.log(num3 / num4)

//INCREMENT adalah menjumlahkan dengan 1
let num5 = 1
num5++
num5++
console.log(num5) //3

//DECREMENT adalah mengurangi dengan 1
let num6 = 2
num6--
num6--
num6--
console.log(num6) //-1

//MODIFY in place
//version 1
let score = 1000
score = score + 100
console.log(score)

//version 2
let score1 = 5000
score1 += 100 //5100
score1 -= 100 //5000
score1 /= 2500 //2
score1 *= 3 //6
console.log(score1)