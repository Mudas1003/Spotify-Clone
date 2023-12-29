var emails = localStorage.getItem("emails") || [];

function submitForm() {
  var email = document.getElementById("rectangle").value;
  console.log(email)

  if (emails.includes(email)===true) {
    alert("User already has an account!");
    console.log("User already has an account");
  } else {
    emails+=emails.push(email);
    localStorage.setItem("emails",JSON.stringify(emails));
    alert("Registration successful!");
    console.log("Registration successful. Updated user list:", emails);
  }
}
console.log(emails);

