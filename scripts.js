// Configuración de Tailwind
tailwind.config = {
    theme: {
        extend: {
            colors: {
                primary: '#D62C65',
                secondary: '#1D6356',
                dark: '#2D3748',
            },
            fontFamily: {
                poppins: ['Poppins', 'sans-serif'],
                arimo: ['Arimo', 'sans-serif'],
            },
            animation: {
                'float': 'float 6s ease-in-out infinite',
                'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-10px)' },
                }
            }
        }
    }
}

// Animación de aparición al hacer scroll
function checkScroll() {
    const elements = document.querySelectorAll('.fade-in, .scale-in');
    
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        
        if (elementPosition < screenPosition) {
            element.classList.add('visible');
        }
    });
}

// Mobile menu toggle
function initializeMobileMenu() {
    const mobileMenuButton = document.getElementById('mobileMenuButton');
    const mobileMenu = document.getElementById('mobileMenu');
    
    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', function() {
            if (mobileMenu.classList.contains('hidden')) {
                mobileMenu.classList.remove('hidden');
                setTimeout(() => mobileMenu.classList.add('show'), 10);
            } else {
                mobileMenu.classList.remove('show');
                setTimeout(() => mobileMenu.classList.add('hidden'), 300);
            }
        });
    }
}

// Smooth scrolling for navigation links
function initializeSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                const mobileMenu = document.getElementById('mobileMenu');
                if (mobileMenu) {
                    mobileMenu.classList.add('hidden');
                }
            }
        });
    });
}

// Inicializar eventos
document.addEventListener('DOMContentLoaded', function() {
    // Esperar a que todas las secciones se carguen
    setTimeout(() => {
        initializeMobileMenu();
        initializeSmoothScrolling();
        
        window.addEventListener('scroll', checkScroll);
        checkScroll();

        // Animaciones para elementos del hero
        setTimeout(() => {
            const heroContent = document.querySelector('.hero-content');
            if (heroContent) heroContent.classList.add('visible');
        }, 300);
        
        setTimeout(() => {
            const heroGraphic = document.querySelector('.hero-graphic');
            if (heroGraphic) heroGraphic.classList.add('visible');
        }, 800);
    }, 100); // Esperar 1 segundo para que se carguen todas las secciones
});