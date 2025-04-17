document.addEventListener('DOMContentLoaded', function() {
    // Global variables
    let mobileMenuOpen = false;
    let isScrolled = false;
    let activeTabPanel = 'standard';
    
    // DOM Elements
    const header = document.querySelector('.enhancedHeader');
    const menuButton = document.querySelector('.menuButton');
    const mobileMenu = document.getElementById('mobileMenu');
    const closeMenuButton = document.getElementById('closeMenu');
    const warrantyTabs = document.querySelectorAll('.warrantyTab');
    const tabPanels = document.querySelectorAll('.tabPanel');
    const warrantyNav = document.querySelector('.warrantyNav');
    const faqItems = document.querySelectorAll('.faqItem');
    
    // Helper Functions
    function showTabPanel(tabId) {
        // Hide all panels
        tabPanels.forEach(panel => {
            panel.classList.remove('active');
        });
        
        // Show selected panel
        const panel = document.getElementById(`${tabId}-panel`);
        if (panel) {
            panel.classList.add('active');
        }
        
        // Update tabs
        warrantyTabs.forEach(tab => {
            tab.classList.remove('activeTab');
            if (tab.getAttribute('data-tab') === tabId) {
                tab.classList.add('activeTab');
            }
        });
        
        activeTabPanel = tabId;
    }
    
    function toggleFaqItem(item) {
        const isActive = item.classList.contains('faqActive');
        
        // Close all items
        faqItems.forEach(faq => {
            faq.classList.remove('faqActive');
        });
        
        // Toggle clicked item
        if (!isActive) {
            item.classList.add('faqActive');
        }
    }
    
    // Event Handlers
    function handleScroll() {
        // Header transparency effect
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
        
        // Sticky nav for warranty options
        if (warrantyNav) {
            const warrantyOptions = document.getElementById('warranty-options');
            if (warrantyOptions) {
                const navTop = warrantyOptions.offsetTop;
                if (window.scrollY >= navTop) {
                    warrantyNav.classList.add('stickyNav');
                } else {
                    warrantyNav.classList.remove('stickyNav');
                }
            }
        }
        
        // Update active section highlighting if needed
        const scrollPosition = window.scrollY + 200;
        
        const sections = [
            { id: 'warrantyOverviewContainer', ref: document.querySelector('.warrantyOverviewContainer') },
            { id: 'warranty-options', ref: document.getElementById('warranty-options') },
            { id: 'extendedWarrantySection', ref: document.querySelector('.extendedWarrantySection') },
            { id: 'faqSection', ref: document.querySelector('.faqSection') }
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
    
    function handleTabClick(e) {
        const tabId = e.currentTarget.getAttribute('data-tab');
        if (tabId) {
            showTabPanel(tabId);
            
            // Scroll to the tab content if on mobile
            if (window.innerWidth < 768) {
                const tabPanel = document.getElementById(`${tabId}-panel`);
                if (tabPanel) {
                    tabPanel.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }
        }
    }
    
    function handleFaqClick(e) {
        const faqItem = e.currentTarget.closest('.faqItem');
        if (faqItem) {
            toggleFaqItem(faqItem);
        }
    }
    
    // Initialise animations for elements that should animate on scroll
    function initScrollAnimations() {
        const animatedElements = document.querySelectorAll('.overviewCard, .processStep, .faqItem');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animated');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.2
        });
        
        animatedElements.forEach(element => {
            observer.observe(element);
        });
    }
    
    // Event Listeners
    window.addEventListener('scroll', handleScroll);
    
    if (menuButton) {
        menuButton.addEventListener('click', toggleMobileMenu);
    }
    
    if (closeMenuButton) {
        closeMenuButton.addEventListener('click', toggleMobileMenu);
    }
    
    // Tab navigation
    warrantyTabs.forEach(tab => {
        tab.addEventListener('click', handleTabClick);
    });
    
    // FAQ toggles
    faqItems.forEach(item => {
        const question = item.querySelector('.faqQuestion');
        if (question) {
            question.addEventListener('click', handleFaqClick);
        }
    });
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                e.preventDefault();
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                
                // Close mobile menu if open
                if (mobileMenuOpen) {
                    toggleMobileMenu();
                }
            }
        });
    });
    
    // Initialise page state
    handleScroll(); // Set initial header state
    showTabPanel(activeTabPanel); // Set initial tab
    
    // Initialise scroll animations with slight delay
    setTimeout(initScrollAnimations, 500);
    
    // Add CSS animations
    const style = document.createElement('style');
    style.textContent = `
        @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
        }
        
        .overviewCard.animated, 
        .processStep.animated, 
        .faqItem.animated {
            animation: fadeInUp 0.6s ease forwards;
        }
        
        .processStep:nth-child(1), .overviewCard:nth-child(1), .faqItem:nth-child(1) { animation-delay: 0.1s; }
        .processStep:nth-child(2), .overviewCard:nth-child(2), .faqItem:nth-child(2) { animation-delay: 0.2s; }
        .processStep:nth-child(3), .overviewCard:nth-child(3), .faqItem:nth-child(3) { animation-delay: 0.3s; }
        .processStep:nth-child(4), .overviewCard:nth-child(4), .faqItem:nth-child(4) { animation-delay: 0.4s; }
        .processStep:nth-child(5), .faqItem:nth-child(5) { animation-delay: 0.5s; }
    `;
    document.head.appendChild(style);
});