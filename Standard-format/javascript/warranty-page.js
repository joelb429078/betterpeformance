// Variables to track state
let isScrolled = false;
let activeTab = 'platinum';
let activeFaq = null;
let isHeaderSticky = false;
let activeSection = null;
let mobileMenuOpen = false;

// DOM Elements refs will be set on DOMContentLoaded
let header, optionsSection, warrantyNav, overviewBtn, optionsBtn;
let warrantyTabs, tabPanels, faqItems, faqQuestions;

// Function to toggle FAQ items
function toggleFaq(index) {
  if (activeFaq === index) {
    // Close the active FAQ
    faqItems[index].classList.remove('faqActive');
    const toggleIcon = faqItems[index].querySelector('.faqToggle i');
    toggleIcon.classList.remove('fa-minus');
    toggleIcon.classList.add('fa-plus');
    
    const answerElem = faqItems[index].querySelector('.faqAnswer');
    answerElem.style.height = '0';
    answerElem.style.opacity = '0';
    activeFaq = null;
  } else {
    // Reset all FAQ items
    faqItems.forEach(item => {
      item.classList.remove('faqActive');
      const itemIcon = item.querySelector('.faqToggle i');
      itemIcon.classList.remove('fa-minus');
      itemIcon.classList.add('fa-plus');
      
      const itemAnswer = item.querySelector('.faqAnswer');
      answerElem.style.height = '0';
      answerElem.style.opacity = '0';
    });
    
    // Activate selected FAQ item
    faqItems[index].classList.add('faqActive');
    const toggleIcon = faqItems[index].querySelector('.faqToggle i');
    toggleIcon.classList.remove('fa-plus');
    toggleIcon.classList.add('fa-minus');
    
    const answerElem = faqItems[index].querySelector('.faqAnswer');
    answerElem.style.height = 'auto';
    answerElem.style.opacity = '1';
    activeFaq = index;
  }
}

// Function to switch tabs
function switchTab(tab) {
  activeTab = tab;
  
  // Update tab buttons
  warrantyTabs.forEach(tabBtn => {
    if (tabBtn.getAttribute('data-tab') === tab) {
      tabBtn.classList.add('activeTab');
    } else {
      tabBtn.classList.remove('activeTab');
    }
  });
  
  // Update tab panels
  tabPanels.forEach(panel => {
    if (panel.id === `${tab}-tab`) {
      panel.classList.add('active');
      panel.style.display = 'block';
    } else {
      panel.classList.remove('active');
      panel.style.display = 'none';
    }
  });
}

// Function to handle scroll effects
function handleScroll() {
  const scrollY = window.scrollY;
  
  // Header scroll effect
  if (scrollY > 50) {
    header.classList.add('headerScrolled');
    isScrolled = true;
  } else {
    header.classList.remove('headerScrolled');
    isScrolled = false;
  }
  
  // Sticky navigation for warranty options
  if (optionsSection) {
    const position = optionsSection.getBoundingClientRect();
    if (position.top <= 0) {
      warrantyNav.classList.add('stickyNav');
      isHeaderSticky = true;
    } else {
      warrantyNav.classList.remove('stickyNav');
      isHeaderSticky = false;
    }
  }
  
  // Active section tracking
  const scrollPosition = window.scrollY + 200;
  const overviewSection = document.getElementById('warranty-overview');
  
  if (overviewSection && scrollPosition >= overviewSection.offsetTop && 
      scrollPosition < (optionsSection ? optionsSection.offsetTop : Infinity)) {
    activeSection = 'overview';
  } else if (optionsSection && scrollPosition >= optionsSection.offsetTop) {
    activeSection = 'options';
  } else {
    activeSection = null;
  }
}

// Function for smooth scrolling
function scrollTo(elementId) {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  }
}

// Function to add animations to cards and buttons
function setupAnimations() {
  // Add hover effects to overview cards
  const overviewCards = document.querySelectorAll('.overviewCard');
  overviewCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-10px)';
      this.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.1)';
      this.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';
    });
    
    card.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0)';
      this.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.05)';
    });
  });
  
  // Add hover effects to buttons
  const warrantyButtons = document.querySelectorAll('.warrantyButton, .ctaButton');
  warrantyButtons.forEach(button => {
    button.addEventListener('mouseenter', function() {
      this.style.transform = 'scale(1.05)';
      this.style.transition = 'transform 0.2s ease';
    });
    
    button.addEventListener('mouseleave', function() {
      this.style.transform = 'scale(1)';
    });
    
    button.addEventListener('mousedown', function() {
      this.style.transform = 'scale(0.95)';
    });
    
    button.addEventListener('mouseup', function() {
      this.style.transform = 'scale(1.05)';
    });
  });
}

// Form validation and submission
function setupForm() {
  const applicationForm = document.querySelector('.applicationForm');
  if (applicationForm) {
    applicationForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Basic validation
      let isValid = true;
      const requiredFields = applicationForm.querySelectorAll('[required]');
      
      requiredFields.forEach(field => {
        if (!field.value.trim()) {
          isValid = false;
          field.classList.add('error');
        } else {
          field.classList.remove('error');
        }
      });
      
      if (isValid) {
        // In a real implementation, you would send the form data to a server
        // For now, just show a success message
        alert('Thank you for your inquiry! We will contact you shortly.');
        applicationForm.reset();
      } else {
        alert('Please fill in all required fields.');
      }
    });
  }
}

// Initialize on DOM content loaded
document.addEventListener('DOMContentLoaded', function() {
  // Get DOM references
  header = document.querySelector('.enhancedHeader');
  optionsSection = document.getElementById('warranty-options');
  warrantyNav = document.querySelector('.warrantyNav');
  overviewBtn = document.getElementById('overview-btn');
  optionsBtn = document.getElementById('options-btn');
  warrantyTabs = document.querySelectorAll('.warrantyTab');
  tabPanels = document.querySelectorAll('.tabPanel');
  faqItems = document.querySelectorAll('.faqItem');
  faqQuestions = document.querySelectorAll('.faqQuestion');
  
  // Initialize tabs visibility - hide all non-active tabs first
  tabPanels.forEach(panel => {
    if (panel.id !== 'platinum-tab') {
      panel.style.display = 'none';
    }
  });
  
  // Initialize tab content
  switchTab(activeTab);
  
  // Scroll event listener
  window.addEventListener('scroll', handleScroll);
  
  // Tab switching
  warrantyTabs.forEach(tab => {
    tab.addEventListener('click', function() {
      switchTab(this.getAttribute('data-tab'));
    });
  });
  
  // FAQ toggle
  faqQuestions.forEach((question, index) => {
    question.addEventListener('click', function() {
      toggleFaq(index);
    });
  });
  
  // Navigation button events
  overviewBtn.addEventListener('click', function(e) {
    e.preventDefault();
    scrollTo('warranty-overview');
  });
  
  optionsBtn.addEventListener('click', function(e) {
    e.preventDefault();
    scrollTo('warranty-options');
  });
  
  // Setup animations
  setupAnimations();
  
  // Setup form handling
  setupForm();
  
  // Initialize UI based on current scroll position
  handleScroll();
});

// Set up the fade-in effect for page load
window.addEventListener('load', function() {
  // Fade in hero content
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
  
  // Fade in hero navigation
  const heroNav = document.querySelector('.heroNavigation');
  if (heroNav) {
    heroNav.style.opacity = '0';
    heroNav.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
      heroNav.style.opacity = '1';
    }, 600);
  }
  
  // Fade in overview container
  const overviewContainer = document.querySelector('.warrantyOverviewContainer');
  if (overviewContainer) {
    overviewContainer.style.opacity = '0';
    overviewContainer.style.transition = 'opacity 0.3s ease';
    
    setTimeout(() => {
      overviewContainer.style.opacity = '1';
    }, 300);
  }
});