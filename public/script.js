// Navbar scroll effect
window.addEventListener('scroll', () => {
  const navbar = document.getElementById('navbar');
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Typewriter effect
const roles = [
  'Full Stack Developer',
  'Node.js Developer',
  'Frontend Developer',
  'Backend Developer',
  'Web Designer'
];

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typewriter = document.getElementById('typewriter');

function type() {
  const currentRole = roles[roleIndex];

  if (isDeleting) {
    typewriter.textContent = currentRole.substring(0, charIndex - 1);
    charIndex--;
  } else {
    typewriter.textContent = currentRole.substring(0, charIndex + 1);
    charIndex++;
  }

  if (!isDeleting && charIndex === currentRole.length) {
    setTimeout(() => isDeleting = true, 2000);
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    roleIndex = (roleIndex + 1) % roles.length;
  }

  setTimeout(type, isDeleting ? 80 : 120);
}

type();

// Scroll Animation
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');

      // Skill bars animate
      const fills = entry.target.querySelectorAll('.skill-fill');
      fills.forEach(fill => {
        const target = fill.style.getPropertyValue('--target-width');
        fill.style.width = target;
      });
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.section, .about-card, .service-card, .tech-card, .skill-item').forEach(el => {
  el.classList.add('fade-in');
  observer.observe(el);
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// Particles
for (let i = 0; i < 50; i++) {
  const particle = document.createElement('div');
  particle.style.cssText = `
    position: absolute;
    width: ${Math.random() * 3 + 1}px;
    height: ${Math.random() * 3 + 1}px;
    background: rgba(0, 200, 255, ${Math.random() * 0.5 + 0.1});
    border-radius: 50%;
    left: ${Math.random() * 100}%;
    top: ${Math.random() * 100}%;
    animation: twinkle ${Math.random() * 3 + 2}s ease-in-out infinite;
    animation-delay: ${Math.random() * 3}s;
  `;
  document.getElementById('particles').appendChild(particle);
}

// Add twinkle animation
const style = document.createElement('style');
style.textContent = `
  @keyframes twinkle {
    0%, 100% { opacity: 0.2; transform: scale(1); }
    50% { opacity: 1; transform: scale(1.5); }
  }
`;
document.head.appendChild(style);

// Active nav link on scroll
window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.nav-link');

  sections.forEach((section, index) => {
    const rect = section.getBoundingClientRect();
    if (rect.top <= 100 && rect.bottom >= 100) {
      navLinks.forEach(link => link.classList.remove('active'));
      if (navLinks[index]) {
        navLinks[index].style.color = '#00c8ff';
      }
    }
  });
});