 
const links = document.querySelectorAll('.link');

links.forEach(link =>{
    link.addEventListener('click', () =>{
        links.forEach(ele.classList.remove('active'));
        link.classList.add('active')
    })
})




const projectContainer = document.querySelector('.project-container')

projects.forEach(project =>{
    projectContainer.innerHTML += `
        <div class="project-card" data-tags="#all, ${project.tags}">
            <img src="projects/disney+1.png/${project.image}" alt="">
            <div class="content">
                <h2 class="project-name">${project.name}</h2>
                <span class="tags">${project.tags}</span>
            </div>
        </div>
    `;
})





function init(){
    links
    projectContainer
}

init()

export default{
    init
}
 