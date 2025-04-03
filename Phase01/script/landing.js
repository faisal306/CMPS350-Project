

const slides = document.querySelectorAll('.slides img');
let slideIndex = 0;
let intervalID = null;



document.addEventListener("DOMContentLoaded", initializeSlider);

function initializeSlider() {

    
    if (slides.length > 0) {

        slides[slideIndex].classList.add("displaySlide");

        // Because setInterval will return an interval ID
        intervalID = setInterval(nextSlide, 5000);
        console.log(intervalID);

    }    

}

function showSlide(index) {

    if (index >= slides.length) {
        slideIndex = 0;
    }

    // meaning if you click on the left arrow it will take you to the end of the array
    else if (index < 0) {
        slideIndex = slides.length - 1;
    }

    slides.forEach(slide => {
        slide.classList.remove('displaySlide')
    });

    slides[slideIndex].classList.add("displaySlide");

}

function prevSlide() {

    slideIndex--;
    showSlide(slideIndex);

}

function nextSlide() {

    slideIndex++;
    showSlide(slideIndex);

}