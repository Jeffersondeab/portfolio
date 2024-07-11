
const teste = document.querySelector('.jsontest');

fetch("teste.json")
  .then((response) => response.json())
  .then((dados) => {
    dados.usuarios.map((usuario) => {
      // Crie elementos HTML dinâmicos ou realize cálculos aqui
      const nome = usuario.nome;
      const paragrafo = document.createElement('p');
      paragrafo.textContent = `Nome: ${nome}`;
      teste.appendChild(paragrafo);
    });
  });









/* 
const teste = document.querySelector('.jsontest')

fetch("teste.json").then((Response) => {
    Response.json().then((dados) => {
        dados.usuarios.map((usuario)=>{
             
             teste.innerHTML += `<p>${comando.comando}</p>`

            console.log(usuario);
        })
    })
})


 */

function init (){
    teste
}

init()

 export default{
    init
 }