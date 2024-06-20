let navlink = document.querySelectorAll('.nav-link')


const section = document.querySelectorAll('#sobremin, #skills, #projetos, #contrato')

function scroll(section){ 
    const teste = document.getElementById(section)
    if(teste){
        teste.scrollIntoView({ behavior: 'smooth'})                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            smooth'})
    }
}

navlink.forEach(navlinks => {
    navlinks.addEventListener('click', () =>{
        document.querySelector('.active')?.classList.remove('active')
        navlinks.classList.add('active')

        const section = navlinks.getAttribute('data-center')
        scroll(section)
    })
})

function init(){
    navlink
    section
}

init()

export default{
    init
}





/* let section = document.querySelectorAll('section')
let navlink = document.querySelectorAll('header nav a')

window.onscroll = () =>{

        section.forEach(sec =>{
            let top = window.scrollY;
            let offset = sec.offsetTop - 150;
            let height = sec.offsetHeight; 
            let id = sec.getAttribute('id')

            if(top >= offset && top < offset + height){
                navlink.forEach(links => {
                    links.classList.remove('active')
                    document.querySelector('header nav a [hef*=' + id 
                    + ']').classList.add
                    ('active'); 
                });
            }
        })
    }


function init(){
    navlink
    section
}

init()

export default{
    init
} */


