/**
 * Império Ourivesaria — Main Script
 * Handles mobile menu navigation toggle and interactive features.
 */

document.addEventListener('DOMContentLoaded', () => {
  // Mobile Navigation Toggle
  const navToggle = document.getElementById('nav-toggle');
  const siteNav = document.getElementById('site-nav');

  if (navToggle && siteNav) {
    navToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      const isActive = siteNav.classList.toggle('is-active');
      navToggle.classList.toggle('is-active');
      navToggle.setAttribute('aria-expanded', isActive ? 'true' : 'false');
    });

    // Close mobile menu when clicking any nav link
    const navLinks = siteNav.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        siteNav.classList.remove('is-active');
        navToggle.classList.remove('is-active');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });

    // Close mobile menu when clicking outside header
    document.addEventListener('click', (e) => {
      if (!siteNav.contains(e.target) && !navToggle.contains(e.target) && siteNav.classList.contains('is-active')) {
        siteNav.classList.remove('is-active');
        navToggle.classList.remove('is-active');
        navToggle.setAttribute('aria-expanded', 'false');
      }
    });

    // Close mobile menu on Escape key press
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && siteNav.classList.contains('is-active')) {
        siteNav.classList.remove('is-active');
        navToggle.classList.remove('is-active');
        navToggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // Active TOC Link Highlight for Legal Pages
  const sections = document.querySelectorAll('.legal-section');
  const tocLinks = document.querySelectorAll('.toc-link');

  if (sections.length > 0 && tocLinks.length > 0) {
    window.addEventListener('scroll', () => {
      let current = '';
      const scrollPos = window.pageYOffset || document.documentElement.scrollTop;

      sections.forEach(section => {
        const sectionTop = section.offsetTop - 120;
        if (scrollPos >= sectionTop) {
          current = section.getAttribute('id');
        }
      });

      tocLinks.forEach(link => {
        link.classList.remove('active');
        if (current && link.getAttribute('href') === `#${current}`) {
          link.classList.add('active');
        }
      });
    });
  }
});
