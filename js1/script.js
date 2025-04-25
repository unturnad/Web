let userName = "";
let userAge = "";
let isValid = false;

while (!isValid) {
  userName = prompt("Please enter your name:", userName);
  userAge = prompt("Please enter your age:", userAge);

  if (userName && !isNaN(userAge) && userAge.trim() !== "") {
    isValid = true;
  } else {
    alert("Please enter a valid name and a valid number for age.");
  }
}

const age = Number(userAge);

if (age < 18) {
  alert("You are not allowed to visit this website");
} else if (age >= 18 && age <= 22) {
  const isSure = confirm("Are you sure you want to continue?");
  if (isSure) {
    alert(`Welcome, ${userName}`);
  } else {
    alert("You are not allowed to visit this website");
  }
} else {
  alert(`Welcome, ${userName}`);
}
