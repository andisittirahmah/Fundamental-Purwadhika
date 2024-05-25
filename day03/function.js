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

function showNumber (number){
    for(let i=1; i<=number; i++){
        console.log(i)
    }
}
showNumber(5)
showNumber(100)

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

// // CallBack Function

var addition = (a,b) => {
    return a+b;
}

var multiplication = (a,b) => {
    return a*b;
}

var calculator = (a,b,cb) => {
    return cb(a,b)
}

// // var result = calculator (2,3,multiplication)

// // console.log(result) //6

var arrCalculator = (arr,operand,cb) =>{
    var arrResult = []
    var operationResult 

    for (var i=0; i<arr.length; i++){
        operationResult = cb(arr[i],operand);
        arrResult.push(operationResult)
    }
    return arrResult
}
var number = [23,12,9]
var resultArray = arrCalculator (number,2,addition)
console.log(resultArray) 

var countdown = (counter) => {
    console.log(counter)
    counter--
    countdown(counter)
    if (counter>=0)
        countdown(counter)
}

countdown(5)

//Direct Argument

 var direct = (arr,cb) => {
    return cb(arr)
 }

 var nums = [1,2,3]
 var lenFn = (ary) => {
    return ary.length
 }

 var result = direct (nums,lenFn)
 console.log(result)


//  /// cara penulisan lain

 var direct = (arr,cb) => {
    return cb(arr)
 }

 var nums = [1,2,3]

 var result = direct (nums,(ary) => {
    return ary.length
 })
 console.log(result)

///////////////////////////////////////////////////////////////////////

//LOOPING FOR BIASA
var nums = [1,2,3]
for (let i=1; i<=nums.length; i++)
    console.log(`loop for biasa ${[i]}`) // loop 1, loop 2, loop 3

//FOR EACH
var num  = [1,2,3]
var cb = (val) =>{
    console.log(`loop for each ${val}`)
}
num.forEach(cb) //loop 1, loop 2, loop 3

// loop forEach dengan direct callback

nums.forEach((val) =>{
    console.log(`loop dircet ${val}`)
})

//ForEach ; value on Index

var string = ['a','b','c']
var cb = (val,idx) => {
    console.log(`index ke ${idx} : ${val}`)
}

string.forEach(cb)

// ///direct
string.forEach((val,idx) => {
    console.log(`direct -- index ke ${idx} : ${val}`)
})

// //for Each three argument

var days = ['monday','tuesday','wednesday']
days.forEach((val,idx,arr)=>{
    console.log(`val:${val} \nidx:${idx} \narr:${arr}`) // val:monday idx:0 arr:monday,tuesday,wednesday
})

//FOREACH HIGHEST AND LOWEST NUMBER

var nums = [39,101,20,80,2,8]
var min, max;
var result = []
nums.forEach((val,idx)=>{
    if (idx == 0){
        min=max=val
    }else if (val<min){
        min = val
    }else if (val > max){
        max = val
    }
})

console.log(`nilai min : ${min} \nnilai max : ${max}`)

// //FOREACH ODD EVEN NUMBERS

var oddEven = (numbers)=>{
    var odds = []
    var evens = []
    numbers.forEach((number)=>{
        if(number % 2 == 1){
            odds.push(number)
        }else{
            evens.push(number)
        }
    })
    return [odds,evens]
}
var arr = [1,4,6,2,3,9]
var result = oddEven(arr)
console.log(result)

// /////////FOR MAP/////////// 

var numbers = [1,2,4]
var newNum = []

numbers.forEach((number)=>{
    newNum.push(number*2)
})

console.log(newNum)

///////////////////

var newMap = numbers.map((number)=>{
    return (number*2)
})

console.log(newMap)

var persons = [['Jannete','woman'],
['john','man'],
['Jenita','woman']]

var resultPersons = persons.map((person)=>{
    var name = person[0]
    if(person[1]=='woman'){
        return `Mrs. ${name}`
    } else {
        return `Mr. ${name}`
    }
})
console.log(resultPersons) // [ 'Mrs. Jannete', 'Mr. john', 'Mrs. Jenita' ]

var nums = [1,2,3,4]

var oddEven = nums.map((num)=>{
    if (num % 2 == 1){
        return  [num, 'Ganjil']
    } else {
        return [num, 'Genap']
    }
})

console.log(oddEven) // [ '1, Ganjil', '2, Genap', '3, Ganjil', '4, Genap' ]

// MAP DUPLICATE //

//// 1. Method map membutuhkan array untuk diproses, dan calback function yang akan memproses setiap data dari array.
//// 2. map akan menjalankan callback function sebanayak data yang ada di array dan setiap kali dijalankan data pada array akan masuk secara bergantian
//// 3. callbak yang masuk ke dalam map akan melakukan return nilai dan nilai yang di retunr ini akan dimasukkan ke dalanm array baru
//// 4. array baru yang berisi hasil dari proses map akan di return oleh map sehingga hasilnya dapat disimpan ke dalam variabel

// FILTER ////
var numbers = [1,2,3,4,5]

var resultFilter = numbers.filter((number)=>{
    if (number % 2 == 1){
        return true
    } else {
        return false
    }
})
console.log(resultFilter)

///// cara singkat //////
var numbers = [1,2,3,4,5]

var resultFilter = numbers.filter((number)=>{
    return number % 2 == 1
})
console.log(resultFilter)

/////////////////
var places= [['John',43,'Jakarta'],
 ['Baby',21,'Jakarta'], 
 ['Tony',34,'Surabaya'],
 ['Justin',29,'Banjarmasin']]

 var ageAdress = places.filter((place)=>{
    return place[1] > 30 || place[2] == 'Jakarta'
 })

 console.log(ageAdress)

///////penulisan lain/////////////////
var places= [['John',43,'Jakarta'],
 ['Baby',21,'Jakarta'], 
 ['Tony',34,'Surabaya'],
 ['Justin',29,'Banjarmasin']]

 var ageAdress = (arr) => {
    return arr.filter((val)=>{
        return val[1] > 30 || val[2] == 'Jakarta'
     })
 }
 
 var result = ageAdress(places)
 console.log(result) 