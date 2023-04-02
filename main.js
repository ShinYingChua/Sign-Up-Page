const email = document.querySelector('#email');
const birthYear = document.querySelector('#birth-year');
const createPassword = document.querySelector('#create-password');
const confirmPassword = document.querySelector('#confirm-password');
const errorMessage = document.querySelector(".errorMessage");

const inputs = [email, birthYear, createPassword, confirmPassword];

inputs.forEach((item) => {
    item.addEventListener("focusin", () => {
        errorMessage.textContent = "";
        item.classList.remove("error");
        if (item == createPassword || item == confirmPassword) {
            createPassword.classList.remove('error');
            confirmPassword.classList.remove('error');
        }
    });
});

const submit = (e) => {
    e.preventDefault();
    if (birthYear.value > new Date().getFullYear() - 13) {
        birthYear.classList.add("error");
        alert("Sorry, we’re not able to complete your registration at this time. To sign up for an account, you must meet certain age requirements");
        return;
    }
    if (createPassword.value !== confirmPassword.value) {
        createPassword.classList.add("error");
        alert("Passwords don't match.")
        // errorMessage.textContent = "Passwords don't match";
        return;
    }
    if (createPassword.value.length < 8) {
        createPassword.classList.add("error");
        alert("Password needs to be at least 8 characters long.")
        // errorMessage.textContent = "Password needs to be at least 8 characters long.";
        return;
    }
    if (!createPassword.value.match(/[A-Z]/)) {
        createPassword.classList.add("error");
        alert("Password needs to be at least 1 upper case letter.")
        // errorMessage.textContent = "Password needs to be at least 1 upper case letter";
        return;
    }
    if (!createPassword.value.match(/[a-z]/)) {
        createPassword.classList.add("error");
        alert("Password needs to be at least 1 lower case letter.")
        // errorMessage.textContent = "Password needs to be at least 1 lower case letter";
        return;
    }
    if (!createPassword.value.match(/\d+/g)) {
        createPassword.classList.add("error");
        alert("Password needs to be at least 1 number.")
        // errorMessage.textContent = "Password needs to be at least 1 number.";
        return;
    }
    errorMessage.textContent = "Form added successfully.";
    setTimeout(() => {
        window.location.reload();
    }, 5000);
};

const form = document.querySelector("form");
form.addEventListener("submit", submit);