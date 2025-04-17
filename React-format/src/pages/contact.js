import { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import styles from '../../styles/Finance.module.css';
import { motion } from 'framer-motion';

export default function ContactPage() {
  const [isHeaderSticky, setIsHeaderSticky] = useState(false);
  const [activeSection, setActiveSection] = useState(null);
  const [formStatus, setFormStatus] = useState(null);
  const contactRef = useRef(null);
  const mapRef = useRef(null);
  
  // Handle sticky header on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsHeaderSticky(window.scrollY > 100);
      
      // Update active section based on scroll position
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
  
  // Smooth scroll to sections
  const scrollToSection = (elementRef) => {
    if (elementRef && elementRef.current) {
      window.scrollTo({
        top: elementRef.current.offsetTop - 120,
        behavior: 'smooth'
      });
    }
  };
  
  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Simulate form submission
    setFormStatus('sending');
    
    // Simulate API call --> Replace with Dragon DMS endpoints/APIs 
    setTimeout(() => {
      setFormStatus('success');
      e.target.reset();
      
      // Reset status after 5 seconds
      setTimeout(() => {
        setFormStatus(null);
      }, 5000);
    }, 1500);
  };

  return (
    <>
      <Head>
        <title>Contact Us | Better Performance</title>
        <meta name="description" content="Contact Better Performance Ltd - premium vehicle specialists in Cardiff. Reach us by phone, email, or visit our showroom for expert assistance with luxury cars." />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" />
      </Head>

      {/* Header */}
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
        <div className={styles.modernHeroImage} style={{ backgroundImage: 'url(/GALLARDO/20250331-LDB04125.jpg)' }}></div>
        <div className={styles.modernHeroOverlay}>
          <motion.div 
            className={styles.modernHeroContent}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1>Get In Touch</h1>
            <p>Contact our team of luxury vehicle specialists for personalized assistance</p>
            <button 
              onClick={() => scrollToSection(contactRef)} 
              className={`${styles.navButton} ${styles.activeNavButton}`}
            >
              Contact Us
            </button>
            <button 
              onClick={() => scrollToSection(mapRef)} 
              className={`${styles.navButton} ${styles.activeNavButton}`}
            >
              Find Us
            </button>
          </motion.div>
        </div>
      </div>
      
      {/* Main Content */}
      <div className={styles.container}>
        {/* Enhanced Contact Section - Merged Form and Info */}
        <section ref={contactRef} className={styles.enhancedContactSection}>
          <motion.div 
            className={styles.sectionHeader}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>Contact Our Team</h2>
            <div className={styles.headerLine}></div>
            <p>Our experienced team is here to assist you with all your premium vehicle needs</p>
          </motion.div>
          
          <motion.div 
            className={styles.unifiedContactCard}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className={styles.contactCardImageColumn}>
              <div className={styles.contactCardImage} style={{ backgroundImage: 'url(/STO/20250402-LDB04498.jpg)' }}></div>
            </div>
            
            <div className={styles.contactContentColumns}>
              <div className={styles.contactInfoColumn}>
                <div className={styles.contactInfoHeader}>
                  <h3>Better Performance</h3>
                  <div className={styles.infoHeaderDivider}></div>
                  <p>Premium Vehicle Specialists</p>
                </div>
                
                <div className={styles.contactInfoContent}>
                  <div className={styles.contactInfoItem}>
                    <div className={styles.infoIcon}>
                      <i className="fas fa-map-marker-alt"></i>
                    </div>
                    <div className={styles.infoText}>
                      <p>Marriott House, Penarth Road<br />Cardiff, CF11 8TW</p>
                    </div>
                  </div>
                  
                  <div className={styles.contactInfoItem}>
                    <div className={styles.infoIcon}>
                      <i className="fas fa-phone-alt"></i>
                    </div>
                    <div className={styles.infoText}>
                      <p><a href="tel:02920704425">02920 704425</a><br /><a href="tel:07500314681">07500 314681</a></p>
                    </div>
                  </div>
                  
                  <div className={styles.contactInfoItem}>
                    <div className={styles.infoIcon}>
                      <i className="fas fa-envelope"></i>
                    </div>
                    <div className={styles.infoText}>
                      <p><a href="mailto:info@betterperformance.co.uk">info@betterperformance.co.uk</a></p>
                    </div>
                  </div>
                  
                  <div className={styles.contactInfoItem}>
                    <div className={styles.infoIcon}>
                      <i className="fas fa-clock"></i>
                    </div>
                    <div className={styles.infoText}>
                      <div className={styles.hoursGrid}>
                        <div className={styles.hourRow}>
                          <span className={styles.day}>Mon - Fri:</span>
                          <span className={styles.time}>10:00 - 18:00</span>
                        </div>
                        <div className={styles.hourRow}>
                          <span className={styles.day}>Saturday:</span>
                          <span className={styles.time}>10:00 - 18:00</span>
                        </div>
                        <div className={styles.hourRow}>
                          <span className={styles.day}>Sunday:</span>
                          <span className={styles.time}>Closed</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className={styles.socialLinks}>
                  <a href="https://www.facebook.com/betterperformanceltd" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="https://www.instagram.com/betterperformance_" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a href="https://wa.me/447500314681" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                    <i className="fab fa-whatsapp"></i>
                  </a>
                </div>
              </div>
              
              <div className={styles.contactFormColumn}>
                <div className={styles.contactFormHeader}>
                  <h3>Send Us A Message</h3>
                  <div className={styles.formHeaderDivider}></div>
                  <p>We'll get back to you as soon as possible</p>
                </div>
                
                {formStatus === 'success' ? (
                  <div className={styles.formSuccess}>
                    <div className={styles.successIcon}>
                      <i className="fas fa-check"></i>
                    </div>
                    <h4>Message Sent Successfully!</h4>
                    <p>Thank you for contacting us. One of our team members will be in touch with you shortly.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className={styles.contactFormContent}>
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
                    
                    <div className={styles.formRow}>
                      <div className={styles.formGroup}>
                        <label htmlFor="email" className={styles.formLabel}>Email Address*</label>
                        <input 
                          type="email" 
                          id="email" 
                          name="email"
                          className={styles.formInput} 
                          placeholder="Enter your email address"
                          required
                        />
                      </div>
                      
                      <div className={styles.formGroup}>
                        <label htmlFor="phone" className={styles.formLabel}>Phone Number</label>
                        <input 
                          type="tel" 
                          id="phone" 
                          name="phone"
                          className={styles.formInput} 
                          placeholder="Enter your phone number"
                        />
                      </div>
                    </div>
                    
                    <div className={styles.formGroup}>
                      <label htmlFor="subject" className={styles.formLabel}>Subject*</label>
                      <select 
                        id="subject" 
                        name="subject"
                        className={styles.formInput}
                        required
                      >
                        <option value="">Please select</option>
                        <option value="Vehicle Enquiry">Vehicle Enquiry</option>
                        <option value="Finance Information">Finance Information</option>
                        <option value="Warranty Query">Warranty Query</option>
                        <option value="Service Booking">Service Booking</option>
                        <option value="General Enquiry">General Enquiry</option>
                      </select>
                    </div>
                    
                    <div className={styles.formGroup}>
                      <label htmlFor="message" className={styles.formLabel}>Message*</label>
                      <textarea 
                        id="message" 
                        name="message"
                        className={styles.formInput} 
                        placeholder="Tell us how we can help you"
                        rows="5"
                        required
                      ></textarea>
                    </div>
                    
                    <div className={styles.formGroup}>
                      <label className={styles.formCheckbox}>
                        <input 
                          type="checkbox" 
                          name="consent"
                          required
                        /> 
                        <span>I consent to Better Performance contacting me regarding my enquiry.</span>
                      </label>
                    </div>
                    
                    <button 
                      type="submit" 
                      className={styles.enhancedSubmitButton}
                      disabled={formStatus === 'sending'}
                    >
                      {formStatus === 'sending' ? (
                        <>
                          <span className={styles.sendingSpinner}></span>
                          Sending...
                        </>
                      ) : (
                        <>
                          <span>Send Message</span>
                          <i className="fas fa-paper-plane"></i>
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </motion.div>
        </section>
        
        {/* Map Section */}
        <section ref={mapRef} className={styles.mapSection}>
          <motion.div 
            className={styles.sectionHeader}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>Visit Our Showroom</h2>
            <div className={styles.headerLine}></div>
            <p>Experience our premium collection of luxury and performance vehicles in person</p>
          </motion.div>
          
          <motion.div 
            className={styles.mapWrapper}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <iframe 
              src="https://maps.google.com/maps?hl=en&amp;q=Better%20Performance%20Ltd%20Marriott%20House%20Penarth%20Road%20Cardiff&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" 
              width="100%" 
              height="500" 
              style={{ border: 0, borderRadius: '16px', boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)' }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>
        </section>
      </div>
      
      {/* Enhanced CTA with Background Image */}
      <section className={styles.enhancedCtaSection}>
        <div className={styles.enhancedCtaBg} style={{ backgroundImage: 'url(/SPYDER-RS/20250409-DSC05699.jpg)' }}></div>
        <div className={styles.enhancedCtaOverlay}></div>
        
        <motion.div 
          className={styles.container}
          style={{ position: 'relative', zIndex: 10 }}
        >
          <motion.div 
            className={styles.enhancedCtaContent}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2>Ready to Experience Exceptional Performance?</h2>
            <p>Our team of specialists is ready to assist you with any inquiries about our premium vehicles</p>
            
            <div className={styles.ctaContactOptions}>
              <motion.a 
                href="tel:02920704425" 
                className={styles.ctaContactButton}
                whileHover={{ scale: 1.05, backgroundColor: '#fff', color: '#101c17' }}
                whileTap={{ scale: 0.95 }}
              >
                <i className="fas fa-phone-alt"></i>
                <div className={styles.ctaButtonContent}>
                  <span className={styles.ctaButtonLabel}>Call Us</span>
                  <span className={styles.ctaButtonValue}>02920 704425</span>
                </div>
              </motion.a>
              
              <motion.a 
                href="mailto:info@betterperformance.co.uk" 
                className={styles.ctaContactButton}
                whileHover={{ scale: 1.05, backgroundColor: '#fff', color: '#101c17' }}
                whileTap={{ scale: 0.95 }}
              >
                <i className="fas fa-envelope"></i>
                <div className={styles.ctaButtonContent}>
                  <span className={styles.ctaButtonLabel}>Email Us</span>
                  <span className={styles.ctaButtonValue}>info@betterperformance.co.uk</span>
                </div>
              </motion.a>
              
              <motion.a 
                href="https://wa.me/447500314681" 
                className={styles.ctaContactButton}
                whileHover={{ scale: 1.05, backgroundColor: '#fff', color: '#101c17' }}
                whileTap={{ scale: 0.95 }}
              >
                <i className="fab fa-whatsapp"></i>
                <div className={styles.ctaButtonContent}>
                  <span className={styles.ctaButtonLabel}>WhatsApp</span>
                  <span className={styles.ctaButtonValue}>07500 314681</span>
                </div>
              </motion.a>
            </div>
            
            <div className={styles.ctaHighlights}>
              <div className={styles.ctaHighlightItem}>
                <i className="fas fa-check-circle"></i>
                <span>Premium Vehicle Selection</span>
              </div>
              <div className={styles.ctaHighlightItem}>
                <i className="fas fa-check-circle"></i>
                <span>Bespoke Finance Solutions</span>
              </div>
              <div className={styles.ctaHighlightItem}>
                <i className="fas fa-check-circle"></i>
                <span>Comprehensive Warranty Options</span>
              </div>
              <div className={styles.ctaHighlightItem}>
                <i className="fas fa-check-circle"></i>
                <span>Expert Customer Service</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>
      
      {/* WhatsApp Button */}
      <a href="https://api.whatsapp.com/send?phone=+447500314681&text=Hello%20Better%20Performance%20Ltd.%20I'm%20contacting%20you%20regarding%20" className={styles.whatsappButton} target="_blank" rel="noreferrer">
        <span className={styles.whatsappIcon}><i className="fab fa-whatsapp"></i></span>
      </a>
      
      {/* Footer */}
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