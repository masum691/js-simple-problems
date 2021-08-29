// 0,1,1,2,3,5,8,13,21,34,55,89
// nth = (n-1)th + (n-2)th 


// const fibo = [0, 1];
// for(let i = 2; i <= 15; i++){
//      fibo[i] = fibo[i - 1] + fibo[i - 2];
// }
// console.log(fibo);


// const fibo = [0, 1];
// for(let i = 2; i <= 15; i++){
//     fibo[i] = fibo[i - 1] + fibo[i - 2];
// }
// console.log(fibo);

// function fibonacciSeries(num){
//     const fibo = [0, 1];
//     for(let i = 2; i <= num; i++){
//         fibo[i] = fibo[i-1] + fibo[i-2];
//     }
//     return fibo;
// }
// const fiboSeries = fibonacciSeries(8);
// console.log(fiboSeries);



function fibonacciSeries(num){
    if(typeof num != 'number'){
        return 'Please give a number'
    }
    if(num < 2){
        return 'Please enter a positive number'
    }
    const fibo = [0, 1];
    for(let i = 2; i < num; i++){
        fibo[i] = fibo[i-1] + fibo[i-2];
    }
    return fibo;
}
const fiboSeries = fibonacciSeries(1);
console.log(fiboSeries);


// function fibonacciSeries(num) {
//     const fibo = [0, 1];
//     for(let i = 2; i < num; i++){
//         fibo[i] = fibo[i-1] + fibo[i-2];
//     }
//     return fibo;
// }
// const fiboSeries = fibonacciSeries(8);
// console.log(fiboSeries);