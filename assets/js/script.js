const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const formData = new FormData(form);

    const email = formData.get("email");
    const password = formData.get("password");

    console.log({email, password});
})