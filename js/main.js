//Animations
const about = document.querySelector(".about");
const aboutOffsetTop = document.querySelector(".section-about").offsetTop;
const aboutImg = document.querySelector(".img-about__photo");
const pricesOffsetTop = document.querySelector(".section-prices").offsetTop;
const offers = document.querySelectorAll(".offer-flex > .offer");
const galleryOffsetTop = document.querySelector(".section-gallery").offsetTop;
const users = document.querySelectorAll(".review");
const contactOffsetTop = document.querySelector(".section-contact").offsetTop;
const contact = document.querySelector(".contact");

//Navigation
const arrowTop = document.querySelector(".arrow-top-box");
const burger = document.querySelector(".nav__burger");
const nav = document.querySelector(".nav__list");
const navItems = document.querySelectorAll(".nav__link");
const body = document.body;
const documentEl = document.documentElement;

//Gallery
const current = document.querySelector("#current");
const imgs = document.querySelectorAll(".gallery__images img");
const opacity = .5;

// Show arrow
function showGoToTop() {
    if(body.scrollTop > 120 || documentEl.scrollTop > 120) {
        arrowTop.style.display = "block";
    } else {
        arrowTop.style.display = "none";
    }
};

// Animation elements
function showAnimationsAbout() {
    if(body.scrollTop > aboutOffsetTop/5 || documentEl.scrollTop > aboutOffsetTop/5) {
        about.classList.add('animationFromRight')
        aboutImg.classList.add('animationFromLeft')
    } else {
        about.classList.remove('animationFromRight')
        aboutImg.classList.remove('animationFromLeft')
    }  
};

function showAnimationsPrices() {
    if(body.scrollTop > pricesOffsetTop/1.7 || documentEl.scrollTop > pricesOffsetTop/1.7) {
        
        offers.forEach(function (offer) {
            offer.classList.add('animationSlideInUp');
        })
    } else {
        offers.forEach(function (offer) {
            offer.classList.remove('animationSlideInUp');
        })
    }  
};

function showAnimationsUsers() {
    if (body.scrollTop > galleryOffsetTop/1.2 || documentEl.scrollTop > galleryOffsetTop/1.2) {
        users.forEach(function (user) {
            user.classList.add('animationgoBounce');
        });
    } else {
        users.forEach(function (user) {
            user.classList.remove('animationgoBounce');
        })
    }
};

function showAnimationsContact() {
    if(body.scrollTop > contactOffsetTop / 1.2 || documentEl.scrollTop > contactOffsetTop / 1.2) {
        contact.classList.add('animationFadeOutBottom')
    } else {
        contact.classList.remove('animationFadeOutBottom')
    }
};

// Go bact to the top function
function backToTop() {
    body.scrollTop = 0;
    documentEl.scrollTop = 0;
};

// RWD navigation
burger.addEventListener('click', function() {
    nav.classList.toggle('open');
});

// Close burger after click the item

navItems.forEach((item => {
    item.addEventListener('click', closeBurger);
}))

function closeBurger() {
    nav.classList.remove('open');
};

////////////////////////////////////////////////

window.onload = () => {imgs[0].style.opacity = opacity}

window.addEventListener("scroll", function() {
    showGoToTop();
    showAnimationsAbout();
    showAnimationsPrices();
    showAnimationsUsers();
    showAnimationsContact();
});

arrowTop.addEventListener("click", function() {backToTop()});

////////////////////////////////////////////////////////////////

// Gallery functionality

imgs.forEach(img =>
    img.addEventListener('click', imgClick)
);

function imgClick(e) {

    // Reset opacity
    imgs.forEach(img => img.style.opacity = 1);

    // Change src
    current.src = e.target.src;

    // Add class
    current.classList.add('animationFadeIn');

    // Remove class
    setTimeout(() => current.classList.remove('animationFadeIn'), 500);

    // Change opacity
    e.target.style.opacity = opacity;

};

window.onscroll = () => {
    imgs.forEach(img => img.style.opacity = 1);
    imgs[0].style.opacity = opacity;
    current.src = imgs[0].src;
};
