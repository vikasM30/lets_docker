let uname = document.getElementById("name");
let email = document.getElementById("emailAddress");
let form = document.getElementById("contactForm");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("Form data: ", { name: uname.value, email: email.value });
  fetch("http://localhost:3000/")
    .then((response) => response.text())
    .then((json) =>
      console.log("Sample API Call response: For Backend Check: ", json)
    );
  fetch("http://localhost:3000/db-connection-status")
    .then((response) => response.json())
    .then((json) =>
      console.log("API Call response: for DB Connection Check: DB Lists: ", json)
    );
});
