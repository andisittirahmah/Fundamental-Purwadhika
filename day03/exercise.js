// buatlah mini aplikasi calculator dengan penggunaan fitur penjumlahan, pengurangan, pembagian dan perkalian

function calculator (num1,num2,operation){
    if (operation==='+') {
        return num1 + num2 
    }
    if (operation==='-') {
        return num1 - num2
    }
    if (operation==='*') {
        return num1 * num2
    }
    if (operation==='/') { 
        return num1 / num2
    }
}
console.log(calculator(10,100,'+'))

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