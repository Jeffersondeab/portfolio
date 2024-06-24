var navlink = document.querySelectorAll('.nav-btn')

const sections = document.querySelectorAll('#sobremin, #skills, #projetos, #contato')


function scroll(sections){
    const bteste = document.getElementById(sections)
    if(bteste){
        bteste.scrollIntoView({ behavior: 'smooth'})
    }
}


    navlink.forEach(listteste =>{
        listteste.addEventListener('click', () =>{
            document.querySelector('.active')?.classList.remove('active')
            listteste.classList.add('active')

            const sections = listteste.getAttribute('data-center')
            scroll(sections)
        })
    })



    function init(){
        navlink
        sections
    }

    init()

    export default{
        init
    }


 