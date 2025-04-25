let num1 = "";
    let num2 = "";
    let isValid = false;

    // Повторний запит чисел до коректного введення
    while (!isValid) {
      num1 = prompt("Enter the first number:", num1);
      num2 = prompt("Enter the second number:", num2);

      const n1 = Number(num1);
      const n2 = Number(num2);

      if (
        num1 !== null &&
        num1.trim() !== "" &&
        num2 !== null &&
        num2.trim() !== "" &&
        !isNaN(n1) &&
        !isNaN(n2)
      ) {
        isValid = true;
      } else {
        alert("Please enter valid numbers.");
      }
    }

    const a = Number(num1);
    const b = Number(num2);

    // Отримуємо операцію
    let operation = prompt("Enter the operation (+, -, *, /):", "+");

    // Перевірка операції
    while (!["+", "-", "*", "/"].includes(operation)) {
      alert("Invalid operation. Please enter one of +, -, *, /");
      operation = prompt("Enter the operation (+, -, *, /):", operation);
    }

    // Функція виконання математичної операції
    const calculate = (x, y, op) => {
      switch (op) {
        case "+":
          return x + y;
        case "-":
          return x - y;
        case "*":
          return x * y;
        case "/":
          return y !== 0 ? x / y : "Division by zero error";
        default:
          return "Unknown operation";
      }
    };

    // Викликаємо функцію та виводимо результат
    const result = calculate(a, b, operation);
    console.log(`Result: ${a} ${operation} ${b} = ${result}`);