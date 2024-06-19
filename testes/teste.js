var teste = document.querySelectorAll('.teste')

const sections = document.querySelectorAll('#teste01, #teste02, #teste03')


function scroll(sec){
    const bteste = document.getElementById(sec)
    if(bteste){
        bteste.scrollIntoView({ behavior: 'smooth'})
    }
}


    teste.forEach(listteste =>{
        listteste.addEventListener('click', () =>{
            document.querySelector('.active')?.classList.remove('active')
            listteste.classList.add('active')

            const sec = listteste.getAttribute('data-teste')
            scroll(sec)
        })
    })



