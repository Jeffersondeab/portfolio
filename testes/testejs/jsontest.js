
const teste = document.querySelector('.jsontest')

fetch("teste.json").then((Response) => {
    Response.json().then((dados) => {
        dados.usuarios.map((usuario)=>{
             
            /* teste.innerHTML += `<p>${comando.comando}</p>`*/

            console.log(usuario);
        })
    })
})




function init (){
    teste
}

init()

 export default{
    init
 }