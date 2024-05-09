/* 
Conditional statement adalah suatu statement yang melibatkan suatu 
kondisi untuk menentukan task apa yang akan dikerjakan oleh program
yang mana suatu task aakn dikerjakan jika kondisi yang dievaluasi menghasilkan nilai true
*/

//IF statement =========================================================

// const age = 20;
// if(age >= 17){

//     console.log("ini ddi dalam if statement")

// }
 
//ELSE statement =====================================================
// const age = 10
// if(age >= 17){
//     console.log("ini ddi dalam if statement");
// } else {
//     console.log("ini di dalam  else statement")
// }

// var rain = false
// if (rain) {
//     console.log('gunakan jas hujan');
// } else {
//     console.log('jangan gunakan jas hujan')
// }

// var age = 17;
// if (age >= 18) {
//     console.log(`age ${age}`)
//     console.log('permohononan diterima silahkan lanjut ke proses selanjutnya');
// } else {
//     console.log("age "+ age)
//     console.log('permohonan ditolak');
// }

//ELSE IF STATEMENT ==================================================
// const grade = 'B';
// if (grade === 'A') {
//     console.log('Nilai Bagus');
// } else if (grade === 'B'){
//     console.log('Nilai Lumayan');
// } else if (grade === 'C'){
//     console.log('Nilai Cukup');
// } else if (grade === "D"){
//     console.log('Nilai sangat buruk');
// } else {
//     console.log('Nilai yang dimasukkan salah');
// }

// var points = 90
// if (points >= 85 && points <= 100) {
//     console.log('Grade = A')
// } else if (points >= 75 && points <=84){
//     console.log('Grade = B')
// } else if (points >= 60 && points <=74){
//     console.log('Grade = C')
// } else if (points >= 0 && points <=59){
//     console.log('Grade = D')
// } else {
//     console.log('Grade = E')
// }

//version 2
var points = 0
var grade
if (points >= 85 && points <= 100) {
    grade = "A"
} else if (points >= 75 && points <= 84) {
    grade = "B"
} else if (points >= 60 && points <= 74) {
    grade = "C"
} else if (points >= 0 && points <= 59) {
    grade = "D"
} else {
    grade = "E"
}

console.log(`Nilai :${points}\nGrade :${grade}`)

//LOGICAL OPERATOR --> &&, ||, ! ===============

// ||, OR -> jika salah satu ada yang nilainya true maka true
// const hewan = "kucing";
// if (hewan === "kucing" || hewan === "ikan"){
//     console.log("hewan mammalia");
// } else {
//     console.log("hewan reptilia");
// }

// &&, AND -> wajib seluruh kondisi bernilai true -> true
// const hewan = 'kucing';
// if (hewan === "kucing" && hewan === "ikan"){
//     console.log('hewan mammalia');
// } else {
//     console.log('hewan reptilia');
// }

// !, NOT -> membalikkan nilai boolean

// const user = 'Joko';
// if (!user){
//     console.log('user gak ada');
// } else {
//     console.log('user ada');
// }

// TERNARY OPERATOR -> Shortcut dari if else statement
// const str = "javascript";
// if (str = 'javascript'){
//     console.log('javascript');
// } else {
//     console.log('not javascript');
// }

//rumus : kondisi ? "true" : "false"
// const str = "javascript";
// console.log(str === "javascript" ? "javascript" : "not javascript")

// const grade = 60
// console.log(grade===70 ? "Baik" : "cukup")