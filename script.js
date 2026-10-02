document.getElementById("contactform").addEventListener("submit", function(event) {
  event.preventDefault();
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let message = document.getElementById("formMessage");
  if (name === "" || email === "") {
    message.innerHTML = "Please fill in your name and email.";
  } 
  else {
    message.innerHTML = "Thank you, " + name + "! Your message has been received.";
  }
});

let hour = new Date().getHours();
let greeting = document.getElementById("greeting");
if (hour < 12) {
  greeting.innerHTML="Good Morning! ☼";
} else if (hour < 18) {
  greeting.innerHTML="Good Afternoon! 🌥";
} else {
  greeting.innerHTML="Good Evening! ⏾";
}