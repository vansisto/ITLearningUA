// Table of Contents functionality
function initTableOfContents() {
    const tocList = document.querySelector('.toc-list');
    const headings = document.querySelectorAll('article h2[id], article h3[id]');
    
    if (!tocList || headings.length === 0) return;
    
    // Track active section
    function updateActiveSection() {
        let activeId = '';
        
        headings.forEach(heading => {
            const rect = heading.getBoundingClientRect();
            if (rect.top <= 100) {
                activeId = heading.id;
            }
        });
        
        // Update active link
        tocList.querySelectorAll('a').forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${activeId}`) {
                link.classList.add('active');
            }
        });
    }
    
    // Update on scroll
    window.addEventListener('scroll', updateActiveSection);
    
    // Smooth scroll for TOC links
    tocList.addEventListener('click', (e) => {
        if (e.target.tagName === 'A') {
            e.preventDefault();
            const targetId = e.target.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
    
    // Initial update
    updateActiveSection();
}


// Scroll to top button functionality
function initScrollToTop() {
    // Create the button
    const button = document.createElement('button');
    button.className = 'scroll-to-top';
    button.innerHTML = '↑';
    button.setAttribute('aria-label', 'Прокрутити вгору');
    button.setAttribute('title', 'Прокрутити вгору');
    
    document.body.appendChild(button);
    
    // Show/hide button based on scroll position
    function toggleButton() {
        const scrolled = window.scrollY || document.documentElement.scrollTop;
        if (scrolled > 300) {
            button.classList.add('visible');
        } else {
            button.classList.remove('visible');
        }
    }
    
    // Scroll to top when clicked
    button.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // Listen to scroll events
    window.addEventListener('scroll', toggleButton);
    
    // Initial check
    toggleButton();
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initTableOfContents();
    initScrollToTop();
});
