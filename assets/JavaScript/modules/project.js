
const frontEnd = document.querySelector('#frontend')
const backEnd = document.querySelector('#backEnd')



function carregar(){
    fetch('assets/JavaScript/get.json')
    .then(response => response.json())
    .then(data =>{
       

      const frontProject = document.querySelector('#my-front__projects')
      const backProject = document.querySelector('#my-back__projects')

      frontEnd.addEventListener('click', () =>{
          frontProject.classList.toggle('actives')
      })

      backEnd.addEventListener('click', () =>{
          backProject.classList.toggle('actives')
      })

       
      const fronts = data.front
      const backs = data.back


      fronts.map(dataFront => {
        const card = document.createElement("a")
  
        card.classList.add("card")
  
        const img = document.createElement("img")
  
        img.src = dataFront.imagem
        img.alt = dataFront.nome

  
        const titulo = document.createElement("h3")
        titulo.textContent = dataFront.nome;
        
        card.appendChild(img)
        card.appendChild(titulo)

        card.href = "" + dataFront.url;
  
        frontProject.appendChild(card)
      })


      backs.map(dataBack => {
        const card = document.createElement("a")
  
        card.classList.add("card")
  
        const img = document.createElement("img")
  
        img.src = dataBack.imagem
        img.alt = dataBack.nome

  
        const titulo = document.createElement("h3")
        titulo.textContent = dataBack.nome;
        
        card.appendChild(img)
        card.appendChild(titulo)

        card.href = "" + dataBack.url;
  
        backProject.appendChild(card)
      })
    })
  }
   


carregar()
  
  function init (){
    frontEnd
    backEnd
  }
  
  init()
  
  
   export default{
      init
   }