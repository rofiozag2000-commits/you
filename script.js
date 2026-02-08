// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Function to create floating hearts
function createHeart() {
    const heart = document.createElement('div');
    heart.innerHTML = '❤️';
    heart.style.position = 'fixed';
    heart.left = Math.random() * 100 + 'vw';
    heart.top = '100vh';
    heart.fontSize = Math.random() * 20 + 20 + 'px';
    heart.pointerEvents = 'none';
    heart.zIndex = '9999';
    heart.animation = 'floatUp 5s linear infinite';
    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 5000);
}

// CSS animation for floating hearts
const style = document.createElement('style');
style.textContent = `
@keyframes floatUp {
    to {
        transform: translateY(-100vh);
        opacity: 0;
    }
}
`;
document.head.appendChild(style);

// Create hearts periodically
setInterval(createHeart, 1000);

// Hover effect for sections
document.querySelectorAll('section').forEach(section => {
    section.addEventListener('mouseenter', () => {
        section.style.transform = 'scale(1.02)';
        section.style.transition = 'transform 0.3s';
    });
    section.addEventListener('mouseleave', () => {
        section.style.transform = 'scale(1)';
    });
});
