

function carregar(){
  fetch('teste.json')
  .then(response => response.json())
  .then(jogos =>{
     
    const container = document.querySelector('#com')

    jogos.map(jogo => {
      const card = document.createElement("div")

      card.classList.add("card")

      const img = document.createElement("img")

      img.src = jogo.imagem
      img.alt = jogo.nome

      const titulo = document.createElement("h3")
      titulo.textContent = jogo.nome;
      
      card.appendChild(img)
      card.appendChild(titulo)

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