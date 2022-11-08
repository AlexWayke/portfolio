"use strict"

// Scroll =============================
document.querySelectorAll("a[href^='#']").forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();
        let href = this.getAttribute("href").substring(1);
        // getElementByClassName возвращает коллекцию, поэтому querySelector
        const scrollTarget = document.querySelector(`.${href}`);
        const elementPosition = scrollTarget.getBoundingClientRect().top;
        console.log(scrollTarget)

        window.scrollBy({
            top: elementPosition,
            behavior: "smooth",
        });
    });
});

// Burger =============================
document.querySelector('.burger').addEventListener("click", function() {
    const burgerBody = document.querySelector('.header');
    const burgerButton = document.querySelector('.burger-wrapper');
    burgerButton.classList.toggle("active");
    burgerBody.classList.toggle("header-hide");
});

// Navigation observer ================
const changeNav = (entries, observer) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting && entry.intersectionRatio >= 0.55) {
            document.querySelector('.active').classList.remove('active');

            let id = entry.target.getAttribute('id');

            document.querySelector(`[href="#${id}"]`).parentElement.classList.add('active');
        }
    });
}

const options = {
    threshold: 0.55
}

const observer = new IntersectionObserver(changeNav, options);

const sections = document.querySelectorAll('.section');
sections.forEach((section) => {
  observer.observe(section);
});



// Popup ==============================
const popup = document.querySelector('.popup');
document.querySelector('.footer-btn').addEventListener("click", function() {
    popup.classList.add('active');
});
document.querySelectorAll('.close-field').forEach(e => {
    e.addEventListener("click", function() {
        popup.classList.remove('active');
    });
});