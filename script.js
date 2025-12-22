// Get elements
const container = document.querySelector('.container');
const dots = document.querySelectorAll('.dot');
const dotItems = document.querySelectorAll('.dot-item');
const mainNav = document.getElementById('mainNav');

// Update active dot and nav bar when scrolling
container.addEventListener('scroll', () => {
    const scrollPos = container.scrollTop;
    const windowHeight = window.innerHeight;
    const currentIndex = Math.round(scrollPos / windowHeight);
    
    // Update dots
    dots.forEach((dot, index) => {
        if (index === currentIndex) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });

    // Update nav bar - add 'scrolled' class when not on first section
    if (currentIndex > 0) {
        mainNav.classList.add('scrolled');
    } else {
        mainNav.classList.remove('scrolled');
    }
});

// Click dot to jump to section
dotItems.forEach((dotItem, index) => {
    dotItem.addEventListener('click', () => {
        container.scrollTo({
            top: index * window.innerHeight,
            behavior: 'smooth'
        });
    });
});
