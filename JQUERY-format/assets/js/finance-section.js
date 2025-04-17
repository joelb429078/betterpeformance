/**
 * Finance Section jQuery Script
 * 
 * This script handles all the interactivity for the Finance section including:
 * - Form navigation and validation
 * - Popup displays
 * - Scroll animations
 * - Header styling on scroll
 */

jQuery(function($) {
  // Variables
  let activeStage = 1;
  let privacyAccepted = false;
  let showCompletion = false;
  let isHeaderSticky = false;
  let activePopup = null;
  let activeSection = null;
  let formData = {}; 

  // Check if we're in the alt-section
  if ($('#alt-section').length === 0) {
    return; // Exit if the section doesn't exist on this page
  }

  // =========================================
  // Form Navigation Functions
  // =========================================
  
  // Handle privacy checkbox toggle
  $('#privacy-accepted').on('change', function() {
    privacyAccepted = $(this).is(':checked');
    
    if (privacyAccepted) {
      $('#privacy-continue-btn').prop('disabled', false);
    } else {
      $('#privacy-continue-btn').prop('disabled', true);
    }
  });
  
  // Privacy notice continue button
  $('#privacy-continue-btn').on('click', function() {
    if (privacyAccepted) {
      nextStage(1, 2);
    } else {
      alert("Please accept the privacy notice to continue.");
    }
  });
  
  // Next stage button clicks
  $('.next-stage-btn').on('click', function() {
    const current = parseInt($(this).data('current'));
    const next = parseInt($(this).data('next'));
    nextStage(current, next);
  });
  
  // Previous stage button clicks
  $('.prev-stage-btn').on('click', function() {
    const current = parseInt($(this).data('current'));
    const prev = parseInt($(this).data('prev'));
    prevStage(current, prev);
  });
  
  // Submit form button click
  $('#submit-form-btn').on('click', function() {
    handleShowCompletion();
  });
  
  // Function to handle next stage navigation
  function nextStage(current, next) {
    // You could add validation here
    let validStage = true;
    
    // Validate current stage
    if (current === 1 && !privacyAccepted) {
      alert("Please accept the privacy notice to continue.");
      validStage = false;
    }
    
    if (validStage) {
      activeStage = next;
      updateFormDisplay();
      
      // Scroll to top of form
      $('html, body').animate({
        scrollTop: $('#finance-application').offset().top - 50
      }, 500);
      
      // Update progress indicator
      updateProgress();
    }
  }
  
  // Function to handle previous stage navigation
  function prevStage(current, prev) {
    activeStage = prev;
    updateFormDisplay();
    
    // Scroll to top of form
    $('html, body').animate({
      scrollTop: $('#finance-application').offset().top - 50
    }, 500);
    
    // Update progress indicator
    updateProgress();
  }
  
  // Function to update the form display based on the active stage
  function updateFormDisplay() {
    $('.formStage').removeClass('active');
    $('#privacy-notice, #personal-details, #address-history, #employment-history, #affordability, #bank-details').removeClass('active');
    
    switch(activeStage) {
      case 1:
        $('#privacy-notice').addClass('active');
        break;
      case 2:
        $('#personal-details').addClass('active');
        break;
      case 3:
        $('#address-history').addClass('active');
        break;
      case 4:
        $('#employment-history').addClass('active');
        break;
      case 5:
        $('#affordability').addClass('active');
        break;
      case 6:
        $('#bank-details').addClass('active');
        break;
    }
  }
  
  // Function to update progress bar
  function updateProgress() {
    if (showCompletion) {
      $('.progressIndicator').css('width', '100%');
    } else {
      const width = activeStage * 16.6; // 6 stages, each representing 16.6%
      $('.progressIndicator').css('width', width + '%');
    }
  }
  
  // Function to show completion message
  function handleShowCompletion() {
    // Generate reference number
    const refNumber = 'FIN-' + Math.floor(100000 + Math.random() * 900000);
    $('#reference-number').text(refNumber);
    
    showCompletion = true;
    
    // Hide all form stages and show completion
    $('.formStage').hide();
    $('.formCompletion').show();
    
    // Update progress indicator
    updateProgress();
    
    // Scroll to top of form
    $('html, body').animate({
      scrollTop: $('#finance-application').offset().top - 50
    }, 500);
  }
  
  // =========================================
  // Popup Functions
  // =========================================
  
  // Open popup on button click
  $('.popup-trigger').on('click', function() {
    const popup = $(this).data('popup');
    openPopup(popup);
  });
  
  // Close popup on button click
  $('.closePopup').on('click', function() {
    const popup = $(this).data('popup');
    closePopup(popup);
  });
  
  // Close popup when clicking outside of it
  $(document).on('click', '.popupOverlay', function(e) {
    if ($(e.target).hasClass('popupOverlay')) {
      closePopup();
    }
  });
  
  // Function to open popup
  function openPopup(popup) {
    activePopup = popup;
    $('#' + popup + '-popup').fadeIn(300);
    $('body').css('overflow', 'hidden'); // Prevent scrolling when popup is open
  }
  
  // Function to close popup
  function closePopup() {
    $('.popupOverlay').fadeOut(300);
    activePopup = null;
    $('body').css('overflow', 'auto'); // Enable scrolling when popup is closed
  }
  
  // =========================================
  // Scroll Handling
  // =========================================
  
  // Scroll to application form on button click
  $('#apply-now-btn').on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({
      scrollTop: $('#finance-application').offset().top - 50
    }, 800);
  });
  
  // Handle scroll events
  $(window).on('scroll', function() {
    handleScroll();
    updateActiveSection();
  });
  
  // Function to handle sticky header and other scroll-based animations
  function handleScroll() {
    // Determine if header should be sticky
    isHeaderSticky = $(window).scrollTop() > 100;
    
    // Add animation class to feature section when scrolled into view
    const featureSection = $('.luxuryFeatureSection');
    if (featureSection.length) {
      const trigger = featureSection.offset().top - $(window).height() * 0.8;
      if ($(window).scrollTop() > trigger) {
        featureSection.addClass('animate');
      }
    }
    
    // Add animation to finance options when scrolled into view
    const financeOptions = $('.financeOption');
    if (financeOptions.length) {
      financeOptions.each(function(index) {
        const $option = $(this);
        const trigger = $option.offset().top - $(window).height() * 0.8;
        if ($(window).scrollTop() > trigger) {
          setTimeout(function() {
            $option.addClass('animate');
          }, index * 150); // Staggered animation
        }
      });
    }
  }
  
  // Function to update active section based on scroll position
  function updateActiveSection() {
    const scrollPosition = $(window).scrollTop() + 200;
    
    const overviewSection = $('.luxuryFeatureSection');
    const optionsSection = $('.financeOptionsWrapper');
    const applicationSection = $('#finance-application');
    
    if (overviewSection.length && scrollPosition >= overviewSection.offset().top && 
        scrollPosition < (optionsSection.length ? optionsSection.offset().top : Infinity)) {
      activeSection = 'overview';
    } else if (optionsSection.length && scrollPosition >= optionsSection.offset().top && 
              scrollPosition < (applicationSection.length ? applicationSection.offset().top : Infinity)) {
      activeSection = 'options';
    } else if (applicationSection.length && scrollPosition >= applicationSection.offset().top) {
      activeSection = 'application';
    } else {
      activeSection = null;
    }
  }
  
  // =========================================
  // Form Input Handling
  // =========================================
  
  // Track form input changes
  $('.formInput').on('change', function() {
    const name = $(this).attr('name');
    const value = $(this).val();
    const type = $(this).attr('type');
    const isCheckbox = type === 'checkbox';
    
    formData[name] = isCheckbox ? $(this).is(':checked') : value;
    
    // Show/hide previous address section based on years at current address
    if (name === 'currentYearsAtAddress' && parseInt(value) < 3) {
      $('#previous-address-section').show();
      formData.showPreviousAddress = true;
    } else if (name === 'currentYearsAtAddress' && parseInt(value) >= 3) {
      $('#previous-address-section').hide();
      formData.showPreviousAddress = false;
    }
    
    // Show/hide previous employment section based on years at current employment
    if (name === 'yearsAtEmployment' && parseInt(value) < 3) {
      $('#previous-employment-section').show();
      formData.showPreviousEmployment = true;
    } else if (name === 'yearsAtEmployment' && parseInt(value) >= 3) {
      $('#previous-employment-section').hide();
      formData.showPreviousEmployment = false;
    }
  });
  
  // =========================================
  // Initialize
  // =========================================
  
  // Initial setup
  updateFormDisplay();
  updateProgress();
  handleScroll();
  updateActiveSection();
});