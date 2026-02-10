// Task: Count Vowels in String
// let str="prashant"
// let vowels="aieou"
// let count=0;
// for(let val of str){
//     if(vowels.includes(val)){
//         count++;
//         console.log(val);
//     }
// }
// console.log(count);


// Task: Missing Number in Array
// let arr = [1,2,3,5];
// let n = 5;

// let expectedSum = n * (n + 1) / 2;
// let actualSum = arr.reduce((a,b) => a + b, 0);
// let missing = expectedSum - actualSum;
// console.log("Missing number:", missing);


// Task: Slice String
// let str="martinbook"
// let m=str.slice(0,6)
// let m2=str.slice(6)
// console.log(m);
// console.log(m2);


// Task: Find Maximum Number
// let arr=[10,20,30,100,80,50];
// let newarr= Math.max(...arr)
// console.log(newarr);


// Task: Sort Array Descending
// let arr=[10,20,30,100,80,50];
// arr.sort((a,b)=>b-a)
// console.log(arr);


// Task: Remove Duplicates using Set
// let arr = [10,20,30,100,80,50,100];
// let unique= [...new Set(arr)]
// console.log(unique);


// Task: Armstrong Number
// let num = 153;
// let temp = num;
// let sum = 0;
// while(temp>0){
//     let digit=temp%10;
//     sum+=digit ** 3
//     temp= Math.floor(temp/10)
// }
// if(num==sum){
//     console.log("aarmstrong");
// }
// else{
//     console.log("not");
// }


// Task: Reverse String using Loop
// let str = "india";
// let newstr = "";
// for (let i = str.length - 1; i >= 0; i--) {
//     newstr += str[i];
// }
// console.log(newstr);


// Task: Reverse String using Built-in
// let str = "india";
// let newstr=str.split("").reverse().join("")
// console.log(newstr);


// Task: Missing Number Again
// let arr=[1,2,3,5]
// let n=5;
// let assumednum=n*(n+1)/2
// let expectedSnum=arr.reduce((a,b)=>a+b,0)
// let realnum=assumednum-expectedSnum;
// console.log(realnum);


// Task: Remove Duplicate Using Set
// let arr=[1,2,2,3,4,4]
// let newarr=[... new Set(arr) ]
// console.log(newarr);


// Task: Remove Duplicate Without Set
// let arr=[1,2,2,3,4,4]
// let newarr=[];
// for(let val of arr){
//     if(!newarr.includes(val)){
//         newarr.push(val)
//     }
// }
// console.log(newarr);


// Task: Count Vowels Again
// let str = "javascript";
// let count = 0;
// for (let ch of str.toLowerCase()) {
//     if ("aeiou".includes(ch)) {
//         count++;
//         console.log(ch);
//     }
// }
// console.log(count);


// Task: Max and Min in Array
// let arr = [4,8,2,10,3];
// let max = arr[0];
// let min = arr[0];
// for (let val of arr) {
//     if (val > max) {
//         max = val;
//     }
//     if (val < min) {
//         min = val;
//     }
// }
// console.log("Max:", max);
// console.log("Min:", min);


// Task: Count Words in Sentence
// let str="India is a great              country"
// let newstr = str.replace(/\s+/g, " ").split(" ")
// console.log(newstr.length);


// Task: Armstrong Ternary Version
// let num=123;
// let temp=num;
// let sum =0
// while(temp> 0){
//     let digit=temp%10;
//     sum+=digit ** 3;
//     temp=Math.floor(temp/10)
// }
// console.log(num===sum  ? "aarmstrong" :"not armstrong" );


// Task: Factorial Recursion
// function factrorial(n){
//     if(n===0 || n===1) {
//         return 1;
//     }
//     return n*factrorial(n-1)
// }
// console.log(factrorial(5));


// Task: Fibonacci Series
// let n=7
// let a=0, b=1;
// console.log(a);
// console.log(b);
// for(let i=2; i<n;i++){
//     let lext=a+b
//     console.log(lext);
//     a=b;
//     b=lext
// }


// Task: Prime Number
// let num=13
// let isprime=true;
// for( let i=2; i<num;i++){
//     if(num%i===0){
//         isprime=false
//         break;
//     }
// }
// console.log(isprime  ? "prime" :"notprime");


// Task: Reverse Number
// let num=12345
// let rev=0
// while(num>0){
//     let digit=num%10;
//     rev =rev*10 +digit
//     num=Math.floor(num/10)
// }
// console.log(rev);


// Task: Count Digits
// let num = 12345;
// let  count=0;
// while(num>0){
//     count++
//     num=Math.floor(num/10)
// }
// console.log(count)


// Task: Sum of Digits
// let num = 12345;
// let sum=0;
// while(num>0){
//     sum+=num%10;
//     num=Math.floor(num/10)
// }
// console.log(sum);


// Task: Swap Two Numbers
// let a=10,b=5
// a=a+b;
// b=a-b;
// a=a-b;
// console.log(a,b);


// Task: Filter Even Numbers
// let arr = [1,2,3,4,5,6];
// let even=arr.filter(item=> item%2==0)
// console.log(even);


// Task: Flatten Array
// let arr = [1, [2,3], [4,5]];
// console.log(arr.flat());


// Task: Sum of Array
// let arr = [1,2,3,4];
// let sum=0;
// for(let val of arr){
//     sum+=val
// }
// console.log(sum);
// let total=arr.reduce((a,b)=>a+b,0)
// console.log(total);


// Task: Reverse Array
// let arr=[10,20,30,40,50]
// let rev=[];
// for(let i=arr.length-1; i>=0 ;i--){
//     rev.push(arr[i])
// }
// console.log(rev);


// Task: Square Array Elements
// let arr=[2,8,5,6]
// let sq=arr.map(item=>item*item)
// console.log(sq);


// Task: Palindrome Check
// let str = "frontend";
// let rev=str.split("").reverse().join("")
// console.log(rev===str ? "palindrome" :"not palindrome");


// Task: Prime Number Check Again
// let num = 17;
// let isprime = true;
// if (num <= 1) {
//     isprime = false;
// }
// for (let i = 2; i < num; i++) {
//     if (num % i === 0) {
//         isprime = false;
//         break;
//     }
// }
// console.log(isprime ? "Prime" : "Not Prime");


// Task: Armstrong Again
// let num = 153;
// let temp=num ;
// let sum=0;
// while(temp>0){
//     let digit=temp%10;
//     sum+=digit ** 3
//     temp=Math.floor(temp/10)
// }
// console.log(sum===num ?"armstrong" :"notarmstrong");


// Task: Factorial Again
// function fact(n){
//     if(n==1 || n==0){
//         return 1;
//     }
//     return n*fact(n-1);
// }
// console.log(fact(5));


// Task: Missing Number Again
// let arr = [1,2,3,5];
// let n = 5;
// let assumednum=n*(n+1)/2
// let expectedSnum=arr.reduce((a,b)=>a+b,0)
// let realnum=assumednum-expectedSnum;
// console.log(realnum);


// Task: Remove Duplicates Final
let arr = [1,2,2,3,4,4];
let unique=[...new Set(arr)]
console.log(unique);
