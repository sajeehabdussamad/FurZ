document.getElementById('aboutMeBtn').addEventListener('click', function() {
    // Hide main page and show portfolio
    document.getElementById('mainPage').style.display = 'none';
    document.getElementById('portfolio').classList.add('active');

    // Remove blur effect
    document.querySelector('.background').classList.remove('blur');
});
