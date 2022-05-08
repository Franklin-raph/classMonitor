const uid = () => {
    const head = Date.now().toString(36);
    const tail = Math.random().toString(36).substr(2);
    return `TN-${head}${tail}`
}

console.log(uid())

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
console.log(solution())

// PALINDROME
const palindrome = (str) => {
    
    const originalString = str
    const reversedString = originalString.split('').reverse().join('');
    {originalString === reversedString ? console.log('true') : console.log('false')}
}
palindrome('madam');

// let i = 0
// while(i <= 20){
//     if(i%3 === 0 && i%5 === 0) console.log("FizzBuzz")
//     else if(i%5 === 0) console.log("Buzz") 
//     else if(i%3 === 0) console.log("Fizz") 
//     else console.log(i)
//     i++;
// }

// let lyricsNum = 99;
// while(lyricsNum > 0){
//     if(lyricsNum == 1) console.log(lyricsNum + " bottle of juice on the wall! " + lyricsNum + " bottle of juice! Take one down, pass it around...")
//     console.log(lyricsNum + " bottles of juice on the wall! " + lyricsNum + " bottles of juice! Take one down, pass it around...")
//     lyricsNum--
// }
