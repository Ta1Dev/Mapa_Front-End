document.addEventListener("DOMContentLoaded", function(){        //essa função faz o script rodar so depois que todo o html e carregado
    
     //Função que muda cor, cor de fundo, escala e suaviza animação
    function aplicarHover(element, corTexto, corFundo) {
        element.addEventListener("mouseover", () => {
        element.style.color = corTexto;
        element.style.backgroundColor = corFundo;
        element.style.transform = "scale(1.1)";
        element.style.transition = "0.5s";
        });
        element.addEventListener("mouseout", () => {
        element.style.color = "";
        element.style.backgroundColor = "";
        element.style.transform = "scale(1)";
        });
    }

    if( window.innerWidth >= 768 ){               //garante q dispositivos moveis não tenha tantos efeitos
        //parte rerferente ao menu de interação das paginas
        const itensMenu = document.querySelectorAll("header nav ul li a");      //pega todos os elementos <a> dentro do <header>
        itensMenu.forEach(menu => {
            aplicarHover( menu, "#FFf", "#A83254" );
        });

        //parte referente a interatividade dos cards
        const cards = document.querySelectorAll(".card")        //variavel que pega todos os elementos da classe card
        cards.forEach(card =>{
            aplicarHover( card, "#f9f9f9", "#A83254" ) ;                            //como cards se trata de varios cards o for each aplica a todos eles
        });

        const botoes = document.querySelectorAll(".card button");           //variavel que pega os botões da classe card
        botoes.forEach(botao =>{ 
            aplicarHover( botao, "#DC143C",  "#ddd" );                                           //torna botao uma forma de percorrer por todos os itens
        })
    }
})