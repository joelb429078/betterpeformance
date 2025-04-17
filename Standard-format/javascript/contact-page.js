document.addEventListener('DOMContentLoaded', function() {
    // Global variables
    let mobileMenuOpen = false;
    let isScrolled = false;
    let formSubmitting = false;
    
    // DOM Elements
    const header = document.querySelector('.enhancedHeader');
    const menuButton = document.querySelector('.menuButton');
    const mobileMenu = document.getElementById('mobileMenu');
    const closeMenuButton = document.getElementById('closeMenu');
    const contactForm = document.getElementById('contactForm');
    const submitButton = document.getElementById('submitForm');
    
    // Helper Functions
    function validateEmail(email) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email.toLowerCase());
    }
    
    function validatePhone(phone) {
        // Basic phone validation - accepts formats like +447123456789, 07123456789, 01234 567890
        const re = /^(\+44\s?7\d{3}|\(?07\d{3}\)?)\s?\d{3}\s?\d{3}$|^(\+44\s?|0)1\d{1,4}\s?\d{5,10}$/;
        return re.test(phone.trim());
    }
    
    function showFormError(input, message) {
        const formGroup = input.closest('.formGroup');
        formGroup.classList.add('error');
        
        // Check if error message already exists
        let errorElement = formGroup.querySelector('.errorMessage');
        if (!errorElement) {
            errorElement = document.createElement('span');
            errorElement.className = 'errorMessage';
            errorElement.style.color = 'red';
            errorElement.style.fontSize = '0.8rem';
            errorElement.style.display = 'block';
            errorElement.style.marginTop = '5px';
            formGroup.appendChild(errorElement);
        }
        
        errorElement.textContent = message;
    }
    
    function clearFormErrors() {
        const errorElements = document.querySelectorAll('.errorMessage');
        errorElements.forEach(element => {
            element.parentNode.classList.remove('error');
            element.remove();
        });
    }
    
    function resetForm() {
        if (contactForm) {
            contactForm.reset();
            clearFormErrors();
        }
    }
    
    // Event Handlers
    function handleScroll() {
        if (window.scrollY > 100) {
            if (!isScrolled) {
                isScrolled = true;
                if (header) {
                    header.classList.add('headerScrolled');
                }
            }
        } else {
            if (isScrolled) {
                isScrolled = false;
                if (header) {
                    header.classList.remove('headerScrolled');
                }
            }
        }
        
        // Update active section highlighting if needed
        const scrollPosition = window.scrollY + 200;
        
        const sections = [
            { id: 'enhancedContactSection', ref: document.querySelector('.enhancedContactSection') },
            { id: 'map-section', ref: document.getElementById('map-section') },
            { id: 'enhancedCtaSection', ref: document.querySelector('.enhancedCtaSection') }
        ];
        
        let activeSection = null;
        
        for (let i = 0; i < sections.length; i++) {
            const section = sections[i];
            if (section.ref) {
                const sectionTop = section.ref.offsetTop;
                const sectionBottom = sectionTop + section.ref.offsetHeight;
                
                if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                    activeSection = section.id;
                    break;
                }
            }
        }
        
        // Update nav highlighting if needed
        if (activeSection) {
            document.querySelectorAll('.navLink').forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('data-section') === activeSection) {
                    link.classList.add('active');
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
    
    function handleContactFormSubmit(e) {
        e.preventDefault();
        
        // Don't submit multiple times
        if (formSubmitting) return;
        
        // Clear previous errors
        clearFormErrors();
        
        // Get form data
        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData.entries());
        
        // Simple validation
        let isValid = true;
        
        // Check required fields
        const requiredFields = ['firstName', 'lastName', 'email', 'phone', 'subject', 'message'];
        for (const field of requiredFields) {
            const input = document.getElementById(field);
            if (!input || !input.value.trim()) {
                isValid = false;
                showFormError(input, 'This field is required');
            }
        }
        
        // Validate email format
        const emailInput = document.getElementById('email');
        if (emailInput && emailInput.value.trim() && !validateEmail(emailInput.value)) {
            isValid = false;
            showFormError(emailInput, 'Please enter a valid email address');
        }
        
        // Validate phone format
        const phoneInput = document.getElementById('phone');
        if (phoneInput && phoneInput.value.trim() && !validatePhone(phoneInput.value)) {
            isValid = false;
            showFormError(phoneInput, 'Please enter a valid phone number');
        }
        
        // Check privacy consent
        const privacyConsent = document.getElementById('privacyConsent');
        if (privacyConsent && !privacyConsent.checked) {
            isValid = false;
            showFormError(privacyConsent, 'You must consent to our privacy policy');
        }
        
        if (!isValid) {
            // Scroll to first error
            const firstError = document.querySelector('.error');
            if (firstError) {
                firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
            return;
        }
        
        // Form is valid, proceed with submission
        formSubmitting = true;
        
        // Show submitting state
        if (submitButton) {
            const originalButtonText = submitButton.innerHTML;
            submitButton.innerHTML = '<span class="sendingSpinner"></span> Sending...';
            submitButton.disabled = true;
            
            // Simulate form submission (replace with actual AJAX submission)
            setTimeout(() => {
                // Reset submit button
                submitButton.innerHTML = '<i class="fas fa-check"></i> Message Sent!';
                
                // Show success message
                const successMessage = document.createElement('div');
                successMessage.className = 'formSuccess';
                successMessage.style.backgroundColor = 'rgba(6, 168, 91, 0.1)';
                successMessage.style.color = '#04864a';
                successMessage.style.padding = '15px';
                successMessage.style.borderRadius = '8px';
                successMessage.style.marginTop = '20px';
                successMessage.style.fontWeight = '500';
                successMessage.innerHTML = '<i class="fas fa-check-circle"></i> Thank you for your message! We will get back to you shortly.';
                
                contactForm.appendChild(successMessage);
                
                // Reset form after delay
                setTimeout(() => {
                    resetForm();
                    submitButton.innerHTML = originalButtonText;
                    submitButton.disabled = false;
                    successMessage.remove();
                    formSubmitting = false;
                }, 3000);
            }, 1500);
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
    
    if (contactForm) {
        contactForm.addEventListener('submit', handleContactFormSubmit);
    }
    
    // Form input listeners for immediate validation feedback
    document.querySelectorAll('.formInput').forEach(input => {
        input.addEventListener('blur', function() {
            // Remove existing error
            const formGroup = this.closest('.formGroup');
            const errorMessage = formGroup.querySelector('.errorMessage');
            if (errorMessage) {
                formGroup.classList.remove('error');
                errorMessage.remove();
            }
            
            // Check if field is required and empty
            if (this.required && !this.value.trim()) {
                showFormError(this, 'This field is required');
            }
            
            // Validate email format
            if (this.type === 'email' && this.value.trim() && !validateEmail(this.value)) {
                showFormError(this, 'Please enter a valid email address');
            }
            
            // Validate phone format
            if (this.id === 'phone' && this.value.trim() && !validatePhone(this.value)) {
                showFormError(this, 'Please enter a valid phone number');
            }
        });
    });
    
    // Initialise page state
    handleScroll(); // Set initial header state
});