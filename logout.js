// scripts.js

document.getElementById('logoutButton').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('logoutModal').style.display = 'flex';
});

document.getElementById('confirmLogout').addEventListener('click', function() {
    // Perform logout action, e.g., redirect to login page
    window.location.href = 'login.html'; // Redirect to login page (modify as needed)
});

document.getElementById('cancelLogout').addEventListener('click', function() {
    document.getElementById('logoutModal').style.display = 'none';
});
