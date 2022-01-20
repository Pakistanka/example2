// CALL MODAL WINDOW

let modal = document.getElementById('modal');
let btns = document.querySelectorAll('.link--js');
let span = document.getElementsByClassName("close")[0];

console.log(span);

btns.forEach(btn => {
    btn.addEventListener('click', () => modal.style.display = "block");
});

span.addEventListener('click', () => modal.style.display = "none");

window.addEventListener('click', (e) => {
    if (e.target == modal) {
        modal.style.display = "none";
    }
});


// CHECK VALIDATION

const form = document.getElementById('form');
const email = document.getElementById('email');
const username = document.getElementById('username');
const textarea = document.getElementById('textarea');
let greeting = document.querySelector('.greeting--js');


form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInputs();
});

function checkInputs() {
    console.log('hi2');
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const textareaValue = textarea.value;

    if (emailValue === '') {
        setErrorFor(email, 'Email cannot be blank');
    } else if (!isEmail(emailValue)) {
        setErrorFor(email, 'Email is not valid');
    } else {
        setSuccessFor(email);
    }

    if (textareaValue === '') {
        setErrorFor(textarea, 'Textarea cannot be blank');
    } else {
        setSuccessFor(textarea);
    }

    if (usernameValue === '') {
        setErrorFor(username, 'Username cannot be blank');
    } else {
        setSuccessFor(username);
    }

    if (usernameValue, emailValue, textareaValue) {
        alert('Everything successfully completed!');
        hideForm();
    }
}

function setErrorFor(input, message) {
    const formControl = input.parentElement
    const small = formControl.querySelector('small');

    small.innerText = message;

    formControl.className = 'form-control error';
}

function setSuccessFor (input) {
    const formControl = input.parentElement
    formControl.className = 'form-control success'
}

function isEmail(email) {
    return /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email);
}

function hideForm() {
    form.style.display = "none";
    greeting.style.display = "block";
}
