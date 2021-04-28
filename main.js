const emailInput = document.getElementById('notify-input');
const submitBtn = document.getElementById('submit');
const message = document.querySelector('.message');

function checkError() {
  let regEx = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  message.style.visibility = "visible";

  if (!regEx.test(emailInput.value)) {
    message.innerText = 'Please provide a valid email.'
    message.classList.add('error');
    emailInput.classList.add('error');
  } else {
    message.innerText = 'You will be notified once site is up..';
    message.classList.add('success');
    emailInput.classList.add('success');
    emailInput.value = '';
  } 
}

function resetOnKeydown() {
  message.style.visibility = 'hidden';
  message.classList.remove('error');
  message.classList.remove('success');
  emailInput.classList.remove('error');
  emailInput.classList.remove('success');
}


submitBtn.addEventListener('click', e => {
  e.preventDefault();
  checkError();
})

emailInput.addEventListener('keydown', resetOnKeydown)
