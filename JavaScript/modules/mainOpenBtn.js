/* EXPERIENCIA */

const experience = document.querySelector('.experience-btn')
const experienceList = document.querySelector('.experience-list')

experience.addEventListener('click', ()=>{
    if(experienceList.style.display === 'block'){
        experienceList.style.display = 'none'
    }else{
        experienceList.style.display = 'block'
    }
})
 

 

/* SOBRE MIM */

const aboutMeBtn = document.querySelector('.aboutMe-btn')
const aboutMeContent = document.querySelector('.aboutMe-content')

aboutMeBtn.addEventListener('click', ()=>{
    if(aboutMeContent.style.display === 'block'){
        aboutMeContent.style.display = 'none'
    }else{
        aboutMeContent.style.display = 'block'
    }
})


/* LANGUAGENS QUE UTILIZO */


const mytoolsBtn = document.querySelector('.mytools-btn')
const mytoolsList = document.querySelector('.mytools-list')

mytoolsBtn.addEventListener('click', ()=>{
    if(mytoolsList.style.display === 'block'){
        mytoolsList.style.display = 'none'
    }else{
        mytoolsList.style.display = 'block'
    }
})







/* PDF */

const mycurriculumBtn = document.querySelector('.MyCurriculum-btn')
const mycurriculumContent = document.querySelector('.MyCurriculum-content')

mycurriculumBtn.addEventListener('click', ()=>{
    if(mycurriculumContent.style.display === 'block'){
        mycurriculumContent.style.display = 'none'
    }else{
        mycurriculumContent.style.display = 'block'
    }
})





function init(){
    experience
    experienceList

    aboutMeBtn
    aboutMeContent

    mytoolsBtn
    mytoolsList

    mycurriculumBtn
    mycurriculumContent
    
}



init()

export default{
    init
}  