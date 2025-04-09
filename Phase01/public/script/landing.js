

const slides = document.querySelectorAll('.slides img');
const dashboard = document.querySelector("#dashboard");
let slideIndex = 0;
let intervalID = null;

const currentuser = document.getElementById("student-email");

document.addEventListener("DOMContentLoaded", initializeSlider);

async function initializeSlider() {
    if (slides.length > 0) {

        slides[slideIndex].classList.add("displaySlide");

        // Because setInterval will return an interval ID
        intervalID = setInterval(nextSlide, 5000);
        console.log(intervalID);

    }    

    if(localStorage.uid){
        const response = await fetch('api/users');
        const users = await response.json();
        const user = users.find(u => u.id == localStorage.uid);
        currentuser.innerHTML = 
        `
            ${user.email} 
        `

        const style = document.createElement("style");
        style.innerHTML = `
          .user-info:hover .logout-btn {
            display: block;
          }
          .user-info {
            display: inline-flex;
          }
        `;
        document.head.appendChild(style);

    }

    let dashboardLoc = "";
    switch(localStorage.userRole){
        case "admin":
            dashboardLoc = "admin.html";
            break;
        case "instructor":
            dashboardLoc = "university.html";
            break;
        case "student":
            dashboardLoc = "dashboard.html";
            break;
    }
    dashboard.href = dashboardLoc;
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

function logOut(){
    localStorage.clear();
    location.reload();
}