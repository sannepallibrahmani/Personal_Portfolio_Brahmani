/*===== MENU SHOW =====*/
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    // Check if both toggle and nav elements exist before adding event listener
    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            // Toggle the 'show' class on the navigation menu
            nav.classList.toggle('show')
        })
    }
}
// Call the showMenu function with the IDs for the toggle button and the navigation menu
showMenu('nav-toggle','nav-menu')

/*==================== REMOVE MENU MOBILE ====================*/
// Select all navigation links
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    // Get the navigation menu element
    const navMenu = document.getElementById('nav-menu')
    // When a navigation link is clicked, remove the 'show' class to hide the mobile menu
    navMenu.classList.remove('show')
}
// Add click event listener to each navigation link to call linkAction
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
// Select all sections that have an 'id' attribute
const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
    // Get the current scroll position of the window
    const scrollDown = window.scrollY

    // Iterate over each section
  sections.forEach(current =>{
        // Get the height of the current section
        const sectionHeight = current.offsetHeight,
              // Get the top offset of the current section, adjusted for header height
              sectionTop = current.offsetTop - 58,
              // Get the ID of the current section
              sectionId = current.getAttribute('id'),
              // Select the corresponding navigation link for the current section
              sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

        // Check if the current scroll position is within the bounds of the section
        if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
            // If within bounds, add the 'active-link' class to the navigation link
            if(sectionsClass) { // Ensure sectionsClass exists
                sectionsClass.classList.add('active-link')
            }
        }else{
            // Otherwise, remove the 'active-link' class
            if(sectionsClass) { // Ensure sectionsClass exists
                sectionsClass.classList.remove('active-link')
            }
        }
    })
}
// Add scroll event listener to the window to call scrollActive
window.addEventListener('scroll', scrollActive)

/*===== SCROLL REVEAL ANIMATION =====*/
// Initialize ScrollReveal with common options
const sr = ScrollReveal({
    origin: 'top', // Animation starts from the top
    distance: '60px', // Elements move 60px
    duration: 2000, // Animation duration of 2 seconds
    delay: 200, // Initial delay of 200 milliseconds
    // reset: true // Uncomment this line if you want animations to repeat on scroll up/down
});

// Reveal elements with specified animations
// Home data, about image, skills subtitle, and skills text reveal without extra delay
sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text',{});
// Home image, about subtitle, about text, and skills image reveal with a delay of 400ms
sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img',{delay: 400});
// Home social icons reveal with an interval of 200ms between each icon
sr.reveal('.home__social-icon',{ interval: 200});
// Skills data, work images (projects), and contact inputs reveal with an interval of 200ms
sr.reveal('.skills__data, .work__item, .contact__input',{interval: 200}); // Updated to .work__item for project items
