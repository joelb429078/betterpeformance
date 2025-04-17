/**
 * Contact Section jQuery Script
 * 
 * This script handles all the interactivity for the Contact section including:
 * - Form submission and validation
 * - Smooth scrolling to sections
 * - Header styling on scroll
 * - Animations and transitions
 */

jQuery(function($) {
  // Check if we're in the contact section
  if ($('#contact-section').length === 0) {
    return; // Exit if the section doesn't exist on this page
  }

  // Track section visibility
  let activeSection = null;
  let isHeaderSticky = false;
  let formStatus = null;
  
  // Get refs to important elements
  const contactFormSection = $('#contact-form-section');
  const mapSection = $('#map-section');
  
  // =========================================
  // Scroll Handling
  // =========================================
  
  // Handle scroll events for sticky header and active section
  $(window).on('scroll', function() {
    handleScrollEffects();
    updateActiveSection();
  });
  
  // Function to handle scroll effects like sticky header
  function handleScrollEffects() {
    isHeaderSticky = $(window).scrollTop() > 100;
    
    // Add class to header if needed (handled in theme's main JS)
    // This would typically update header styles when scrolled
    if (typeof updateHeader === 'function') {
      updateHeader(isHeaderSticky);
    }
    
    // Add animation to elements when scrolled into view
    animateOnScroll('.unifiedContactCard', 0.6);
    animateOnScroll('.mapWrapper', 0.8);
    animateOnScroll('.enhancedCtaContent', 0.8);
  }
  
  // Function to animate elements when they come into view
  function animateOnScroll(selector, delay) {
    const elements = $(selector);
    if (elements.length) {
      elements.each(function() {
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
            }, delay * 1000);
          }
        }
      });
    }
  }
  
  // Update active section based on scroll position
  function updateActiveSection() {
    const scrollPosition = $(window).scrollTop() + 400;
    
    if (contactFormSection.length && scrollPosition >= contactFormSection.offset().top && 
        scrollPosition < (mapSection.length ? mapSection.offset().top : Infinity)) {
      activeSection = 'contact';
    } else if (mapSection.length && scrollPosition >= mapSection.offset().top) {
      activeSection = 'map';
    } else {
      activeSection = null;
    }
  }
  
  // =========================================
  // Smooth Scrolling
  // =========================================
  
  // Handle scroll to contact form section
  $('#scroll-to-contact-btn').on('click', function() {
    scrollToSection(contactFormSection);
  });
  
  // Handle scroll to map section
  $('#scroll-to-map-btn').on('click', function() {
    scrollToSection(mapSection);
  });
  
  // Function to scroll to a section smoothly
  function scrollToSection(section) {
    if (section && section.length) {
      $('html, body').animate({
        scrollTop: section.offset().top - 120
      }, 800);
    }
  }
  
  // =========================================
  // Form Handling
  // =========================================
  
  // Contact form submission
  $('#contact-form').on('submit', function(e) {
    e.preventDefault();
    
    // Simulate form submission
    formStatus = 'sending';
    
    // Show sending button, hide submit button
    $('#submit-button').hide();
    $('#sending-button').show();
    
    // Simulate API call with a timeout
    setTimeout(function() {
      formStatus = 'success';
      
      // Hide the form, show success message
      $('#contact-form').hide();
      $('#form-success').fadeIn(500);
      
      // Reset the form
      $('#contact-form')[0].reset();
      
      // Reset status after 5 seconds (if needed)
      setTimeout(function() {
        formStatus = null;
      }, 5000);
    }, 1500);
  });
  
  // =========================================
  // CTA Section Effects
  // =========================================
  
  // Add hover effects to CTA buttons
  $('.ctaContactButton').hover(
    function() {
      $(this).css({
        backgroundColor: '#fff',
        color: '#101c17'
      });
    },
    function() {
      $(this).css({
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        color: '#fff'
      });
    }
  );
  
  // =========================================
  // Initialize
  // =========================================
  
  // Run these on page load
  handleScrollEffects();
  updateActiveSection();
  
  // Add animation classes to hero content on load
  $('.modernHeroContent').addClass('animated fadeIn');
  
  // Add animation classes to hero navigation after a delay
  setTimeout(function() {
    $('.heroNavigation').addClass('animated fadeIn');
  }, 500);
});