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