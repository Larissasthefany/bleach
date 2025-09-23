(() => {
  const formLogin = document.getElementById("form-login");
  const formSignup = document.getElementById("form-signup");

  const btnLogin = document.getElementById("btn-login");
  const btnSignup = document.getElementById("btn-signup");

  // Ambos ocultos por padrão
  formLogin.style.display = "none";
  formSignup.style.display = "none";

  // Quando clicar em login
  btnLogin.addEventListener("click", () => {
    formLogin.style.display = "block";
    formSignup.style.display = "none";
  });

  // Quando clicar em cadastro
  btnSignup.addEventListener("click", () => {
    formLogin.style.display = "none";
    formSignup.style.display = "block";
  });
})();
