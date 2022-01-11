window.addEventListener('load', (event) => {
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

      console.log(usernameValue);
      console.log(emailValue);
      console.log(textareaValue);


      if (emailValue === '') {
        setErrorFor(emailValue, 'Email cannot be blank');
        console.log(emailValue);
      } else if (!isEmail(emailValue)) {
        setErrorFor(emailValue, 'Email is not valid');
      } else {
        setSuccessFor(emailValue);
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

      if (emailValue, usernameValue, textareaValue) {
        alert ('Everything successfully completed!');
        hideForm();
      }
  }

  function hideForm() {
    form.style.display = "none";
    greeting.style.display = "block";
  }

  function setErrorFor(input, message) {
    const formControl = input.parentElement; // form-control
    const small = formControl.querySelector('small');

    small.innerText = message;

    formControl.className = 'form-control error';
  }

  function setSuccessFor (input) {
    const formControl = input.parentElement // form-control
    formControl.className = 'form-control success'
  }

  function isEmail(email) {
      return  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email);
  }

})
