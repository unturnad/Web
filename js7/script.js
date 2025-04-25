function renderList(arr) {
    const outputDiv = document.getElementById('output');

    const listHtml = `
      <ul>
        ${arr.map(item => `<li>${item}</li>`).join('')}
      </ul>
      `;

    outputDiv.innerHTML = listHtml;

    // Необов’язкове завдання — таймер і очищення
    let seconds = 10;
    const countdownDiv = document.getElementById('countdown');
    countdownDiv.textContent = `Page will clear in ${seconds} seconds`;

    const timer = setInterval(() => {
      seconds--;
      if (seconds > 0) {
        countdownDiv.textContent = `Page will clear in ${seconds} seconds`;
      } else {
        clearInterval(timer);
        document.body.innerHTML = ''; // очищення сторінки
      }
    }, 1000);
  }

  // Приклад виклику
  const exampleArray = ['hello', 'world', 'Kiev', 'Kharkiv', 'Odessa', 'Lviv'];
  renderList(exampleArray);