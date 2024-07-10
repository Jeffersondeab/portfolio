
const teste = document.querySelector('.jsontest')

fetch('teste.json').then((Response) => {
    Response.json().then((dados) => {
        dados.coman.map((comando) =>{ 
             
            teste.innerHTML += `<p>${comando.comando}</p>`


            console.log(comando)
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