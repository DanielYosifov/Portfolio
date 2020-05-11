const menuBtn = document.querySelector('.menu-btn');
const hamburger = document.querySelector('.menu-btn-burger');
const sitebar = document.querySelector('.site-sidebar');
const nav = document.querySelector('.site-nav');
const menuNav = document.querySelector('.menu-nav');
const menuHome = document.querySelector('.home');
const menuAbout = document.querySelector('.about');
// const menuResume = document.querySelector('.resume');
const menuPortfolio = document.querySelector('.portfolio');
const menuContact = document.querySelector('.contact');
const navItems = document.querySelectorAll('.menu-nav-item');

let showMenu = true;

menuBtn.addEventListener('click', toggleMenu);
menuHome.addEventListener('click', toggleMenu);
menuAbout.addEventListener('click', toggleMenu);
// menuResume.addEventListener('click', toggleMenu);
menuPortfolio.addEventListener('click', toggleMenu);
menuContact.addEventListener('click', toggleMenu);


function toggleMenu() {
    if (!showMenu) {
        hamburger.classList.add('open');
        sitebar.classList.add('open');
        // nav.classList.add('open');
        // menuNav.classList.add('open');
        // navItems.forEach(item => item.classList.add('open'));

        showMenu = true;
    } else {
        hamburger.classList.remove('open');
        sitebar.classList.remove('open');
        // nav.classList.remove('open');
        // menuNav.classList.remove('open');
        // navItems.forEach(item => item.classList.remove('open'));

        showMenu = false;
    }
}



function openPage(evt, pageName) {
    // Declare all variables
    var i, content, links;

    // Get all elements with class="content" and hide them
    content = document.getElementsByClassName("content");
    for (i = 0; i < content.length; i++) {
        content[i].style.display = "none";
    }

    // Get all elements with class="links" and remove the class "active"
    links = document.getElementsByClassName("links");
    for (i = 0; i < links.length; i++) {
        links[i].className = links[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the link that opened the tab
    document.getElementById(pageName).style.display = "block";
    evt.currentTarget.className += " active";
}
document.getElementById("defaultOpen").click();