let navlink = document.querySelectorAll('.nav-link')


const sections = document.querySelectorAll('#sobremin, #skills, #projetos')


function scroll(sections){
    const bteste = document.getElementById(sections)
    if(bteste){
        bteste.scrollIntoView({ behavior: 'smooth'})
    }
}


    teste.forEach(listteste =>{
        listteste.addEventListener('click', () =>{
            document.querySelector('.active')?.classList.remove('active')
            listteste.classList.add('active')

            const sections = listteste.getAttribute('data-teste')
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


