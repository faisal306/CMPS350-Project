const currentuser = document.getElementById("student-email");

document.addEventListener("DOMContentLoaded", pageInit);

async function pageInit(e){
    // Check if the user'd ID stored in localStorage
    if(localStorage.uid){
        const response = await fetch('data/users.json');
        const users = await response.json();
        const user = users.find(u => u.id == localStorage.uid);
        currentuser.innerHTML = 
        `
            Current User: ${user.email} 
        `
    }
}