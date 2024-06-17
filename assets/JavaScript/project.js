 
const links = document.querySelectorAll('.link');

links.forEach(link =>{
    link.addEventListener('click', () =>{
        links.forEach(ele => ele.classList.remove('active'));
        link.classList.add('active')
    })
})




const filters = document.querySelectorAll('.filter-btn');

filters.forEach(filterBtn => {
    filterBtn.addEventListener('click', () =>{
        let id = filterBtn.getAttribute('id')
        let projectCards = document.querySelectorAll('.project-card');
        projectCards.forEach(card => {
            if(card.getAttribute('data-tags').includes(id)){
                card.classList.remove('hide')
            }else{
                card.classList.add('hide');
            }
        })
        
        filters.forEach(btn => btn.classList.remove('active'));
        filterBtn.classList.add('active');
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
    filters
}

init()

export default{
    init
}
 