var text = "I'am \"okay\"" // I'am "okay"
console.log(text)

//new line
//membuat baris baru layaknya menekan tombol enter
console.log("Hello \nguys") 
//hello
//guys
//membuat tab(jarak)
console.log('hello \tguys')

//concatinate, menggabung string
var firstname = "Max"
var lastname = "John"
var fullname = firstname + " " + lastname //Max John
console.log(fullname)

var a = "8"
var b = 12
//string + number, number akan diubah mennajdi string (hanya berlaku untuk operasi penjumlahan selain itu akan berlaku seperti operasi matematika biasa)
console.log(a+b) // "812"
console.log(a*b) // 96

//backtick
var intro = `my fullname is ...`
console.log(intro)
//bactick untuk mempersingkat syntax
var intro1 = "my fullname is" +" "+firstname+" "+lastname //my fullname is max John
var intro2 = `my fullname is ${firstname} ${lastname}` //my fullname is Max john
console.log(intro1)
console.log(intro2)

//Syntax bawaan JS yang digunakan untuk memanipulasi data
// STRING method
// - Slice
const txt = "Hello World" //start dr index 0
//index awal, index akhir(tidak ikut)
console.log(txt.slice(3,4)) // /L

//Substring, (index awal,banyaknya karakter)
console.log(txt.substring(4,3)) //copy text dimulai dari index ke 6 sebanayak tiga karakter/l

//LENGTH
console.log(txt.length)

//tolowercase and touppercase
console.log(txt.toLowerCase())
console.log(txt.toUpperCase())


//split konversi string -> array
const word = "PWD BSD"
console.log(word.split(''))
console.log(word.split(''))
