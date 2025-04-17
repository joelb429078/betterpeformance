// Variables to track state
let isHeaderSticky = false;
let activeSection = null;
let formStatus = null;

// DOM Elements - will be set on DOMContentLoaded
let header, contactSection, mapSection, contactForm, submitButton, sendingButton, formSuccessMessage;
let contactBtn, mapBtn;
let ctaButtons;

// Function to handle scroll events
function handleScroll() {
  // Sticky header logic
  if (window.scrollY > 100) {
    header.classList.add('headerScrolled');
    isHeaderSticky = true;
  } else {
    header.classList.remove('headerScrolled');
    isHeaderSticky = false;
  }
  
  // Update active section based on scroll position
  const scrollPosition = window.scrollY + 400;
  
  if (contactSection && scrollPosition >= contactSection.offsetTop && 
      scrollPosition < (mapSection ? mapSection.offsetTop : Infinity)) {
    activeSection = 'contact';
  } else if (mapSection && scrollPosition >= mapSection.offsetTop) {
    activeSection = 'map';
  } else {
    activeSection = null;
  }
}

// Function to smoothly scroll to a section
function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    window.scrollTo({
      top: section.offsetTop - 120,
      behavior: 'smooth'
    });
  }
}

// Function to handle form submission
function handleFormSubmit(e) {
  e.preventDefault();
  
  // Validate form
  if (!validateForm()) {
    return;
  }
  
  // Simulate form submission
  setFormStatus('sending');
  
  // Simulate API call --> Replace with actual API endpoint in production
  setTimeout(() => {
    setFormStatus('success');
    contactForm.reset();
    
    // Reset status after 5 seconds
    setTimeout(() => {
      setFormStatus(null);
    }, 5000);
  }, 1500);
}

// Function to validate form
function validateForm() {
  const requiredFields = contactForm.querySelectorAll('[required]');
  let isValid = true;
  
  requiredFields.forEach(field => {
    if (!field.value.trim()) {
      isValid = false;
      field.classList.add('error');
    } else {
      field.classList.remove('error');
    }
  });
  
  return isValid;
}

// Function to update form status
function setFormStatus(status) {
  formStatus = status;
  
  if (status === 'sending') {
    submitButton.style.display = 'none';
    sendingButton.style.display = 'flex';
    formSuccessMessage.style.display = 'none';
    contactForm.style.display = 'block';
  } else if (status === 'success') {
    submitButton.style.display = 'none';
    sendingButton.style.display = 'none';
    formSuccessMessage.style.display = 'block';
    contactForm.style.display = 'none';
  } else {
    submitButton.style.display = 'flex';
    sendingButton.style.display = 'none';
    formSuccessMessage.style.display = 'none';
    contactForm.style.display = 'block';
  }
}

// Function to add animations to elements
function setupAnimations() {
  // Fade in hero content on page load
  const heroContent = document.querySelector('.modernHeroContent');
  if (heroContent) {
    heroContent.style.opacity = '0';
    heroContent.style.transform = 'translateY(30px)';
    heroContent.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    
    setTimeout(() => {
      heroContent.style.opacity = '1';
      heroContent.style.transform = 'translateY(0)';
    }, 100);
  }
  
  // Add animation to section headers when they come into view
  const sectionHeaders = document.querySelectorAll('.sectionHeader');
  sectionHeaders.forEach(header => {
    header.style.opacity = '0';
    header.style.transform = 'translateY(20px)';
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
          entry.target.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    
    observer.observe(header);
  });
  
  // Add animation to contact card when it comes into view
  const contactCard = document.querySelector('.unifiedContactCard');
  if (contactCard) {
    contactCard.style.opacity = '0';
    contactCard.style.transform = 'translateY(30px)';
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
          entry.target.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    
    observer.observe(contactCard);
  }
  
  // Add animation to map wrapper when it comes into view
  const mapWrapper = document.querySelector('.mapWrapper');
  if (mapWrapper) {
    mapWrapper.style.opacity = '0';
    mapWrapper.style.transform = 'translateY(30px)';
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
          entry.target.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    
    observer.observe(mapWrapper);
  }
  
  // Add animation to CTA content when it comes into view
  const ctaContent = document.querySelector('.enhancedCtaContent');
  if (ctaContent) {
    ctaContent.style.opacity = '0';
    ctaContent.style.transform = 'translateY(30px)';
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
          entry.target.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    
    observer.observe(ctaContent);
  }
  
  // Add hover animations to CTA buttons
  ctaButtons.forEach(button => {
    button.addEventListener('mouseenter', function() {
      this.style.transform = 'scale(1.05)';
      this.style.backgroundColor = '#fff';
      this.style.color = '#101c17';
      this.style.transition = 'transform 0.3s ease, background-color 0.3s ease, color 0.3s ease';
    });
    
    button.addEventListener('mouseleave', function() {
      this.style.transform = 'scale(1)';
      this.style.backgroundColor = '';
      this.style.color = '';
    });
    
    button.addEventListener('mousedown', function() {
      this.style.transform = 'scale(0.95)';
    });
    
    button.addEventListener('mouseup', function() {
      this.style.transform = 'scale(1.05)';
    });
  });
}

// Initialize on DOM content loaded
document.addEventListener('DOMContentLoaded', function() {
  // Get DOM references
  header = document.querySelector('.enhancedHeader');
  contactSection = document.getElementById('contact-section');
  mapSection = document.getElementById('map-section');
  contactForm = document.getElementById('contact-form');
  submitButton = document.getElementById('submit-button');
  sendingButton = document.getElementById('sending-button');
  formSuccessMessage = document.getElementById('form-success');
  contactBtn = document.getElementById('contact-btn');
  mapBtn = document.getElementById('map-btn');
  ctaButtons = document.querySelectorAll('.ctaContactButton');
  
  // Set up scroll event listener
  window.addEventListener('scroll', handleScroll);
  
  // Set up form submission
  contactForm.addEventListener('submit', handleFormSubmit);
  
  // Set up scroll button events
  contactBtn.addEventListener('click', function() {
    scrollToSection('contact-section');
  });
  
  mapBtn.addEventListener('click', function() {
    scrollToSection('map-section');
  });
  
  // Add field validation on input
  const requiredFields = contactForm.querySelectorAll('[required]');
  requiredFields.forEach(field => {
    field.addEventListener('input', function() {
      if (this.value.trim()) {
        this.classList.remove('error');
      } else {
        this.classList.add('error');
      }
    });
  });
  
  // Initialize scroll position on page load
  handleScroll();
  
  // Set up animations
  setupAnimations();
});