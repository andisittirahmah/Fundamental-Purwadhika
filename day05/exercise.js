// // SLIDE-01
// // 01 Write a function to get the lowest, highest and average value in the array (with and without sort function). 
// Example : arr = [12, 5, 23, 18, 4, 45, 32] → {lowest : 4, highest: 45, average: 19.8xxx}

function FindLowestHighestAndAverage(arrNumbers){
    let lowest = arrNumbers[0]
    let highest = arrNumbers[0]
    let avg = arrNumbers[0]
    arrNumbers.forEach(number => {
        if(number < lowest) lowest = number 
        if(number > highest) highest = number 
        avg += number 
    })
    return {
        lowest, 
        highest, 
        avg: avg/arrNumbers.length
    }
}
console.log(FindLowestHighestAndAverage([12, 5, 23, 18, 4, 45, 32]))



// // 02 Write a function that takes an array of words and returns a string by concatenating the words in the array,
// separated by commas and - the last word - by an 'and'.
// a. Example : arr = ["apple", "banana", "cherry", "date"] → “apple,banana,cherry, and date”

function ConcateningByCommaAndByAnd(arrStr){
    return arrStr.slice(0, arrStr.length-1).join(', ') + ' and ' + arrStr[arrStr.length-1]
}

console.log(ConcateningByCommaAndByAnd(['Banana', 'Cherry', 'Melon', 'Apple']))

// 03 Write a function to calculate each element in the same position from two arrays of integer. Assume both arrays are of the same length.
// example : [1, 2, 3] + [3, 2, 1] → [4, 4, 4]

function SumElementOfTwoArrays(arr1, arr2){
    const result = []
    arr1.forEach((number, index) => {
        result.push(number + arr2[index])
    })

    return result 
}
console.log(SumElementOfTwoArrays([1, 2, 3], [3, 2, 1]))


// // 04 Write a function that adds an element to the end of an array. However, the element should only be added if it is not already in the array.
// Example : arr = [1, 2, 3, 4], newElement = 4 → [1, 2, 3, 4]
// Example : arr = [1, 2, 3, 4], newElement = 7 → [1, 2, 3, 4, 7]

function FilteringNewElement(arr, newElement){
    if(!arr.includes(newElement)) arr.push(newElement)

    return arr
}

console.log(FilteringNewElement([1, 5, 10, 15], 3))

// // SLIDE-02
// // 01 Write a function to insert multiple given integer (not an array) to an array and have a maximum size input. The
// array can only have a maximum size from a given input. (if the maximum size of the given input is 5 than the array can only contain 5 elements).
// Example : maxSize = 5, given integers is 5, 10, 24, 3, 6, 7, 8
// The function will return [5, 10, 24, 3, 6]

function SliceArrayBasedOnMaxSize(maxSize, ...numbers){
    return numbers.slice(0, maxSize)
}

console.log(SliceArrayBasedOnMaxSize(5, 10, 3, 7, 100, 25, 55))

// // 02 Write a function that will combine 2 given array into one array
// Example : arr1 = [1, 2, 3], arr2 = [4, 5, 6] → [1, 2, 3, 4, 5, 6]

function CombineTwoArray(arr1, arr2){
    return [...arr1, ...arr2]
}

console.log(CombineTwoArray([1, 2, 3], [4, 5, 6]))

// // 03 Write a function to find duplicate values in an array
// Example : arr = [1, 2, 2, 2, 3, 3, 4, 5, 5] → [2, 3, 5]

function FindDuplicate(arrNumbers){
    const arrResult = []
    arrNumbers.forEach(number => {
        if(arrNumbers.indexOf(number) !== arrNumbers.lastIndexOf(number)){
            if(!arrResult.includes(number)){
                arrResult.push(number)
            }
        } 
    })

    return arrResult
}

console.log(FindDuplicate([1, 2, 2, 3, 3]))



// // 04 Write a function to find the difference in 2 given array
// Example : arr1 = [1, 2, 3, 4, 5], arr2 = [3, 4, 5, 6, 7] → [1, 2, 6, 7]

function FindDifferenceElementInTwoArray(arr1, arr2){
    const differentElement = []

    arr1.forEach(number => {
        if(!arr2.includes(number)){
            if(!differentElement.includes(number)){
                differentElement.push(number)
            }
        }
    })

    arr2.forEach(number => {
        if(!arr1.includes(number)){
            if(!differentElement.includes(number)){
                differentElement.push(number)
            }
        }
    })

    return differentElement
}

console.log(FindDifferenceElementInTwoArray([1, 3, 5], [2, 4, 5]))

// SLIDE-03
// 01 Based on the array below write a function that will return primitive data types only. let arr = [1, [], undefined, {}, "string", {}, []];
// The function will return [1, undefined, “string”]

function ShowPrimitiveData(arrRandom){
    const arrPrimitiveData = []
    arrRandom.forEach(data => {
       if(typeof data !== 'object') arrPrimitiveData.push(data)
    })
    return arrPrimitiveData
}
console.log(ShowPrimitiveData([1, [], undefined, {}, 'string', {}, []]))

// 02 Write a function from a given array of numbers and return the second smallest number
// Example : numbers = [5, 3, 1, 7, 2, 6] → 2

function FindSecondSmallest(arrNumbers){    
    const sortedArrNumbers = arrNumbers.sort((low, high) => low - high)
    return sortedArrNumbers[1]
}

console.log(FindSecondSmallest([10, 5, 100, 25, 3, 1, 5, 1000]))

// 03 Write a function from a given array of mixed data types and return the sum of all the number
// Example : mixedArray = ["3", 1, "string", null, false, undefined, 2] → 3

function SumTypeOfNumber(arrData){
    let result = 0

    arrData.forEach(data => {
        if(typeof data === 'number') result += data 
    })

    return result 
}

