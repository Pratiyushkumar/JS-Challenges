'use strict';

const emailInput = document.querySelector('#user_email');
const checkboxInput = document.querySelector('#checkbox');
const form = document.querySelector('.form');
const message = document.querySelector('#message');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  message.innerHTML = '';
  const email = emailInput.value;
  const validation = validateEmailInput(email);
  if (validation.value === false) {
    message.innerHTML = validation.message;
    message.style.color = validation.color;
    window.alert(validation.message);
    return;
  } else {
    message.innerHTML = validation.message;
    message.style.color = validation.color;
    window.alert(validation.message);
    return;
  }
});

function validateEmailInput(email) {
  if (email === '') {
    return {
      value: false,
      message: 'Please enter a email id',
      type: 'error',
      color: 'red',
    };
  } else if (!regexForEmail(email)) {
    return {
      value: false,
      message: 'Please enter a valid email id',
      type: 'error',
      color: 'red',
    };
  } else {
    return {
      value: true,
      message: 'Email Sent Successfully',
      type: 'success',
      color: 'green',
    };
  }
}

function regexForEmail(email) {
  return email.match(
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
}
