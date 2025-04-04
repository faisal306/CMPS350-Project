const form = document.getElementById("form");

form.addEventListener("submit", async function(e) {
    // preventDefault method will prevent the page from refreshing after cliking "login" if i did not 
    // added the page will refresh and will not execute  
    e.preventDefault();


    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;

    // get the user data from the JSON file
    const response = await fetch('data/users.json');
    const users = await response.json();



    // find the exact user by his email, find will return the first item
    const user = users.find(u => u.email === email && u.password === password);


    // if the user has been found
    if (user) {
        localStorage.uid = user.id;

        if (user.role === "student") {
            window.location.href = "dashboard.html";
        }

        else if (user.role === "instructor") {
            window.location.href = "university.html";
        }

        else if (user.role === "admin") {
            window.location.href = "university.html";
        }

    }

    else {
        alert("Invalid login credentials! Please try again.");
    }

})