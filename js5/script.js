function createNewUser() {
    let firstName = prompt("Enter your first name:");
    let lastName = prompt("Enter your last name:");
    let birthday = prompt("Enter your date of birth (dd.mm.yyyy):");
  
    firstName = firstName.trim();
    lastName = lastName.trim();
    birthday = birthday.trim();
  
    const newUser = {
      getLogin() 
      {
        return (firstName[0] + lastName).toLowerCase();
      },
      setFirstName(newFirstName) 
      {
        if (newFirstName && typeof newFirstName === "string") 
        {
          firstName = newFirstName.trim();
        }
      },
      setLastName(newLastName) 
      {
        if (newLastName && typeof newLastName === "string") 
        {
          lastName = newLastName.trim();
        }
      },
      getFirstName() 
      {
        return firstName;
      },
      getLastName() 
      {
        return lastName;
      },
      getAge() 
      {
        const [day, month, year] = birthday.split(".").map(Number);
        const birthDate = new Date(year, month - 1, day);
        const today = new Date();
        let age = today.getFullYear() - birthDate.getFullYear();
  
        const isBirthdayPassed =
          today.getMonth() > birthDate.getMonth() ||
          (today.getMonth() === birthDate.getMonth() &&
            today.getDate() >= birthDate.getDate());
  
        if (!isBirthdayPassed) 
        {
          age--;
        }
  
        return age;
      },
      getPassword() 
    {
        const year = birthday.split(".")[2];
        return (firstName[0].toUpperCase() + lastName.toLowerCase() + year);
      },
    };
  
    return newUser;
  }
  
  const user = createNewUser();
  
  console.log("User login:", user.getLogin());
  console.log("User age:", user.getAge());
  console.log("User password:", user.getPassword());
  