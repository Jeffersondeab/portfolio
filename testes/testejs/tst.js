


const frontButton = document.querySelector('front')
const backButton = document.querySelector('back')






frontButton.addEventListener('click', () => {

  
    

function carregar(){
  fetch('teste.json')
  .then(response => response.json())
  .then(jogos =>{
     
    const container = document.querySelector('#frontBase')

    jogos.map(jogo => {
      const card = document.createElement("a")

      card.classList.add("card")

      const img = document.createElement("img")

      img.src = jogo.imagem
      img.alt = jogo.nome

      const titulo = document.createElement("span")
      titulo.textContent = jogo.nome;
      
      card.appendChild(img)
      card.appendChild(titulo)

      card.href = "" + jogo.url

      container.appendChild(card)
    })
  })
}


  
  if(.style.display === 'block'){
    
  }

})



 
carregar()

  
  function init (){

  }
  
  init()
  
   export default{
      init
   }



