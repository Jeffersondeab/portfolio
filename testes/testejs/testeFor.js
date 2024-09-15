


const novo = document.querySelector('.testfor')


novo.addEventListener('click', () =>{
    
})


/* for (let i = 0; i < 10; i++) {
    const option = document.createElement('option');
    option.textContent = `Opção ${i+1}`;
    novo.appendChild(option);
}

 */


for(let i=0; i < 10; i++){

    const novo = document.querySelector('.testfor') 
    novo.textContent = `${i}`

    
}




function init(){

}

export default{
    init
}