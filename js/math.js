
////////////////////// Math.abs /////////////////////////////

// for(let i = 5 ; i <= 20; i++){
//     console.log(i);
//     const myNumber = -35;
//     const output = Math.abs(myNumber);
//     console.log(output);
// }

// const myNumber = -35;
// const output = Math.abs(myNumber);
// console.log(output);



///////////////////// Math.celi ////////////////////////////

// const myNumber = 2.000079;
// const result = Math.ceil(myNumber);
// console.log(result);



//////////////////// Math.floor ///////////////////////////

// const MyNum = 5.98847;
// const output = Math.floor(MyNum);
// console.log(output);



//////////////////// Math.round //////////////////////////

// const num = 53.53847;
// const output = Math.round(num);
// console.log(output);




///////////////////// Math.random /////////////////////////

// for(let i = 1; i <= 20; i++){
//     const output = Math.random();
//     console.log(parseFloat(output.toFixed(1)));
// }


// //------
// const output = Math.random() *10;
// console.log(parseFloat(output.toFixed(1)));


//------
// for(let i = 1; i <= 20; i++){
//     const output = Math.random() * 6;
//     const rounded = Math.round(output)
//     // const rounded = Math.ceil(output)
//     console.log(rounded);
// }



/////////////////////////////////////////////////////////////////////////////////////
// Math.abs
// const num = -340;
// const result = Math.abs(num);
// console.log(result);


// Math.celi 
// const num = 5.12648;
// // const result = Math.ceil(num);
// // console.log(result);
// console.log(Math.ceil(num));


// Math.round
// const num = 99.02387;
// console.log(Math.round(num));
// const number = 99.62387;
// console.log(Math.round(number));


// // Math.random
// const num = Math.random();
// console.log(num);
// //----
// const number = Math.random() * 10;
// console.log(number);



function positive(n) {
    let unique = [];
    for (i = 0; i<n.length ; i++){
        const posi = n[i];
        if(posi < 0){
            unique.push(posi);
        }
    }return unique;
}
const my = positive([4,8,-12,7,-8,19,-3]);
console.log(my);




































