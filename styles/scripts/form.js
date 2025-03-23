document.querySelector("form").addEventListener("submit", function(event) {
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;
    let errorSpan = document.getElementById("passwordError");

    if (password !== confirmPassword) {
        event.preventDefault();
        errorSpan.textContent = "Passwords do not match!";
        errorSpan.style.color = "red";
        document.getElementById("password").value = "";
        document.getElementById("confirmPassword").value = "";
        document.getElementById("password").focus();
    }
});
