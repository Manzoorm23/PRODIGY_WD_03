// Smooth scrolling for navigation links
const navLinks = document.querySelectorAll('nav ul li a');

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        window.scrollTo({
            top: target.offsetTop,
            behavior: 'smooth'
        });
    });
});
