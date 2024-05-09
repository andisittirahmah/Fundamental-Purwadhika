//LOOP STATEMENT, mengulang suatu task hingga kondisi tidak terpenuhi
//Type loop : for loop, while loop, do while loop

//FOR LOOP  mempunyai 3 statement ======================================================
// statement 1 : menginisialisasi variable dari looping itu sendiri
// statement 2 : mendefine kondisi dari looping tersebut
// statement 3 : kode yang di eksekusi di akhir setiap iterasi

/*  alur proses for loop 
1. membuat variable acuan (init)
2. mengevaluasi condition ( true menjalankan task(langkah3), false, keluar dari loop)

*/

// for (let i = 0; i<3; i++){  //melakukan 3 kali pengulangan
//     console.log('halo'); 
// }

//WHILE LOOP ====================================================
/*
alur proses while loop
1. membuat variable init
2. evaluasi condition (true menjalankan task dan modification, false keluar dari loop) 
3. kembali ke step 2
*/
// let i = 0;

// while (i<3) {
//     console.log("halo");
//     i++;
// }

//menentukan angka genap dan ganjil
// var number = 0
// while (number <= 10) {

//     if (number % 2 == 0) {
//         console.log(`${number} adalah bilangan genap`);
//     } else {
//         console.log(`${number} adalah bilangan ganjil`);
//     }
//     number++
// }

//do while loop =====================================================
/* alur proses do while
1. membuat variable init
2. menjalankan task, menjalankan modification
3. melakukan evaluasi kondisi ( true : kembali ke step 2, false keluar dari blok do while)
*/

// let count = 6;
// do {
//     console.log("ini iterasi ke- :" + count);
//     count++;
// } while (count <= 5);

// //BREAK, menghentikan looping walaupun kondisi dari looping tersebut masih true ===========

// let sum = 0;
// while (true) {
//     console.log("sum :" + sum);
//     if (sum >= 5) {
//         return;
//     }
//     sum += 1;
// }

// for (let i=2; i<10; i++){
//     if (i==5){
//         break;
//     }
//     console.log(`number : ${i}`)
// }

// //CONTINUE, melakukan skip pada looping ==============='

// for (let i=1; i<=5; i++){
//     if (i===3){
//         continue;
//     }
//     console.log('iterasi ke-' + i);
// }
