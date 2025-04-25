function createNewUser() {
    let firstName = prompt("Enter your first name:");
    let lastName = prompt("Enter your last name:");

    // Видаляємо зайві пробіли та нормалізуємо ім'я
    firstName = firstName.trim();
    lastName = lastName.trim();

    const newUser = {
      getLogin() 
      {return (firstName[0] + lastName).toLowerCase();},
      setFirstName(newFirstName) 
      {
            if (newFirstName && typeof newFirstName === "string") 
            {firstName = newFirstName.trim();}
      },
      setLastName(newLastName) 
      {
        if (newLastName && typeof newLastName === "string") 
            {lastName = newLastName.trim();}
      },
      getFirstName() {return firstName;},
      getLastName() {return lastName;}
    };

    return newUser;
  }

  // Створюємо користувача
  const user = createNewUser();

  // Виводимо логін
  console.log("User login:", user.getLogin());