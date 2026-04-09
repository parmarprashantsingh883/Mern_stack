// // let day="friday"
// // switch(day){
// //     case "monday":
// //         console.log("start of the week");
// //         break;
// //         case "wednesday":
// //             console.log("mid week");
// //             break;
// //             case "friday":
// //             console.log("weekend soon");
// //             break;
// //             default:
// //                 console.log("you gotta something fishy");
                
            
            
        
// // }

// let num = 9;

// if (num > 0 && num % 2 === 0) {
//     console.log("Even Positive");
// }
// else if (num > 0 && num % 2 !== 0) {
//     console.log("Odd Positive");
// }
// else if (num < 0) {
//     console.log("Negative");
// }
// else {
//     console.log("Zero");
// }
const year = new Date().getFullYear();
// let person={
//     info:{
//         name:"prashant",
//         DOB:"2004"
//     }
// }

// console.log(year-person?.info?.DOB );
// console.log(`${person?.info?.DOB ? year-person.info.DOB :"enter the age fisrt"}`);

let person={
    p1:{
        name:"prashant",
         DOB:"2004"
    },
    p2:{
        name:"rahul",
        DOB:"2000"
    }
}


    for(let key in person){
       
        console.log( person[key].name,  person[key].DOB ? year-person[key].DOB:"enter the age");
        
    }
