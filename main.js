const form = document.querySelector('#registrationForm');
const username = document.querySelector('#username');
const lastName = document.querySelector('#lastName');
const email = document.querySelector('#email');
const phoneNumber = document.querySelector('#phoneNumber');
const department = document.querySelector('#department');
const nextOfKin = document.querySelector('#nextOfKin');
const password = document.querySelector('#password');
const confirmPassword = document.querySelector('#confirmPassword');


const formValidation = () => {

    form.setAttribute('novalidate', '');

    form.addEventListener('submit', e => {
        e.preventDefault();
        const formValid = validate()

        if (formValid) {
            fetch(form.action, {
                method: 'POST',
                body: new FormData(form)

            })
                .then((res) => res.json())
                .then(() => {
                    open('checkout.html', '_blank')
                })
        }

    })
}
formValidation();

const isEmail = function (emailVal) {
    let atSymbol = emailVal.indexOf('@');
    if (atSymbol < 1) return false;
    let dot = emailVal.lastIndexOf('.');
    if (dot <= atSymbol + 2) return false;
    if (dot === emailVal.length - 1) return false;
    return true;
}


const validate = () => {
    const usernameVal = username.value.trim();
    const lastNameVal = lastName.value.trim();
    const emailVal = email.value.trim();
    const phoneNumberVal = phoneNumber.value.trim();
    const departmentVal = department.value.trim();
    const nextOfKinVal = nextOfKin.value.trim();
    const passwordVal = password.value.trim();
    const confirmPasswordVal = confirmPassword.value.trim();

    let error = true;
    // username 

    if (usernameVal === "") {
        setErrorMsg(username, 'Please enter a first name');

    } else if (usernameVal.length <= 2) {
        setErrorMsg(username, 'min 3 characters required');
    } else {
        setSuccessMsg(username);
        error = false;

    }

    // last name 

    if (lastNameVal === "") {
        setErrorMsg(lastName, 'Please enter a last name');

    } else if (lastNameVal.length <= 2) {
        setErrorMsg(lastName, 'min 3 characters required');
    } else {
        setSuccessMsg(lastName);
        error = false;


    }

    // email 

    if (emailVal === "") {
        setErrorMsg(email, 'email cannot be empty');

    } else if (!isEmail(emailVal)) {
        setErrorMsg(email, 'email is not valid');
    } else {
        setSuccessMsg(email);
        error = false;


    }

    //phone number
    if (phoneNumberVal === "") {
        setErrorMsg(phoneNumber, 'please enter your phone number');

    } else if (phoneNumberVal.length <= 10) {
        setErrorMsg(phoneNumber, 'invalid phone number');
    } else {
        setSuccessMsg(phoneNumber);
        error = false;


    }

    // department 

    if (departmentVal === "") {
        setErrorMsg(department, 'department cannot be empty');

    } else if (departmentVal.length <= 4) {
        setErrorMsg(department, 'you must enter a correct department name');
    } else {
        setSuccessMsg(department);
        error = false;


    }


    // next of kin

    if (nextOfKinVal === "") {
        setErrorMsg(nextOfKin, 'next of kin name cannot be empty');

    } else if (nextOfKinVal.length <= 2) {
        setErrorMsg(nextOfKin, 'you must enter a correct next of kin name');
    } else {
        setSuccessMsg(nextOfKin);
        error = false;


    }

    // password

    if (passwordVal === "") {
        setErrorMsg(password, "Please enter a password");

    } else if (passwordVal.length <= 7) {
        setErrorMsg(password, "min 8 characters required");
    } else {
        setSuccessMsg(password);
        error = false;


    }


    // confirm password

    if (confirmPasswordVal === "") {
        setErrorMsg(confirmPassword, "Please enter a confirm password");

    } else if (passwordVal != confirmPasswordVal) {
        setErrorMsg(confirmPassword, "Password does not match!");
    } else {
        setSuccessMsg(confirmPassword);
        error = false;

    }

    return !error;
}

const setErrorMsg = (input, errorMsgs) => {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = "formControl error";
    small.innerText = errorMsgs;
}

const setSuccessMsg = (input) => {
    const formControl = input.parentElement;
    formControl.className = "formControl success";
}