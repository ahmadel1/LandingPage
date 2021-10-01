//global variables
const navigation = document.getElementById ('navbar__list');
const sections = document.querySelectorAll('section');
const frag = document.createDocumentFragment();


//Active section function 
const sectionsActivity = () =>{
    sections.forEach(section=>{
        // to return the potition of active section  we add const position 
        const position = (section) => {return section.getBoundingClientRect()};
        if(position(section).top >= 0 && position(section).bottom <= window.innerHeight*1.7) {
            section.classList.add('your-active-class');
        }//to remove activation of section when we move down 
        else{section.classList.remove('your-active-class')}
 })
}; 
window.addEventListener('scroll', sectionsActivity);






//scroll into section when click on its anchor link function
sections.forEach((section =>{
    const sectionNum = section.getAttribute("data-nav");
    const li = document.createElement("li");
    const a = document.createElement("a");

    a.className = "menu__link";
    a.textContent = sectionNum;
//make scrolling behavior smooth 
    a.addEventListener("click", (e) =>{
        e.preventDefault();
        section.scrollIntoView({
            behavior: "smooth"
        });
    });
    
    li.appendChild(a);
    frag.appendChild(li);
})
);
navigation.appendChild(frag)