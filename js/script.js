// BURGER MENU

const isMobile = {
	Android: function () {
		return navigator.userAgent.match(/Android/i);
	},
	BlackBerry: function () {
		return navigator.userAgent.match(/BlackBerry/i);
	},
	iOS: function () {
		return navigator.userAgent.match(/iPhone|iPad|iPod/i);
	},
	Opera: function () {
		return navigator.userAgent.match(/Opera Mini/i);
	},
	Windows: function () {
		return navigator.userAgent.match(/IEMobile/i);
	},
	any: function () {
		return (
			isMobile.Android() ||
			isMobile.BlackBerry() ||
			isMobile.iOS() ||
			isMobile.Opera() ||
			isMobile.Windows()
		);
	},
};

if (isMobile.any()) {
	document.body.classList.add('_touch');

	let menuArrows = document.querySelectorAll('.menu__arrow');
	if (menuArrows.length > 0) {
		for (let index = 0; index < menuArrows.length; index++) {
			const menuArrow = menuArrows[index];
			menuArrow.addEventListener('click', function (e) {
				menuArrow.parentElement.classList.toggle('_active');
			});
		}
	}
} else {
	document.body.classList.add('_pc');
}

// burger menu
const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');
if (iconMenu) {
	iconMenu.addEventListener('click', function (e) {
		document.body.classList.toggle('_lock');
		iconMenu.classList.toggle('_active');
		menuBody.classList.toggle('_active');
	});
}

// scroll on click
const menuLinks = document.querySelectorAll('.menu__link[data-goto]');
if (menuLinks.length > 0) {
	menuLinks.forEach((menuLink) => {
		menuLink.addEventListener('click', onMenuLinkClick);
	});

	function onMenuLinkClick(e) {
		const menuLink = e.target;
		if (
			menuLink.dataset.goto &&
			document.querySelector(menuLink.dataset.goto)
		) {
			const gotoBlock = document.querySelector(menuLink.dataset.goto);
			const gotoBlockValue =
				gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('.header').offsetHeight;

			if (iconMenu.classList.contains('_active')) {
				document.body.classList.remove('_lock');
				iconMenu.classList.remove('_active');
				menuBody.classList.remove('_active');

				// auto close sub-menu
				if (
					menuBody.dataset.sub_menu_auto_close &&
					document.body.classList.contains('_touch')
				) {
					let menuArrows = document.querySelectorAll('.menu__arrow');
					for (let index = 0; index < menuArrows.length; index++) {
						menuArrows[index].parentElement.classList.remove('_active');
					}
				}
			}

			window.scrollTo({
				top: gotoBlockValue,
				behavior: 'smooth',
			});
			e.preventDefault();
		}
	}
}


// CALL MODAL WINDOW

let modal = document.getElementById('modal');
let btns = document.querySelectorAll('.link--js');
let span = document.getElementsByClassName("close")[0];

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
