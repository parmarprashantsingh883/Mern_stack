function validate(e){
    e.preventDefault();

    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    var email = document.getElementById("email").value;

    var err = document.getElementById("error");
    err.style.color = "red";

   if (fname == "" || fname == null)
{
        err.innerText = "Enter first name";
        return false;
    }
if (lname == "" || lname == null)
 {
        err.innerText = "Enter last name";
        return false;
    }

   if (email == "" || email == null)
{
        err.innerText = "Enter email";
        return false;
    }

    err.innerText = "Form submitted!";
    err.style.color = "green";
}
