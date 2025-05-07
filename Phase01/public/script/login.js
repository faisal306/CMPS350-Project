const form = document.getElementById("form");

form.addEventListener("submit", async function(e) {
    // preventDefault method will prevent the page from refreshing after cliking "login" if i did not 
    // added the page will refresh and will not execute  
    e.preventDefault();

    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;

    const response = await fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify({ email: email, password: password }),
    });

    const user = await response.json();
    if (user) {
        console.log("Login successful!");
        console.log(user.id);
        localStorage.setItem("uid", user.id);
        localStorage.setItem("currentUserEmail", user.email);
        localStorage.setItem("userRole", user.role);
        if (user.role === "student") {
            window.location.href = "dashboard.html";
        }

        else if (user.role === "instructor") {
            window.location.href = "instructor-dashboard.html";
        }

        else if (user.role === "admin") {
            window.location.href = "admin.html";
        }
    } else {
        alert("Invalid login credentials! Please try again.");
    }

})