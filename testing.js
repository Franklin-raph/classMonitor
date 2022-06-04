// const uid = () => {
//     const head = Date.now().toString(36);
//     const tail = Math.random().toString(36).substr(2);
//     return `TN-${head}${tail}`
// }

// console.log(uid())




// Using the two pointer approach to reverse an array
const solution = () => {
    let array = [1,2,3,4,5]
    let startIndexIndex = 0;
    let endIndex = array.length - 1;

    // Normally the length of the array is 5 but
    // the array is indexed with 0 so the endIndex which is array.length - 1 is 4 
    // i.e 4 here is the index of the last element in the array which is the number 5

    while(startIndexIndex < endIndex){
        swap(array, startIndexIndex, endIndex)
        startIndexIndex++;
        endIndex--;
    }
    return array
}

let newArray = []
// function to swap the array items
const swap = (newArray, startIndex, endIndex) => {
    // here temp hold the first element in the array e.g temp = 1
    let temp = newArray[startIndex]
    // i swapped the first element in the array with the last element in the array e.g 1 = 5 so here 5 and 1 swapped positions
    newArray[startIndex] = newArray[endIndex]
    // here i now i now assigned the last elenment in the array with to temp e.g 5 = temp
    newArray[endIndex] = temp
}
// console.log(solution())







// PALINDROME
// const palindrome = (str) => {
    
//     const originalString = str
//     const reversedString = originalString.split('').reverse().join('');
//     {originalString === reversedString ? console.log('true') : console.log('false')}
// }
// palindrome('madam');

// let i = 0
// while(i <= 20){
//     if(i%3 === 0 && i%5 === 0) console.log("FizzBuzz")
//     else if(i%5 === 0) console.log("Buzz") 
//     else if(i%3 === 0) console.log("Fizz") 
//     else console.log(i)
//     i++;
// }


// let sound = "" ; 
// function laugh(num) {
//     for (let x = 0 ; x < num ; x++) {
//         sound = sound + "ha" ;
//     }
//     sound = sound +"!"; 
//     return sound; 
// }


// console.log(laugh(0)) 
// console.log(laugh(3)) 
// console.log(laugh(4)) 
// console.log(laugh(8)) 


// function makeTriangle(num){
//     let lineBreak = "";
//     for(let i=0; i<num; i++){
//         console.log(lineBreak += "* ")
//    }
// }

// makeTriangle(3)



// const obj = {
//     name: "Frank",
//     tall: true
// }

// delete obj.name;

// console.log(obj.name)



const musicData = [
    { artist: 'Rihanna', name: 'Anti', sales: 603000 },
    { artist: 'Justin Bieber', name: 'Purpose', sales: 554000 }
];

const albumSalesStrings = musicData.map(function(currentValue){
    return `${currentValue.name} by ${currentValue.artist} sold ${currentValue.sales} copies`
});
// console.log(albumSalesStrings);



// Finding the largest value in an array
let arr = []
function largestElement(arr) {
    let max = arr[0]
    for(let i = 1; i < arr.length; i++) {
        if(max < arr[i]) {
            max = arr[i]
        }
    }
    return max
}

// console.log(largestElement([1,2,3,4,50,96]))



// Finding the largest value in an array
function largestElement(){
    let array = [2,4,5,6,8,6,8,7,8,7,9,21,5,9,15]
    let maxValue = array.length - 1
    for(let i = 0; i < array.length; i ++){
        if(maxValue < array[i]){
            maxValue = array[i]
        }
    }
    console.log(maxValue);
}

// largestElement()


// Finding the smalllest value in an array
function largest_Element() {
    // sort the array in ascending order
    let arr = [2,4,6,3,8,9,2,4]
    arr.sort()
    arr.reverse()
    let largest_element
    for(let i = 0; i < arr.length; i++){
        largest_element = arr[i]
    }
    
    return largest_element
}

// console.log(largest_Element())



