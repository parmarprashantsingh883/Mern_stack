// 1️⃣ Print numbers from 1 to 20.

// for(let i=1; i<=20;i++){
//     console.log(i);
    
// }

// 2️⃣ Print numbers from 20 to 1.

// for(let i=20; i>=1;i--){
//     console.log(i);
// }

// 3️⃣ Print all even numbers between 1 and 50.

// for(let i=1; i<=50;i++){
//     if(i%2===0){
//         console.log(i);
        
//     }

// }

// 4️⃣ Print the multiplication table of 7.
    //  let num=7;
    //  for(let i=1;i<=10;i++){
    //     console.log(num +" * "+i + " =" + num*i);
        
    //  }

    // 5️⃣ Find the sum of numbers from 1 to 100.
    // let sum=0;
    //  for(let i=1;i<=100;i++){
    //     sum+=i;


    //  }
    //  console.log(sum);
     
    // 6️⃣ Find the factorial of a given number (example: 5).
//     let fact=1;
//     for(let i=1;i<=5;i++){
//          fact*=i;
//     }
// console.log(fact);

// 7️⃣ Reverse a number (example: 123 → 321).
// let num=123;
// let rev=0;
// while(num>0){
//     let digit=num%10;
//     rev=rev*10+digit
//     num=Math.floor(num/10)

// }
// console.log(rev);

// 8️⃣ Count how many digits are in a number.
// let num=123456;
// let count=0;
// while(num>0){
//     count++
// num=Math.floor(num/10);
// }
// console.log(count);

// 9️⃣ Check if a number is prime
let num = 5;
let isPrime = true;

if (num <= 1) {
    isPrime = false;
} else {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            isPrime = false;
            break;
        }
    }
}

console.log(isPrime);