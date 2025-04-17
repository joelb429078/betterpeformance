/**
 * Warranty Section jQuery Script
 * 
 * This script handles all the interactivity for the Warranty section including:
 * - Tab switching between warranty options
 * - FAQ toggling
 * - Sticky navigation
 * - Smooth scrolling to sections
 * - Animations and effects
 */

jQuery(function($) {
  // Check if we're in the warranty section
  if ($('#warranty-section').length === 0) {
    return; // Exit if the section doesn't exist on this page
  }

  // Variables
  let isScrolled = false;
  let activeTab = 'platinum';
  let activeFaq = null;
  let isHeaderSticky = false;
  let activeSection = null;
  
  // Get refs to important elements
  const warrantyNav = $('.warrantyNav');
  const warrantyOverview = $('#warranty-overview');
  const warrantyOptions = $('#warranty-options');
  
  // =========================================
  // Tab Functions
  // =========================================
  
  // Handle tab switching
  $('.warrantyTab').on('click', function() {
    const tab = $(this).data('tab');
    setActiveTab(tab);
  });
  
  // Function to set active tab
  function setActiveTab(tab) {
    activeTab = tab;
    
    // Update tab appearance
    $('.warrantyTab').removeClass('activeTab');
    $(`.warrantyTab[data-tab="${tab}"]`).addClass('activeTab');
    
    // Update tab panels
    $('.tabPanel').hide();
    $(`#${tab}-panel`).fadeIn(400);
  }
  
  // =========================================
  // FAQ Functions
  // =========================================
  
  // Toggle FAQ items
  $('.faqQuestion').on('click', function() {
    const faqItem = $(this).closest('.faqItem');
    const isActive = faqItem.hasClass('faqActive');
    
    // If it's already active, close it
    if (isActive) {
      faqItem.removeClass('faqActive');
      faqItem.find('.faqToggle i').removeClass('fa-minus').addClass('fa-plus');
      faqItem.find('.faqAnswer').slideUp(300);
    } else {
      // Close any other open FAQ
      $('.faqItem.faqActive').removeClass('faqActive');
      $('.faqItem.faqActive .faqToggle i').removeClass('fa-minus').addClass('fa-plus');
      $('.faqItem.faqActive .faqAnswer').slideUp(300);
      
      // Open this FAQ
      faqItem.addClass('faqActive');
      faqItem.find('.faqToggle i').removeClass('fa-plus').addClass('fa-minus');
      faqItem.find('.faqAnswer').slideDown(300);
    }
  });
  
  // =========================================
  // Scroll Handling
  // =========================================
  
  // Handle scroll events
  $(window).on('scroll', function() {
    handleScrollEffects();
    updateStickyNav();
    updateActiveSection();
  });
  
  // Function to handle scroll effects
  function handleScrollEffects() {
    isScrolled = $(window).scrollTop() > 50;
    
    // Add animation to elements when scrolled into view
    animateOnScroll('.overviewCard', 0.3);
    animateOnScroll('.faqItem', 0.1);
    animateOnScroll('.serviceCard', 0.2);
  }
  
  // Function to handle sticky navigation
  function updateStickyNav() {
    if (warrantyOptions.length) {
      const position = warrantyOptions.offset().top;
      isHeaderSticky = $(window).scrollTop() >= position;
      
      if (isHeaderSticky) {
        warrantyNav.addClass('stickyNav');
      } else {
        warrantyNav.removeClass('stickyNav');
      }
    }
  }
  
  // Function to update active section
  function updateActiveSection() {
    const scrollPosition = $(window).scrollTop() + 200;
    
    if (warrantyOverview.length && scrollPosition >= warrantyOverview.offset().top && 
        scrollPosition < (warrantyOptions.length ? warrantyOptions.offset().top : Infinity)) {
      activeSection = 'overview';
    } else if (warrantyOptions.length && scrollPosition >= warrantyOptions.offset().top) {
      activeSection = 'options';
    } else {
      activeSection = null;
    }
  }
  
  // Function to animate elements when they come into view
  function animateOnScroll(selector, delay) {
    const elements = $(selector);
    if (elements.length) {
      elements.each(function(index) {
        const element = $(this);
        const elementTop = element.offset().top;
        const elementHeight = element.outerHeight();
        const viewportHeight = $(window).height();
        const scrollY = $(window).scrollTop();
        
        // Check if element is in viewport
        if (scrollY > elementTop - viewportHeight + elementHeight * 0.25) {
          if (!element.hasClass('animated')) {
            setTimeout(function() {
              element.addClass('animated fadeInUp');
            }, (delay * index) * 1000);
          }
        }
      });
    }
  }
  
  // =========================================
  // Smooth Scrolling
  // =========================================
  
  // Handle scroll to overview section
  $('#warranty-overview-btn').on('click', function(e) {
    e.preventDefault();
    scrollToSection(warrantyOverview);
  });
  
  // Handle scroll to options section
  $('#warranty-options-btn').on('click', function(e) {
    e.preventDefault();
    scrollToSection(warrantyOptions);
  });
  
  // Function to scroll to section
  function scrollToSection(section) {
    if (section && section.length) {
      $('html, body').animate({
        scrollTop: section.offset().top - 50
      }, 800);
    }
  }
  
  // =========================================
  // Card Hover Effects
  // =========================================
  
  // Add hover effects to overview cards
  $('.overviewCard').hover(
    function() {
      $(this).css({
        transform: 'translateY(-10px)',
        boxShadow: '0 15px 30px rgba(0, 0, 0, 0.1)'
      });
      $(this).find('.overviewIcon').css({
        transform: 'rotateY(180deg)'
      });
    },
    function() {
      $(this).css({
        transform: 'translateY(0)',
        boxShadow: '0 8px 20px rgba(0, 0, 0, 0.08)'
      });
      $(this).find('.overviewIcon').css({
        transform: 'rotateY(0)'
      });
    }
  );
  
  // Hover effects for warranty buttons
  $('.warrantyButton, .ctaButton').hover(
    function() {
      $(this).css({
        transform: 'scale(1.05)'
      });
    },
    function() {
      $(this).css({
        transform: 'scale(1)'
      });
    }
  );
  
  // =========================================
  // Form Handling
  // =========================================
  
  // Handle warranty enquiry form submission
  $('#warranty-enquiry-form').on('submit', function(e) {
    e.preventDefault();
    
    // Show confirmation (you could customize this)
    alert('Thank you for your enquiry. Our team will be in touch shortly.');
    
    // Reset the form
    $(this)[0].reset();
  });
  
  // =========================================
  // Initialize
  // =========================================
  
  // Run these on page load
  setActiveTab(activeTab);
  handleScrollEffects();
  updateStickyNav();
  updateActiveSection();
  
  // Setup FAQ items (start with all closed)
  $('.faqAnswer').hide();
  
  // Add animation classes to hero content on load
  $('.modernHeroContent').addClass('animated fadeIn');
  
  // Add animation classes to hero navigation after a delay
  setTimeout(function() {
    $('.heroNavigation').addClass('animated fadeIn');
  }, 500);
  
  // Add necessary CSS animation classes if not present in the theme
  if (!$('style#warranty-animations').length) {
    $('head').append(`
      <style id="warranty-animations">
        .animated {
          animation-duration: 1s;
          animation-fill-mode: both;
        }
        
        .fadeIn {
          animation-name: fadeIn;
        }
        
        .fadeInUp {
          animation-name: fadeInUp;
        }
        
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translate3d(0, 30px, 0);
          }
          to {
            opacity: 1;
            transform: translate3d(0, 0, 0);
          }
        }
      </style>
    `);
  }
});