import { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import styles from '../../styles/Finance.module.css';
import { motion } from 'framer-motion';

export default function WarrantyPage() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState('platinum');
  const [activeFaq, setActiveFaq] = useState(null);
  const [isHeaderSticky, setIsHeaderSticky] = useState(false);
  const optionsRef = useRef(null);
  
  // Function to toggle FAQ items
  const toggleFaq = (index) => {
    if (activeFaq === index) {
      setActiveFaq(null);
    } else {
      setActiveFaq(index);
    }
  };
  
  // Handle sticky navigation for warranty options
  useEffect(() => {
    const handleScroll = () => {
      if (optionsRef.current) {
        const position = optionsRef.current.getBoundingClientRect();
        setIsHeaderSticky(position.top <= 0);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  // FAQ data
  const faqData = [
    {
      question: "What does the RAC warranty cover?",
      answer: "RAC warranties cover the cost of parts and labor for mechanical and electrical repairs caused by component failure. The specific components covered depend on the level of cover you choose (Platinum or Gold)."
    },
    {
      question: "How long does coverage last?",
      answer: "Our standard warranty covers you for 3 months, with options to extend up to 3 years depending on your requirements and vehicle."
    },
    {
      question: "Is there a claims limit?",
      answer: "Yes, the Platinum cover has a £1,000 individual claim limit with unlimited claims. Gold cover limits vary by component. Our team can provide specific details based on your vehicle."
    },
    {
      question: "What should I do if my vehicle breaks down?",
      answer: "If your vehicle breaks down, contact RAC Assistance immediately. Over 90% of all RAC patrol men resolve vehicle breakdowns at the roadside without the need for a garage visit."
    },
    {
      question: "Are all vehicles eligible for RAC warranty?",
      answer: "Most vehicles we sell qualify for RAC warranty coverage. However, some exclusions may apply based on age, mileage, or other factors. Our sales team will confirm eligibility for your specific vehicle."
    },
    {
      question: "Can I transfer the warranty if I sell my vehicle?",
      answer: "Yes, in most cases RAC warranties can be transferred to the new owner, which can add value when selling your vehicle. Terms and conditions apply."
    }
  ];
  
  // Coverage categories for Gold cover
  const coverageCategories = [
    {
      title: "Engine & Powertrain",
      icon: "fas fa-cogs",
      components: ["Engine", "Timing Belts", "Turbo", "Fuel System"]
    },
    {
      title: "Transmission",
      icon: "fa-cogs",
      components: ["Gearbox: Manual, Auto & CVT", "Clutch", "Drive System", "Prop Shaft"]
    },
    {
      title: "Suspension & Steering",
      icon: "fa-car-side",
      components: ["Front/Rear Suspension", "Steering", "Wheel Bearings", "Brakes"]
    },
    {
      title: "Electrical & Cooling",
      icon: "fa-bolt",
      components: ["Electrics", "Electronic Control Units", "Cooling System", "Casings"]
    }
  ];
  
  // Comparison table data
  const comparisonData = {
    platinum: {
      title: 'RAC Platinum Cover',
      price: '£1,000 individual claim limit with unlimited claims',
      coverage: 'Comprehensive coverage including all components listed in Gold plus additional premium features',
      benefits: [
        'Full UK and European Coverage (Warranty only)',
        '90 days complimentary RAC Assistance included',
        'Vehicle Hire',
        'Overnight Accommodation',
        'Available for 1, 2 or 3 years'
      ]
    },
    gold: {
      title: 'RAC Gold Cover',
      price: 'Comprehensive component coverage',
      coverage: 'Extensive coverage of major vehicle systems and components',
      benefits: [
        'Engine',
        'Timing Belts',
        'Turbo',
        'Gearbox: Manual, Auto & CVT',
        'Drive System',
        'Brakes',
        'Steering',
        'Cooling System',
        'Prop Shaft',
        'Fuel System',
        'Front/Rear Suspension',
        'Wheel Bearings',
        'Clutch',
        'Electrics',
        'Electronic Control Units',
        'Casings'
      ]
    }
  };

  // Active State 
  const [activeSection, setActiveSection] = useState(null);
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      
      const overviewSection = document.getElementById('warranty-overview');
      const optionsSection = document.getElementById('warranty-options');
      
      if (overviewSection && scrollPosition >= overviewSection.offsetTop && 
          scrollPosition < (optionsSection ? optionsSection.offsetTop : Infinity)) {
        setActiveSection('overview');
      } else if (optionsSection && scrollPosition >= optionsSection.offsetTop) {
        setActiveSection('options');
      } else {
        setActiveSection(null);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScrollTransition = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScrollTransition);
    return () => {
      window.removeEventListener('scroll', handleScrollTransition);
    };
  }, []);

  const scrollToOverview = (e) => {
    e.preventDefault();
    const overviewSection = document.getElementById('warranty-overview');
    if (overviewSection) {
      overviewSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };
  
  const scrollToOptions = (e) => {
    e.preventDefault();
    const optionsSection = document.getElementById('warranty-options');
    if (optionsSection) {
      optionsSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <>
      <Head>
        <title>Premium Vehicle Warranty Solutions | Better Performance Ltd</title>
        <meta name="description" content="Better Performance offers comprehensive RAC warranty solutions to protect your vehicle investment." />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" />
      </Head>

      {/* Header */}
      <header className={`${styles.enhancedHeader} ${isScrolled ? styles.headerScrolled : ''}`}>
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

      {/* Hero Image and Banner*/}
      <div className={styles.modernHeroWrapper}>
        <div 
          className={styles.modernHeroImage} 
          style={{
            backgroundImage: `url(/GALLARDO/20250331-LDB04038.jpg)`,
          }}
        ></div>
        <div className={styles.modernHeroOverlay}>
          <motion.div 
            className={styles.modernHeroContent}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1>Premium Vehicle Warranty Solutions</h1>
            <p>Protect your investment with RAC-backed warranty coverage</p>
            <motion.div 
              className={styles.heroNavigation}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <button 
                onClick={scrollToOverview} 
                className={`${styles.navButton} ${styles.activeNavButton}`}
              >
                Overview
              </button>
              <button 
                onClick={scrollToOptions} 
                className={`${styles.navButton} ${styles.activeNavButton}`}
              >
                Options
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>
      
      {/* Main Content */}
      <div className={styles.container}>
        <section className={styles.contentSection}>
          <h2 className={styles.sectionTitle}>Vehicle Warranty Protection</h2>
          
          <div className={styles.financeBrief}>
            <p>We offer comprehensive RAC warranty solutions that provide you with peace of mind and protection against unexpected repair costs. Our warranty options are designed to keep you on the road with minimal disruption to your life.</p>
          </div>
          
          {/* Warranty Overview Section */}
          <motion.div 
            id="warranty-overview" 
            className={styles.warrantyOverviewContainer}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <div className={styles.warrantyIntro}>
              <div className={styles.introContent}>
                <h2>Peace of Mind Comes Standard</h2>
                <p>At Better Performance, we believe quality should never be compromised. Every vehicle we sell undergoes rigorous testing and comes with comprehensive warranty protection.</p>
              </div>
              <div className={styles.introImage}>
                <img src="/SPYDER-RS/20250409-DSC05617.jpg" alt="Porsche 981 GT4 Spyder RS" className={styles.roundedImage} />
              </div>
            </div>
            
            <div className={styles.warrantyOverview}>
              <motion.div 
                className={styles.overviewCard}
                whileHover={{ 
                  y: -10,
                  boxShadow: "0 15px 30px rgba(0, 0, 0, 0.1)"
                }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <div className={styles.overviewIconContainer}>
                  <div className={styles.overviewIcon}>
                    <i className="fas fa-shield-alt"></i>
                  </div>
                </div>
                <h3>Expert Preparation</h3>
                <p>We prepare our vehicles to the highest standards in our purpose-built workshop. Every vehicle is extensively road tested, evaluated and meticulously appraised before sale.</p>
                <div className={styles.cardLink}>
                  <span>Our Standards</span>
                  <i className="fas fa-arrow-right"></i>
                </div>
              </motion.div>
              
              <motion.div 
                className={styles.overviewCard}
                whileHover={{ 
                  y: -10,
                  boxShadow: "0 15px 30px rgba(0, 0, 0, 0.1)"
                }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <div className={styles.overviewIconContainer}>
                  <div className={styles.overviewIcon}>
                    <i className="fas fa-wrench"></i>
                  </div>
                </div>
                <h3>Comprehensive Coverage</h3>
                <p>Despite thorough inspection, occasionally the unforeseen can occur. That's why all our vehicles come with complimentary RAC Warranty and Breakdown assistance.</p>
                <div className={styles.cardLink}>
                  <span>Coverage Details</span>
                  <i className="fas fa-arrow-right"></i>
                </div>
              </motion.div>
              
              <motion.div 
                className={styles.overviewCard}
                whileHover={{ 
                  y: -10,
                  boxShadow: "0 15px 30px rgba(0, 0, 0, 0.1)"
                }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <div className={styles.overviewIconContainer}>
                  <div className={styles.overviewIcon}>
                    <i className="fas fa-headset"></i>
                  </div>
                </div>
                <h3>24/7 Support</h3>
                <p>Help is available 24/7 through our RAC partnership. Over 90% of all RAC patrol men resolve vehicle breakdowns at the roadside without the need for a garage visit.</p>
                <div className={styles.cardLink}>
                  <span>Support Options</span>
                  <i className="fas fa-arrow-right"></i>
                </div>
              </motion.div>
            </div>
          </motion.div>
          
          {/* Warranty Options Tabs */}
          <div id="warranty-options" className={styles.warrantyOptions} ref={optionsRef}>
            <div className={`${styles.warrantyNav} ${isHeaderSticky ? styles.stickyNav : ''}`}>
              <div className={styles.container}>
                <h2>RAC Warranty Options</h2>
                <div className={styles.warrantyTabs}>
                  <button 
                    className={`${styles.warrantyTab} ${activeTab === 'platinum' ? styles.activeTab : ''}`}
                    onClick={() => setActiveTab('platinum')}
                  >
                    <div className={styles.tabIconContainer}>
                      <i className="fas fa-crown"></i>
                    </div>
                    <span>Platinum Cover</span>
                  </button>
                  <button 
                    className={`${styles.warrantyTab} ${activeTab === 'gold' ? styles.activeTab : ''}`}
                    onClick={() => setActiveTab('gold')}
                  >
                    <div className={styles.tabIconContainer}>
                      <i className="fas fa-medal"></i>
                    </div>
                    <span>Gold Cover</span>
                  </button>
                </div>
              </div>
            </div>
            
            <p className={styles.centeredText}>Choose the level of protection that's right for you and your vehicle</p>
            
            <div className={styles.warrantyTabContent}>
              {activeTab === 'platinum' && (
                <motion.div 
                  className={styles.tabPanel}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className={styles.warrantyCard}>
                    <div className={styles.warrantyCardHeader}>
                      <div className={styles.warrantyLogoContainer}>
                        <div className={styles.warrantyLogo}>
                          <img src="/RAC-logo.svg" alt="RAC Logo" />
                        </div>
                      </div>
                      <div className={styles.warrantyTitleContainer}>
                        <span className={styles.warrantyBadge}>Premium</span>
                        <h3>RAC Platinum Cover</h3>
                        <p>Our most comprehensive warranty protection</p>
                      </div>
                    </div>
                    <div className={styles.warrantyCardContent}>
                      <div className={styles.warrantyHighlights}>
                        <div className={styles.highlightItem}>
                          <div className={styles.highlightIcon}>
                            <i className="fas fa-pound-sign"></i>
                          </div>
                          <div className={styles.highlightContent}>
                            <h5>Claim Limit</h5>
                            <p>£1,000 per claim with unlimited claims</p>
                          </div>
                        </div>
                        <div className={styles.highlightItem}>
                          <div className={styles.highlightIcon}>
                            <i className="fas fa-globe-europe"></i>
                          </div>
                          <div className={styles.highlightContent}>
                            <h5>Coverage Area</h5>
                            <p>Full UK and European coverage</p>
                          </div>
                        </div>
                        <div className={styles.highlightItem}>
                          <div className={styles.highlightIcon}>
                            <i className="fas fa-calendar-alt"></i>
                          </div>
                          <div className={styles.highlightContent}>
                            <h5>Duration Options</h5>
                            <p>Available for 1, 2 or 3 years</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className={styles.benefitsContainer}>
                        <h4>What's Included</h4>
                        <div className={styles.benefitsList}>
                          {comparisonData.platinum.benefits.map((benefit, index) => (
                            <motion.div 
                              key={index}
                              className={styles.benefitItem}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.1 }}
                            >
                              <i className="fas fa-check-circle"></i>
                              <span>{benefit}</span>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                      
                      <div className={styles.featuredVehicle}>
                        <div className={styles.featuredImageContainer}>
                          <img src="/GALLARDO/20250331-LDB04125.jpg" alt="Lamborghini Gallardo" className={styles.featuredImage} />
                        </div>
                        <div className={styles.featuredContent}>
                          <h4>Platinum Protection for Premium Vehicles</h4>
                          <p>Our Platinum coverage is recommended for high-performance and luxury vehicles to ensure complete peace of mind.</p>
                        </div>
                      </div>
                      
                      <div className={styles.warrantyFooter}>
                        <div className={styles.pricingBadge}>
                          <div className={styles.pricingContent}>
                            <span>Flexible Pricing</span>
                            <p>Based on your vehicle specifications</p>
                          </div>
                        </div>
                        <motion.a 
                          href="#contact-us" 
                          className={styles.warrantyButton}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <span>Request Quote</span>
                          <i className="fas fa-arrow-right"></i>
                        </motion.a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
              
              {activeTab === 'gold' && (
                <motion.div 
                  className={styles.tabPanel}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className={styles.warrantyCard}>
                    <div className={styles.warrantyCardHeader}>
                      <div className={styles.warrantyLogoContainer}>
                        <div className={styles.warrantyLogo}>
                          <img src="/RAC-logo.svg" alt="RAC Logo" />
                        </div>
                      </div>
                      <div className={styles.warrantyTitleContainer}>
                        <span className={styles.warrantyBadge}>Comprehensive</span>
                        <h3>RAC Gold Cover</h3>
                        <p>Extensive protection for major vehicle systems</p>
                      </div>
                    </div>
                    <div className={styles.warrantyCardContent}>
                      <div className={styles.warrantyHighlights}>
                        <div className={styles.highlightItem}>
                          <div className={styles.highlightIcon}>
                            <i className="fas fa-car"></i>
                          </div>
                          <div className={styles.highlightContent}>
                            <h5>Component Coverage</h5>
                            <p>Protects essential vehicle systems</p>
                          </div>
                        </div>
                        <div className={styles.highlightItem}>
                          <div className={styles.highlightIcon}>
                            <i className="fas fa-tools"></i>
                          </div>
                          <div className={styles.highlightContent}>
                            <h5>Parts & Labor</h5>
                            <p>Covers both parts and labor costs</p>
                          </div>
                        </div>
                        <div className={styles.highlightItem}>
                          <div className={styles.highlightIcon}>
                            <i className="fas fa-phone-alt"></i>
                          </div>
                          <div className={styles.highlightContent}>
                            <h5>Breakdown Support</h5>
                            <p>Includes RAC breakdown assistance</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className={styles.coverageCategoriesContainer}>
                        <h4>Covered Components</h4>
                        <div className={styles.coverageCategories}>
                          {coverageCategories.map((category, index) => (
                            <motion.div 
                              key={index}
                              className={styles.coverageCategory}
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: index * 0.15 }}
                            >
                              <div className={styles.categoryHeader}>
                                <div className={styles.categoryIcon}>
                                  <i className={`fas ${category.icon}`}></i>
                                </div>
                                <h5>{category.title}</h5>
                              </div>
                              <ul className={styles.categoryComponents}>
                                {category.components.map((component, compIndex) => (
                                  <li key={compIndex}>
                                    <i className="fas fa-check"></i>
                                    <span>{component}</span>
                                  </li>
                                ))}
                              </ul>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                      
                      <div className={styles.warrantyFooter}>
                        <div className={styles.pricingBadge}>
                          <div className={styles.pricingContent}>
                            <span>Flexible Pricing</span>
                            <p>Based on your vehicle specifications</p>
                          </div>
                        </div>
                        <motion.a 
                          href="#contact-us" 
                          className={styles.warrantyButton}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <span>Request Quote</span>
                          <i className="fas fa-arrow-right"></i>
                        </motion.a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>
          </div>

          {/* Additional Services Section */}
          <div className={styles.additionalServices}>
            <h2 className={styles.centeredHeading}>Additional RAC Benefits</h2>
            <p className={styles.centeredText}>All RAC warranties come with these valuable additional services</p>
            
            <div className={styles.servicesGrid}>
              <div className={styles.serviceCard}>
                <div className={styles.serviceIcon}>
                  <i className="fas fa-car-crash"></i>
                </div>
                <h4>RAC Breakdown</h4>
                <p>24/7 roadside assistance throughout the UK</p>
              </div>
              
              <div className={styles.serviceCard}>
                <div className={styles.serviceIcon}>
                  <i className="fas fa-truck"></i>
                </div>
                <h4>Recovery Service</h4>
                <p>Vehicle recovery to the nearest garage or your home</p>
              </div>
              
              <div className={styles.serviceCard}>
                <div className={styles.serviceIcon}>
                  <i className="fas fa-home"></i>
                </div>
                <h4>Accommodation</h4>
                <p>Overnight accommodation if stranded away from home</p>
              </div>
              
              <div className={styles.serviceCard}>
                <div className={styles.serviceIcon}>
                  <i className="fas fa-car-side"></i>
                </div>
                <h4>Courtesy Vehicle</h4>
                <p>Replacement vehicle while yours is being repaired</p>
              </div>
            </div>
          </div>
          
          {/* Contact Form Section -- This can be ommitted! */}
          <div id="contact-us" className={styles.applicationSection}>
            <h2 className={styles.centeredHeading}>Request More Information</h2>
            <p className={styles.centeredText}>Interested in learning more about our warranty options? Complete the form below and our team will contact you with more details.</p>
            
            <div className={styles.applicationForm}>
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label htmlFor="fullName" className={styles.formLabel}>Full Name*</label>
                  <input 
                    type="text" 
                    id="fullName" 
                    name="fullName"
                    className={styles.formInput} 
                    placeholder="Enter your full name"
                    required
                  />
                </div>
                
                <div className={styles.formGroup}>
                  <label htmlFor="email" className={styles.formLabel}>Email*</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email"
                    className={styles.formInput} 
                    placeholder="Enter your email address"
                    required
                  />
                </div>
              </div>
              
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label htmlFor="phone" className={styles.formLabel}>Phone*</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    name="phone"
                    className={styles.formInput} 
                    placeholder="Enter your phone number"
                    required
                  />
                </div>
                
                <div className={styles.formGroup}>
                  <label htmlFor="vehicleType" className={styles.formLabel}>Vehicle Type*</label>
                  <input 
                    type="text" 
                    id="vehicleType" 
                    name="vehicleType"
                    className={styles.formInput} 
                    placeholder="Make & Model (e.g. BMW M3)"
                    required
                  />
                </div>
              </div>
              
              <div className={styles.formGroup}>
                <label htmlFor="warrantyInterest" className={styles.formLabel}>I'm interested in:*</label>
                <select 
                  id="warrantyInterest" 
                  name="warrantyInterest"
                  className={styles.formInput}
                  required
                >
                  <option value="">Please select</option>
                  <option value="Platinum Cover">Platinum Cover</option>
                  <option value="Gold Cover">Gold Cover</option>
                  <option value="Not Sure">Not Sure - Need Advice</option>
                </select>
              </div>
              
              <div className={styles.formGroup}>
                <label htmlFor="message" className={styles.formLabel}>Additional Comments</label>
                <textarea 
                  id="message" 
                  name="message"
                  className={styles.formInput} 
                  placeholder="Any additional information or questions"
                  rows="4"
                ></textarea>
              </div>
              
              <div className={styles.formGroup}>
                <label className={styles.formLabel}>
                  <input 
                    type="checkbox" 
                    name="consent"
                    required
                  /> 
                  I consent to Better Performance Ltd contacting me regarding warranty options.
                </label>
              </div>
              
              <div className={styles.formNavigation}>
                <button type="submit" className={styles.button}>
                  Submit Enquiry
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
      
      {/* FAQ Section */}
      <div className={styles.faqSection}>
        <div className={styles.container}>
          <div className={styles.faqHeader}>
            <h2>Frequently Asked Questions</h2>
            <p>Find answers to common questions about our warranty coverage</p>
          </div>
          
          <div className={styles.faqContainer}>
            {faqData.map((faq, index) => (
              <motion.div 
                key={index}
                className={`${styles.faqItem} ${activeFaq === index ? styles.faqActive : ''}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div 
                  className={styles.faqQuestion}
                  onClick={() => toggleFaq(index)}
                >
                  <div className={styles.questionContent}>
                    <div className={styles.questionIcon}>
                      <i className="fas fa-question-circle"></i>
                    </div>
                    <h3>{faq.question}</h3>
                  </div>
                  <div className={styles.faqToggle}>
                    <i className={`fas ${activeFaq === index ? 'fa-minus' : 'fa-plus'}`}></i>
                  </div>
                </div>
                <motion.div 
                  className={styles.faqAnswer}
                  initial={false}
                  animate={{ 
                    height: activeFaq === index ? 'auto' : 0,
                    opacity: activeFaq === index ? 1 : 0
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <p>{faq.answer}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
          
          <div className={styles.faqCallToAction}>
            <div className={styles.ctaContent}>
              <h3>Still have questions?</h3>
              <p>Our warranty specialists are ready to help you find the perfect coverage</p>
            </div>
            <motion.a 
              href="#contact-us" 
              className={styles.ctaButton}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Us
            </motion.a>
          </div>
          
          <div className={styles.faqDisclaimer}>
            <div className={styles.disclaimerIcon}>
              <i className="fas fa-info-circle"></i>
            </div>
            <div className={styles.disclaimerContent}>
              <p>Some vehicles we sell may be ineligible for RAC Warranty. Please confirm with our sales consultant regarding your chosen vehicle.</p>
              <p>We offer 3 levels of cover dependent on varying factors and extended warranties for durations of 12, 24 & 36 months. Sale diesel is valid for 12 months irrespective of purchase of warranty. Please ask our sales consultant for a full explanation of all the products we offer.</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* WhatsApp Button */}
      <a href="https://api.whatsapp.com/send?phone=+447500314681&text=Hello%20Better%20Performance%20Ltd.%20I'm%20interested%20in%20warranty%20information." className={styles.whatsappButton} target="_blank" rel="noreferrer">
        <span className={styles.whatsappIcon}><i className="fab fa-whatsapp"></i></span>
      </a>
      
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
                  <li><a href="/complaints-procedure/">Complaints Procedure</a></li>
                  <li><a href="/vulnerable-consumer-policy/">Vulnerable Consumer Policy</a></li>
                  <li><a href="/inital-disclosure-document/">Inital Disclosure Document</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}