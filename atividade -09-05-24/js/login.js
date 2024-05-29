document.addEventListener("DOMContentLoaded", function () {
    const body = document.querySelector("body");
    const signUpButton = document.querySelector("#singUp");
    const signInButton = document.querySelector("#singIn");
    const accessButton = document.getElementById("access");

    body.onload = function () {
        body.className = "on-load";
    }

    signUpButton.addEventListener("click", function () {
        changeBodyClass("sing-up");
        createSwords();
    });

    signInButton.addEventListener("click", function () {
        changeBodyClass("sing-in");
    });

    accessButton.addEventListener("click", function (event) {
        event.preventDefault();

        const email = document.getElementById("login-email").value;
        const password = document.getElementById("login-password").value;

        const data = {
            email: email,
            password: password
        };

        axios.post("https://api-umfg-programacao-iv-2024-291d5e9a4ec4.herokuapp.com/v1/signin", data, {
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(response => {
                alert("Login realizado com sucesso!");
                window.location.href = "welcome.html";
                if (response.data.success) {
                    alert("Login realizado com sucesso!");
                    window.location.href = "welcome.html";
                } else {

                }
            })
            .catch(error => {
                if (error.response) {
                    console.error("Erro na resposta da API:", error.response.data);
                    alert("Erro ao realizar o login: " + error.response.data);
                } else {
                    console.error("Erro:", error.message);
                    alert("Erro ao realizar o login: " + error.message);
                }
            });
    });
});

function changeBodyClass(className) {
    const body = document.querySelector("body");
    body.className = className;
}


