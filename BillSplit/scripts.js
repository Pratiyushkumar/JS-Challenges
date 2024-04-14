const billAmountInput = document.querySelector('#bill_amount_input');
const tipBtn = document.querySelectorAll('.tip__btn');
const customTipInput = document.querySelector('#custom__tip__input');
const people = document.querySelector('#people');
const generateBillBtn = document.querySelector('.generate__bill__btn');
const tipAmount = document.querySelector('#tip__amount');
const totalAmount = document.querySelector('#total_amount');
const perPersonAmount = document.querySelector('#per_person_amount');
const resetBtn = document.querySelector('.reset__btn');

let totalBillAmount = 0;
let tip = 0;
let numberOfPersons = 0;

function validateBillAmout() {
  totalBillAmount = parseFloat(billAmountInput.value);

  if (totalBillAmount > 0) {
    tipBtn.forEach((ele) => {
      ele.disabled = false;
      ele.classList.add('enable');
    });
    customTipInput.disabled = false;
    people.disabled = false;
  } else {
    tipBtn.forEach((ele) => {
      ele.disabled = true;
      ele.classList.remove('enable');
    });
    customTipInput.disabled = true;
    people.disabled = true;
  }
}

function getTipAmount(e) {
  tipBtn.forEach((btn) => {
    btn.classList.remove('btnClick');
    if (btn.value === e.target.value) {
      tip = parseFloat(btn.value);
      e.target.classList.add('btnClick');
    }
  });
}

function getCustomTip(e) {
  tip = parseFloat(e.target.value);
}

function getNumberOfPeople(e) {
  numberOfPersons = parseInt(e.target.value);
  generateBillBtn.disabled = false;
}

function calculateBill() {
  const totalTipAmount = totalBillAmount * (tip / 100);
  const totalAmountToPay = totalBillAmount + totalTipAmount;
  const eachPersonBill = totalAmountToPay / numberOfPersons;

  tipAmount.innerHTML = '₹' + totalTipAmount.toFixed(2);
  totalAmount.innerHTML = '₹' + totalAmountToPay.toFixed(2);
  perPersonAmount.innerHTML = '₹' + eachPersonBill.toFixed(2);
}

function reset() {
  tipAmount.innerHTML = '';
  totalAmount.innerHTML = '';
  perPersonAmount.innerHTML = '';
  billAmountInput.value = '';
  tipBtn.forEach((btn) => {
    btn.classList.remove('btnClick', 'enable');
    btn.disabled = true;
  });
  customTipInput.disabled = true;
  customTipInput.value = '';
  people.value = '';
  people.disabled = true;
}

billAmountInput.addEventListener('input', validateBillAmout);
tipBtn.forEach((ele) => {
  ele.addEventListener('click', getTipAmount);
});
customTipInput.addEventListener('input', getCustomTip);
people.addEventListener('input', getNumberOfPeople);
generateBillBtn.addEventListener('click', calculateBill);
resetBtn.addEventListener('click', reset);
