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

// Scroll listener ====================

// const scrollPoints = document.querySelectorAll ('section');


// scrollPoints.forEach(e => {
//     console.log(e.getBoundingClientRect().y)
// })


// window.addEventListener('scroll', function() {
//     console.log('scroll')
// })
const scrollPoints = document.querySelectorAll('section');
// const pointsPosition = scrollPoints.getBoundingClientRect().top;
// document.addEventListener('scroll', function() {
//     // const pointsPosition = scrollPoints.getBoundingClientRect();
//     console.log(scrollPoints)
// })
// console.log(pointsPosition);

let height = [];
height = scrollPoints.forEach.getBoundingClientRect().top;
console.log(height)