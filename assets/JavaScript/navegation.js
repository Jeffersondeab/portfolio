let section = document.querySelectorAll('section')
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
}



/* let activeLink = 0;

navlinks.forEach(link, i => {
    link.addEventListener('click',()=>{
        if(activeLink != i){
            navlinks[activeLink].classList.remove('active');
            link.classList.add('active')
            sections[activeLink].classList.remove('active');


            setTimeout(()=> {
                activeLink = i;
                sections[i].classList.add('active');
            }, 1000);
        }
    })        
});



function init(){
    navlinks
    sections
    link
}

init()

export default{
    init
}

 */

/* 
var teste = document.querySelector('.nav-link')



teste.addEventListener('click', () =>{
    
    teste.forEach((teste) => {

    });
})

 
function init(){
    teste
}

init()

export default{
    init
} */


