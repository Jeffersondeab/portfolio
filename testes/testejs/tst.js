function test(){

            
    fetch('teste.json')
    .then(response => response.json())
    .then(jogos => {
    const container = document.querySelector('#backBase')
    const front = document.querySelector('.front')    
        
    jogos.map(jogo => {


/*         front.addEventListener('click', () =>{ */    
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
        })


    })

/*     }) */

}

test()


function init (){
    test
}

export default{
    init
 }