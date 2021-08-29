
// function paperRequirments(firstBook, secondBook, thirdBook){
//     const firstCopy = 6;
//     const secondCopy = 8;
//     const thirdCopy = 16;
//     const firstBookCopy = firstBook * firstCopy;
//     const secondBookCopy = 
// }
// const first = 12;
// const second = 23;
// const third = 8;
// const total = paperRequirments(first * 100, second * 100, third * 100);



// function largestElement(numbers){
//     let largest = numbers[0];
//     for(let i = 0; i < numbers.length; i++){
//         let element = numbers[i];
//         if(element > largest){
//             largest = element;
//         }
//     }
//     return largest;
// }
// const ages = [23, 42, 45, 64, 12, 41, 76];
// const oldest = largestElement(ages);
// console.log(oldest);





// function largestElement(numbers){
//     let largest = numbers[0];
//     for(let i = 0; i < numbers.length; i++){
//         var arrayCheck = numbers[i];
//         if(arrayCheck > largest){
//             largest = arrayCheck;
//         }
//     }
//     return largest;
// }
// var ages = [55,67,65,75,45,33,54];
// var largestAge = largestElement(ages);
// console.log(largestAge);



// function largeNum(numbers){
//     let largest = numbers[0];
//     for(let i = 0; i <= numbers.length; i++){
//         let element = numbers[i];
//         if(element > largest){
//             largest = element;
//         }
//     }return largest;
// }
// const num = [4,56,3,45,65,77,55,45,34,212];
// const largeNumber = largeNum(num);
// console.log(largeNumber);


// function largeNumber(numbers){
//     let largest = numbers[0];
//     for(let i = 0; i <= numbers.length; i++){
//         let element = numbers[i];
//         if(element > largest){
//             largest = element;
//         }
//     }return largest;
// }
// const numbers = [23,45,43,65,34,76,98,25];
// const largeNum = largeNumber(numbers);
// console.log(largeNum);



// function largeNumber(num){
//     let largest = num[0];
//     for(let i = 0; i <= num.length; i++){
//         let element = num[i];
//         if(element > largest){
//             largest = element;
//         }
//     }return largest;
// }
// const num = [54,645,3556,5665,746,35,6745];
// const largeNum = largeNumber(num);
// console.log(largeNum);

function smallestNumber(numbers){
    let smallest = numbers[0];
    for(let i = 0; i <= numbers.length; i++){
        let element = numbers[i];
        if(element < smallest){
            smallest = element;
        }
    }return smallest;
}
const num = [54,34,24,65,54,76,86,45,43];
const small = smallestNumber(num);
console.log(small);