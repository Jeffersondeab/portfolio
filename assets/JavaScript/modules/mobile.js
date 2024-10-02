const wrapper = document.querySelector('#wrapper')
const nave = document.querySelector('.nav-list')
const hamburgue = document.querySelector('#mobile-menu')


hamburgue.addEventListener('click', () =>{
    hamburgue.classList.toggle('active')
    nave.classList.toggle('active')
    wrapper.classList.toggle('active')
})

wrapper.addEventListener('click', () =>{
    wrapper.classList.toggle('active')
    hamburgue.classList.toggle('active')
    nave.classList.toggle('active')
})


export default{
    init
}

function init(){
    hamburgue
    wrapper
}



