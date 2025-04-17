document.addEventListener('DOMContentLoaded', function() {
    // Global variables
    let isHeaderSticky = false;
    let activeStage = 1;
    let showCompletion = false;
    let activePopup = null;
    let privacyAccepted = false;
    let referenceNumber = '';
    let activeSection = null;
    let mobileMenuOpen = false;
    let isScrolled = false;
    
    // Form data object
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
        
        // Terms
        termsAccepted: false
    };
    
    // DOM Elements
    const header = document.querySelector('.enhancedHeader');
    const menuButton = document.querySelector('.menuButton');
    const mobileMenu = document.getElementById('mobileMenu');
    const closeMenuButton = document.getElementById('closeMenu');
    const scrollToAppButton = document.getElementById('scrollToApplication');
    const applicationFormRef = document.getElementById('finance-application');
    const progressIndicator = document.getElementById('progressIndicator');
    const privacyAcceptedCheckbox = document.getElementById('privacyAccepted');
    const completionMessage = document.getElementById('completionMessage');
    const referenceNumberSpan = document.getElementById('referenceNumber');
    
    // Form navigation buttons
    const nextStage1Button = document.getElementById('nextStage1');
    const prevStage2Button = document.getElementById('prevStage2');
    const nextStage2Button = document.getElementById('nextStage2');
    const prevStage3Button = document.getElementById('prevStage3');
    const nextStage3Button = document.getElementById('nextStage3');
    
    // Form stages
    const formStages = document.querySelectorAll('.formStage');
    
    // Popup triggers
    const popupTriggers = document.querySelectorAll('[data-popup]');
    const popupCloseButtons = document.querySelectorAll('[data-close-popup]');
    
    // Helper Functions
    function updateFormStage(currentStage, nextStage) {
        formStages.forEach(stage => {
            stage.classList.remove('active');
        });
        
        document.getElementById(getStageId(nextStage)).classList.add('active');
        activeStage = nextStage;
        
        // Update progress bar
        if (progressIndicator) {
            progressIndicator.style.width = `${activeStage * 16.6}%`;
        }
        
        // Scroll to top of form
        if (applicationFormRef) {
            applicationFormRef.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
        }
    }
    
    function getStageId(stage) {
        switch(stage) {
            case 1: return 'privacy-notice';
            case 2: return 'personal-details';
            case 3: return 'address-history';
            case 4: return 'employment-history';
            case 5: return 'affordability';
            case 6: return 'bank-details';
            default: return 'privacy-notice';
        }
    }
    
    function generateReferenceNumber() {
        return 'FIN-' + Math.floor(100000 + Math.random() * 900000);
    }
    
    function showCompletionMessage() {
        // Hide all form stages
        formStages.forEach(stage => {
            stage.style.display = 'none';
        });
        
        // Generate reference number
        referenceNumber = generateReferenceNumber();
        if (referenceNumberSpan) {
            referenceNumberSpan.textContent = referenceNumber;
        }
        
        // Show completion message
        if (completionMessage) {
            completionMessage.style.display = 'block';
        }
        
        // Update progress bar to 100%
        if (progressIndicator) {
            progressIndicator.style.width = '100%';
        }
        
        // Scroll to top of form
        if (applicationFormRef) {
            applicationFormRef.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
        }
    }
    
    function togglePopup(popupId) {
        const popup = document.getElementById(`popup-${popupId}`);
        if (popup) {
            if (popup.style.display === 'flex' || activePopup === popupId) {
                popup.style.display = 'none';
                document.body.style.overflow = 'auto'; // Enable scrolling
                activePopup = null;
            } else {
                // Hide all other popups first
                document.querySelectorAll('.popupOverlay').forEach(p => {
                    p.style.display = 'none';
                });
                
                popup.style.display = 'flex';
                document.body.style.overflow = 'hidden'; // Disable scrolling
                activePopup = popupId;
            }
        }
    }
    
    function closeAllPopups() {
        document.querySelectorAll('.popupOverlay').forEach(popup => {
            popup.style.display = 'none';
        });
        document.body.style.overflow = 'auto'; // Enable scrolling
        activePopup = null;
    }
    
    function handleInputChange(e) {
        const { name, value, type, checked } = e.target;
        
        // Update form data
        if (type === 'checkbox') {
            formData[name] = checked;
        } else {
            formData[name] = value;
        }
        
        // Special case for privacy checkbox
        if (name === 'privacyAccepted') {
            privacyAccepted = checked;
            if (nextStage1Button) {
                nextStage1Button.disabled = !checked;
            }
        }
        
        // Show/hide previous address section based on years at current address
        if (name === 'currentYearsAtAddress') {
            const yearsValue = parseInt(value);
            if (!isNaN(yearsValue) && yearsValue < 3) {
                formData.showPreviousAddress = true;
                // Show previous address fields
                const previousAddressSection = document.querySelector('#address-history .previous-address-section');
                if (previousAddressSection) {
                    previousAddressSection.style.display = 'block';
                }
            } else {
                formData.showPreviousAddress = false;
                // Hide previous address fields
                const previousAddressSection = document.querySelector('#address-history .previous-address-section');
                if (previousAddressSection) {
                    previousAddressSection.style.display = 'none';
                }
            }
        }
        
        // Show/hide previous employment section based on years at current employment
        if (name === 'yearsAtEmployment') {
            const yearsValue = parseInt(value);
            if (!isNaN(yearsValue) && yearsValue < 3) {
                formData.showPreviousEmployment = true;
                // Show previous employment fields
                const previousEmploymentSection = document.querySelector('#employment-history .previous-employment-section');
                if (previousEmploymentSection) {
                    previousEmploymentSection.style.display = 'block';
                }
            } else {
                formData.showPreviousEmployment = false;
                // Hide previous employment fields
                const previousEmploymentSection = document.querySelector('#employment-history .previous-employment-section');
                if (previousEmploymentSection) {
                    previousEmploymentSection.style.display = 'none';
                }
            }
        }
    }
    
    // Event Handlers
    function handleScroll() {
        if (window.scrollY > 100) {
            if (!isHeaderSticky) {
                isHeaderSticky = true;
                if (header) {
                    header.classList.add('headerScrolled');
                }
            }
        } else {
            if (isHeaderSticky) {
                isHeaderSticky = false;
                if (header) {
                    header.classList.remove('headerScrolled');
                }
            }
        }
        
        // Update active section
        const scrollPosition = window.scrollY + 400;
        
        // Define sections and their offsets
        const sections = [
            { id: 'modernHeroWrapper', ref: document.querySelector('.modernHeroWrapper') },
            { id: 'luxuryFeatureSection', ref: document.querySelector('.luxuryFeatureSection') },
            { id: 'financeOptionsWrapper', ref: document.querySelector('.financeOptionsWrapper') },
            { id: 'finance-application', ref: applicationFormRef }
        ];
        
        // Find current active section
        let newActiveSection = null;
        
        for (let i = 0; i < sections.length; i++) {
            const section = sections[i];
            if (section.ref) {
                const sectionTop = section.ref.offsetTop;
                const sectionBottom = sectionTop + section.ref.offsetHeight;
                
                if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                    newActiveSection = section.id;
                    break;
                }
            }
        }
        
        if (newActiveSection !== activeSection) {
            activeSection = newActiveSection;
            
            // Update navigation highlighting if needed
            const navButtons = document.querySelectorAll('.navButton');
            navButtons.forEach(button => {
                button.classList.remove('activeNavButton');
                if (button.getAttribute('data-section') === activeSection) {
                    button.classList.add('activeNavButton');
                }
            });
        }
    }
    
    function toggleMobileMenu() {
        mobileMenuOpen = !mobileMenuOpen;
        if (mobileMenu) {
            if (mobileMenuOpen) {
                mobileMenu.classList.add('active');
                document.body.style.overflow = 'hidden'; // Disable scrolling
            } else {
                mobileMenu.classList.remove('active');
                document.body.style.overflow = 'auto'; // Enable scrolling
            }
        }
    }
    
    function handlePopupClick(e) {
        const popupId = e.currentTarget.getAttribute('data-popup');
        if (popupId) {
            togglePopup(popupId);
        }
    }
    
    function handleClosePopup() {
        closeAllPopups();
    }
    
    function handleOverlayClick(e) {
        if (e.target.classList.contains('popupOverlay')) {
            closeAllPopups();
        }
    }
    
    function scrollToElement(elementId) {
        const element = document.getElementById(elementId);
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    }
    
    // Event Listeners
    window.addEventListener('scroll', handleScroll);
    
    if (menuButton) {
        menuButton.addEventListener('click', toggleMobileMenu);
    }
    
    if (closeMenuButton) {
        closeMenuButton.addEventListener('click', toggleMobileMenu);
    }
    
    if (scrollToAppButton) {
        scrollToAppButton.addEventListener('click', function(e) {
            e.preventDefault();
            scrollToElement('finance-application');
        });
    }
    
    // Popup event listeners
    popupTriggers.forEach(trigger => {
        trigger.addEventListener('click', handlePopupClick);
    });
    
    popupCloseButtons.forEach(button => {
        button.addEventListener('click', handleClosePopup);
    });
    
    // Click outside popup to close
    document.querySelectorAll('.popupOverlay').forEach(overlay => {
        overlay.addEventListener('click', handleOverlayClick);
    });
    
    // Form navigation event listeners
    if (privacyAcceptedCheckbox) {
        privacyAcceptedCheckbox.addEventListener('change', function() {
            privacyAccepted = this.checked;
            if (nextStage1Button) {
                nextStage1Button.disabled = !privacyAccepted;
            }
        });
    }
    
    if (nextStage1Button) {
        nextStage1Button.addEventListener('click', function() {
            if (privacyAccepted) {
                updateFormStage(1, 2);
            } else {
                alert("Please accept the privacy notice to continue.");
            }
        });
    }
    
    if (prevStage2Button) {
        prevStage2Button.addEventListener('click', function() {
            updateFormStage(2, 1);
        });
    }
    
    if (nextStage2Button) {
        nextStage2Button.addEventListener('click', function() {
            // Validate personal details (simplified validation for example)
            let isValid = true;
            const requiredFields = ['title', 'forename', 'surname', 'email', 'mobileTelephone'];
            
            requiredFields.forEach(field => {
                const input = document.getElementById(field);
                if (input && !input.value.trim()) {
                    isValid = false;
                    input.classList.add('error');
                } else if (input) {
                    input.classList.remove('error');
                }
            });
            
            if (isValid) {
                updateFormStage(2, 3);
            } else {
                alert("Please fill in all required fields.");
            }
        });
    }
    
    if (prevStage3Button) {
        prevStage3Button.addEventListener('click', function() {
            updateFormStage(3, 2);
        });
    }
    
    if (nextStage3Button) {
        nextStage3Button.addEventListener('click', function() {
            // Validate address history (simplified validation for example)
            let isValid = true;
            const requiredFields = ['currentPostcode', 'currentNameNumber', 'currentAddressLine1', 'currentTownCity'];
            
            requiredFields.forEach(field => {
                const input = document.getElementById(field);
                if (input && !input.value.trim()) {
                    isValid = false;
                    input.classList.add('error');
                } else if (input) {
                    input.classList.remove('error');
                }
            });
            
            if (isValid) {
                updateFormStage(3, 4);
            } else {
                alert("Please fill in all required fields.");
            }
        });
    }
    
    // Attach event listeners to all form inputs
    document.querySelectorAll('.formInput, .formGroup input[type="checkbox"]').forEach(input => {
        input.addEventListener('change', handleInputChange);
    });
    
    // Initialise page state
    handleScroll(); // Set initial header state
    
    // Add listeners for form completion (simplified)
    document.getElementById('submitForm')?.addEventListener('click', function(e) {
        e.preventDefault();
        // Validate final form data and submit
        showCompletionMessage();
    });
});