document.getElementById("register").addEventListener("click", function(event) {
    event.preventDefault(); 

    const email = document.getElementById("register-email").value;
    const password = document.getElementById("register-password").value;
    const confirmedPassword = password; 

    const data = {
        email: email,
        password: password,
        confirmedPassword: confirmedPassword 
    };
    console.log(data)
    axios.post("https://api-umfg-programacao-iv-2024-291d5e9a4ec4.herokuapp.com/v1/signup", data, {
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(response => {
        console.log("Dados da API:", data);
        alert("Cadastro realizado com sucesso!");
        if (response.data.success) {     
            alert("Cadastro realizado com sucesso!");
        } else {
        }
    })
    .catch(error => {
        if (error.response) {
            console.error("Erro na resposta da API:", error.response.data);
            alert("Erro ao realizar o cadastro: " + error.response.data);
        } else {
            console.error("Erro:", error.message);
            alert("Erro ao realizar o cadastro: " + error.message);
        }
    });
});