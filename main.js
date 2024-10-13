
// sidebar for mobile phone

function showsidebar(){
    const sidebar = document.querySelector('nav')
    sidebar.style.display = 'flex'
}

function hidesidebar(){
    const sidebar = document.querySelector('nav')
    sidebar.style.display = 'none'
}

// JavaScript for active nav link on scroll
document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-items li a");

    // Function to update the active class based on scroll position
    function updateActiveLink() {
        let scrollPosition = window.scrollY || document.documentElement.scrollTop;

        sections.forEach(section => {
            let sectionTop = section.offsetTop - 100;  // Adjust if necessary
            let sectionHeight = section.offsetHeight;

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                const currentId = section.getAttribute("id");

                navLinks.forEach(link => {
                    link.classList.remove("active");
                    if (link.getAttribute("href").includes(currentId)) {
                        link.classList.add("active");
                    }
                });
            }

            // Check if we are at the top of the page for the home section
            if (scrollPosition === 0) {
                navLinks.forEach(link => link.classList.remove("active"));
                document.querySelector(".nav-items li a[href='#home']").classList.add("active");
            }
        });
    }

    // Trigger the scroll event when the page loads to set the initial active link
    updateActiveLink();

    // Add scroll event listener
    window.addEventListener("scroll", updateActiveLink);
});






// js for skill section progress bar 

// html progressbar

let num = document.getElementById("num");
let counter = 0;
setInterval(() => {
    if (counter == 75) {
        clearInterval();
    }
    else {
        counter += 1;
        num.innerHTML = counter + "%";
    }

}, 25);


// css progressbar

let num2 = document.getElementById("num2");
let counter2 = 0;
setInterval(() => {
    if (counter2 == 65) {
        clearInterval();
    }
    else {
        counter2 += 1;
        num2.innerHTML = counter2 + "%";
    }

}, 30);

// javascript progressbar

let num3 = document.getElementById("num3");
let counter3 = 0;
setInterval(() => {
    if (counter3 == 40) {
        clearInterval();
    }
    else {
        counter3 += 1;
        num3.innerHTML = counter3 + "%";
    }

}, 45);


// js for education section

const radios = document.querySelectorAll('input[name="accordion"]');
let lastChecked = null;

radios.forEach(radio => {
    radio.addEventListener('click', function () {
        if (lastChecked === this) {
            this.checked = false;
            lastChecked = null;
        } else {
            lastChecked = this;
        }
    });
});

// js for experience section

// Function to check if an element is in the viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Function to add the "in-view" class to timeline items
function animateTimeline() {
    const items = document.querySelectorAll('.timeline-item');
    items.forEach(item => {
        if (isInViewport(item)) {
            item.classList.add('in-view');
        }
    });
}

// Trigger animation on scroll and on page load
window.addEventListener('scroll', animateTimeline);
window.addEventListener('load', animateTimeline);

// JS COMLETED