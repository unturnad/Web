let userInput = "";
let isValid = false;

while (!isValid) {
  userInput = prompt("Enter an integer number:", userInput);
  const number = Number(userInput);

  if (userInput !== null && userInput.trim() !== "" && Number.isInteger(number)) {
    isValid = true;
  } else {
    alert("Please enter a valid integer number.");
  }
}

const limit = Number(userInput);
let found = false;

for (let i = 0; i <= limit; i++) {
  if (i % 5 === 0) {
    console.log(i);
    found = true;
  }
}

if (!found) {
  console.log("Sorry, no numbers");
}
