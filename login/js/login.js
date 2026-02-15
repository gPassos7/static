const nameLabel = document.getElementById("name");
if (nameLabel) {
    nameLabel.textContent = "[Aguardando nome do servidor]";
}

function AlterarNome(nome) {
    if (!nameLabel) {
        return;
    }

    const nextName = typeof nome === "string" ? nome.trim() : "";
    if (nextName) {
        nameLabel.textContent = nextName;
    }
}

window.AlterarNome = AlterarNome;

const loginForm = document.getElementById("loginForm");
if (loginForm) {
    loginForm.addEventListener("submit", (event) => {
        event.preventDefault();
    });
}

window.addEventListener('DOMContentLoaded', (event) => {
    // Avisa o servidor que a página carregou e precisa de foco
    if (typeof cef !== 'undefined') {
        cef.emit("page_loaded");
    }
});
