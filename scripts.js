const form = document.querySelector('.email-form');
const emailInput = document.querySelector('#email-input');
const mailFormat = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

const errorMessage = document.createElement('span');
form.appendChild(errorMessage);
errorMessage.setAttribute('class', 'error');

form.addEventListener('submit', (e) => {
    if(emailInput.value === "") {
        e.preventDefault();
        errorMessage.textContent = 'Please enter an email address';
    } else if(!emailInput.value.match(mailFormat)) {
        e.preventDefault();
        errorMessage.textContent = 'Please enter a valid email address';
    }
});

emailInput.addEventListener('focus', () => {
    errorMessage.textContent = '';
});