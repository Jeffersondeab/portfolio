

function carregar(){
    fetch('assets/JavaScript/get.json')
    .then(response => response.json())
    .then(jogos =>{
       
      const container = document.querySelector('#my-project')
  
      jogos.map(jogo => {
        const card = document.createElement("a")
  
        card.classList.add("card")
  
        const img = document.createElement("img")
  
        img.src = jogo.imagem
        img.alt = jogo.nome

  
        const titulo = document.createElement("h3")
        titulo.textContent = jogo.nome;
        
        card.appendChild(img)
        card.appendChild(titulo)

        card.href = "" + jogo.url;
  
        container.appendChild(card)
      })
    })
  }
   
carregar()
  
  function init (){
      carregar
  }
  
  init()
  
  
   export default{
      init
   }