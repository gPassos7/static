const registerForm = document.getElementById("registerForm");

function sendForm() {
    const dado = Object.fromEntries(new FormData(registerForm))
}

registerForm.addEventListener("submit", (event) => {
    const passwordInput = document.getElementById("reg-password");
    const confirmPasswordInput = document.getElementById("confirm-password");

    if (!passwordInput || !confirmPasswordInput) {
        return;
    }

    const password = passwordInput.value;
    const confirmation = confirmPasswordInput.value;

    if (password !== confirmation) {
        event.preventDefault();
        confirmPasswordInput.setCustomValidity("As senhas precisam ser iguais.");
        confirmPasswordInput.reportValidity();
        return;
    }

    confirmPasswordInput.setCustomValidity("");
    event.preventDefault();
});

const confirmPasswordInput = document.getElementById("confirm-password");
if (confirmPasswordInput) {
    confirmPasswordInput.addEventListener("input", () => {
        confirmPasswordInput.setCustomValidity("");
    });
}
