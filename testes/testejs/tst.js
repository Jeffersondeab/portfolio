fetch('seu_arquivo.json')
  .then(response => response.json())
  .then(data => {
    const frontContainer = document.getElementById('frontContainer');
    const backContainer = document.getElementById('backContainer');

    data.front.forEach(item => {
      const card = document.createElement('div');
      card.classList.add('card'); // Adicione uma classe para estilizar
      card.innerHTML = `
        <img src="${item.imagem}" alt="${item.nome}">
        <h3>${item.nome}</h3>
        <a href="${item.url}">Saiba mais</a>
      `;
      frontContainer.appendChild(card);
    });

    // Faça algo similar para os dados do "back"
  })
  .catch(error => {
    console.error('Erro ao buscar dados:', error);
  });
 
carregar()

  
  function init (){

  }
  
  init()
  
   export default{
      init
   }



