const priceInput = document.getElementById('price');
const messageDiv = document.getElementById('message');
const priceDisplayDiv = document.getElementById('priceDisplay');

priceInput.addEventListener('focus', () => 
{
  priceInput.classList.add('green-border');
});

priceInput.addEventListener('blur', () => {
  priceInput.classList.remove('green-border');
  messageDiv.textContent = '';
  priceDisplayDiv.innerHTML = '';

  const value = parseFloat(priceInput.value);

  if (isNaN(value)) return;

  if (value < 0) {
    priceInput.classList.add('red-border');
    messageDiv.textContent = 'Введіть коректне значення';
    return;
  }

  priceInput.classList.remove('red-border');
  priceInput.classList.add('green-text');

  const span = document.createElement('span');
  span.classList.add('price-info');
  span.textContent = `Ціна: ${value}`;

  const btn = document.createElement('button');
  btn.textContent = 'X';
  btn.className = 'close-btn';
  btn.addEventListener('click', () => {
    priceDisplayDiv.innerHTML = '';
    priceInput.value = '';
    priceInput.classList.remove('green-text');
  });

  span.appendChild(btn);
  priceDisplayDiv.appendChild(span);
});