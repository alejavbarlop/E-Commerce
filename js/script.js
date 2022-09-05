const form = document.getElementById('form');
const inputs = document.querySelectorAll('#form input');
const inputEmail = document.getElementById('email');
const inputPassword = document.getElementById('password');
const inputEnter = document.getElementById('btn-log');
const emailNotify = document.getElementById('notify-Email');
const expressions = {
	email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	password: /^[a-zA-Z0-9_.+-]{3,50}$/
}

const validForm = (e) => {
    switch (e.target.name) {
		case "email":
			if(expressions.email.test(e.target.value)){
				document.getElementById('email').classList.remove('invalid-input');
				document.getElementById('notify-Email').style.display = 'none';				
			} else {
				document.getElementById('email').classList.add('invalid-input');
				document.getElementById('notify-Email').style.display = 'block';
			}
		break;

		case "password":
			if(expressions.password.test(e.target.value)){
				document.getElementById('password').classList.remove('invalid-input');
				document.getElementById('notify-Email').style.display = 'none';				
			} else {
				document.getElementById('password').classList.add('invalid-input');
				document.getElementById('notify-Email').style.display = 'block';				
			}
		break;
    }
}

inputs.forEach((input) => {
	input.addEventListener('keyup', validForm);
	input.addEventListener('blur', validForm);
});

form.addEventListener('submit', (e) => {
    e.preventDefault();
});