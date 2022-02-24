const form = document.querySelector('form');
const emailInput = document.querySelector('#email');
const errorContainer = document.querySelector('.container');


// this will validate if the format of an email is correct
const validEmailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

// console.log()


form.addEventListener('submit', e => {
    // this will add one error if the email has nothing in it, and another error if the email doesn't have a valid email.
    if (emailInput.value.length <= 0) {
        e.preventDefault();
        clearError();
        error('Whoops! It looks like you forgot to add your email');
    } else if (!emailInput.value.match(validEmailFormat)) {
        e.preventDefault();
        clearError();
        error('Please provide a valid email')
    }
})

function error(message) {
    const p = document.createElement('p');
    p.innerText = message;
    p.style.textAlign = 'left';
    p.style.marginLeft = '1rem';
    p.style.color = 'red';
    p.style.fontStyle = 'italic';
    errorContainer.appendChild(p);
    emailInput.style.border = '1px solid red';
}

function clearError() {
    const error = errorContainer.querySelector('p');
    if (error) {
        console.log(error);
        error.remove();

    }
}