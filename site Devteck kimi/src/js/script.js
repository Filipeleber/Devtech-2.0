// ==================== NAVEGAÇÃO DEVTECH ====================
const navbar = document.querySelector('.navbar');
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

// Scroll effect premium
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Menu mobile
hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Fechar menu ao clicar
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// ==================== ANIMAÇÕES SCROLL ====================
const observerOptions = {
    threshold: 0.2,
    rootMargin: '0px 0px -80px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('aos-animate');
        }
    });
}, observerOptions);

document.querySelectorAll('[data-aos]').forEach(el => {
    observer.observe(el);
});

// ==================== FORMULÁRIO DEVTECH ====================
const formContato = document.getElementById('formContato');

formContato.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Simulação de envio premium
    const btn = formContato.querySelector('.btn-primary');
    const originalText = btn.textContent;
    btn.textContent = 'Enviando...';
    btn.disabled = true;
    
    setTimeout(() => {
        alert('✅ Estratégia personalizada enviada! Nossa equipe entrará em contato em até 24h.');
        formContato.reset();
        btn.textContent = originalText;
        btn.disabled = false;
    }, 2000);
});

// ==================== SMOOTH SCROLL ====================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ==================== EFEITO DIGITAR (opcional) ====================
// Para o slogan, se quiser adicionar efeito de máquina de escrever
const slogan = document.querySelector('.hero-slogan');
if (slogan) {
    const text = slogan.textContent;
    slogan.textContent = '';
    let i = 0;
    const typeWriter = () => {
        if (i < text.length) {
            slogan.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 80);
        }
    };
    setTimeout(typeWriter, 1000);
}