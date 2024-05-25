// CALLBACK FUNCTION: Function yang Menerima Function Lain Sebagai Argumennya. 
//                    Function yang Dijadikan Parameter oleh Function Lain.

// Case. Buatlah Function Penjumlahan, Kemudian Tampilkan Hasilnya di Function Lain
//       dengan Menggunakan CB Function


// WITHOUTCB
function Penjumlahan(num1, num2){
    return num1 + num2 
}

function Output(result){
    console.log(result)
}

const result = Penjumlahan(5, 5)
Output(result)

// WITHCB

// CallBack Function

var addition = (a,b) => {
    return a+b;
}

var multiplication = (a,b) => {
    return a*b;
}

var calculator = (a,b,cb) => {
    return cb(a,b)
}

// var result = calculator (2,3,multiplication)

// console.log(result) //6

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

// Indirect CB
function Print(result){
    console.log('CB PRINT')
    console.log(result)
}

function PenjumlahanCB(num1, num2, cb){ // num1 = 15; num2 = 10; cb = Print
    return cb(num1 + num2) // Print(15 + 10)
}

PenjumlahanCB(15, 10, Print)

//Direct CB

function PenjumlahanCB(num1, num2, cb){ 
    return cb(num1 + num2) 
}

PenjumlahanCB(15, 10, function Print(result){
    console.log('CB PRINT')
    console.log(result)
})

const PenjumlahanCB = (num1, num2, cb) => {
    return cb(num1 + num2)
}

PenjumlahanCB(15, 10, (result) => {
    console.log(result)
})



const db = ['A', 'B', 'C', 'D', 'E']

const Delete = (cb) => {
    setTimeout(() => {
        db.pop()
        cb()
    }, 1000)
}

const ShowData = () => {
    setTimeout(() => {
        console.log(db)
    }, 500)
}

Delete(() => {
    Delete(() => {
        Delete(() => {
            ShowData()
        })
    })
})