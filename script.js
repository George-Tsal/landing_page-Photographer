//loading spinner

const loadingContainer = document.querySelector(".loading-container");
const fullPageContent = document.querySelector("#fullContent");

 window.addEventListener('load', () => {
    loadingContainer.classList.add('hidden');
    fullPageContent.classList.add('visible');
}) 

const currentYear = document.querySelector("#currentYear");

let date = new Date();
let year = date.getFullYear();
currentYear.textContent = year;

// scroll to the top button

const toTheTopBtn = document.querySelector('.to-the-top');

window.addEventListener('scroll', () => {
    if(scrollY > window.innerHeight) {
        toTheTopBtn.classList.add('show-btn-top')
    } else {
        toTheTopBtn.classList.remove('show-btn-top')
    }
})

toTheTopBtn.addEventListener('click', () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
})


const upperBar = document.querySelector('.bar-upper');
const middleBar = document.querySelector('.bar-middle');
const bottomBar = document.querySelector('.bar-bottom');

const hamburgerBtn = document.querySelector(".toggleBtn");
const sidebar = document.querySelector("#sidebar");

const toggleSidebarMenu = () => {
    sidebar.classList.toggle('open');
    upperBar.classList.toggle('open-menu');
    middleBar.classList.toggle('open-menu');
    bottomBar.classList.toggle('open-menu');
}


hamburgerBtn.addEventListener('click', toggleSidebarMenu);


