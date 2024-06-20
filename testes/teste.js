var teste = document.querySelectorAll('.teste')

const sections = document.querySelectorAll('#teste01, #teste02, #teste03')


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



