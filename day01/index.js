// variabel adalah tempat menyimpan data
// menggunakan keyword var

//membuat variabel tanpa memberikan data untuk disimpan
var rain
//console.log(rain)

//membuat variabel dan memberikan data untuk disimpan
//var+namevariable 
var sky = "Blue"
//console.log(sky)

//Data Types
//string/text
//mengguanakan kutip satu atau kutip dua
var greet = "Hello"
var morning = 'good morning'
var oneFour = '1234'

//numbers/angka
//integer, bilangan bulat
var intOne = 123
var intTwo = 345
//float, bilangan desimal
var twentyThree = 0.23
var phi = 3.14

//boolean
//hanya memiliki dua nilai true dan false

var graduate = true
var sick = false

//object
//menyimpan data kebih satu

var name = {girlFriend : "Ciro", boyFriend : "Wilo"}
console.log(name)
console.log(name.girlFriend)
console.log(name.boyFriend)

//array
//menyimpan data lebih dari satu, setiap data akan diwakilkan oleh nomor index

// var days = ["Sunday", "Monday","Tuesday"]
// console.log(days)
// console.log(days[0])
// console.log(days[1])
// console.log(days[2])

//undefined and null
//mewakili variabel yang tidak menyimpan nilai apapun

var undefined
console.log(undefined)

var nll = null
console.log(nll)

//Typeof
//mencari tahu jenis tipe data

var lang = "Javascript"
var result = typeof(lang)
console.log(result)

var haha = "true"
console.log(typeof haha)

var point = 10
point = 100
console.log(point)

//VAR X LET X CONST

//VAR
//boleh variable dengan nama yang sama
var student = "asira"
var stundet = "rahmah"
console.log(student)
//valuenya bisa berubah
var score = 100
score = 10
console.log(score)

// //LET
// //tidak memperbolehkan variable dengan nama yang sama
// let student1 = "asira"
// let student1 = "asira"
// // console.log(student1)
// //valuenya bisa berubah
// let point1 = 100
// point1 = 10
// console.log(point1)

// //CONST 
// //tidak memperbolehkan variable dengan nama yang sama
// const student3 = "asira"
// const student3 = "asira"
// console.log(student3)
// //valuenya tidak dapat berubah
// const score2 = 100
// score2 = 200
// console.log(score2)
