 
fetch("teste.json")

 .then(function(response){
    return response.json();

 })





.then(function(products){
    let placeholder = document.querySelector(".testejson")

    let out = ""

    for(let product of products){  
        out += `
            <p>${product.comando}</p>
        `
    }
})






function init (){
    
}

init()

 export default{
    init
 }