function test() {
    fetch('teste.json')
        .then(response => response.json())
        .then(jogos => {
            const container = document.querySelector('#backBase');
            const frontBtn = document.querySelector('.front');
            const backBtn = document.querySelector('.back');

            // Função para criar os cards
            function createCards(data) {
                container.innerHTML = ''; // Limpa o container antes de adicionar novos elementos
                data.forEach(jogo => {
                    // ... (resto do seu código para criar o card)
                    const card = document.createElement("a")

                    card.classList.add("card")
              
                    const img = document.createElement("img")
              
                    img.src = jogo.backImg
                    img.alt = jogo.backtxt
              
                    const titulo = document.createElement("span")
                    titulo.textContent = jogo.backtxt;
                    
                    card.appendChild(img)
                    card.appendChild(titulo)
              
                    card.href = "" + jogo.url
              
                    container.appendChild(card)    

                });
            }

            // Eventos para os botões
            frontBtn.addEventListener('click', () => {
                createCards(jogos.front);
            });
            backBtn.addEventListener('click', () => {
                createCards(jogos.back);
            });

            // Exibir os dados de "front" por padrão (ajuste conforme necessário)
            createCards(jogos.front);
        });
}

// ... (resto do seu código)






/* test()


function init (){
    test
}

export default{
    init
 } */