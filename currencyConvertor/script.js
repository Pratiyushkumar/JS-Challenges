const enterAmountInputValue = document.querySelector('#enterAmount');
const selectedCurrencyType = document.querySelector('#currencyAmount');
const currencyAmountConvertedValue =
  document.querySelector('#convertedCurrency');
const currencyConvertedTo = document.querySelector('#result');
const convertBtn = document.querySelector('.convert__btn');
const customCurrencyInput = document.querySelector('#customCurrencyInput');
const addBtn = document.querySelector('#add__btn');

let initialCurrencyValue = {
  USD: 1,
  EUR: 0.94,
  GBP: 0.8,
  INR: 83.48,
};

let currencyAmountToBeConverted = 0;
let currencyToBeConvertedIn = '';
let amountConverted = 0;
let resultantCurrency = '';
let getCurrencyResult = 0;

function init() {
  enterAmountInputValue.addEventListener('input', (e) => {
    e.preventDefault();
    handleInputValues();
    // console.log('inside event listener', currencyAmountToBeConverted);
  });
  //   console.log('outside event listener', currencyAmountToBeConverted);

  convertBtn.addEventListener('click', () => {
    getCurrencyResult = convertCurrency();
    console.log(getCurrencyResult);
  });
}

function handleInputValues() {
  currencyAmountToBeConverted = parseFloat(enterAmountInputValue.value);
  currencyToBeConvertedIn = document.querySelector('#currencyAmount').value;
  resultantCurrency = document.querySelector('#result').value;
  if (currencyAmountToBeConverted) {
    currencyAmountConvertedValue.disabled = false;
  }
  console.log('resultantCurrency', resultantCurrency);
  return [
    currencyAmountToBeConverted,
    currencyToBeConvertedIn,
    resultantCurrency,
  ];
}

function convertCurrency() {
  console.log('****', resultantCurrency);
  console.log('###', currencyToBeConvertedIn);
  //   let toRate = initialCurrencyValue[resultantCurrency];
  //   let fromRate = initialCurrencyValue[currencyToBeConvertedIn];
  //   console.log(toRate, fromRate);
  //   return ((toRate / fromRate) * currencyAmountToBeConverted).toFixed(2);
}

init();
