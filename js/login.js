function validateForm(event) {
    event.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");

    const emailErr = document.getElementById("email-error");
    const passwordErr = document.getElementById("password-error");

    emailErr.textContent = "";
    passwordErr.textContent = "";

    let isValid = true;

    if (email === "" || !email.includes("@") || !email.includes(".")) {
        emailErr.textContent = "Email tidak dikenali.";
        emailInput.classList.remove("border-success");
        emailInput.classList.add("border-danger");
        isValid = false;
    }else{
        emailInput.classList.remove("border-danger");
        emailInput.classList.add("border-success");
    }

    if (password === "") {
        passwordErr.textContent = "Password tidak dikenali";
        passwordInput.classList.remove("border-success");
        passwordInput.classList.add("border-danger");
        isValid = false;
    }else{
        passwordInput.classList.remove("border-danger");
        passwordInput.classList.add("border-success");
    }

    if (isValid) {
        if(password === "passwordPetugas123" && email === "petugas@gmail.com"){
            alert("Successfully login!");
            localStorage.setItem("isLoggedIn", "true");
            window.location.href = "tabel.html";
            document.getElementById("daftar").reset();

            const allInput = [emailInput, passwordInput];

            allInput.forEach(input => {
                input.classList.remove("border-success", "border-danger")
            })

            return true;
        }else{
            alert("Wrong credentials!");

            document.getElementById("daftar").reset();

            const allInput = [emailInput, passwordInput];

            allInput.forEach(input => {
                input.classList.add("border-danger")
            })

            return false;
        }
    }
    else {
        return false;
    }
}