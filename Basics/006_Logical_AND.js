// Logical AND (&&)
let password = prompt("Enter a password");

//Condition = Password must be minimum 6 digit's long and must not contain blank spaces
if (password.indexOf(" ") === -1 && password.length >= 6) {
    console.log("Your Password look's great");
}
else {
    console.log("You don't known how to create password");
}