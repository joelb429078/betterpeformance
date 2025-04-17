// State variables to track form progress and data
let activeStage = 1;
let showCompletion = false;
let activePopup = null;
let privacyAccepted = false;
let referenceNumber = '';
let isHeaderSticky = false;
let activeSection = null;
let isScrolled = false;

// Form data object to store all input values
const formData = {
  // Personal Details
  title: '',
  forename: '',
  middleName: '',
  surname: '',
  homeTelephone: '',
  mobileTelephone: '',
  email: '',
  dateOfBirth: '',
  gender: '',
  nationality: '',
  maritalStatus: '',
  dependants: '',
  highNetWorth: '',
  businessUse: '',
  
  // Current Address
  currentPostcode: '',
  currentNameNumber: '',
  currentAddressLine1: '',
  currentAddressLine2: '',
  currentAddressLine3: '',
  currentTownCity: '',
  currentCounty: '',
  currentYearsAtAddress: '',
  currentMonthsAtAddress: '',
  currentAccommodationType: '',
  
  // Previous Address (if less than 3 years)
  showPreviousAddress: false,
  previousPostcode: '',
  previousNameNumber: '',
  previousAddressLine1: '',
  previousAddressLine2: '',
  previousAddressLine3: '',
  previousTownCity: '',
  previousCounty: '',
  previousYearsAtAddress: '',
  previousMonthsAtAddress: '',
  previousAccommodationType: '',
  
  // Employment Details
  employerPostcode: '',
  employerNameNumber: '',
  employerAddressLine1: '',
  employerAddressLine2: '',
  employerTownCity: '',
  employerCounty: '',
  employer: '',
  employerPhone: '',
  occupation: '',
  employmentBasis: '',
  employmentCategory: '',
  yearsAtEmployment: '',
  monthsAtEmployment: '',
  grossAnnualIncome: '',
  
  // Previous Employment (if less than 3 years)
  showPreviousEmployment: false,
  prevEmployerPostcode: '',
  prevEmployerNameNumber: '',
  prevEmployerAddressLine1: '',
  prevEmployerAddressLine2: '',
  prevEmployerTownCity: '',
  prevEmployerCounty: '',
  prevEmployer: '',
  prevEmployerPhone: '',
  prevOccupation: '',
  prevEmploymentBasis: '',
  prevEmploymentCategory: '',
  prevYearsAtEmployment: '',
  prevMonthsAtEmployment: '',
  prevGrossAnnualIncome: '',
  
  // Affordability Questions
  replacingExistingFinance: '',
  additionalPrimaryIncome: '',
  additionalPrimaryIncomeAmount: '',
  secondaryIncome: '',
  secondaryIncomeAmount: '',
  monthlyMortgageRental: '',
  monthlyLivingCosts: '',
  securedCommitments: '',
  securedCommitmentsAmount: '',
  unsecuredCommitments: '',
  unsecuredCommitmentsAmount: '',
  
  // Bank Details
  accountName: '',
  accountType: '',
  sortCode: '',
  accountNumber: '',
  bankName: '',
  branchName: '',
  bankAddress: '',
  yearsAtBank: '',
  
  // Terms Accepted Check
  termsAccepted: false
};

// DOM Elements - Will be initialized in DOMContentLoaded
let header, applicationForm, progressIndicator, formStages, applyNowBtn;
let privacyCheckbox, privacyNextBtn;
let currentYearsAtAddressInput, previousAddressSection;
let yearsAtEmploymentInput, previousEmploymentSection;
let additionalPrimaryIncomeSelect, additionalPrimaryIncomeAmountGroup;
let secondaryIncomeSelect, secondaryIncomeAmountGroup;
let securedCommitmentsSelect, securedCommitmentsAmountGroup;
let unsecuredCommitmentsSelect, unsecuredCommitmentsAmountGroup;
let hpLearnMoreBtn, pcpLearnMoreBtn, specialistLearnMoreBtn;
let hpPopup, pcpPopup, specialistPopup;
let closeHpPopupBtn, closePcpPopupBtn, closeSpecialistPopupBtn;
let termsAcceptedCheckbox, submitProposalBtn;
let completionMessage, referenceNumberSpan;

// Form navigation buttons
let personalDetailsPrevBtn, personalDetailsNextBtn;
let addressHistoryPrevBtn, addressHistoryNextBtn;
let employmentHistoryPrevBtn, employmentHistoryNextBtn;
let affordabilityPrevBtn, affordabilityNextBtn;
let bankDetailsPrevBtn;

// Function to update the progress bar
function updateProgressBar() {
  if (showCompletion) {
    progressIndicator.style.width = '100%';
  } else {
    progressIndicator.style.width = `${activeStage * 16.6}%`;
  }
}

// Function to show the active form stage
function showFormStage(stageNumber) {
  formStages.forEach((stage, index) => {
    if (index + 1 === stageNumber) {
      stage.style.display = 'block';
      stage.classList.add('active');
    } else {
      stage.style.display = 'none';
      stage.classList.remove('active');
    }
  });
  
  // Update progress indicator
  activeStage = stageNumber;
  updateProgressBar();
  
  // Scroll to top of form
  applicationForm.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// Function to handle next stage navigation
function nextStage(current, next) {
  // Simple validation for each stage
  let validStage = true;
  
  // Validate current stage
  if (current === 1 && !privacyAccepted) {
    alert("Please accept the privacy notice to continue.");
    validStage = false;
  }
  
  if (validStage) {
    showFormStage(next);
  }
}

// Function to handle previous stage navigation
function prevStage(current, prev) {
  showFormStage(prev);
}

// Function to show completion message
function handleShowCompletion() {
  // Generate reference number
  referenceNumber = 'FIN-' + Math.floor(100000 + Math.random() * 900000);
  referenceNumberSpan.textContent = referenceNumber;
  
  // Show completion message
  formStages.forEach(stage => {
    stage.style.display = 'none';
  });
  completionMessage.style.display = 'block';
  showCompletion = true;
  updateProgressBar();
}

// Function to handle form input changes
function handleInputChange(e) {
  const { name, value, type, checked } = e.target;
  
  // Update formData
  formData[name] = type === 'checkbox' ? checked : value;
  
  // Show/hide previous address section based on years at current address
  if (name === 'currentYearsAtAddress') {
    if (parseInt(value) < 3) {
      formData.showPreviousAddress = true;
      previousAddressSection.style.display = 'block';
    } else {
      formData.showPreviousAddress = false;
      previousAddressSection.style.display = 'none';
    }
  }
  
  // Show/hide previous employment section based on years at current employment
  if (name === 'yearsAtEmployment') {
    if (parseInt(value) < 3) {
      formData.showPreviousEmployment = true;
      previousEmploymentSection.style.display = 'block';
    } else {
      formData.showPreviousEmployment = false;
      previousEmploymentSection.style.display = 'none';
    }
  }
  
  // Show/hide additional primary income amount field
  if (name === 'additionalPrimaryIncome') {
    if (value === 'Yes') {
      additionalPrimaryIncomeAmountGroup.style.display = 'block';
    } else {
      additionalPrimaryIncomeAmountGroup.style.display = 'none';
      formData.additionalPrimaryIncomeAmount = '';
    }
  }
  
  // Show/hide secondary income amount field
  if (name === 'secondaryIncome') {
    if (value === 'Yes') {
      secondaryIncomeAmountGroup.style.display = 'block';
    } else {
      secondaryIncomeAmountGroup.style.display = 'none';
      formData.secondaryIncomeAmount = '';
    }
  }
  
  // Show/hide secured commitments amount field
  if (name === 'securedCommitments') {
    if (value === 'Yes') {
      securedCommitmentsAmountGroup.style.display = 'block';
    } else {
      securedCommitmentsAmountGroup.style.display = 'none';
      formData.securedCommitmentsAmount = '';
    }
  }
  
  // Show/hide unsecured commitments amount field
  if (name === 'unsecuredCommitments') {
    if (value === 'Yes') {
      unsecuredCommitmentsAmountGroup.style.display = 'block';
    } else {
      unsecuredCommitmentsAmountGroup.style.display = 'none';
      formData.unsecuredCommitmentsAmount = '';
    }
  }
  
  // Enable privacy next button when privacy is accepted
  if (name === 'privacy-accepted') {
    privacyAccepted = checked;
    privacyNextBtn.disabled = !checked;
  }
}

// Function to set up all input event listeners
function setupFormInputListeners() {
  // Get all input elements
  const inputs = document.querySelectorAll('input, select, textarea');
  
  // Add change event listeners to all inputs
  inputs.forEach(input => {
    input.addEventListener('change', e => {
      // Special handler for privacy checkbox
      if (input.id === 'privacy-accepted') {
        privacyAccepted = input.checked;
        privacyNextBtn.disabled = !privacyAccepted;
      } else if (input.name) {
        handleInputChange({
          target: {
            name: input.name,
            value: input.value,
            type: input.type,
            checked: input.checked
          }
        });
      }
    });
  });
  
  // Add specific listener for years at address
  currentYearsAtAddressInput.addEventListener('change', e => {
    const years = parseInt(e.target.value);
    if (years < 3) {
      previousAddressSection.style.display = 'block';
    } else {
      previousAddressSection.style.display = 'none';
    }
  });
  
  // Add specific listener for years at employment
  yearsAtEmploymentInput.addEventListener('change', e => {
    const years = parseInt(e.target.value);
    if (years < 3) {
      previousEmploymentSection.style.display = 'block';
    } else {
      previousEmploymentSection.style.display = 'none';
    }
  });
  
  // Add listeners for conditional fields in Affordability section
  additionalPrimaryIncomeSelect.addEventListener('change', e => {
    if (e.target.value === 'Yes') {
      additionalPrimaryIncomeAmountGroup.style.display = 'block';
    } else {
      additionalPrimaryIncomeAmountGroup.style.display = 'none';
    }
  });
  
  secondaryIncomeSelect.addEventListener('change', e => {
    if (e.target.value === 'Yes') {
      secondaryIncomeAmountGroup.style.display = 'block';
    } else {
      secondaryIncomeAmountGroup.style.display = 'none';
    }
  });
  
  securedCommitmentsSelect.addEventListener('change', e => {
    if (e.target.value === 'Yes') {
      securedCommitmentsAmountGroup.style.display = 'block';
    } else {
      securedCommitmentsAmountGroup.style.display = 'none';
    }
  });
  
  unsecuredCommitmentsSelect.addEventListener('change', e => {
    if (e.target.value === 'Yes') {
      unsecuredCommitmentsAmountGroup.style.display = 'block';
    } else {
      unsecuredCommitmentsAmountGroup.style.display = 'none';
    }
  });
}

// Function to handle opening a popup
function openPopup(popupId) {
  activePopup = popupId;
  document.body.style.overflow = 'hidden'; // Prevent scrolling when popup is open
  
  // Show the appropriate popup
  if (popupId === 'hp') {
    hpPopup.style.display = 'flex'; // Changed from 'block' to 'flex'
  } else if (popupId === 'pcp') {
    pcpPopup.style.display = 'flex'; // Changed from 'block' to 'flex'
  } else if (popupId === 'specialist') {
    specialistPopup.style.display = 'flex'; // Changed from 'block' to 'flex'
  }
}

// Function to handle closing a popup
function closePopup() {
  // Hide all popups
  hpPopup.style.display = 'none';
  pcpPopup.style.display = 'none';
  specialistPopup.style.display = 'none';
  
  // Enable scrolling
  document.body.style.overflow = 'auto';
  activePopup = null;
}

// Function to handle scroll events
function handleScroll() {
  // Header sticky state
  if (window.scrollY > 100) {
    header.classList.add('headerScrolled');
    isHeaderSticky = true;
  } else {
    header.classList.remove('headerScrolled');
    isHeaderSticky = false;
  }
  
  // Active section tracking
  const scrollPosition = window.scrollY + 200;
  
  const overviewSection = document.querySelector('.luxuryFeatureSection');
  const optionsSection = document.querySelector('.financeOptionsWrapper');
  const applicationSection = document.getElementById('finance-application');
  
  if (overviewSection && scrollPosition >= overviewSection.offsetTop && 
      scrollPosition < (optionsSection ? optionsSection.offsetTop : Infinity)) {
    activeSection = 'overview';
  } else if (optionsSection && scrollPosition >= optionsSection.offsetTop && 
            scrollPosition < (applicationSection ? applicationSection.offsetTop : Infinity)) {
    activeSection = 'options';
  } else if (applicationSection && scrollPosition >= applicationSection.offsetTop) {
    activeSection = 'application';
  } else {
    activeSection = null;
  }
  
  // Header transparency based on scroll position
  if (window.scrollY > 50) {
    isScrolled = true;
  } else {
    isScrolled = false;
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
  
  // Animate hero navigation buttons
  const heroNavigation = document.querySelector('.heroNavigation');
  if (heroNavigation) {
    heroNavigation.style.opacity = '0';
    heroNavigation.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
      heroNavigation.style.opacity = '1';
    }, 600);
  }
  
  // Add animation to finance options when they come into view
  const financeOptions = document.querySelectorAll('.financeOption');
  financeOptions.forEach((option, index) => {
    option.style.opacity = '0';
    option.style.transform = 'translateY(30px)';
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            entry.target.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
          }, index * 150);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });
    
    observer.observe(option);
  });
}

// Initialize on DOM content loaded
document.addEventListener('DOMContentLoaded', function() {
  // Get DOM elements
  header = document.querySelector('.enhancedHeader');
  applicationForm = document.querySelector('.applicationForm');
  progressIndicator = document.getElementById('progress-indicator');
  formStages = document.querySelectorAll('.formStage');
  applyNowBtn = document.getElementById('apply-now-btn');
  
  // Privacy notice elements
  privacyCheckbox = document.getElementById('privacy-accepted');
  privacyNextBtn = document.getElementById('privacy-next-button');
  
  // Navigation buttons
  personalDetailsPrevBtn = document.getElementById('personal-details-prev');
  personalDetailsNextBtn = document.getElementById('personal-details-next');
  addressHistoryPrevBtn = document.getElementById('address-history-prev');
  addressHistoryNextBtn = document.getElementById('address-history-next');
  employmentHistoryPrevBtn = document.getElementById('employment-history-prev');
  employmentHistoryNextBtn = document.getElementById('employment-history-next');
  affordabilityPrevBtn = document.getElementById('affordability-prev');
  affordabilityNextBtn = document.getElementById('affordability-next');
  bankDetailsPrevBtn = document.getElementById('bank-details-prev');
  submitProposalBtn = document.getElementById('submit-proposal');
  
  // Conditional form sections
  currentYearsAtAddressInput = document.getElementById('currentYearsAtAddress');
  previousAddressSection = document.getElementById('previous-address-section');
  yearsAtEmploymentInput = document.getElementById('yearsAtEmployment');
  previousEmploymentSection = document.getElementById('previous-employment-section');
  
  // Conditional fields in Affordability section
  additionalPrimaryIncomeSelect = document.getElementById('additionalPrimaryIncome');
  additionalPrimaryIncomeAmountGroup = document.getElementById('additionalPrimaryIncomeAmountGroup');
  secondaryIncomeSelect = document.getElementById('secondaryIncome');
  secondaryIncomeAmountGroup = document.getElementById('secondaryIncomeAmountGroup');
  securedCommitmentsSelect = document.getElementById('securedCommitments');
  securedCommitmentsAmountGroup = document.getElementById('securedCommitmentsAmountGroup');
  unsecuredCommitmentsSelect = document.getElementById('unsecuredCommitments');
  unsecuredCommitmentsAmountGroup = document.getElementById('unsecuredCommitmentsAmountGroup');
  
  // Popup buttons
  hpLearnMoreBtn = document.getElementById('hp-learn-more');
  pcpLearnMoreBtn = document.getElementById('pcp-learn-more');
  specialistLearnMoreBtn = document.getElementById('specialist-learn-more');
  
  // Popup elements
  hpPopup = document.getElementById('hp-popup');
  pcpPopup = document.getElementById('pcp-popup');
  specialistPopup = document.getElementById('specialist-popup');
  
  // Popup close buttons
  closeHpPopupBtn = document.getElementById('close-hp-popup');
  closePcpPopupBtn = document.getElementById('close-pcp-popup');
  closeSpecialistPopupBtn = document.getElementById('close-specialist-popup');
  
  // Form completion elements
  termsAcceptedCheckbox = document.getElementById('termsAccepted');
  completionMessage = document.getElementById('completion-message');
  referenceNumberSpan = document.getElementById('reference-number');
  
  // Set up scroll event listener
  window.addEventListener('scroll', handleScroll);
  
  // Set up form input listeners
  setupFormInputListeners();
  
  // Set up navigation button event listeners
  applyNowBtn.addEventListener('click', () => {
    document.getElementById('finance-application').scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
  
  // Privacy form navigation
  privacyNextBtn.addEventListener('click', () => nextStage(1, 2));
  
  // Personal Details form navigation
  personalDetailsPrevBtn.addEventListener('click', () => prevStage(2, 1));
  personalDetailsNextBtn.addEventListener('click', () => nextStage(2, 3));
  
  // Address History form navigation
  addressHistoryPrevBtn.addEventListener('click', () => prevStage(3, 2));
  addressHistoryNextBtn.addEventListener('click', () => nextStage(3, 4));
  
  // Employment History form navigation
  employmentHistoryPrevBtn.addEventListener('click', () => prevStage(4, 3));
  employmentHistoryNextBtn.addEventListener('click', () => nextStage(4, 5));
  
  // Affordability form navigation
  affordabilityPrevBtn.addEventListener('click', () => prevStage(5, 4));
  affordabilityNextBtn.addEventListener('click', () => nextStage(5, 6));
  
  // Bank Details form navigation
  bankDetailsPrevBtn.addEventListener('click', () => prevStage(6, 5));
  submitProposalBtn.addEventListener('click', handleShowCompletion);
  
  // Popup button event listeners
  hpLearnMoreBtn.addEventListener('click', () => openPopup('hp'));
  pcpLearnMoreBtn.addEventListener('click', () => openPopup('pcp'));
  specialistLearnMoreBtn.addEventListener('click', () => openPopup('specialist'));
  
  // Popup close button event listeners
  closeHpPopupBtn.addEventListener('click', closePopup);
  closePcpPopupBtn.addEventListener('click', closePopup);
  closeSpecialistPopupBtn.addEventListener('click', closePopup);
  
  // Close popup when clicking outside of it
  document.querySelectorAll('.popupOverlay').forEach(overlay => {
    overlay.addEventListener('click', (e) => {
      if (e.target.classList.contains('popupOverlay')) {
        closePopup();
      }
    });
  });
  
  // Initialize page state
  handleScroll();
  setupAnimations();
  
  // Initialize popup overlays
  document.querySelectorAll('.popupOverlay').forEach(overlay => {
    overlay.style.display = 'none';
  });
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
});