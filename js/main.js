document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Animate trend bars on scroll
    const trendBars = document.querySelectorAll('.trend-bar');
    
    // Initially set height to 0
    trendBars.forEach(bar => {
        const originalHeight = bar.style.height;
        bar.style.height = '0%';
        bar.dataset.targetHeight = originalHeight;
    });

    // Function to check if element is in viewport
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.bottom >= 0
        );
    }

    // Function to animate elements when they come into view
    function animateOnScroll() {
        // Animate trend bars
        if (document.querySelector('.trend-chart')) {
            if (isInViewport(document.querySelector('.trend-chart'))) {
                trendBars.forEach(bar => {
                    bar.style.height = bar.dataset.targetHeight;
                });
            }
        }

        // Add animation to cards when they come into view
        document.querySelectorAll('.card, .research-item, .app-card').forEach(item => {
            if (isInViewport(item) && !item.classList.contains('animated')) {
                item.classList.add('animated');
                item.style.animation = 'fadeInUp 0.6s ease forwards';
            }
        });
    }

    // Add animation keyframes
    const style = document.createElement('style');
    style.textContent = `
        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
    `;
    document.head.appendChild(style);

    // Run animation check on scroll
    window.addEventListener('scroll', animateOnScroll);
    
    // Run once on page load
    animateOnScroll();

    // Network animation in hero section
    const networkAnimation = document.querySelector('.network-animation');
    if (networkAnimation) {
        // Create network nodes and connections
        const nodeCount = 30;
        const nodes = [];
        
        for (let i = 0; i < nodeCount; i++) {
            const node = document.createElement('div');
            node.className = 'network-node';
            node.style.cssText = `
                position: absolute;
                width: 4px;
                height: 4px;
                background-color: rgba(255, 255, 255, 0.8);
                border-radius: 50%;
                top: ${Math.random() * 100}%;
                left: ${Math.random() * 100}%;
                box-shadow: 0 0 10px rgba(255, 255, 255, 0.8);
                animation: pulse ${2 + Math.random() * 3}s infinite alternate;
            `;
            networkAnimation.appendChild(node);
            nodes.push({
                element: node,
                x: parseFloat(node.style.left),
                y: parseFloat(node.style.top)
            });
        }

        // Create connections between nearby nodes
        for (let i = 0; i < nodes.length; i++) {
            for (let j = i + 1; j < nodes.length; j++) {
                const distance = Math.sqrt(
                    Math.pow(nodes[i].x - nodes[j].x, 2) + 
                    Math.pow(nodes[i].y - nodes[j].y, 2)
                );
                
                if (distance < 30) {
                    const connection = document.createElement('div');
                    connection.className = 'network-connection';
                    
                    // Calculate position and dimensions
                    const x1 = nodes[i].x;
                    const y1 = nodes[i].y;
                    const x2 = nodes[j].x;
                    const y2 = nodes[j].y;
                    
                    const length = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
                    const angle = Math.atan2(y2 - y1, x2 - x1) * 180 / Math.PI;
                    
                    connection.style.cssText = `
                        position: absolute;
                        height: 1px;
                        background-color: rgba(255, 255, 255, 0.2);
                        top: ${y1}%;
                        left: ${x1}%;
                        width: ${length}%;
                        transform: rotate(${angle}deg);
                        transform-origin: 0 0;
                    `;
                    
                    networkAnimation.appendChild(connection);
                }
            }
        }
    }

    // CTA button hover effect
    const ctaButton = document.querySelector('.cta-button');
    if (ctaButton) {
        ctaButton.addEventListener('mouseover', function() {
            this.style.background = 'linear-gradient(to right, #3b82f6, #8b5cf6)';
        });
        
        ctaButton.addEventListener('mouseout', function() {
            this.style.background = 'linear-gradient(to right, #2563eb, #8b5cf6)';
        });
    }

    // Join button hover effect
    const joinButton = document.querySelector('.join-button');
    if (joinButton) {
        joinButton.addEventListener('mouseover', function() {
            this.style.backgroundColor = '#f8fafc';
        });
        
        joinButton.addEventListener('mouseout', function() {
            this.style.backgroundColor = 'white';
        });
    }
});