function showRegister() {
    document.getElementById("loginBox").classList.add("hidden");
    document.getElementById("registerBox").classList.remove("hidden");
}

function showLogin() {
    document.getElementById("registerBox").classList.add("hidden");
    document.getElementById("loginBox").classList.remove("hidden");
}

function register() {

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let mobile = document.getElementById("mobile").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;
    let className = document.getElementById("className").value;
    let division = document.getElementById("division").value;

    if (
        name === "" ||
        email === "" ||
        mobile === "" ||
        password === "" ||
        confirmPassword === "" ||
        className === "" ||
        division === ""
    ) {
        alert("Please fill all fields.");
        return;
    }

    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return;
    }

    let student = {
        name: name,
        email: email,
        mobile: mobile,
        password: password,
        className: className,
        division: division
    };

    localStorage.setItem("student", JSON.stringify(student));

    alert("Registration Successful!");

    showLogin();
}

function login() {

    let email = document.getElementById("loginEmail").value;
    let password = document.getElementById("loginPassword").value;

    let savedStudent = localStorage.getItem("student");

    if (savedStudent === null) {
        alert("Please register first.");
        return;
    }

    let student = JSON.parse(savedStudent);

    if (email === student.email && password === student.password) {

        alert("Login Successful!");

        window.location.href = "dashboard.html";

    } else {

        alert("Invalid Email or Password.");

    }
}