/* ===== Eco Vibes Safari - Main JavaScript ===== */

document.addEventListener('DOMContentLoaded', () => {
  // ===== Header Scroll Effect =====
  const header = document.getElementById('header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 80) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // ===== Mobile Menu =====
  const menuToggle = document.getElementById('menuToggle');
  const nav = document.getElementById('nav');
  
  menuToggle.addEventListener('click', () => {
    nav.classList.toggle('active');
    const icon = menuToggle.querySelector('i');
    icon.classList.toggle('fa-bars');
    icon.classList.toggle('fa-times');
  });

  // Close menu when clicking a link
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('active');
      const icon = menuToggle.querySelector('i');
      icon.classList.add('fa-bars');
      icon.classList.remove('fa-times');
    });
  });

  // ===== Active Nav Link on Scroll =====
  const sections = document.querySelectorAll('section[id]');
  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120;
      if (scrollY >= sectionTop) {
        current = section.getAttribute('id');
      }
    });
    document.querySelectorAll('.nav-link').forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });

  // ===== Language Switcher =====
  let currentLang = 'en';
  const langBtn = document.getElementById('langBtn');
  const langText = document.getElementById('langText');

  function switchLanguage() {
    currentLang = currentLang === 'en' ? 'sw' : 'en';
    langText.textContent = currentLang === 'en' ? 'SW' : 'EN';

    // Update all elements with data-en / data-sw
    document.querySelectorAll('[data-en]').forEach(el => {
      const text = currentLang === 'en' ? el.getAttribute('data-en') : el.getAttribute('data-sw');
      if (text) el.textContent = text;
    });

    // Update placeholders
    document.querySelectorAll('[data-en-placeholder]').forEach(el => {
      const placeholder = currentLang === 'en' 
        ? el.getAttribute('data-en-placeholder') 
        : el.getAttribute('data-sw-placeholder');
      if (placeholder) el.placeholder = placeholder;
    });

    // Update html lang attribute
    document.documentElement.lang = currentLang;
  }

  langBtn.addEventListener('click', switchLanguage);

  // ===== FAQ Accordion =====
  document.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.parentElement;
      const isActive = item.classList.contains('active');
      
      // Close all
      document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('active'));
      
      // Open clicked if it wasn't active
      if (!isActive) {
        item.classList.add('active');
      }
    });
  });

  // ===== Contact Form =====
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const msg = currentLang === 'en' 
        ? 'Thank you! Your message has been sent. We will contact you soon.' 
        : 'Asante! Ujumbe wako umetumwa. Tutawasiliana nawe hivi karibuni.';
      alert(msg);
      contactForm.reset();
    });
  }

  // ===== Smooth reveal on scroll (simple) =====
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);

  document.querySelectorAll('.dest-card, .tour-card, .service-card, .acc-card, .blog-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
  });
});
