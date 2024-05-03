//1
const length = 5
const width = 3
const area = length*width
console.log(`area = ${area}`)

//2
let length1 = 5
let width1 = 3
let perimeter = 2 * (length1 + width1)
console.log(`perimeter = ${perimeter}`)

//3
var radius = 5
var diameter = 2 * radius
var circumference = 2 * Math.PI*radius
var area1 = Math.PI * Math.pow(radius, 2)
console.log(`Diameter = ${diameter}`)
console.log(`circumference = ${circumference}`)
console.log(`Area = ${area1}`)

//4
const a = 80
const b = 65
const angle = 180-(a + b)
console.log(`angle = ${angle}`)

//5
const totalDays = 400
const years = Math.floor(totalDays/365)
const remainingDays = Math.floor(totalDays % 365)
const month = Math.floor(remainingDays/30) 
const days = remainingDays % 30
// console(`${years} years, ${month} months, ${days} days`)
console.log("year :", years)
console.log("month :", month)
console.log("days :", days)

const date1 = new Date("2023-11-01")
const date2 = new Date("2023-10-20")
const bedaTanggal = Math.abs(date2-date1)
const bedaHari = Math.round(bedatanggal / (1000*3699*24))
console.log("perbedaan hari : " + bedaHari)