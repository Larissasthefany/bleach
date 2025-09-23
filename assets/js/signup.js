(() => {
    const formSignup = document.getElementById('form-signup');

    function renderSignUpForm() {
        formSignup.innerHTML = `
            <form id="signup-form" method="post">
                <div class="flex-column">
                    <label for="first-name">Nome</label>
                    <input class="input" type="text" id="first-name" name="first-name" placeholder="Digite seu nome" required>
                </div>

                <div class="flex-column">
                    <label for="last-name">Sobrenome</label>
                    <input class="input" type="text" id="last-name" name="last-name" placeholder="Digite seu sobrenome" required>
                </div>

                <div class="flex-column">
                    <label for="phone">Número</label>
                    <input class="input" type="tel" id="phone" name="phone" placeholder="Digite seu número" required>
                </div>

                <div class="flex-column">
                    <label for="password">Senha</label>
                    <input class="input" type="password" id="password" name="password" placeholder="Digite sua senha" required>
                </div>

                <div class="flex-column">
                    <label for="confirm-password">Confirmar Senha</label>
                    <input class="input" type="password" id="confirm-password" name="confirm-password" placeholder="Confirme sua senha" required>
                </div>

                <button class="btn-submit" type="submit">Cadastrar</button>
            </form>
        `;
    }

    renderSignUpForm();
})();
