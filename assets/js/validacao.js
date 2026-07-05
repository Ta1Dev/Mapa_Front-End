document.addEventListener("DOMContentLoaded", function(){     //essa função faz o script rodar so depois que todo o html e carregado
    
    const form = document.getElementById("formContato");        //atribui o id do form a variavel form

    form.addEventListener("submit", function(event){                        //função ativada quando botão for acionado
        event.preventDefault();                                             //impede que o navegador faça o envio padrão
        //captura os elmentos de span do form usando Id
        document.getElementById("erroNome").textContent = "";
        document.getElementById("erroEmail").textContent = "";
        document.getElementById("erroMensagem").textContent = "";
        document.getElementById("sucessoForm").textContent = "";

        //pega os elementos de dados do form usando Id
        const nome = document.getElementById("nome").value.trim();            //" value.trim() " evita espaços
        const email = document.getElementById("email").value.trim();
        const mensagem = document.getElementById("mensagem").value.trim();

        let valido = true;              //variavel de controle

        // Validação simples
        if (nome === "") {
            document.getElementById("erroNome").textContent = "Preencha o campo Nome";          //escreve no span
            valido = false      //falha o envio
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;                                  //garante que o valor seja um email valido
        if (email === "" || !emailRegex.test(email)) {
            document.getElementById("erroEmail").textContent = "Digite um e-mail válido.";
            valido = false;
        }

        if (mensagem === "") {
            document.getElementById("erroMensagem").textContent = "Escreva sua mensagem.";
            valido = false;
        }

        if( valido ){
            document.getElementById("sucessoForm").textContent = "Formulário enviado com sucesso!";
            form.reset();           //reseta o formulario
        }
    })
})