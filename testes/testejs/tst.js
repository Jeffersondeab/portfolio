
const teste = document.querySelector('.front')
const back = document.querySelector('.back')

 

function carregar(){
  fetch('teste.json')
  .then(response => response.json())
  .then(data =>{


    
     
const container = document.querySelector('#frontBase')
const containers = document.querySelector('#backBase')


teste.addEventListener('click', () => {

      container.classList.toggle('actived');
       
  
  })

back.addEventListener('click', () => {

      containers.classList.toggle('actived');
        
  })


  const jogos = data.front;
  const jback = data.back;


  
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


    
    jback.map(ay => {

      const card = document.createElement("a")

      card.classList.add("card")

      const img = document.createElement("img")

      img.src = ay.imagem
      img.alt = ay.nome

      const titulo = document.createElement("span")
      titulo.textContent = ay.nome;
      
      card.appendChild(img)
      card.appendChild(titulo)

      card.href = "" + ay.url

      containers.appendChild(card)
    })
  })
}

carregar()
 

  
  function init (){
    teste
    back
  }
  
  init()
  
   export default{
      init
   }



