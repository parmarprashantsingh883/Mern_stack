// function callme(id){
//  const result = user.filter((items )=>items.id == id)
//      console.log(result)  
//      window.location.href = `details.html?id=${id}`;
// }
// // export { callme };

function callme(id){
    const result = user.find(item => item.id == id);

    // store in localStorage
    localStorage.setItem("selectedUser", JSON.stringify(result));

    // go to details page
    window.location.href = "details.html";
}