const navlinks = document.querySelectorAll('.nav-link')
const sections = document.querySelectorAll('.section')

let activeLink = 0;

links.forEach(link, i => {
    link.addEventListener('click',()=>{
        if(activeLink != i){
            links[activeLink].classList.remove('active');
            link.classList.add('active')
            sections[activeLink].classList.remove(active);


            setTimeout(()=> {
                activeLink = i;
                sections[i].classList.add('active');
            }, 1000);
        }
    })        
});




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


