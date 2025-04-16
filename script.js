/*-------------Show Menu------------ */
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')


/*----- Menu Show---------*/
/*--------Validate if constant exist--------- */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}


/*----- Menu Hide---------*/
/*--------Validate if constant exist--------- */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*-----------------SHADOW HEADER----------------------- */
const shadowHeader = () =>{
    const header = document.getElementById('header')
    //when the scroll is greater than 50 viewport, add the shadow-header class to the header tag
    this.scrollY >= 50 ? header.classList.add('shadow-header')
                       : header.classList.remove('shadow-header')
}
window.addEventListener('scroll', shadowHeader)


/*-------------------------Email JS------------------------ */
const contactForm = document.getElementById('contact-form'),
      contactMessage = document.getElementById('contact-message')

const sendEmail = (e) =>{
    e.preventDefault()

    // serviceID - templateID - #form - publickey
    emailjs.sendForm('service_x243kas','template_y6cg7s3','#contact-form','wC_g0NA0NMtDpU-vH')
    .then(() =>{
        //show sent message
        contactMessage.textContent = 'Message sent successfully✅'

        //remove message after five seconds
        setTimeout(() =>{
            contactMessage.textContent = ''
        }, 5000)

        //clear input fields
        contactForm.reset()

    }, () =>{
        //Show error message
        contactMessage.textContent = 'Message not sent (Service error)'
    })
}

contactForm.addEventListener('submit', sendEmail)

/*------------- Show Scroll up-------- */

const scrollUp = () =>{
    const scrollUp = document.getElementById('scroll-up')
    //When the scroll is higher than 350 viewport height, add the
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                        : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============scroll section active link=========*/

const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
    const scrollDown = window.scrollY

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id'),
              sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

            if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
                sectionsClass.classList.add('active-link')
            }else{
                sectionsClass.classList.remove('active-link')
            }
    })
}
window.addEventListener('scroll', scrollActive)

/*==========Dark Theme================ */
const themeButton = document.getElementById('theme-button');
const darkTheme = 'dark-theme';
const iconMoon = 'fa-moon';
const iconSun = 'fa-sun';

// Load from localStorage
const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? 'dark' : 'light';
const getCurrentIcon = () =>
  themeButton.classList.contains(iconSun) ? iconSun : iconMoon;

// Apply previously selected theme and icon
if (selectedTheme) {
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
  
  themeButton.classList.remove(iconMoon, iconSun);
  themeButton.classList.add(selectedIcon);
}

// Theme toggle handler
themeButton.addEventListener('click', () => {
  // Toggle theme
  document.body.classList.toggle(darkTheme);

  // Toggle icon
  if (themeButton.classList.contains(iconMoon)) {
    themeButton.classList.replace(iconMoon, iconSun);
  } else {
    themeButton.classList.replace(iconSun, iconMoon);
  }

  // Save selection
  localStorage.setItem('selected-theme', getCurrentTheme());
  localStorage.setItem('selected-icon', getCurrentIcon());
});
