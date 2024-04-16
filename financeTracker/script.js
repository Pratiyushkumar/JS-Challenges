const addDescriptionInput = document.querySelector('#add__description');
const amountInput = document.querySelector('#amount');
const typeOfFinanceInput = document.querySelector('#typeOfFinance');
const form = document.querySelector('form');
const balance = document.querySelector('.balance');
const showResults = document.querySelector('.result');

reset();

let resultantBalance = 0;
// let amountInvestedOrExpense = 0;
// let financialType = "";

function reset() {
  addDescriptionInput.value = '';
  amountInput.value = '';
  typeOfFinanceInput.value = 'expense';
}

function formSubmit(e) {
  e.preventDefault();
  console.log('form submit function called');
  const validation = validateInput();
  if (validation) {
    if (typeOfFinanceInput.value === 'expense') {
      resultantBalance = manageexpenses(amountInput.value);
      showFinancialDetails('expense');
    } else if (typeOfFinanceInput.value === 'income') {
      resultantBalance = manageincomes(amountInput.value);
      showFinancialDetails('income');
    }
  }
  balance.innerHTML = `$ ${resultantBalance}`;
  console.log('resultant balance is', resultantBalance);
  reset();
}

function manageexpenses(expense) {
  const balanceValue = balance.innerHTML.trim();
  console.log(
    'balance value: ' +
      typeof parseFloat(balanceValue.slice(1, balanceValue.length))
  );
  resultantBalance =
    parseFloat(resultantBalance) - parseFloat(amountInput.value);
  return resultantBalance.toFixed(2);
}

function manageincomes(income) {
  const balanceValue = balance.innerHTML.trim();
  console.log(
    'balance value: ' +
      typeof parseFloat(balanceValue.slice(1, balanceValue.length))
  );
  resultantBalance =
    parseFloat(resultantBalance) + parseFloat(amountInput.value);
  return resultantBalance.toFixed(2);
}

function validateInput() {
  console.log('form validation function called');
  const description = addDescriptionInput.value;
  const amount = amountInput.value;
  const typeOfFinance = typeOfFinanceInput.value;
  console.log('description: ' + description);
  console.log('amount: ' + amount);
  console.log('typeOfFinance: ' + typeOfFinance);
  if (description === '' || amount === '') {
    alert('Please enter a valid description and amount ');
    return false;
  } else {
    return true;
  }
}

function showFinancialDetails(type) {
  const div = document.createElement('div');
  const p1 = document.createElement('p');
  const p2 = document.createElement('p');
  console.log('amountInput.value', amountInput.value);
  p1.innerHTML = addDescriptionInput.value;
  p2.innerHTML = `$ ${Number(amountInput.value).toFixed(2)}`;
  div.classList.add('row');
  if (type === 'expense') {
    div.classList.add('red');
  } else {
    div.classList.add('green');
  }
  div.append(p1, p2);
  showResults.append(div);
}

form.addEventListener('submit', formSubmit);
