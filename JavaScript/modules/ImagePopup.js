const experienceImages = document.querySelectorAll('.experienceImg')
const popupWrapper = document.querySelector('.popup-wrapper')



experienceImages.forEach((experienceImg) => {
    experienceImg.addEventListener('click', () => {
        popupWrapper.style.display = 'block'
        experienceImg.style.transform = 'scale(2.5, 2.5)'
        experienceImg.style.marginRight = '65%'
        experienceImg.scrollIntoView()
        experienceImg.style.marginTop = '5%'

        if(window.innerWidth <= 500){
            experienceImg.style.margin = 'auto'
            experienceImg.style.display = 'flex'
        }
    })
}) 




popupWrapper.addEventListener('click', () =>{
    popupWrapper.style.display = 'none'
 
    experienceImages.forEach((experienceImg) =>{
        experienceImg.style.transform = ''
        experienceImg.style.marginTop = '0%'
        experienceImg.style.margin = '0%'
        experienceImg.style.display = 'inline'
    })
})


function init(){
    popupWrapper
    experienceImages
}

init()

export default{
    init
}