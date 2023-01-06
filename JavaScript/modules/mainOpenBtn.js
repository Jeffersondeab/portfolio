const experience = document.querySelector('.experienceTitle')
const experienceList = document.querySelector('.experience-list')

experience.addEventListener('click', ()=>{
    if(experienceList.style.display === 'block'){
        experienceList.style.display = 'none'
    }else{
        experienceList.style.display = 'block'
    }
})
 

function init(){
    experience
    experienceList
}

init()

export default{
    init
}  