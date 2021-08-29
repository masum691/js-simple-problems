


// function fibonacci(n){
//     if(n==0){
//         return 0;
//     }
//     if(n==1){
//         return 1;
//     }
//     return fibonacci(n-1) + fibonacci(n-2);
// }

// const fiboElement = fibonacci(6);
// console.log(fiboElement);




// function fibonacci(n){
//     if(n==0){
//         return 0;
//     }
//     if(n==1){
//         return 1;
//     }
//     return fibonacci(n-1) + fibonacci(n-2);
// }
// const fiboElement = fibonacci(39);
// console.log(fiboElement);



// const fiboSeries = fibonacciSeries(1);
// console.log(fiboSeries);


// function fibonacciSeries(num) {
//     if(typeof num != 'number'){
//         return 'Please enter a number';
//     }
//     if(num < 2){
//         return 'Please enter a positive number of fibonacci'
//     }
//     const fibo = [0, 1];
//     for(let i = 2; i < num; i++){
//         fibo[i] = fibo[i-1] + fibo[i-2];
//     }
//     return fibo;
// }
// const fiboSeries = fibonacciSeries(1);
// console.log(fiboSeries);




// function fibonacci(n) {
//     if(n==0){
//         return 0;
//     }
//     if(n==1){
//         return 1;
//     }
//     return fibonacci(n-1) + fibonacci(n-2);
// }

// const fibo = fibonacci(12);
// console.log(fibo);


function fibonacciSeries(n) {
    if(n==0){
        return [0];
    }
    if(n==1){
        return [0, 1];
    }
    const fibo = fibonacciSeries(n-1);
    fibo[n] = fibo[n-1] + fibo[n-2];
    return fibo;
}

const fiboSeries = fibonacciSeries(12);
console.log(fiboSeries);










