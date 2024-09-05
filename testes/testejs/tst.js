
const teste = document.querySelector('.front')

const txt = document.querySelector('.txt')

teste.addEventListener('click', () => {


  document.querySelector('.active')?.classList.remove('active');
  txt.classList.add('active')

  

})


  
  function init (){
    teste
  }
  
  init()
  
   export default{
      init
   }



