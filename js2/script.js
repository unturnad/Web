let userInput = "";
let isValid = false;

// Повторюємо, поки користувач не введе ціле число
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

// Знаходимо числа, кратні 5
for (let i = 0; i <= limit; i++) {
  if (i % 5 === 0) {
    console.log(i);
    found = true;
  }
}

// Якщо не знайдено жодного
if (!found) {
  console.log("Sorry, no numbers");
}
