// Smooth scrolling for navigation links
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        targetSection.scrollIntoView({ behavior: 'smooth' });

        // Update active class
        document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
        link.classList.add('active');
    });
});

// Home page interactivity
document.querySelector('.shop-btn').addEventListener('click', () => {
    alert('Redirecting to Shop...');
});

// About Us page interactivity
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => {
        const label = card.querySelector('.card-label').textContent || 'Product';
        alert(`Navigating to ${label} products...`);
    });
});

// Services page interactivity
document.querySelectorAll('.service-card').forEach(card => {
    card.addEventListener('click', () => {
        const title = card.querySelector('h3').textContent;
        alert(`Learn more about ${title}...`);
    });
});

// Product Bestseller page interactivity
document.querySelectorAll('.add-btn').forEach(button => {
    button.addEventListener('click', () => {
        const product = button.parentElement.querySelector('h3').textContent;
        alert(`Added ${product} to cart!`);
    });
});

document.querySelector('.show-more').addEventListener('click', (e) => {
    e.preventDefault();
    alert('Showing more products...');
});

// Testimonials page interactivity (basic carousel simulation)
document.querySelectorAll('.dot').forEach((dot, index) => {
    dot.addEventListener('click', () => {
        document.querySelectorAll('.dot').forEach(d => d.classList.remove('active'));
        dot.classList.add('active');
        alert(`Showing testimonial set ${index + 1}...`);
        // In a real implementation, this would switch the visible testimonials
    });
});