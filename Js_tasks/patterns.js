// for(let i=6;i>=1; i--){
//     let row=""
//     for(let j=1; j<=i; j++){
//         row+="*"
//     }
//     console.log(row);
    
// }
for (let i = 6; i >= 1; i--) {
    let row = "";

    // spaces
    for (let s = 1; s <= 6 - i; s++) {
        row += " ";
    }

    // stars
    for (let j = 1; j <= 2 * i - 1; j++) {
        row += "*";
    }

    console.log(row);
}
// let n = 10;

// for (let i = 1; i <= n; i++) {
//   let row = "";

//   for (let j = 1; j <= i; j++) {
//     row += j;
//   }

//   console.log(row);
// }