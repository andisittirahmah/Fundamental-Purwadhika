//METHOD 
//properties = variable di dalam object
// object math memiliki property bernama PI
// function : kode yg memiliki sepasang kurung 
// method : object yang memiliki function
// object :

// math.abs(2.2) // object math memiliki method bernama abs dan fungsi 2.2
// math.abs() //merupakan method
// math.PI // merupakan properties
// typeof () // merupakan fungsi

//Math Methods

// absolute : mengubah bilangan negatif menjadi positif
const absResult = Math.abs(-2)
console.log(absResult)
//power, memangkatkabn bilangan
const powResult = Math.pow(8,2) //8^2 = 64
console.log(powResult)
//Square root, mencari akar dua 
const resultSqrt = Math.sqrt(144) //12
console.log(resultSqrt)
//cube root, mencari akar tiga
const cubResult = Math.cbrt(27) //3
console.log(cubResult)
//Round, pembulatan dengan aturan matematika
const roundResult1 = Math.round(3.7) //4
const roundResult2 = Math.round(3.2) //3
console.log(roundResult1)
console.log(roundResult2)
//Floor, pembulatan ke bawah
const floorResult = Math.floor(3.7) //3
console.log(floorResult)
//ceil, pembulatan ke atas
const ceilResult = Math.ceil(3.2) //4
console.log(ceilResult)
//min, mencari nilai minimal
const minResult = Math.min(1,3,4,5)
console.log(minResult)
//max, mencari minimal maskimal
const maxResult = Math.max(1,3,4,5)
console.log(maxResult)
//Random, menghasilkan nilai range 0.00-0.99
const ranResult = Math.random()
console.log(ranResult)
//jika ingin menhgasilkan nilai range 0.0-9.99
const ranResult1 = 10 * ranResult
console.log(ranResult1)
//jika ingin bilangan bulat 0-9
const ranResult2 = Math.floor(ranResult1)
console.log(ranResult2)
//jika 1-1-
const ranResult3 = ranResult2 + 1
console.log(ranResult3)

//Mengubah tipe data

//strings
const a = "123"
const b = "123.45"

//strings to integer
const parseResult = parseInt(a)
console.log(parseResult)
const parseResult1 = parseInt(b)
console.log(parseResult)

//strings to float
const parseResult2 = parseFloat(a) //123
console.log(parseResult2)
const parseResult3 = parseFloat(b) //123.45
console.log(parseResult3)

//numbers
const c = 3
const d = 3.14

//integer to string
const strResult = c.toString() //"3"
console.log(strResult)

//float to string
const strResult1 = d.toString() //"3.14"
console.log(strResult1)


 
//cara lebih singkat
console.log(Math.sqrt(64))

//Syntax bawaan JS yang digunakan untuk memanipulasi data
// STRING
// - Slice
const txt = "Hello World" //start dr index O
console.log(txt.slice(0,3))

//LENGTH
console.log(txt.length)

//tolowercase and touppercase
console.log(txt.toLowerCase())
console.log(txt.toUpperCase())

//Substring
console.log(txt.substring(3,0)) //pada dasarnya sama dengan string diswitch (0,3) karena hrs lebih kecil yg pertama dari kedua

//split konversi string -> array
const word = "PWD BSD"
console.log(word.split(''))
console.log(word.split(''))
