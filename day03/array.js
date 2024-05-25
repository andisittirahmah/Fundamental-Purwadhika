//ARRAY, menyimpan lebih dari satu data dengan tipe data yang sama atau beda ===========================
// index, sebuah nomor sebagai keterangan nama suatu tempat (dimulai dari index 0)

// var things = ['books','pen','clock']
// console.table(things)
// console.log('things 1 : ' + things[1])

// var things = [23, "Asira", 24.1, true]
// console.table(things)
// console.log('number 0 : ' + random[0])
// console.log('number 2 : ' + random[2])

//change data
// var things = ['books','pen','clock']
// console.table(things)
// things [0] = 'shoes'
// console.table(things)
// console.log('things 1 : ' + things[0])


// //create new index
// var things = ['books','pen','clock']
// console.table(things)
// things [3] = 'handphone'
// console.table(things)
// console.log('things 3 : ' + things[3])

//delete data
// var things = ['books','pen','clock']
// console.table(things)
// delete things[1]
// console.log(things)

// //length of array
// var things = ['books','pen','clock']

// console.log('length dari array things: ' + things.length) //3

//METHOD ARRAY
/* 
Method yang mengibah nilai asli
1. push
2. pop
3. shift
4. unshift
5. splice

Method yang tidak mengubah nilai asli (hasil operasinya disimpan ke variabel baru
1. slice
2. include
3. indexof
*/


//PUSH : Menambahkan value/data pada index terakhir
// POP : Menghapus value pada index terakhir

// var things = ['books','pen','clock']
// console.table(things)
// things.push('banana')
// things.push(12, 'apple')
// console.table(things)
// things.pop()
// things.pop()
// console.table(things)

// UNSHIFT : menambah value pada index pertama
// SHIFT : Menghapus value pada index pertama

// var things = ['books','pen','clock']
// console.table(things)
// things.unshift('pencil','glass')
// things.unshift('24')
// console.table(things)
// things.shift()
// console.table(things)

//SPLICE : menghapus dan menambahkan data
// array.splice(index, amount, new data)
// index ; index awal dimulainya operasi (menghapus)
// amount : jumlah data yang dihapus mulai dari 'index'
// new data : data baru yang akan ditambahkan di arrray

//menghapus data
// var things = ['book', 'pen', 'clock']
// things.splice(1,2) //book
// console.table(things)
// things = ['book', 'pen', 'clock', 'glass']
// things.splice(0,3)
// console.table(things) //glass

//menambah data
// var things = ['book', 'pen', 'clock']
// things.splice(1,0,'pencil')
// console.table(things)
// things.splice(1,0,'plate', 123)
// console.table(things)

// //menghpaus dan menambah data
// var things = ['book', 'pen', 'clock']
// things.splice(1,1,'pencil')
// console.table(things)
// things.splice(1,2,'plate',1234)
// console.table(things)

//Delete : menghapus data dan indexnya akan berisi undefined, namun indeks tidak berubah, 

// var things=['book','pen', 'pencil', 1234]
// delete things[0]
// delete things[2]
// console.table(things)

 // SLICE : copy value dari array
/*
syntax
array.slice(start index, end index)
start index : index awal dari data yang akan dicopy
end index : index akhir dari data yang akan dicopy (tidak termasuk)
*/

// var fruits = ['apple','banana','orange','lemon']
// console.table(fruits)
// var fruits1 = fruits.slice(1,4)
// console.log(fruits1) //banana orange lemon


/////INCLUDES : memeriksa apakah suatu array mengandung value tertentu

// var colours = ['red', 'blue', 'green', 'black', 'white']
// var colRed = colours.includes('red')
// console.log(colRed)
// var colPurple = colours.includes('purple')
// console.log(colPurple)

////INDEXOF : mencari index dari suatu data pada array

// var colours = ['red', 'blue', 'green', 'black', 'white']
// var idxBlue = colours.indexOf('blue')
// console.log(idxBlue)

////SORT : Mengurutkan data pada array secara ascending (0-9 / a-z)

// var animals = ['cat', 'dog', 'horse', 'bird', 'zebra']
// console.table(animals)
// animals.sort()
// console.table(animals) //bird cat dog horse zebra

// const numbers = [5,100,1,10,3]
// numbers.sort((low,high) => high-low)
// console.log(numbers) // 100,10,5,3,1

////REVERSE : membalikkan urutan data pada array
// var days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday']
// console.table(days)
// days.reverse()
// console.table(days)

// JOIN ; menggabungkan data pada array dengan karakter tertentu
// var days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday']
// var joinComma = days.join(',')
// console.log(joinComma)
// var joinAnd = days.join(' and ')
// console.log(joinAnd)

// //CONCAT ; Menggabungkan data dari dua array atau lebih
var days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday']
var animals = ['cat', 'dog', 'horse', 'bird', 'zebra']
var colours = ['red', 'blue', 'green', 'black', 'white']

// //day+fruits
var dayAnimals = days.concat(animals)
console.table(dayAnimals)
//all
var dayAll = days.concat(animals,colours)
console.table(dayAll)



// ARRAY 2 DIMENSI : Array di dalam array

// var things = [
//     ['red pen', 'blue pan'],
//     ['analog clock', 'digital clock'],
//     ['futsal shoes', 'badminton shoes']
// ]
// console.log(things[2]) // futsal shoos, badminton shoes
// console.log(things[2][1]) //badminton shoes

// var things = [
//     ['red pen', 'blue pan'],
//     ['analog clock', 'digital clock'],
//     ['futsal shoes', 'badminton shoes']
// ]
// things.push(['apple', 'orange']);
// console.table(things);
// things.unshift(['motor','mobil']);
// console.table(things);

//LOOP WITH ARRAY = Melakukan looping untuk memproses setiap data pada array

//array special method for looping
// const Data =['abc', 123, undefined, null, {}]
// for(let i=0; i<=Data.length-1; i++){
//     console.log(Data[i])
// }

//forEach : mirip seperti looping biasa
// const arr = ['apple','orange','grape']
// arr.forEach((item,index) => {
//     console.log(index)
//     console.log(item)
// })

//map : menghasilkan array baru
// const arr = ['JCWD','JCDM','JCDS']
// const newArr = arr.map((item, index) => {
//     return item
// })
// console.log(newArr)

// //filter : menghasilkan array baru dan melakukan filter

// const arrNumbers = [50,70,10,30,90]
// const newArrFilter = arrNumbers.filter ((item, index) => {
//     return item >= 70
// })
// const newArrMap= arrNumbers.map ((item, index) => {
//     return item >= 70
// })

// console.log(newArrFilter)
// console.log(newArrMap)

/* Menampilkan
Terdapat 5 kategori film :
horror
sci-fi
thriller
adventure
animation
 */

// var categories = ['horror', 'sci-fi', 'thriller', 'adventure', 'animation']
// var listCat = 'Terdapat 5 kategori film :\n'

// for (i=0 ; i<5; i++)[
//     listCat += categories[i] + '\n'
// ]
// console.log(listCat)
