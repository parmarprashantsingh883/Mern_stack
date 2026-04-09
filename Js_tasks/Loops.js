Input: 1234
Output: 10
// let sum=0;
// for(let i=1; i<=5; i++){
//  sum+=i
// }
// console.log(sum);


// let num=1234;
// let sum=0
// while(num>0){
//     let digit=num%10;
//     sum+=digit
//     num=Math.floor(num/10)
// }
// console.log(sum);


// let num = 121;
// let temp = num;
// let rev = 0;

// while (num > 0) {
//     let digit = num % 10;
//     rev = rev * 10 + digit;
//     num = Math.floor(num / 10);
// }

// console.log(rev === temp);


// let num=153;
// let temp=num
//  let sum=0;
// while(num>0){
//     let digit=num%10;
//     sum+=digit**3
//     num=Math.floor(num/10)
// }
// console.log(temp==sum);

// let num=5;
// let fact=1;
// while(num>0){
//     fact*=num;
//     num--;
// }
// console.log(fact);


// let num=5;
// let fact=1;
// for(let i=1;i<=num;i++){
// fact*=i

// }
// console.log(fact);

// let arr=[1,2,3]
// let new_arr=arr.map((num=>num*2))
// console.log(new_arr);

// let users = [
//   { name: "Prashant", age: 22 },
//   { name: "Rahul", age: 17 },
//   { name: "Amit", age: 25 }
// ];
// let new_user=users.map((val=>val.name.toLocaleUpperCase()))
// console.log(new_user);

// let users = [
//   { name: "Prashant", age: 22 },
//   { name: "Rahul", age: 17 },
//   { name: "Amit", age: 25 }
// ];
// let newarr=users.filter((age=> age.age>=18))
// console.log(newarr);

// let cart = [
//   { item: "Shirt", price: 1000 },
//   { item: "Shoes", price: 2000 },
//   { item: "Cap", price: 500 }
// ];
// let total=cart.reduce((a,b)=>a+ b.price,0)
// console.log(total);
// let orders = [
//   { id: 1, amount: 500, status: "completed" },
//   { id: 2, amount: 1500, status: "pending" },
//   { id: 3, amount: 700, status: "completed" },
//   { id: 4, amount: 200, status: "cancelled" }
// ];
// let newarrr=orders.filter((val)=>{
//     return val.status=="completed"
  
// })
// // console.log(newarrr.reduce((a,b)=>a+b.amount,0));
// let ids = orders
//   .filter(val => val.status === "completed")
//   .map(val => val.id);

// console.log(ids);
// let a = 10;

// function test() {
//   console.log(a);
// }

// function run() {
//   let a = 20;
//   // run()
// }
// test();
