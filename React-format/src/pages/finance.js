import { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import styles from '../../styles/Finance.module.css';
import { motion } from 'framer-motion';

export default function FinanceSite() {
  // States for form navigation & other utilities
  const [isHeaderSticky, setIsHeaderSticky] = useState(false);
  const [activeStage, setActiveStage] = useState(1);
  const [showCompletion, setShowCompletion] = useState(false);
  const [activePopup, setActivePopup] = useState(null);
  const [privacyAccepted, setPrivacyAccepted] = useState(false);
  const [referenceNumber, setReferenceNumber] = useState('');
  const contactRef = useRef(null);
  const mapRef = useRef(null);
  
  // Handle sticky header on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsHeaderSticky(window.scrollY > 100);
      
      // So it uppdates active section based on scroll position
      const scrollPosition = window.scrollY + 400;
      
      if (contactRef.current && scrollPosition >= contactRef.current.offsetTop && 
          scrollPosition < (mapRef.current ? mapRef.current.offsetTop : Infinity)) {
        setActiveSection('contact');
      } else if (mapRef.current && scrollPosition >= mapRef.current.offsetTop) {
        setActiveSection('map');
      } else {
        setActiveSection(null);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Refs for scroll targets
  const applicationFormRef = useRef(null);
  
  // State for form data
  const [formData, setFormData] = useState({
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
  });

  // Function to handle form input changes
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value,
    }));
    
    // Show/hide previous address section based on years at current address
    if (name === 'currentYearsAtAddress' && parseInt(value) < 3) {
      setFormData(prevState => ({
        ...prevState,
        showPreviousAddress: true,
      }));
    } else if (name === 'currentYearsAtAddress' && parseInt(value) >= 3) {
      setFormData(prevState => ({
        ...prevState,
        showPreviousAddress: false,
      }));
    }
    
    // Show/hide previous employment section based on years at current employment
    if (name === 'yearsAtEmployment' && parseInt(value) < 3) {
      setFormData(prevState => ({
        ...prevState,
        showPreviousEmployment: true,
      }));
    } else if (name === 'yearsAtEmployment' && parseInt(value) >= 3) {
      setFormData(prevState => ({
        ...prevState,
        showPreviousEmployment: false,
      }));
    }
  };

  // Function for handling next stage
  const nextStage = (current, next) => {
    // Simple validation for each stage
    let validStage = true;
    
    // Validate current stage
    if (current === 1 && !privacyAccepted) {
      alert("Please accept the privacy notice to continue.");
      validStage = false;
    }
    
    if (validStage) {
      setActiveStage(next);
      // Scroll to top of form
      if (applicationFormRef.current) {
        applicationFormRef.current.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
  };

  // Function for handling previous stage
  const prevStage = (current, prev) => {
    setActiveStage(prev);
    // Scroll to top of form
    if (applicationFormRef.current) {
      applicationFormRef.current.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  // Function for showing completion message
  const handleShowCompletion = () => {
    // Depending on if you want to keep it as this you can of course put the full form validation within here! 
    
    // Generate reference number only when the form is actually submitted
    const refNumber = 'FIN-' + Math.floor(100000 + Math.random() * 900000);
    setReferenceNumber(refNumber);
    
    setShowCompletion(true);
    
    // Scroll to top of form
    if (applicationFormRef.current) {
      applicationFormRef.current.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };
  
  // Function to open popup
  const openPopup = (popup) => {
    setActivePopup(popup);
    document.body.style.overflow = 'hidden'; // Prevent scrolling when popup is open
  };
  
  // Function to close popup
  const closePopup = () => {
    setActivePopup(null);
    document.body.style.overflow = 'auto'; // Enable scrolling when popup is closed
  };
  
  // Smooth scroll function
  const scrollToApplication = (e) => {
    e.preventDefault();
    if (applicationFormRef.current) {
      applicationFormRef.current.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };
  
  // Close popup when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (activePopup && e.target.classList.contains(styles.popupOverlay)) {
        closePopup();
      }
    };
    
    document.addEventListener('click', handleClickOutside);
    
    return () => {
      document.removeEventListener('click', handleClickOutside);
      // Ensure scrolling is enabled when component unmounts
      document.body.style.overflow = 'auto';
    };
  }, [activePopup, styles.popupOverlay]);



  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Handle scroll event to update header appearance
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const [activeSection, setActiveSection] = useState(null);

// Function for handling scroll to other sections! 
useEffect(() => {
  const handleScroll = () => {
    const scrollPosition = window.scrollY + 200;
    
    const overviewSection = document.querySelector('.' + styles.luxuryFeatureSection);
    const optionsSection = document.querySelector('.' + styles.financeOptionsWrapper);
    const applicationSection = applicationFormRef.current;
    
    if (overviewSection && scrollPosition >= overviewSection.offsetTop && 
        scrollPosition < (optionsSection ? optionsSection.offsetTop : Infinity)) {
      setActiveSection('overview');
    } else if (optionsSection && scrollPosition >= optionsSection.offsetTop && 
              scrollPosition < (applicationSection ? applicationSection.offsetTop : Infinity)) {
      setActiveSection('options');
    } else if (applicationSection && scrollPosition >= applicationSection.offsetTop) {
      setActiveSection('application');
    } else {
      setActiveSection(null);
    }
  };
  
  window.addEventListener('scroll', handleScroll);
  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
}, []);
  
  return (
    <>
      <Head>
        <title>Car Finance and Loan Specialists | Better Performance Ltd</title>
        <meta name="description" content="Better Performance offers bespoke vehicle finance solutions to help you find the perfect car finance package." />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" />
      </Head>

      {/* Redesigned Header */}
      <header className={`${styles.enhancedHeader} ${isHeaderSticky ? styles.headerScrolled : ''}`}>
        <div className={styles.enhancedHeaderContainer}>
          <div className={styles.menuButton}>
            <span className={styles.hamburgerIcon}>
              <i className="fas fa-bars"></i>
            </span>
            <span className={styles.menuText}>Menu</span>
          </div>
          
          <div className={styles.logo}>
            <Link href="/">
              <svg className={styles.adaptiveLogo} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400.51 80.63">
                <path d="M301.31,215.47a6.58,6.58,0,0,1,2.7.51,4.07,4.07,0,0,1,1.74,1.38,3.64,3.64,0,0,1,.63,2,5.62,5.62,0,0,1-.57,2.46l-2.1,4.5a9.83,9.83,0,0,1-1.77,2.46,12.71,12.71,0,0,1-2.55,2,14.23,14.23,0,0,1-3,1.38,10.26,10.26,0,0,1-3.15.51q3.12,0,4.41,1.83t0,4.53L295,244.71a10,10,0,0,1-1.8,2.49,12.08,12.08,0,0,1-2.58,2,15.15,15.15,0,0,1-3,1.35,10.26,10.26,0,0,1-3.15.51H260q.42-1,1.47-3.15t2.31-4.86q1.26-2.67,2.58-5.43l2.34-4.92q.36-.72.63-1.35a8.17,8.17,0,0,1,.57-1.11q.36-.78.54-1.26h21.25l2.94-6.12H273.34l3.48-7.38Zm-13.15,20.89H277.72l-3.48,7.32h10.45Z" transform="translate(-165.09 -215.47)"></path>
                <path d="M305.64,237.56A12.13,12.13,0,0,1,308,234.2a18.17,18.17,0,0,1,3.42-2.73,17.26,17.26,0,0,1,4.05-1.83,14.54,14.54,0,0,1,4.26-.66H339l-3.48,7.38H320.83a6.19,6.19,0,0,0-3.21,1,5.56,5.56,0,0,0-2.25,2.32l-1.92,4h18.61l-3.48,7.38H299.21Zm39.8-22.09L342,222.85H312.6l3.48-7.38Z" transform="translate(-165.09 -215.47)"></path>
                <path d="M378,222.85h-9.61L355,251.07H344.24l13.33-28.22H348l3.48-7.38h30Z" transform="translate(-165.09 -215.47)"></path>
                <path d="M414,222.85h-9.61L391,251.07H380.26l13.33-28.22H384l3.48-7.38h30Z" transform="translate(-165.09 -215.47)"></path>
                <path d="M413.69,237.56a12.14,12.14,0,0,1,2.37-3.36,18.17,18.17,0,0,1,3.42-2.73,17.26,17.26,0,0,1,4.05-1.83,14.53,14.53,0,0,1,4.26-.66h19.27l-3.48,7.38H428.88a6.19,6.19,0,0,0-3.21,1,5.56,5.56,0,0,0-2.25,2.32l-1.92,4h18.61l-3.48,7.38H407.27Zm39.8-22.09L450,222.85H420.66l3.48-7.38Z" transform="translate(-165.09 -215.47)"></path>
                <path d="M484,231.14a18,18,0,0,1-7.53,4.56,14.33,14.33,0,0,1-4.2.66h-1.38l4.44,14.71h-11l-4-13.09-6.18,13.09H443.29q.18-.36.75-1.56l1.38-2.88q.81-1.68,1.77-3.72l1.92-4.08,1.86-3.93q.9-1.89,1.56-3.33.9-1.86,1.2-2.58h18.79a4.63,4.63,0,0,0,2.4-.72,4.1,4.1,0,0,0,1.68-1.74l.54-1.2a1.64,1.64,0,0,0,0-1.74,2,2,0,0,0-1.71-.72H456.67l3.48-7.38h22a9,9,0,0,1,3.57.66A5.33,5.33,0,0,1,488,218a5,5,0,0,1,.87,2.73,7,7,0,0,1-.78,3.3l-1.8,3.84A12.5,12.5,0,0,1,484,231.14Z" transform="translate(-165.09 -215.47)"></path>
                <path d="M192,276.74a6.55,6.55,0,0,1,2.15,5.22,6.94,6.94,0,0,1-2.16,5.45,8.77,8.77,0,0,1-6.06,1.94h-5.22v6.54h-2.88v-21h8.1A9,9,0,0,1,192,276.74Zm-2.06,8.81a4.26,4.26,0,0,0,1.44-3.5,4.11,4.11,0,0,0-1.44-3.41,6.48,6.48,0,0,0-4.14-1.16l-5.1,0v9.21h5.1A6.36,6.36,0,0,0,189.94,285.55Z" transform="translate(-165.09 -215.47)"></path>
                <path d="M211.16,274.88h14.59v2.61H214V284h10.48v2.61H214v6.69H226.1v2.61H211.16Z" transform="translate(-165.09 -215.47)"></path>
                <path d="M257.83,295.89l-4.17-6.6q-.72.06-1.17.06h-5.34v6.54h-2.88v-21h8.22a9.26,9.26,0,0,1,6.17,1.85,6.49,6.49,0,0,1,2.18,5.24,7.45,7.45,0,0,1-1.19,4.29,6.64,6.64,0,0,1-3.41,2.52l4.89,7.11Zm-5.34-9.16a6.36,6.36,0,0,0,4.14-1.19,4.26,4.26,0,0,0,1.44-3.5,4.11,4.11,0,0,0-1.44-3.41,6.48,6.48,0,0,0-4.14-1.16h-5.34v9.25Z" transform="translate(-165.09 -215.47)"></path>
                <path d="M279.47,274.88h13.69l0,2.61H282.35v6.9h9.7V287h-9.7v8.88h-2.88Z" transform="translate(-165.09 -215.47)"></path>
                <path d="M324.51,276.11a10.6,10.6,0,0,1,4,3.86,10.26,10.26,0,0,1,1.47,5.39,10.41,10.41,0,0,1-1.47,5.42,10.64,10.64,0,0,1-4,3.9,11.58,11.58,0,0,1-11.14,0,10.63,10.63,0,0,1-4-3.9,10.41,10.41,0,0,1-1.47-5.42,10.26,10.26,0,0,1,1.47-5.39,10.63,10.63,0,0,1,4-3.86,11.72,11.72,0,0,1,11.15,0Zm-9.6,2.25a8.21,8.21,0,0,0-3,2.93,7.74,7.74,0,0,0-1.11,4.07,7.82,7.82,0,0,0,1.11,4.08,8.29,8.29,0,0,0,3,3,7.92,7.92,0,0,0,4.07,1.1,7.77,7.77,0,0,0,4-1.1,8.25,8.25,0,0,0,2.94-3,7.9,7.9,0,0,0,1.1-4.08,7.82,7.82,0,0,0-1.1-4.07,8.16,8.16,0,0,0-2.94-2.93,7.85,7.85,0,0,0-4-1.08A8,8,0,0,0,314.91,278.36Z" transform="translate(-165.09 -215.47)"></path>
                <path d="M361.21,295.89l-4.17-6.6q-.72.06-1.17.06h-5.34v6.54h-2.88v-21h8.22a9.26,9.26,0,0,1,6.17,1.85,6.49,6.49,0,0,1,2.18,5.24,7.45,7.45,0,0,1-1.19,4.29,6.64,6.64,0,0,1-3.41,2.52l4.89,7.11Zm-5.34-9.16a6.36,6.36,0,0,0,4.14-1.19,4.26,4.26,0,0,0,1.44-3.5,4.11,4.11,0,0,0-1.44-3.41,6.48,6.48,0,0,0-4.14-1.16h-5.34v9.25Z" transform="translate(-165.09 -215.47)"></path>
                <path d="M382.85,274.88h3.42L394,289.65l7.62-14.77H405v21h-2.7l0-16.78-7.47,14.56h-1.77l-7.53-14.56v16.78h-2.67Z" transform="translate(-165.09 -215.47)"></path>
                <path d="M440.15,295.89l-2.22-5.1H426.85l-2.19,5.1h-3l9.33-21h3l9.3,21ZM428,288.18h8.83L432.38,278Z" transform="translate(-165.09 -215.47)"></path>
                <path d="M474.76,274.88h2.85v21H474.7l-12-16.27v16.27h-2.88v-21h2.91l12,16.3Z" transform="translate(-165.09 -215.47)"></path>
                <path d="M509.58,278a8.09,8.09,0,0,0-10.3,3.3,8.08,8.08,0,0,0,7,12.14,8.23,8.23,0,0,0,3.24-.68,9.37,9.37,0,0,0,2.82-1.85l1.74,1.89a11.71,11.71,0,0,1-3.69,2.45,11,11,0,0,1-9.75-.54,10.6,10.6,0,0,1-5.37-9.32,10.34,10.34,0,0,1,1.46-5.39,10.51,10.51,0,0,1,4-3.86,11.18,11.18,0,0,1,5.55-1.41,11.31,11.31,0,0,1,4.25.83,10.52,10.52,0,0,1,3.56,2.33l-1.71,2.07A8.7,8.7,0,0,0,509.58,278Z" transform="translate(-165.09 -215.47)"></path>
                <path d="M531.61,274.88H546.2v2.61H534.49V284H545v2.61H534.49v6.69h12.07v2.61H531.61Z" transform="translate(-165.09 -215.47)"></path>
                <rect y="45.15" width="400.51" height="3.98"></rect>
              </svg>
            </Link>
          </div>
          
          <div className={styles.headerActions}>
            <div className={styles.trustpilot}>
              <span>Trustpilot</span>
            </div>
          </div>
        </div>
      </header>

    {/* Hero Image and Banner */}
    <div className={styles.modernHeroWrapper}>
      <div 
        className={styles.modernHeroImage} 
        style={{
          backgroundImage: `url('/STO/20250402-LDB04582.jpg')`,
        }}
      ></div>
      <div className={styles.modernHeroOverlay}>
        <motion.div 
          className={styles.modernHeroContent}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1>Premium Vehicle Finance Solutions</h1>
          <p>Tailored finance packages for luxury, performance, and classic vehicles</p>
          <motion.div 
            className={styles.heroNavigation}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <button 
              onClick={scrollToApplication} 
              className={`${styles.navButton} ${styles.activeNavButton}`}
            >
              Apply Now
            </button>
          </motion.div>
        </motion.div>
      </div>
    </div>
      
      {/* Main Content */}
      <div className={styles.container}>
        <section className={styles.contentSection}>
          <h1 className={styles.sectionTitle}>Finance</h1>
          
          <div className={styles.luxuryFeatureSection}>
            <div className={styles.featureText}>
              <h2>Choosing Excellence</h2>
              <p>At Better Performance, we understand the unique requirements of high-performance and luxury vehicle financing. Our bespoke solutions are designed to accommodate the specific needs of discerning clients seeking exceptional automotive experiences.</p>
              <p>With expertise in prestige marques and specialist vehicles, our finance packages offer competitive rates, flexible terms, and options tailored to your lifestyle and preferences.</p>
              <div className={styles.featureHighlights}>
                <div className={styles.highlightItem}>
                  <i className="fas fa-check-circle"></i>
                  <span>Competitive rates for premium vehicles</span>
                </div>
                <div className={styles.highlightItem}>
                  <i className="fas fa-check-circle"></i>
                  <span>Bespoke payment structures</span>
                </div>
                <div className={styles.highlightItem}>
                  <i className="fas fa-check-circle"></i>
                  <span>Tailored to high-value assets</span>
                </div>
              </div>
            </div>
            <div className={styles.featureImage}>
              <img src="/SPYDER-RS/20250409-DSC05699.jpg" alt="Luxury Sports Car" />
            </div>
          </div>
          
          {/* Finance Products Section */}
          <div className={styles.financeOptionsWrapper}>
            <h2 className={styles.centeredHeading}>What we offer</h2>
            <p className={styles.centeredText}>Through our partnership with leading finance providers, we offer a range of flexible finance solutions to suit your needs:</p>
            
            <div className={styles.financeOptionsGrid}>
              <div className={styles.financeOption}>
                <div className={styles.financeOptionHeader}>
                  <h3>Hire Purchase (HP)</h3>
                </div>
                <div className={styles.financeOptionContent}>
                  <p>A straightforward way to finance your vehicle with fixed monthly payments.</p>
                  <div className={styles.featureList}>
                    <div className={styles.featureItem}>
                      <span className={styles.checkmark}>✓</span>
                      <span>Own the vehicle at the end of the agreement</span>
                    </div>
                    <div className={styles.featureItem}>
                      <span className={styles.checkmark}>✓</span>
                      <span>Fixed interest rate throughout the term</span>
                    </div>
                    <div className={styles.featureItem}>
                      <span className={styles.checkmark}>✓</span>
                      <span>Flexible deposit options available</span>
                    </div>
                    <div className={styles.featureItem}>
                      <span className={styles.checkmark}>✓</span>
                      <span>Terms from 12-60 months</span>
                    </div>
                  </div>
                  <button 
                    onClick={() => openPopup('hp')} 
                    className={styles.button}
                  >
                    Learn More
                  </button>
                </div>
              </div>
              
              <div className={styles.financeOption}>
                <div className={styles.financeOptionHeader}>
                  <h3>Personal Contract Purchase (PCP)</h3>
                </div>
                <div className={styles.financeOptionContent}>
                  <p>Lower monthly payments with options at the end of your agreement.</p>
                  <div className={styles.featureList}>
                    <div className={styles.featureItem}>
                      <span className={styles.checkmark}>✓</span>
                      <span>Choose to buy, part-exchange, or return the vehicle</span>
                    </div>
                    <div className={styles.featureItem}>
                      <span className={styles.checkmark}>✓</span>
                      <span>Lower monthly payments than Hire Purchase</span>
                    </div>
                    <div className={styles.featureItem}>
                      <span className={styles.checkmark}>✓</span>
                      <span>Optional balloon payment at the end</span>
                    </div>
                    <div className={styles.featureItem}>
                      <span className={styles.checkmark}>✓</span>
                      <span>Flexible terms to suit your budget</span>
                    </div>
                  </div>
                  <button 
                    onClick={() => openPopup('pcp')} 
                    className={styles.button}
                  >
                    Learn More
                  </button>
                </div>
              </div>
              
              <div className={styles.financeOption}>
                <div className={styles.financeOptionHeader}>
                  <h3>Specialist Vehicle Finance</h3>
                </div>
                <div className={styles.financeOptionContent}>
                  <p>Tailored solutions for prestige, classic, and performance vehicles with specialist Lease Purchase/HP options.</p>
                  <div className={styles.featureList}>
                    <div className={styles.featureItem}>
                      <span className={styles.checkmark}>✓</span>
                      <span>Bespoke packages for high-value vehicles</span>
                    </div>
                    <div className={styles.featureItem}>
                      <span className={styles.checkmark}>✓</span>
                      <span>Competitive rates for premium cars</span>
                    </div>
                    <div className={styles.featureItem}>
                      <span className={styles.checkmark}>✓</span>
                      <span>Lease Purchase/HP with flexible terms</span>
                    </div>
                    <div className={styles.featureItem}>
                      <span className={styles.checkmark}>✓</span>
                      <span>Tailored agreements for unique requirements</span>
                    </div>
                  </div>
                  <button 
                    onClick={() => openPopup('specialist')} 
                    className={styles.button}
                  >
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          {/* Application Form Section */}
          <div id="finance-application" ref={applicationFormRef} className={styles.applicationSection}>
            <h2 className={styles.centeredHeading}>Finance Application</h2>
            <p className={styles.centeredText}>Complete our application form below for your personalized finance quote.</p>
            
            <div className={styles.applicationForm}>
              <div className={styles.progressBar}>
                <div 
                  className={styles.progressIndicator} 
                  style={{ width: showCompletion ? '100%' : `${activeStage * 16.6}%` }}
                ></div>
              </div>
              
              {/* Privacy Notice */}
              <div className={`${styles.formStage} ${activeStage === 1 ? styles.active : ''}`} id="privacy-notice" style={{ display: showCompletion ? 'none' : '' }}>
                <h3>Privacy Notice</h3>
                <div className={styles.privacyNotice}>
                  <p><strong>Privacy Notice</strong></p>
                  <p>Northridge Finance and JBR Capital (collectively, "we," "us," or "our") respect your privacy and are committed to protecting your personal data. This privacy notice explains how we collect, process, and share your personal data when you visit our website, submit an enquiry, or purchase a product or service from us, regardless of where you access our services. It also outlines your privacy rights and how the law protects you.</p>
                  <p><strong>Purpose of This Privacy Notice</strong></p>
                  <p>This notice provides information on how Northridge Finance and JBR Capital collect and process your personal data through your use of this website, including data you provide directly or that we obtain from third parties. Your data may be shared between Northridge Finance and JBR Capital to fulfill the purposes outlined below.</p>
                  <p>This website is not intended for children, and we do not knowingly collect data relating to children.</p>
                  <p>Please read this privacy notice alongside any other privacy or fair processing notices we provide on specific occasions when collecting or processing your personal data. This notice supplements other notices and does not override them.</p>
                  <p><strong>How We Use Your Personal Data</strong></p>
                  <p>We collect, process, and hold personal data for the following purposes, as permitted by applicable laws, including the General Data Protection Regulation (GDPR):</p>
                  <ul>
                    <li>Performing a contract with you.</li>
                    <li>Ensuring customer affordability.</li>
                    <li>Complying with legal and regulatory obligations.</li>
                    <li>Preventing fraud and money laundering.</li>
                    <li>Marketing purposes (where you have provided consent).</li>
                  </ul>
                  <p><strong>Sharing with Fraud Prevention Agencies</strong></p>
                  <p>Your personal data will be shared with fraud prevention agencies to prevent fraud, verify your identity, and combat money laundering. If fraud is detected, you may be refused certain services, finance, or employment. Further details on how your data is used by us and these agencies, as well as your data protection rights, are available in our full Privacy Policy.</p>
                  <p><strong>Your Rights and More Information</strong></p>
                  <p>For more details on how we collect, use, and protect your personal data, or to exercise your data protection rights, please refer to our full Privacy Policy, accessible for Northridge Finance and for JBR Capital.</p>
                </div>
                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>
                    <input 
                      type="checkbox" 
                      checked={privacyAccepted}
                      onChange={() => setPrivacyAccepted(!privacyAccepted)}
                    /> 
                    I have read and accept the Privacy Notice
                  </label>
                </div>
                <div className={styles.formNavigation}>
                  <div></div>
                  <button 
                    type="button" 
                    className={styles.button} 
                    onClick={() => nextStage(1, 2)}
                    disabled={!privacyAccepted}
                  >
                    Accept and Continue
                  </button>
                </div>
              </div>
              
              {/* Form Stage 1: Personal Details */}
              <div className={`${styles.formStage} ${activeStage === 2 ? styles.active : ''}`} id="personal-details" style={{ display: showCompletion ? 'none' : '' }}>
                <h3>Personal Details</h3>
                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label htmlFor="title" className={styles.formLabel}>Title*</label>
                    <select 
                      id="title" 
                      name="title"
                      className={styles.formInput}
                      value={formData.title}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="">Please select</option>
                      <option value="Mr">Mr</option>
                      <option value="Mrs">Mrs</option>
                      <option value="Miss">Miss</option>
                      <option value="Ms">Ms</option>
                      <option value="Dr">Dr</option>
                      <option value="Rev">Rev</option>
                      <option value="Prof">Prof</option>
                    </select>
                  </div>
                  
                  <div className={styles.formGroup}>
                    <label htmlFor="forename" className={styles.formLabel}>Forename*</label>
                    <input 
                      type="text" 
                      id="forename" 
                      name="forename"
                      className={styles.formInput} 
                      placeholder="Enter your first name"
                      value={formData.forename}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  
                  <div className={styles.formGroup}>
                    <label htmlFor="middleName" className={styles.formLabel}>Middle Name</label>
                    <input 
                      type="text" 
                      id="middleName" 
                      name="middleName"
                      className={styles.formInput} 
                      placeholder="Enter your middle name"
                      value={formData.middleName}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                
                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label htmlFor="surname" className={styles.formLabel}>Surname*</label>
                    <input 
                      type="text" 
                      id="surname" 
                      name="surname"
                      className={styles.formInput} 
                      placeholder="Enter your surname"
                      value={formData.surname}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  
                  <div className={styles.formGroup}>
                    <label htmlFor="homeTelephone" className={styles.formLabel}>Home Telephone</label>
                    <input 
                      type="tel" 
                      id="homeTelephone" 
                      name="homeTelephone"
                      className={styles.formInput} 
                      placeholder="Enter your home phone"
                      value={formData.homeTelephone}
                      onChange={handleInputChange}
                    />
                  </div>
                  
                  <div className={styles.formGroup}>
                    <label htmlFor="mobileTelephone" className={styles.formLabel}>Mobile Telephone*</label>
                    <input 
                      type="tel" 
                      id="mobileTelephone" 
                      name="mobileTelephone"
                      className={styles.formInput} 
                      placeholder="Enter your mobile phone"
                      value={formData.mobileTelephone}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>
                
                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label htmlFor="email" className={styles.formLabel}>Email*</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email"
                      className={styles.formInput} 
                      placeholder="Enter your email address"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  
                  <div className={styles.formGroup}>
                    <label htmlFor="dateOfBirth" className={styles.formLabel}>Date of Birth*</label>
                    <input 
                      type="date" 
                      id="dateOfBirth" 
                      name="dateOfBirth"
                      className={styles.formInput}
                      value={formData.dateOfBirth}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>
                
                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label htmlFor="gender" className={styles.formLabel}>Gender*</label>
                    <select 
                      id="gender" 
                      name="gender"
                      className={styles.formInput}
                      value={formData.gender}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="">Please select</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                    </select>
                  </div>
                  
                  <div className={styles.formGroup}>
                    <label htmlFor="nationality" className={styles.formLabel}>Nationality*</label>
                    <select 
                      id="nationality" 
                      name="nationality"
                      className={styles.formInput}
                      value={formData.nationality}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="">Please select</option>
                      <option value="British">British</option>
                      <option value="Irish">Irish</option>
                      <option value="French">French</option>
                      <option value="German">German</option>
                      <option value="Spanish">Spanish</option>
                      <option value="Italian">Italian</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>
                
                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label htmlFor="maritalStatus" className={styles.formLabel}>Marital Status*</label>
                    <select 
                      id="maritalStatus" 
                      name="maritalStatus"
                      className={styles.formInput}
                      value={formData.maritalStatus}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="">Please select</option>
                      <option value="Single">Single</option>
                      <option value="Married">Married</option>
                      <option value="Civil Partnership">Civil Partnership</option>
                      <option value="Divorced">Divorced</option>
                      <option value="Separated">Separated</option>
                      <option value="Widowed">Widowed</option>
                    </select>
                  </div>
                  
                  <div className={styles.formGroup}>
                    <label htmlFor="dependants" className={styles.formLabel}>Dependants</label>
                    <input 
                      type="number" 
                      id="dependants" 
                      name="dependants"
                      className={styles.formInput} 
                      min="0"
                      placeholder="Number of dependants"
                      value={formData.dependants}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                
                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label htmlFor="highNetWorth" className={styles.formLabel}>High Net Worth?*</label>
                    <select 
                      id="highNetWorth" 
                      name="highNetWorth"
                      className={styles.formInput}
                      value={formData.highNetWorth}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="">Please select</option>
                      <option value="Yes">Yes</option>
                      <option value="No">No</option>
                    </select>
                  </div>
                  
                  <div className={styles.formGroup}>
                    <label htmlFor="businessUse" className={styles.formLabel}>Purchasing For Business Use?*</label>
                    <select 
                      id="businessUse" 
                      name="businessUse"
                      className={styles.formInput}
                      value={formData.businessUse}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="">Please select</option>
                      <option value="Yes">Yes</option>
                      <option value="No">No</option>
                    </select>
                  </div>
                </div>
                
                <div className={styles.formNavigation}>
                  <button type="button" className={`${styles.button} ${styles.secondary}`} onClick={() => prevStage(2, 1)}>Previous</button>
                  <button type="button" className={styles.button} onClick={() => nextStage(2, 3)}>Next Step</button>
                </div>
              </div>
              
              {/* Form Stage 2: Address History */}
              <div className={`${styles.formStage} ${activeStage === 3 ? styles.active : ''}`} id="address-history" style={{ display: showCompletion ? 'none' : '' }}>
                <h3>Current Address</h3>
                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label htmlFor="currentPostcode" className={styles.formLabel}>Postcode*</label>
                    <input 
                      type="text" 
                      id="currentPostcode" 
                      name="currentPostcode"
                      className={styles.formInput} 
                      placeholder="Enter your postcode"
                      value={formData.currentPostcode}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  
                  <div className={styles.formGroup}>
                    <label htmlFor="currentNameNumber" className={styles.formLabel}>House Name/Number*</label>
                    <input 
                      type="text" 
                      id="currentNameNumber" 
                      name="currentNameNumber"
                      className={styles.formInput} 
                      placeholder="Enter house name/number"
                      value={formData.currentNameNumber}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>
                
                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label htmlFor="currentAddressLine1" className={styles.formLabel}>Address Line 1*</label>
                    <input 
                      type="text" 
                      id="currentAddressLine1" 
                      name="currentAddressLine1"
                      className={styles.formInput} 
                      placeholder="Enter address line 1"
                      value={formData.currentAddressLine1}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  
                  <div className={styles.formGroup}>
                    <label htmlFor="currentAddressLine2" className={styles.formLabel}>Address Line 2</label>
                    <input 
                      type="text" 
                      id="currentAddressLine2" 
                      name="currentAddressLine2"
                      className={styles.formInput} 
                      placeholder="Enter address line 2"
                      value={formData.currentAddressLine2}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                
                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label htmlFor="currentAddressLine3" className={styles.formLabel}>Address Line 3</label>
                    <input 
                      type="text" 
                      id="currentAddressLine3" 
                      name="currentAddressLine3"
                      className={styles.formInput} 
                      placeholder="Enter address line 3"
                      value={formData.currentAddressLine3}
                      onChange={handleInputChange}
                    />
                  </div>
                  
                  <div className={styles.formGroup}>
                    <label htmlFor="currentTownCity" className={styles.formLabel}>Town/City*</label>
                    <input 
                      type="text" 
                      id="currentTownCity" 
                      name="currentTownCity"
                      className={styles.formInput} 
                      placeholder="Enter town/city"
                      value={formData.currentTownCity}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>
                
                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label htmlFor="currentCounty" className={styles.formLabel}>County*</label>
                    <input 
                      type="text" 
                      id="currentCounty" 
                      name="currentCounty"
                      className={styles.formInput} 
                      placeholder="Enter county"
                      value={formData.currentCounty}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  
                  <div className={styles.formGroup}>
                    <label htmlFor="currentYearsAtAddress" className={styles.formLabel}>Years at Address*</label>
                    <input 
                      type="number" 
                      id="currentYearsAtAddress" 
                      name="currentYearsAtAddress"
                      className={styles.formInput} 
                      min="0"
                      max="99"
                      placeholder="Enter years"
                      value={formData.currentYearsAtAddress}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  
                  <div className={styles.formGroup}>
                    <label htmlFor="currentMonthsAtAddress" className={styles.formLabel}>Months at Address*</label>
                    <input 
                      type="number" 
                      id="currentMonthsAtAddress" 
                      name="currentMonthsAtAddress"
                      className={styles.formInput} 
                      min="0"
                      max="11"
                      placeholder="Enter months"
                      value={formData.currentMonthsAtAddress}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>
                
                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label htmlFor="currentAccommodationType" className={styles.formLabel}>Accommodation Type*</label>
                    <select 
                      id="currentAccommodationType" 
                      name="currentAccommodationType"
                      className={styles.formInput}
                      value={formData.currentAccommodationType}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="">Please select</option>
                      <option value="Home Owner">Home Owner</option>
                      <option value="Living with Parents">Living with Parents</option>
                      <option value="Tenant">Tenant</option>
                      <option value="Council Tenant">Council Tenant</option>
                      <option value="Joint Owner">Joint Owner</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>
                
                {/* Previous Address Section (if less than 3 years at current address) */}
                {formData.currentYearsAtAddress && parseInt(formData.currentYearsAtAddress) < 3 && (
                  <>
                    <h3>Previous Address</h3>
                    <p className={styles.sectionNote}>Please provide your previous address details as you have been at your current address for less than 3 years.</p>
                    
                    <div className={styles.formRow}>
                      <div className={styles.formGroup}>
                        <label htmlFor="previousPostcode" className={styles.formLabel}>Postcode*</label>
                        <input 
                          type="text" 
                          id="previousPostcode" 
                          name="previousPostcode"
                          className={styles.formInput} 
                          placeholder="Enter your previous postcode"
                          value={formData.previousPostcode}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      
                      <div className={styles.formGroup}>
                        <label htmlFor="previousNameNumber" className={styles.formLabel}>House Name/Number*</label>
                        <input 
                          type="text" 
                          id="previousNameNumber" 
                          name="previousNameNumber"
                          className={styles.formInput} 
                          placeholder="Enter previous house name/number"
                          value={formData.previousNameNumber}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                    </div>
                    
                    <div className={styles.formRow}>
                      <div className={styles.formGroup}>
                        <label htmlFor="previousAddressLine1" className={styles.formLabel}>Address Line 1*</label>
                        <input 
                          type="text" 
                          id="previousAddressLine1" 
                          name="previousAddressLine1"
                          className={styles.formInput} 
                          placeholder="Enter address line 1"
                          value={formData.previousAddressLine1}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      
                      <div className={styles.formGroup}>
                        <label htmlFor="previousAddressLine2" className={styles.formLabel}>Address Line 2</label>
                        <input 
                          type="text" 
                          id="previousAddressLine2" 
                          name="previousAddressLine2"
                          className={styles.formInput} 
                          placeholder="Enter address line 2"
                          value={formData.previousAddressLine2}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>
                    
                    <div className={styles.formRow}>
                      <div className={styles.formGroup}>
                        <label htmlFor="previousAddressLine3" className={styles.formLabel}>Address Line 3</label>
                        <input 
                          type="text" 
                          id="previousAddressLine3" 
                          name="previousAddressLine3"
                          className={styles.formInput} 
                          placeholder="Enter address line 3"
                          value={formData.previousAddressLine3}
                          onChange={handleInputChange}
                        />
                      </div>
                      
                      <div className={styles.formGroup}>
                        <label htmlFor="previousTownCity" className={styles.formLabel}>Town/City*</label>
                        <input 
                          type="text" 
                          id="previousTownCity" 
                          name="previousTownCity"
                          className={styles.formInput} 
                          placeholder="Enter town/city"
                          value={formData.previousTownCity}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                    </div>
                    
                    <div className={styles.formRow}>
                      <div className={styles.formGroup}>
                        <label htmlFor="previousCounty" className={styles.formLabel}>County*</label>
                        <input 
                          type="text" 
                          id="previousCounty" 
                          name="previousCounty"
                          className={styles.formInput} 
                          placeholder="Enter county"
                          value={formData.previousCounty}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      
                      <div className={styles.formGroup}>
                        <label htmlFor="previousYearsAtAddress" className={styles.formLabel}>Years at Address*</label>
                        <input 
                          type="number" 
                          id="previousYearsAtAddress" 
                          name="previousYearsAtAddress"
                          className={styles.formInput} 
                          min="0"
                          max="99"
                          placeholder="Enter years"
                          value={formData.previousYearsAtAddress}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      
                      <div className={styles.formGroup}>
                        <label htmlFor="previousMonthsAtAddress" className={styles.formLabel}>Months at Address*</label>
                        <input 
                          type="number" 
                          id="previousMonthsAtAddress" 
                          name="previousMonthsAtAddress"
                          className={styles.formInput} 
                          min="0"
                          max="11"
                          placeholder="Enter months"
                          value={formData.previousMonthsAtAddress}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                    </div>
                    
                    <div className={styles.formRow}>
                      <div className={styles.formGroup}>
                        <label htmlFor="previousAccommodationType" className={styles.formLabel}>Accommodation Type*</label>
                        <select 
                          id="previousAccommodationType" 
                          name="previousAccommodationType"
                          className={styles.formInput}
                          value={formData.previousAccommodationType}
                          onChange={handleInputChange}
                          required
                        >
                          <option value="">Please select</option>
                          <option value="Home Owner">Home Owner</option>
                          <option value="Living with Parents">Living with Parents</option>
                          <option value="Tenant">Tenant</option>
                          <option value="Council Tenant">Council Tenant</option>
                          <option value="Joint Owner">Joint Owner</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                    </div>
                  </>
                )}
                
                <div className={styles.formNavigation}>
                  <button type="button" className={`${styles.button} ${styles.secondary}`} onClick={() => prevStage(3, 2)}>Previous</button>
                  <button type="button" className={styles.button} onClick={() => nextStage(3, 4)}>Next Step</button>
                </div>
              </div>
              
              {/* Form Stage 3: Employment History */}
              <div className={`${styles.formStage} ${activeStage === 4 ? styles.active : ''}`} id="employment-history" style={{ display: showCompletion ? 'none' : '' }}>
                <h3>Current Employment</h3>
                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label htmlFor="employer" className={styles.formLabel}>Employer Name*</label>
                    <input 
                      type="text" 
                      id="employer" 
                      name="employer"
                      className={styles.formInput} 
                      placeholder="Enter employer name"
                      value={formData.employer}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  
                  <div className={styles.formGroup}>
                    <label htmlFor="employerPhone" className={styles.formLabel}>Employer Phone*</label>
                    <input 
                      type="tel" 
                      id="employerPhone" 
                      name="employerPhone"
                      className={styles.formInput} 
                      placeholder="Enter employer phone number"
                      value={formData.employerPhone}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>
                
                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label htmlFor="employerPostcode" className={styles.formLabel}>Employer Postcode*</label>
                    <input 
                      type="text" 
                      id="employerPostcode" 
                      name="employerPostcode"
                      className={styles.formInput} 
                      placeholder="Enter employer postcode"
                      value={formData.employerPostcode}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  
                  <div className={styles.formGroup}>
                    <label htmlFor="employerNameNumber" className={styles.formLabel}>Building Name/Number*</label>
                    <input 
                      type="text" 
                      id="employerNameNumber" 
                      name="employerNameNumber"
                      className={styles.formInput} 
                      placeholder="Enter building name/number"
                      value={formData.employerNameNumber}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>
                
                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label htmlFor="employerAddressLine1" className={styles.formLabel}>Address Line 1*</label>
                    <input 
                      type="text" 
                      id="employerAddressLine1" 
                      name="employerAddressLine1"
                      className={styles.formInput} 
                      placeholder="Enter address line 1"
                      value={formData.employerAddressLine1}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  
                  <div className={styles.formGroup}>
                    <label htmlFor="employerAddressLine2" className={styles.formLabel}>Address Line 2</label>
                    <input 
                      type="text" 
                      id="employerAddressLine2" 
                      name="employerAddressLine2"
                      className={styles.formInput} 
                      placeholder="Enter address line 2"
                      value={formData.employerAddressLine2}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                
                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label htmlFor="employerTownCity" className={styles.formLabel}>Town/City*</label>
                    <input 
                      type="text" 
                      id="employerTownCity" 
                      name="employerTownCity"
                      className={styles.formInput} 
                      placeholder="Enter town/city"
                      value={formData.employerTownCity}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  
                  <div className={styles.formGroup}>
                    <label htmlFor="employerCounty" className={styles.formLabel}>County*</label>
                    <input 
                      type="text" 
                      id="employerCounty" 
                      name="employerCounty"
                      className={styles.formInput} 
                      placeholder="Enter county"
                      value={formData.employerCounty}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>
                
                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label htmlFor="occupation" className={styles.formLabel}>Occupation*</label>
                    <input 
                      type="text" 
                      id="occupation" 
                      name="occupation"
                      className={styles.formInput} 
                      placeholder="Enter your job title"
                      value={formData.occupation}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  
                  <div className={styles.formGroup}>
                    <label htmlFor="employmentBasis" className={styles.formLabel}>Employment Basis*</label>
                    <select 
                      id="employmentBasis" 
                      name="employmentBasis"
                      className={styles.formInput}
                      value={formData.employmentBasis}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="">Please select</option>
                      <option value="Full time">Full time</option>
                      <option value="Part time">Part time</option>
                      <option value="Self Employed - Full time">Self Employed - Full time</option>
                      <option value="Self Employed - Part time">Self Employed - Part time</option>
                      <option value="Temporary">Temporary</option>
                      <option value="Unemployed">Unemployed</option>
                      <option value="Retired">Retired</option>
                    </select>
                  </div>
                </div>
                
                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label htmlFor="employmentCategory" className={styles.formLabel}>Employment Category*</label>
                    <select 
                      id="employmentCategory" 
                      name="employmentCategory"
                      className={styles.formInput}
                      value={formData.employmentCategory}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="">Please select</option>
                      <option value="Accounting">Accounting</option>
                      <option value="Business Owner">Business Owner</option>
                      <option value="Engineer">Engineer</option>
                      <option value="Finance/Banking">Finance/Banking</option>
                      <option value="IT/Technology">IT/Technology</option>
                      <option value="Legal">Legal</option>
                      <option value="Media">Media</option>
                      <option value="Medical/Dental">Medical/Dental</option>
                      <option value="Sporting">Sporting</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>
                
                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label htmlFor="yearsAtEmployment" className={styles.formLabel}>Years at Employment*</label>
                    <input 
                      type="number" 
                      id="yearsAtEmployment" 
                      name="yearsAtEmployment"
                      className={styles.formInput} 
                      min="0"
                      max="99"
                      placeholder="Enter years"
                      value={formData.yearsAtEmployment}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  
                  <div className={styles.formGroup}>
                    <label htmlFor="monthsAtEmployment" className={styles.formLabel}>Months at Employment*</label>
                    <input 
                      type="number" 
                      id="monthsAtEmployment" 
                      name="monthsAtEmployment"
                      className={styles.formInput} 
                      min="0"
                      max="11"
                      placeholder="Enter months"
                      value={formData.monthsAtEmployment}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  
                  <div className={styles.formGroup}>
                    <label htmlFor="grossAnnualIncome" className={styles.formLabel}>Gross Annual Income (£)*</label>
                    <input 
                      type="number" 
                      id="grossAnnualIncome" 
                      name="grossAnnualIncome"
                      className={styles.formInput} 
                      min="0"
                      placeholder="Enter annual income"
                      value={formData.grossAnnualIncome}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>
                
                {/* Previous Employment (if less than 3 years) */}
                {formData.yearsAtEmployment && parseInt(formData.yearsAtEmployment) < 3 && (
                  <>
                    <h3>Previous Employment</h3>
                    <p className={styles.sectionNote}>Please provide your previous employment details as you have been at your current job for less than 3 years.</p>
                    
                    <div className={styles.formRow}>
                      <div className={styles.formGroup}>
                        <label htmlFor="prevEmployer" className={styles.formLabel}>Previous Employer*</label>
                        <input 
                          type="text" 
                          id="prevEmployer" 
                          name="prevEmployer"
                          className={styles.formInput} 
                          placeholder="Enter previous employer name"
                          value={formData.prevEmployer}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      
                      <div className={styles.formGroup}>
                        <label htmlFor="prevEmployerPhone" className={styles.formLabel}>Employer Phone*</label>
                        <input 
                          type="tel" 
                          id="prevEmployerPhone" 
                          name="prevEmployerPhone"
                          className={styles.formInput} 
                          placeholder="Enter employer phone number"
                          value={formData.prevEmployerPhone}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                    </div>
                    
                    <div className={styles.formRow}>
                      <div className={styles.formGroup}>
                        <label htmlFor="prevEmployerPostcode" className={styles.formLabel}>Employer Postcode*</label>
                        <input 
                          type="text" 
                          id="prevEmployerPostcode" 
                          name="prevEmployerPostcode"
                          className={styles.formInput} 
                          placeholder="Enter previous employer postcode"
                          value={formData.prevEmployerPostcode}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      
                      <div className={styles.formGroup}>
                        <label htmlFor="prevEmployerNameNumber" className={styles.formLabel}>Building Name/Number*</label>
                        <input 
                          type="text" 
                          id="prevEmployerNameNumber" 
                          name="prevEmployerNameNumber"
                          className={styles.formInput} 
                          placeholder="Enter building name/number"
                          value={formData.prevEmployerNameNumber}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                    </div>
                    
                    <div className={styles.formRow}>
                      <div className={styles.formGroup}>
                        <label htmlFor="prevEmployerAddressLine1" className={styles.formLabel}>Address Line 1*</label>
                        <input 
                          type="text" 
                          id="prevEmployerAddressLine1" 
                          name="prevEmployerAddressLine1"
                          className={styles.formInput} 
                          placeholder="Enter address line 1"
                          value={formData.prevEmployerAddressLine1}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      
                      <div className={styles.formGroup}>
                        <label htmlFor="prevEmployerAddressLine2" className={styles.formLabel}>Address Line 2</label>
                        <input 
                          type="text" 
                          id="prevEmployerAddressLine2" 
                          name="prevEmployerAddressLine2"
                          className={styles.formInput} 
                          placeholder="Enter address line 2"
                          value={formData.prevEmployerAddressLine2}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>
                    
                    <div className={styles.formRow}>
                      <div className={styles.formGroup}>
                        <label htmlFor="prevEmployerTownCity" className={styles.formLabel}>Town/City*</label>
                        <input 
                          type="text" 
                          id="prevEmployerTownCity" 
                          name="prevEmployerTownCity"
                          className={styles.formInput} 
                          placeholder="Enter town/city"
                          value={formData.prevEmployerTownCity}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      
                      <div className={styles.formGroup}>
                        <label htmlFor="prevEmployerCounty" className={styles.formLabel}>County*</label>
                        <input 
                          type="text" 
                          id="prevEmployerCounty" 
                          name="prevEmployerCounty"
                          className={styles.formInput} 
                          placeholder="Enter county"
                          value={formData.prevEmployerCounty}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                    </div>
                    
                    <div className={styles.formRow}>
                      <div className={styles.formGroup}>
                        <label htmlFor="prevOccupation" className={styles.formLabel}>Occupation*</label>
                        <input 
                          type="text" 
                          id="prevOccupation" 
                          name="prevOccupation"
                          className={styles.formInput} 
                          placeholder="Enter your previous job title"
                          value={formData.prevOccupation}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      
                      <div className={styles.formGroup}>
                        <label htmlFor="prevEmploymentBasis" className={styles.formLabel}>Employment Basis*</label>
                        <select 
                          id="prevEmploymentBasis" 
                          name="prevEmploymentBasis"
                          className={styles.formInput}
                          value={formData.prevEmploymentBasis}
                          onChange={handleInputChange}
                          required
                        >
                          <option value="">Please select</option>
                          <option value="Full time">Full time</option>
                          <option value="Part time">Part time</option>
                          <option value="Self Employed - Full time">Self Employed - Full time</option>
                          <option value="Self Employed - Part time">Self Employed - Part time</option>
                          <option value="Temporary">Temporary</option>
                          <option value="Unemployed">Unemployed</option>
                          <option value="Retired">Retired</option>
                        </select>
                      </div>
                    </div>
                    
                    <div className={styles.formRow}>
                      <div className={styles.formGroup}>
                        <label htmlFor="prevEmploymentCategory" className={styles.formLabel}>Employment Category*</label>
                        <select 
                          id="prevEmploymentCategory" 
                          name="prevEmploymentCategory"
                          className={styles.formInput}
                          value={formData.prevEmploymentCategory}
                          onChange={handleInputChange}
                          required
                        >
                          <option value="">Please select</option>
                          <option value="Accounting">Accounting</option>
                          <option value="Business Owner">Business Owner</option>
                          <option value="Engineer">Engineer</option>
                          <option value="Finance/Banking">Finance/Banking</option>
                          <option value="IT/Technology">IT/Technology</option>
                          <option value="Legal">Legal</option>
                          <option value="Media">Media</option>
                          <option value="Medical/Dental">Medical/Dental</option>
                          <option value="Sporting">Sporting</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                    </div>
                    
                    <div className={styles.formRow}>
                      <div className={styles.formGroup}>
                        <label htmlFor="prevYearsAtEmployment" className={styles.formLabel}>Years at Employment*</label>
                        <input 
                          type="number" 
                          id="prevYearsAtEmployment" 
                          name="prevYearsAtEmployment"
                          className={styles.formInput} 
                          min="0"
                          max="99"
                          placeholder="Enter years"
                          value={formData.prevYearsAtEmployment}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      
                      <div className={styles.formGroup}>
                        <label htmlFor="prevMonthsAtEmployment" className={styles.formLabel}>Months at Employment*</label>
                        <input 
                          type="number" 
                          id="prevMonthsAtEmployment" 
                          name="prevMonthsAtEmployment"
                          className={styles.formInput} 
                          min="0"
                          max="11"
                          placeholder="Enter months"
                          value={formData.prevMonthsAtEmployment}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      
                      <div className={styles.formGroup}>
                        <label htmlFor="prevGrossAnnualIncome" className={styles.formLabel}>Gross Annual Income (£)*</label>
                        <input 
                          type="number" 
                          id="prevGrossAnnualIncome" 
                          name="prevGrossAnnualIncome"
                          className={styles.formInput} 
                          min="0"
                          placeholder="Enter annual income"
                          value={formData.prevGrossAnnualIncome}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                    </div>
                  </>
                )}
                
                <div className={styles.formNavigation}>
                  <button type="button" className={`${styles.button} ${styles.secondary}`} onClick={() => prevStage(4, 3)}>Previous</button>
                  <button type="button" className={styles.button} onClick={() => nextStage(4, 5)}>Next Step</button>
                </div>
              </div>
              
              {/* Form Stage 4: Affordability Questions */}
              <div className={`${styles.formStage} ${activeStage === 5 ? styles.active : ''}`} id="affordability" style={{ display: showCompletion ? 'none' : '' }}>
                <h3>Affordability Questions</h3>
                <p className={styles.sectionNote}>These questions help us understand your financial situation and determine the most suitable finance options for you.</p>
                
                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label htmlFor="replacingExistingFinance" className={styles.formLabel}>Is this application for a loan to replace an existing finance agreement?*</label>
                    <select 
                      id="replacingExistingFinance" 
                      name="replacingExistingFinance"
                      className={styles.formInput}
                      value={formData.replacingExistingFinance}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="">Please select</option>
                      <option value="Yes">Yes</option>
                      <option value="No">No</option>
                    </select>
                  </div>
                </div>
                
                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label htmlFor="additionalPrimaryIncome" className={styles.formLabel}>Do you have the ability to draw down additional Primary income?*</label>
                    <select 
                      id="additionalPrimaryIncome" 
                      name="additionalPrimaryIncome"
                      className={styles.formInput}
                      value={formData.additionalPrimaryIncome}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="">Please select</option>
                      <option value="Yes">Yes</option>
                      <option value="No">No</option>
                    </select>
                  </div>
                  
                  {formData.additionalPrimaryIncome === 'Yes' && (
                    <div className={styles.formGroup}>
                      <label htmlFor="additionalPrimaryIncomeAmount" className={styles.formLabel}>How much annually? (£)*</label>
                      <input 
                        type="number" 
                        id="additionalPrimaryIncomeAmount" 
                        name="additionalPrimaryIncomeAmount"
                        className={styles.formInput} 
                        min="0"
                        placeholder="Enter amount"
                        value={formData.additionalPrimaryIncomeAmount}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  )}
                </div>
                
                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label htmlFor="secondaryIncome" className={styles.formLabel}>Do you have a secondary Gross Annual Income or Savings?*</label>
                    <select 
                      id="secondaryIncome" 
                      name="secondaryIncome"
                      className={styles.formInput}
                      value={formData.secondaryIncome}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="">Please select</option>
                      <option value="Yes">Yes</option>
                      <option value="No">No</option>
                    </select>
                  </div>
                  
                  {formData.secondaryIncome === 'Yes' && (
                    <div className={styles.formGroup}>
                      <label htmlFor="secondaryIncomeAmount" className={styles.formLabel}>How much? (£)*</label>
                      <input 
                        type="number" 
                        id="secondaryIncomeAmount" 
                        name="secondaryIncomeAmount"
                        className={styles.formInput} 
                        min="0"
                        placeholder="Enter amount"
                        value={formData.secondaryIncomeAmount}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  )}
                </div>
                
                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label htmlFor="monthlyMortgageRental" className={styles.formLabel}>What is your share of monthly mortgage(s)/rental expenditure? (£)*</label>
                    <input 
                      type="number" 
                      id="monthlyMortgageRental" 
                      name="monthlyMortgageRental"
                      className={styles.formInput} 
                      min="0"
                      placeholder="Enter amount"
                      value={formData.monthlyMortgageRental}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>
                
                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label htmlFor="monthlyLivingCosts" className={styles.formLabel}>What is your share of monthly living costs? (Council tax, utilities, media, insurances, food, travel, savings, child maintenance, school fees, etc.) (£)*</label>
                    <input 
                      type="number" 
                      id="monthlyLivingCosts" 
                      name="monthlyLivingCosts"
                      className={styles.formInput} 
                      min="0"
                      placeholder="Enter amount"
                      value={formData.monthlyLivingCosts}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>
                
                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label htmlFor="securedCommitments" className={styles.formLabel}>Do you have any Secured HP and Finance agreements or other secured financial commitments?*</label>
                    <select 
                      id="securedCommitments" 
                      name="securedCommitments"
                      className={styles.formInput}
                      value={formData.securedCommitments}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="">Please select</option>
                      <option value="Yes">Yes</option>
                      <option value="No">No</option>
                    </select>
                  </div>
                  
                  {formData.securedCommitments === 'Yes' && (
                    <div className={styles.formGroup}>
                      <label htmlFor="securedCommitmentsAmount" className={styles.formLabel}>Monthly repayments (£)*</label>
                      <input 
                        type="number" 
                        id="securedCommitmentsAmount" 
                        name="securedCommitmentsAmount"
                        className={styles.formInput} 
                        min="0"
                        placeholder="Enter amount"
                        value={formData.securedCommitmentsAmount}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  )}
                </div>
                
                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label htmlFor="unsecuredCommitments" className={styles.formLabel}>Do you have any unsecured financial commitments?*</label>
                    <select 
                      id="unsecuredCommitments" 
                      name="unsecuredCommitments"
                      className={styles.formInput}
                      value={formData.unsecuredCommitments}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="">Please select</option>
                      <option value="Yes">Yes</option>
                      <option value="No">No</option>
                    </select>
                  </div>
                  
                  {formData.unsecuredCommitments === 'Yes' && (
                    <div className={styles.formGroup}>
                      <label htmlFor="unsecuredCommitmentsAmount" className={styles.formLabel}>Monthly repayments (£)*</label>
                      <input 
                        type="number" 
                        id="unsecuredCommitmentsAmount" 
                        name="unsecuredCommitmentsAmount"
                        className={styles.formInput} 
                        min="0"
                        placeholder="Enter amount"
                        value={formData.unsecuredCommitmentsAmount}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  )}
                </div>
                
                <div className={styles.formNavigation}>
                  <button type="button" className={`${styles.button} ${styles.secondary}`} onClick={() => prevStage(5, 4)}>Previous</button>
                  <button type="button" className={styles.button} onClick={() => nextStage(5, 6)}>Next Step</button>
                </div>
              </div>
              
              {/* Form Stage 5: Bank Details */}
              <div className={`${styles.formStage} ${activeStage === 6 ? styles.active : ''}`} id="bank-details" style={{ display: showCompletion ? 'none' : '' }}>
                <h3>Bank Details</h3>
                <p className={styles.sectionNote}>Please provide your banking information for the finance application.</p>
                
                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label htmlFor="accountName" className={styles.formLabel}>Account Name*</label>
                    <input 
                      type="text" 
                      id="accountName" 
                      name="accountName"
                      className={styles.formInput} 
                      placeholder="Enter account name"
                      value={formData.accountName}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  
                  <div className={styles.formGroup}>
                    <label htmlFor="accountType" className={styles.formLabel}>Account Type*</label>
                    <select 
                      id="accountType" 
                      name="accountType"
                      className={styles.formInput}
                      value={formData.accountType}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="">Please select</option>
                      <option value="Current">Current</option>
                      <option value="Deposit">Deposit</option>
                      <option value="Postal">Postal</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>
                
                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label htmlFor="sortCode" className={styles.formLabel}>Sort Code*</label>
                    <input 
                      type="text" 
                      id="sortCode" 
                      name="sortCode"
                      className={styles.formInput} 
                      placeholder="XX-XX-XX"
                      value={formData.sortCode}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  
                  <div className={styles.formGroup}>
                    <label htmlFor="accountNumber" className={styles.formLabel}>Account Number*</label>
                    <input 
                      type="text" 
                      id="accountNumber" 
                      name="accountNumber"
                      className={styles.formInput} 
                      placeholder="Enter account number"
                      value={formData.accountNumber}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>
                
                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label htmlFor="bankName" className={styles.formLabel}>Bank Name*</label>
                    <input 
                      type="text" 
                      id="bankName" 
                      name="bankName"
                      className={styles.formInput} 
                      placeholder="Enter bank name"
                      value={formData.bankName}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  
                  <div className={styles.formGroup}>
                    <label htmlFor="branchName" className={styles.formLabel}>Branch Name*</label>
                    <input 
                      type="text" 
                      id="branchName" 
                      name="branchName"
                      className={styles.formInput} 
                      placeholder="Enter branch name"
                      value={formData.branchName}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>
                
                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label htmlFor="bankAddress" className={styles.formLabel}>Bank Address*</label>
                    <input 
                      type="text" 
                      id="bankAddress" 
                      name="bankAddress"
                      className={styles.formInput} 
                      placeholder="Enter bank address"
                      value={formData.bankAddress}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  
                  <div className={styles.formGroup}>
                    <label htmlFor="yearsAtBank" className={styles.formLabel}>Years at Bank*</label>
                    <input 
                      type="number" 
                      id="yearsAtBank" 
                      name="yearsAtBank"
                      className={styles.formInput} 
                      min="0"
                      placeholder="Enter years at bank"
                      value={formData.yearsAtBank}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>
                
                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>
                    <input 
                      type="checkbox" 
                      name="termsAccepted"
                      checked={formData.termsAccepted}
                      onChange={handleInputChange}
                      required
                    /> 
                    I confirm that all information provided is accurate and complete. I consent to credit searches and the processing of my data as outlined in the privacy notice.
                  </label>
                </div>
                
                <div className={styles.formNavigation}>
                  <button type="button" className={`${styles.button} ${styles.secondary}`} onClick={() => prevStage(6, 5)}>Previous</button>
                  <button type="button" className={styles.button} onClick={handleShowCompletion}>Submit Proposal</button>
                </div>
              </div>
              
              {/* Completion Message */}
              <div className={styles.formCompletion} style={{ display: showCompletion ? 'block' : 'none' }}>
                <div className={styles.completionIcon}>
                  <i className="fas fa-check"></i>
                </div>
                <h3>Proposal Submitted Successfully!</h3>
                <p>Thank you for your finance application. One of our specialists will contact you shortly to discuss your requirements and the next steps.</p>
                <p>Your reference number: {referenceNumber}</p>
                <p>A confirmation email has been sent to your provided email address.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
      
      {/* Partners Section with black to subtle gradient */}
      <div className={styles.partnersSection}>
        <div className={styles.container}>
          <div className={styles.partnersHeading}>
            <h2>Our Partners</h2>
            <p>We work with these trusted partners to deliver exceptional finance solutions tailored to your needs.</p>
          </div>
          <div className={styles.partnersGrid}>
            <div className={styles.partnerLogo}>
              <img src="/above-beyond-logo.svg" alt="Above & Beyond" />
            </div>
            <div className={styles.partnerLogo}>
              <img src="/jbr-capital-logo.svg" alt="JBR Capital" />
            </div>
            <div className={styles.partnerLogo}>
              <img src="/north-ridge-finance-logo.svg" alt="North Ridge Finance" />
            </div>
            <div className={styles.partnerLogo}>
              <img src="/dsg-group-logo.svg" alt="DSG Group" />
            </div>
          </div>
        </div>
      </div>
      
      {/* Improved Footer styling */}
      <footer className={styles.footer}>
        <div className={styles.footerTop}>
          <div className={styles.footerTopBgImage} style={{ backgroundImage: 'url(https://dragon2000-multisite.s3.eu-west-2.amazonaws.com/wp-content/uploads/sites/401/2021/05/19161527/Better-Performance-Background-banner-image-2.jpg)' }}></div>
          <div className={styles.footerTopBackground}></div>
          
          <div className={styles.container}>
            <div className={styles.footerColumns}>
              <div className={styles.footerColumn}>
                <div className={styles.social}>
                  <a href="https://www.facebook.com/betterperformanceltd" target="_blank" rel="noopener" aria-label="Facebook">
                    <i className="fab fa-facebook-f fa-fw"></i>
                  </a>
                  <a href="https://www.instagram.com/betterperformance_" target="_blank" rel="noopener" aria-label="Instagram">
                    <i className="fab fa-instagram fa-fw"></i>
                  </a>
                </div>
                
                <div className={styles.phone}>
                  <a href="tel:02920 704425">02920 704425</a>
                  <a href="tel:07500 314681">07500 314681</a>
                </div>
                
                <div className={styles.address}>
                  <h6>Better Performance Ltd</h6>
                  <div>Marriott House, Penarth Road, Cardiff, CF11 8TW</div>
                </div>
              </div>
              
              <div className={styles.footerColumn}>
                <div className={styles.openingHours}>
                  <div className={styles.dayRow}>
                    <span className={styles.day}>Monday</span>
                    <span className={styles.time}>10:00 - 18:00</span>
                  </div>
                  <div className={styles.dayRow}>
                    <span className={styles.day}>Tuesday</span>
                    <span className={styles.time}>10:00 - 18:00</span>
                  </div>
                  <div className={styles.dayRow}>
                    <span className={styles.day}>Wednesday</span>
                    <span className={styles.time}>10:00 - 18:00</span>
                  </div>
                  <div className={styles.dayRow}>
                    <span className={styles.day}>Thursday</span>
                    <span className={styles.time}>10:00 - 18:00</span>
                  </div>
                  <div className={styles.dayRow}>
                    <span className={styles.day}>Friday</span>
                    <span className={styles.time}>10:00 - 18:00</span>
                  </div>
                  <div className={styles.dayRow}>
                    <span className={styles.day}>Saturday</span>
                    <span className={styles.time}>10:00 - 18:00</span>
                  </div>
                  <div className={styles.dayRow}>
                    <span className={styles.day}>Sunday</span>
                    <span className={styles.time}>Closed</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className={styles.footerColumns}>
              <div className={styles.footerColumn}>
                <div className={styles.infoSection}>
                  Better Performance Ltd
                </div>
                <div className={styles.infoSection}>
                  Registered in England and Wales
                </div>
                <div className={styles.infoSection}>
                  VAT No. 218430134
                </div>
                <div className={styles.infoSection}>
                  Company No. 09579454
                </div>
              </div>
              <div className={styles.footerColumn}>
                <p>
                  Better Performance Ltd is registered in England and Wales under company number: 09579454. Registered office address: Better Performance Ltd, Marriott House, Penarth Rd, Cardiff, CF11 8TW
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className={styles.footerBottom}>
          <div className={styles.container}>
            <div className={styles.footerColumns}>
              <div className={styles.footerColumn}>
                <span>&copy; 2025 Designed &amp; Powered by Dragon2000 & Further Refined and Redesigned by <b>JB Websolutions</b></span>
              </div>
              
              <div className={styles.footerColumn}>
                <ul className={styles.horizontalMenu}>
                  <li><a href="/privacy-policy/">Privacy Policy</a></li>
                  <li><a href="/cookies/">Cookies</a></li>
                  <li><a href="/sitemap/">Sitemap</a></li>
                  <li><a href="#" target="_blank">Complaints Procedure</a></li>
                  <li><a href="#" target="_blank">Vulnerable Consumer Policy</a></li>
                  <li><a href="#" target="_blank">Inital Disclosure Document</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
      
      {/* WhatsApp Button */}
      <a href="https://api.whatsapp.com/send?phone=+447500314681&text=Hello%20Better%20Performance%20Ltd." className={styles.whatsappButton} target="_blank" rel="noreferrer">
        <span className={styles.whatsappIcon}><i className="fab fa-whatsapp"></i></span>
      </a>
      
      {/* Improved Popups for Learn More buttons */}
      {activePopup === 'hp' && (
        <div className={styles.popupOverlay}>
          <div className={styles.popupDocument}>
            <div className={styles.popupHeader}>
              <h2>Hire Purchase (HP) Finance</h2>
              <button className={styles.closePopup} onClick={closePopup}>
                <i className="fas fa-times"></i>
              </button>
            </div>
            <div className={styles.popupContent}>
              <div className={styles.popupExample}>
                <em>This is an example timeline for a BMW M3 at £60,000 over 48 months</em>
              </div>
              
              <h3>How Hire Purchase Works</h3>
              <p>Hire Purchase (HP) is a straightforward way to finance your vehicle. You'll pay a deposit followed by fixed monthly payments over an agreed term. At the end of the agreement, you'll own the vehicle outright.</p>
              
              {/* Payment Steps Visualization */}
              <div className={styles.paymentStepsContainer}>
                <div className={styles.paymentStep}>
                  <div className={styles.paymentIcon}>
                    <i className="fas fa-hand-holding-usd"></i>
                  </div>
                  <div className={styles.paymentTitle}>Initial Deposit</div>
                  <div className={styles.paymentAmount}>£6,000</div>
                  <div className={styles.paymentDesc}>10% of vehicle value</div>
                </div>
                
                <div className={styles.paymentStep}>
                  <div className={styles.paymentIcon}>
                    <i className="fas fa-calendar-alt"></i>
                  </div>
                  <div className={styles.paymentTitle}>Monthly Payments</div>
                  <div className={styles.paymentAmount}>£1,269.37</div>
                  <div className={styles.paymentDesc}>for 48 months</div>
                </div>
                
                <div className={styles.paymentStep}>
                  <div className={styles.paymentIcon}>
                    <i className="fas fa-check-circle"></i>
                  </div>
                  <div className={styles.paymentTitle}>Final Payment</div>
                  <div className={styles.paymentAmount}>£0</div>
                  <div className={styles.paymentDesc}>You now own the vehicle</div>
                </div>
              </div>

              <div className={styles.documentTable}>
                <h3>Financial Breakdown</h3>
                <table>
                  <tbody>
                    <tr>
                      <td>Finance Type</td>
                      <td>Hire Purchase</td>
                    </tr>
                    <tr>
                      <td>Cash Deposit</td>
                      <td>£6,000</td>
                    </tr>
                    <tr>
                      <td>Amount of Credit</td>
                      <td>£54,000</td>
                    </tr>
                    <tr>
                      <td>APR</td>
                      <td>9.4%</td>
                    </tr>
                    <tr>
                      <td>Term</td>
                      <td>48 months</td>
                    </tr>
                    <tr>
                      <td>Monthly Payment</td>
                      <td>£1,269.37</td>
                    </tr>
                    <tr>
                      <td>Total Payable</td>
                      <td>£75,705.34</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div className={styles.documentNote}>
                <p><strong>Key Benefits:</strong></p>
                <ul>
                  <li>Own the vehicle at the end of the agreement</li>
                  <li>Fixed interest rate throughout the term</li>
                  <li>Flexible deposit options available</li>
                  <li>No mileage restrictions</li>
                  <li>Terms from 12-60 months</li>
                  <li>Available for new and used vehicles</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {activePopup === 'pcp' && (
        <div className={styles.popupOverlay}>
          <div className={styles.popupDocument}>
            <div className={styles.popupHeader}>
              <h2>Personal Contract Purchase (PCP) Finance</h2>
              <button className={styles.closePopup} onClick={closePopup}>
                <i className="fas fa-times"></i>
              </button>
            </div>
            <div className={styles.popupContent}>
              <div className={styles.popupExample}>
                <em>This is an example timeline for a BMW M3 at £60,000 over 48 months</em>
              </div>
              
              <h3>How Personal Contract Purchase Works</h3>
              <p>Personal Contract Purchase (PCP) offers lower monthly payments than Hire Purchase. You'll pay a deposit followed by monthly payments over an agreed term. At the end of the agreement, you have three options: pay the final balloon payment to own the vehicle, part-exchange for a new vehicle, or simply return the vehicle.</p>
              
              {/* Payment Steps */}
              <div className={styles.paymentStepsContainer}>
                <div className={styles.paymentStep}>
                  <div className={styles.paymentIcon}>
                    <i className="fas fa-hand-holding-usd"></i>
                  </div>
                  <div className={styles.paymentTitle}>Initial Deposit</div>
                  <div className={styles.paymentAmount}>£6,000</div>
                  <div className={styles.paymentDesc}>10% of vehicle value</div>
                </div>
                
                <div className={styles.paymentStep}>
                  <div className={styles.paymentIcon}>
                    <i className="fas fa-calendar-alt"></i>
                  </div>
                  <div className={styles.paymentTitle}>Monthly Payments</div>
                  <div className={styles.paymentAmount}>£801.22</div>
                  <div className={styles.paymentDesc}>for 48 months</div>
                </div>
                
                <div className={styles.paymentStep}>
                  <div className={styles.paymentIcon}>
                    <i className="fas fa-route"></i>
                  </div>
                  <div className={styles.paymentTitle}>End of Agreement</div>
                  <div className={styles.paymentAmount}>3 Options</div>
                  <div className={styles.paymentDesc}>Buy, Return, or Exchange</div>
                </div>
              </div>

              <div className={styles.documentTable}>
                <h3>Financial Breakdown</h3>
                <table>
                  <tbody>
                    <tr>
                      <td>Finance Type</td>
                      <td>PCP</td>
                    </tr>
                    <tr>
                      <td>Cash Deposit</td>
                      <td>£6,000</td>
                    </tr>
                    <tr>
                      <td>Amount of Credit</td>
                      <td>£54,000</td>
                    </tr>
                    <tr>
                      <td>APR</td>
                      <td>9.4%</td>
                    </tr>
                    <tr>
                      <td>Term</td>
                      <td>48 months</td>
                    </tr>
                    <tr>
                      <td>Monthly Payment</td>
                      <td>£801.22</td>
                    </tr>
                    <tr>
                      <td>GFV/Balloon</td>
                      <td>£32,038.00</td>
                    </tr>
                    <tr>
                      <td>Total Payable</td>
                      <td>£75,705.34</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className={styles.documentNote}>
                <p><strong>Key Benefits:</strong></p>
                <ul>
                  <li>Lower monthly payments than Hire Purchase</li>
                  <li>Flexibility at the end of the agreement</li>
                  <li>Fixed interest rate throughout the term</li>
                  <li>Deposit options available</li>
                  <li>Protection against unexpected depreciation</li>
                  <li>Ability to change vehicles regularly</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {activePopup === 'specialist' && (
        <div className={styles.popupOverlay}>
          <div className={styles.popupDocument}>
            <div className={styles.popupHeader}>
              <h2>Specialist Vehicle Finance</h2>
              <button className={styles.closePopup} onClick={closePopup}>
                <i className="fas fa-times"></i>
              </button>
            </div>
            <div className={styles.popupContent}>
              <div className={styles.popupExample}>
                <em>This is an example for a BMW M3 at £60,000 with premium terms</em>
              </div>
              
              <h3>Specialist Finance Options</h3>
              <p>Our Specialist Vehicle Finance includes bespoke Lease Purchase/HP options tailored for prestige, performance, and classic vehicles. These options are designed to accommodate the unique requirements of high-value vehicles and their owners.</p>
              
              {/* Payment Steps */}
              <div className={styles.paymentStepsContainer}>
                <div className={styles.paymentStep}>
                  <div className={styles.paymentIcon}>
                    <i className="fas fa-hand-holding-usd"></i>
                  </div>
                  <div className={styles.paymentTitle}>Initial Deposit</div>
                  <div className={styles.paymentAmount}>£6,000</div>
                  <div className={styles.paymentDesc}>10% of vehicle value</div>
                </div>
                
                <div className={styles.paymentStep}>
                  <div className={styles.paymentIcon}>
                    <i className="fas fa-calendar-alt"></i>
                  </div>
                  <div className={styles.paymentTitle}>Monthly Payments</div>
                  <div className={styles.paymentAmount}>£701.50</div>
                  <div className={styles.paymentDesc}>for 48 months</div>
                </div>
                
                <div className={styles.paymentStep}>
                  <div className={styles.paymentIcon}>
                    <i className="fas fa-car"></i>
                  </div>
                  <div className={styles.paymentTitle}>Optional Final Payment</div>
                  <div className={styles.paymentAmount}>£35,000</div>
                  <div className={styles.paymentDesc}>to own the vehicle</div>
                </div>
              </div>

              <div className={styles.documentTable}>
                <h3>Financial Breakdown</h3>
                <table>
                <tbody>
                    <tr>
                      <td>Finance Type</td>
                      <td>Specialist Lease Purchase</td>
                    </tr>
                    <tr>
                      <td>Cash Deposit</td>
                      <td>£6,000</td>
                    </tr>
                    <tr>
                      <td>Amount of Credit</td>
                      <td>£54,000</td>
                    </tr>
                    <tr>
                      <td>APR</td>
                      <td>8.9%</td>
                    </tr>
                    <tr>
                      <td>Term</td>
                      <td>48 months</td>
                    </tr>
                    <tr>
                      <td>Monthly Payment</td>
                      <td>£701.50</td>
                    </tr>
                    <tr>
                      <td>GFV/Balloon</td>
                      <td>£35,000.00</td>
                    </tr>
                    <tr>
                      <td>Total Payable</td>
                      <td>£74,682.00</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div className={styles.documentNote}>
                <p><strong>Specialist Features:</strong></p>
                <ul>
                  <li>Tailored for high-value vehicles (prestige, performance, classic)</li>
                  <li>Flexible deposit options</li>
                  <li>Balloon payment options to reduce monthly payments</li>
                  <li>Extended terms available</li>
                  <li>Consideration for unique vehicle characteristics</li>
                  <li>Enhanced future value protection</li>
                  <li>Lease Purchase/HP options with competitive rates</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}