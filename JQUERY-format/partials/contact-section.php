<?php
/**
 * Contact Section Template Part
 * 
 * This file contains the contact page including hero, contact form, and map.
 */
?>

<div id="contact-section" class="container">
  <!-- Hero Banner with Overlay -->
  <div class="modernHeroWrapper">
    <div 
      class="modernHeroImage" 
      style="background-image: url('<?php echo get_stylesheet_directory_uri(); ?>/assets/images/20250331-LDB04125.jpg');"
    ></div>
    <div class="modernHeroOverlay">
      <div class="modernHeroContent">
        <h1>Get In Touch</h1>
        <p>Contact our team of luxury vehicle specialists for personalized assistance</p>
        <div class="heroNavigation">
          <button class="navButton activeNavButton" id="scroll-to-contact-btn">
            Contact Us
          </button>
          <button class="navButton activeNavButton" id="scroll-to-map-btn">
            Find Us
          </button>
        </div>
      </div>
    </div>
  </div>
  
  <!-- Main Content -->
  <div class="container">
    <!-- Enhanced Contact Section - Merged Form and Info -->
    <section id="contact-form-section" class="enhancedContactSection">
      <div class="sectionHeader">
        <h2>Contact Our Team</h2>
        <div class="headerLine"></div>
        <p>Our experienced team is here to assist you with all your premium vehicle needs</p>
      </div>
      
      <div class="unifiedContactCard">
        <div class="contactCardImageColumn">
          <div class="contactCardImage" style="background-image: url('<?php echo get_stylesheet_directory_uri(); ?>/assets/images/20250402-LDB04498.jpg');"></div>
        </div>
        
        <div class="contactContentColumns">
          <div class="contactInfoColumn">
            <div class="contactInfoHeader">
              <h3>Better Performance</h3>
              <div class="infoHeaderDivider"></div>
              <p>Premium Vehicle Specialists</p>
            </div>
            
            <div class="contactInfoContent">
              <div class="contactInfoItem">
                <div class="infoIcon">
                  <i class="fas fa-map-marker-alt"></i>
                </div>
                <div class="infoText">
                  <p>Marriott House, Penarth Road<br />Cardiff, CF11 8TW</p>
                </div>
              </div>
              
              <div class="contactInfoItem">
                <div class="infoIcon">
                  <i class="fas fa-phone-alt"></i>
                </div>
                <div class="infoText">
                  <p><a href="tel:02920704425">02920 704425</a><br /><a href="tel:07500314681">07500 314681</a></p>
                </div>
              </div>
              
              <div class="contactInfoItem">
                <div class="infoIcon">
                  <i class="fas fa-envelope"></i>
                </div>
                <div class="infoText">
                  <p><a href="mailto:info@betterperformance.co.uk">info@betterperformance.co.uk</a></p>
                </div>
              </div>
              
              <div class="contactInfoItem">
                <div class="infoIcon">
                  <i class="fas fa-clock"></i>
                </div>
                <div class="infoText">
                  <div class="hoursGrid">
                    <div class="hourRow">
                      <span class="day">Mon - Fri:</span>
                      <span class="time">10:00 - 18:00</span>
                    </div>
                    <div class="hourRow">
                      <span class="day">Saturday:</span>
                      <span class="time">10:00 - 18:00</span>
                    </div>
                    <div class="hourRow">
                      <span class="day">Sunday:</span>
                      <span class="time">Closed</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="socialLinks">
              <a href="https://www.facebook.com/betterperformanceltd" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <i class="fab fa-facebook-f"></i>
              </a>
              <a href="https://www.instagram.com/betterperformance_" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <i class="fab fa-instagram"></i>
              </a>
              <a href="https://wa.me/447500314681" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                <i class="fab fa-whatsapp"></i>
              </a>
            </div>
          </div>
          
          <div class="contactFormColumn">
            <div class="contactFormHeader">
              <h3>Send Us A Message</h3>
              <div class="formHeaderDivider"></div>
              <p>We'll get back to you as soon as possible</p>
            </div>
            
            <div id="form-success" class="formSuccess" style="display: none;">
              <div class="successIcon">
                <i class="fas fa-check"></i>
              </div>
              <h4>Message Sent Successfully!</h4>
              <p>Thank you for contacting us. One of our team members will be in touch with you shortly.</p>
            </div>
            
            <form id="contact-form" class="contactFormContent">
              <div class="formGroup">
                <label for="fullName" class="formLabel">Full Name*</label>
                <input 
                  type="text" 
                  id="fullName" 
                  name="fullName"
                  class="formInput" 
                  placeholder="Enter your full name"
                  required
                />
              </div>
              
              <div class="formRow">
                <div class="formGroup">
                  <label for="email" class="formLabel">Email Address*</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email"
                    class="formInput" 
                    placeholder="Enter your email address"
                    required
                  />
                </div>
                
                <div class="formGroup">
                  <label for="phone" class="formLabel">Phone Number</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    name="phone"
                    class="formInput" 
                    placeholder="Enter your phone number"
                  />
                </div>
              </div>
              
              <div class="formGroup">
                <label for="subject" class="formLabel">Subject*</label>
                <select 
                  id="subject" 
                  name="subject"
                  class="formInput"
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
              
              <div class="formGroup">
                <label for="message" class="formLabel">Message*</label>
                <textarea 
                  id="message" 
                  name="message"
                  class="formInput" 
                  placeholder="Tell us how we can help you"
                  rows="5"
                  required
                ></textarea>
              </div>
              
              <div class="formGroup">
                <label class="formCheckbox">
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
                id="submit-button"
                class="enhancedSubmitButton"
              >
                <span>Send Message</span>
                <i class="fas fa-paper-plane"></i>
              </button>
              
              <button 
                type="button" 
                id="sending-button"
                class="enhancedSubmitButton"
                style="display: none;"
                disabled
              >
                <span class="sendingSpinner"></span>
                Sending...
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Map Section -->
    <section id="map-section" class="mapSection">
      <div class="sectionHeader">
        <h2>Visit Our Showroom</h2>
        <div class="headerLine"></div>
        <p>Experience our premium collection of luxury and performance vehicles in person</p>
      </div>
      
      <div class="mapWrapper">
        <iframe 
          src="https://maps.google.com/maps?hl=en&amp;q=Better%20Performance%20Ltd%20Marriott%20House%20Penarth%20Road%20Cardiff&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" 
          width="100%" 
          height="500" 
          style="border: 0; border-radius: 16px; box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);" 
          allowFullScreen="" 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  </div>
  
  <!-- Enhanced CTA with Background Image -->
  <section class="enhancedCtaSection">
    <div class="enhancedCtaBg" style="background-image: url('<?php echo get_stylesheet_directory_uri(); ?>/assets/images/20250409-DSC05699.jpg');"></div>
    <div class="enhancedCtaOverlay"></div>
    
    <div class="container" style="position: relative; z-index: 10;">
      <div class="enhancedCtaContent">
        <h2>Ready to Experience Exceptional Performance?</h2>
        <p>Our team of specialists is ready to assist you with any inquiries about our premium vehicles</p>
        
        <div class="ctaContactOptions">
          <a href="tel:02920704425" class="ctaContactButton">
            <i class="fas fa-phone-alt"></i>
            <div class="ctaButtonContent">
              <span class="ctaButtonLabel">Call Us</span>
              <span class="ctaButtonValue">02920 704425</span>
            </div>
          </a>
          
          <a href="mailto:info@betterperformance.co.uk" class="ctaContactButton">
            <i class="fas fa-envelope"></i>
            <div class="ctaButtonContent">
              <span class="ctaButtonLabel">Email Us</span>
              <span class="ctaButtonValue">info@betterperformance.co.uk</span>
            </div>
          </a>
          
          <a href="https://wa.me/447500314681" class="ctaContactButton">
            <i class="fab fa-whatsapp"></i>
            <div class="ctaButtonContent">
              <span class="ctaButtonLabel">WhatsApp</span>
              <span class="ctaButtonValue">07500 314681</span>
            </div>
          </a>
        </div>
        
        <div class="ctaHighlights">
          <div class="ctaHighlightItem">
            <i class="fas fa-check-circle"></i>
            <span>Premium Vehicle Selection</span>
          </div>
          <div class="ctaHighlightItem">
            <i class="fas fa-check-circle"></i>
            <span>Bespoke Finance Solutions</span>
          </div>
          <div class="ctaHighlightItem">
            <i class="fas fa-check-circle"></i>
            <span>Comprehensive Warranty Options</span>
          </div>
          <div class="ctaHighlightItem">
            <i class="fas fa-check-circle"></i>
            <span>Expert Customer Service</span>
          </div>
        </div>
      </div>
    </div>
  </section>
  
  <!-- WhatsApp Button -->
  <a href="https://api.whatsapp.com/send?phone=+447500314681&text=Hello%20Better%20Performance%20Ltd.%20I'm%20contacting%20you%20regarding%20" class="whatsappButton" target="_blank" rel="noreferrer">
    <span class="whatsappIcon"><i class="fab fa-whatsapp"></i></span>
  </a>
</div>
