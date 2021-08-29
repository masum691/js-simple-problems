


// const selected = [];
// for(let i = 0; i < 10; i++){
//     const random = Math.random() * 20;
//     const picked = Math.round(random);
//     if(selected.indexOf(picked) == -1){
//         selected.push(picked);
//     }
//     else{
//         console.log('found duplicate' , selected, picked);
//     }
// }
// console.log(selected);


// const selected = [];
// for(let i = 0; i < 10; i++){
//     const random = Math.random() * 44;
//     const picked = Math.round(random);
//     if(selected.indexOf(picked) == -1){
//         selected.push(picked);
//     } 
//     else{
//         console.log('found duplicate', selected , picked);
//     }
// }
// console.log(selected);



const selected = [];
for(let i = 0; i<10; i++){
    const random = Math.random() * 100;
    const picked = Math.round(random);
    if(selected.indexOf(picked) == -1){
        selected.push(picked);
    }
    else{
        console.log('Found duplicate',selected, picked);
    }
}
console.log(selected);