<?php
/**
 * Warranty Section Template Part
 * 
 * This file contains the warranty page including hero, warranty options, and FAQ.
 */
?>

<div id="warranty-section" class="container">
  <!-- Hero Banner with Overlay -->
  <div class="modernHeroWrapper">
    <div 
      class="modernHeroImage" 
      style="background-image: url('<?php echo get_stylesheet_directory_uri(); ?>/assets/images/20250331-LDB04038.jpg');"
    ></div>
    <div class="modernHeroOverlay">
      <div class="modernHeroContent">
        <h1>Premium Vehicle Warranty Solutions</h1>
        <p>Protect your investment with RAC-backed warranty coverage</p>
        <div class="heroNavigation">
          <button class="navButton activeNavButton" id="warranty-overview-btn">
            Overview
          </button>
          <button class="navButton activeNavButton" id="warranty-options-btn">
            Options
          </button>
        </div>
      </div>
    </div>
  </div>
  
  <!-- Main Content -->
  <section class="contentSection">
    <h2 class="sectionTitle">Vehicle Warranty Protection</h2>
    
    <div class="financeBrief">
      <p>We offer comprehensive RAC warranty solutions that provide you with peace of mind and protection against unexpected repair costs. Our warranty options are designed to keep you on the road with minimal disruption to your life.</p>
    </div>
    
    <!-- Warranty Overview Section -->
    <div id="warranty-overview" class="warrantyOverviewContainer">
      <div class="warrantyIntro">
        <div class="introContent">
          <h2>Peace of Mind Comes Standard</h2>
          <p>At Better Performance, we believe quality should never be compromised. Every vehicle we sell undergoes rigorous testing and comes with comprehensive warranty protection.</p>
        </div>
        <div class="introImage">
          <img src="<?php echo get_stylesheet_directory_uri(); ?>/assets/images/20250409-DSC05617.jpg" alt="Porsche 981 GT4 Spyder RS" class="roundedImage" />
        </div>
      </div>
      
      <div class="warrantyOverview">
        <div class="overviewCard">
          <div class="overviewIconContainer">
            <div class="overviewIcon">
              <i class="fas fa-shield-alt"></i>
            </div>
          </div>
          <h3>Expert Preparation</h3>
          <p>We prepare our vehicles to the highest standards in our purpose-built workshop. Every vehicle is extensively road tested, evaluated and meticulously appraised before sale.</p>
          <div class="cardLink">
            <span>Our Standards</span>
            <i class="fas fa-arrow-right"></i>
          </div>
        </div>
        
        <div class="overviewCard">
          <div class="overviewIconContainer">
            <div class="overviewIcon">
              <i class="fas fa-wrench"></i>
            </div>
          </div>
          <h3>Comprehensive Coverage</h3>
          <p>Despite thorough inspection, occasionally the unforeseen can occur. That's why all our vehicles come with complimentary RAC Warranty and Breakdown assistance.</p>
          <div class="cardLink">
            <span>Coverage Details</span>
            <i class="fas fa-arrow-right"></i>
          </div>
        </div>
        
        <div class="overviewCard">
          <div class="overviewIconContainer">
            <div class="overviewIcon">
              <i class="fas fa-headset"></i>
            </div>
          </div>
          <h3>24/7 Support</h3>
          <p>Help is available 24/7 through our RAC partnership. Over 90% of all RAC patrol men resolve vehicle breakdowns at the roadside without the need for a garage visit.</p>
          <div class="cardLink">
            <span>Support Options</span>
            <i class="fas fa-arrow-right"></i>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Warranty Options Tabs -->
    <div id="warranty-options" class="warrantyOptions">
      <div class="warrantyNav">
        <div class="container">
          <h2>RAC Warranty Options</h2>
          <div class="warrantyTabs">
            <button 
              class="warrantyTab activeTab"
              data-tab="platinum"
            >
              <div class="tabIconContainer">
                <i class="fas fa-crown"></i>
              </div>
              <span>Platinum Cover</span>
            </button>
            <button 
              class="warrantyTab"
              data-tab="gold"
            >
              <div class="tabIconContainer">
                <i class="fas fa-medal"></i>
              </div>
              <span>Gold Cover</span>
            </button>
          </div>
        </div>
      </div>
      
      <p class="centeredText">Choose the level of protection that's right for you and your vehicle</p>
      
      <div class="warrantyTabContent">
        <!-- Platinum Tab Content -->
        <div class="tabPanel" id="platinum-panel">
          <div class="warrantyCard">
            <div class="warrantyCardHeader">
              <div class="warrantyLogoContainer">
                <div class="warrantyLogo">
                  <img src="<?php echo get_stylesheet_directory_uri(); ?>/assets/images/RAC-logo.svg" alt="RAC Logo" />
                </div>
              </div>
              <div class="warrantyTitleContainer">
                <span class="warrantyBadge">Premium</span>
                <h3>RAC Platinum Cover</h3>
                <p>Our most comprehensive warranty protection</p>
              </div>
            </div>
            <div class="warrantyCardContent">
              <div class="warrantyHighlights">
                <div class="highlightItem">
                  <div class="highlightIcon">
                    <i class="fas fa-pound-sign"></i>
                  </div>
                  <div class="highlightContent">
                    <h5>Claim Limit</h5>
                    <p>£1,000 per claim with unlimited claims</p>
                  </div>
                </div>
                <div class="highlightItem">
                  <div class="highlightIcon">
                    <i class="fas fa-globe-europe"></i>
                  </div>
                  <div class="highlightContent">
                    <h5>Coverage Area</h5>
                    <p>Full UK and European coverage</p>
                  </div>
                </div>
                <div class="highlightItem">
                  <div class="highlightIcon">
                    <i class="fas fa-calendar-alt"></i>
                  </div>
                  <div class="highlightContent">
                    <h5>Duration Options</h5>
                    <p>Available for 1, 2 or 3 years</p>
                  </div>
                </div>
              </div>
              
              <div class="benefitsContainer">
                <h4>What's Included</h4>
                <div class="benefitsList">
                  <div class="benefitItem">
                    <i class="fas fa-check-circle"></i>
                    <span>Full UK and European Coverage (Warranty only)</span>
                  </div>
                  <div class="benefitItem">
                    <i class="fas fa-check-circle"></i>
                    <span>90 days complimentary RAC Assistance included</span>
                  </div>
                  <div class="benefitItem">
                    <i class="fas fa-check-circle"></i>
                    <span>Vehicle Hire</span>
                  </div>
                  <div class="benefitItem">
                    <i class="fas fa-check-circle"></i>
                    <span>Overnight Accommodation</span>
                  </div>
                  <div class="benefitItem">
                    <i class="fas fa-check-circle"></i>
                    <span>Available for 1, 2 or 3 years</span>
                  </div>
                </div>
              </div>
              
              <div class="featuredVehicle">
                <div class="featuredImageContainer">
                  <img src="<?php echo get_stylesheet_directory_uri(); ?>/assets/images/20250331-LDB04125.jpg" alt="Lamborghini Gallardo" class="featuredImage" />
                </div>
                <div class="featuredContent">
                  <h4>Platinum Protection for Premium Vehicles</h4>
                  <p>Our Platinum coverage is recommended for high-performance and luxury vehicles to ensure complete peace of mind.</p>
                </div>
              </div>
              
              <div class="warrantyFooter">
                <div class="pricingBadge">
                  <div class="pricingContent">
                    <span>Flexible Pricing</span>
                    <p>Based on your vehicle specifications</p>
                  </div>
                </div>
                <a href="#contact-us" class="warrantyButton">
                  <span>Request Quote</span>
                  <i class="fas fa-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Gold Tab Content -->
        <div class="tabPanel" id="gold-panel" style="display: none;">
          <div class="warrantyCard">
            <div class="warrantyCardHeader">
              <div class="warrantyLogoContainer">
                <div class="warrantyLogo">
                  <img src="<?php echo get_stylesheet_directory_uri(); ?>/assets/images/RAC-logo.svg" alt="RAC Logo" />
                </div>
              </div>
              <div class="warrantyTitleContainer">
                <span class="warrantyBadge">Comprehensive</span>
                <h3>RAC Gold Cover</h3>
                <p>Extensive protection for major vehicle systems</p>
              </div>
            </div>
            <div class="warrantyCardContent">
              <div class="warrantyHighlights">
                <div class="highlightItem">
                  <div class="highlightIcon">
                    <i class="fas fa-car"></i>
                  </div>
                  <div class="highlightContent">
                    <h5>Component Coverage</h5>
                    <p>Protects essential vehicle systems</p>
                  </div>
                </div>
                <div class="highlightItem">
                  <div class="highlightIcon">
                    <i class="fas fa-tools"></i>
                  </div>
                  <div class="highlightContent">
                    <h5>Parts & Labor</h5>
                    <p>Covers both parts and labor costs</p>
                  </div>
                </div>
                <div class="highlightItem">
                  <div class="highlightIcon">
                    <i class="fas fa-phone-alt"></i>
                  </div>
                  <div class="highlightContent">
                    <h5>Breakdown Support</h5>
                    <p>Includes RAC breakdown assistance</p>
                  </div>
                </div>
              </div>
              
              <div class="coverageCategoriesContainer">
                <h4>Covered Components</h4>
                <div class="coverageCategories">
                  <div class="coverageCategory">
                    <div class="categoryHeader">
                      <div class="categoryIcon">
                        <i class="fas fa-cogs"></i>
                      </div>
                      <h5>Engine & Powertrain</h5>
                    </div>
                    <ul class="categoryComponents">
                      <li>
                        <i class="fas fa-check"></i>
                        <span>Engine</span>
                      </li>
                      <li>
                        <i class="fas fa-check"></i>
                        <span>Timing Belts</span>
                      </li>
                      <li>
                        <i class="fas fa-check"></i>
                        <span>Turbo</span>
                      </li>
                      <li>
                        <i class="fas fa-check"></i>
                        <span>Fuel System</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div class="coverageCategory">
                    <div class="categoryHeader">
                      <div class="categoryIcon">
                        <i class="fas fa-cogs"></i>
                      </div>
                      <h5>Transmission</h5>
                    </div>
                    <ul class="categoryComponents">
                      <li>
                        <i class="fas fa-check"></i>
                        <span>Gearbox: Manual, Auto & CVT</span>
                      </li>
                      <li>
                        <i class="fas fa-check"></i>
                        <span>Clutch</span>
                      </li>
                      <li>
                        <i class="fas fa-check"></i>
                        <span>Drive System</span>
                      </li>
                      <li>
                        <i class="fas fa-check"></i>
                        <span>Prop Shaft</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div class="coverageCategory">
                    <div class="categoryHeader">
                      <div class="categoryIcon">
                        <i class="fas fa-car-side"></i>
                      </div>
                      <h5>Suspension & Steering</h5>
                    </div>
                    <ul class="categoryComponents">
                      <li>
                        <i class="fas fa-check"></i>
                        <span>Front/Rear Suspension</span>
                      </li>
                      <li>
                        <i class="fas fa-check"></i>
                        <span>Steering</span>
                      </li>
                      <li>
                        <i class="fas fa-check"></i>
                        <span>Wheel Bearings</span>
                      </li>
                      <li>
                        <i class="fas fa-check"></i>
                        <span>Brakes</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div class="coverageCategory">
                    <div class="categoryHeader">
                      <div class="categoryIcon">
                        <i class="fas fa-bolt"></i>
                      </div>
                      <h5>Electrical & Cooling</h5>
                    </div>
                    <ul class="categoryComponents">
                      <li>
                        <i class="fas fa-check"></i>
                        <span>Electrics</span>
                      </li>
                      <li>
                        <i class="fas fa-check"></i>
                        <span>Electronic Control Units</span>
                      </li>
                      <li>
                        <i class="fas fa-check"></i>
                        <span>Cooling System</span>
                      </li>
                      <li>
                        <i class="fas fa-check"></i>
                        <span>Casings</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div class="warrantyFooter">
                <div class="pricingBadge">
                  <div class="pricingContent">
                    <span>Flexible Pricing</span>
                    <p>Based on your vehicle specifications</p>
                  </div>
                </div>
                <a href="#contact-us" class="warrantyButton">
                  <span>Request Quote</span>
                  <i class="fas fa-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Additional Services Section -->
    <div class="additionalServices">
      <h2 class="centeredHeading">Additional RAC Benefits</h2>
      <p class="centeredText">All RAC warranties come with these valuable additional services</p>
      
      <div class="servicesGrid">
        <div class="serviceCard">
          <div class="serviceIcon">
            <i class="fas fa-car-crash"></i>
          </div>
          <h4>RAC Breakdown</h4>
          <p>24/7 roadside assistance throughout the UK</p>
        </div>
        
        <div class="serviceCard">
          <div class="serviceIcon">
            <i class="fas fa-truck"></i>
          </div>
          <h4>Recovery Service</h4>
          <p>Vehicle recovery to the nearest garage or your home</p>
        </div>
        
        <div class="serviceCard">
          <div class="serviceIcon">
            <i class="fas fa-home"></i>
          </div>
          <h4>Accommodation</h4>
          <p>Overnight accommodation if stranded away from home</p>
        </div>
        
        <div class="serviceCard">
          <div class="serviceIcon">
            <i class="fas fa-car-side"></i>
          </div>
          <h4>Courtesy Vehicle</h4>
          <p>Replacement vehicle while yours is being repaired</p>
        </div>
      </div>
    </div>
    
    <!-- Contact Form Section  THIS SECTION CAN BE OMMITTED IF NOT WANTED! -->
    <div id="contact-us" class="applicationSection">
      <h2 class="centeredHeading">Request More Information</h2>
      <p class="centeredText">Interested in learning more about our warranty options? Complete the form below and our team will contact you with more details.</p>
      
      <div class="applicationForm">
        <form id="warranty-enquiry-form">
          <div class="formRow">
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
            
            <div class="formGroup">
              <label for="email" class="formLabel">Email*</label>
              <input 
                type="email" 
                id="email" 
                name="email"
                class="formInput" 
                placeholder="Enter your email address"
                required
              />
            </div>
          </div>
          
          <div class="formRow">
            <div class="formGroup">
              <label for="phone" class="formLabel">Phone*</label>
              <input 
                type="tel" 
                id="phone" 
                name="phone"
                class="formInput" 
                placeholder="Enter your phone number"
                required
              />
            </div>
            
            <div class="formGroup">
              <label for="vehicleType" class="formLabel">Vehicle Type*</label>
              <input 
                type="text" 
                id="vehicleType" 
                name="vehicleType"
                class="formInput" 
                placeholder="Make & Model (e.g. BMW M3)"
                required
              />
            </div>
          </div>
          
          <div class="formGroup">
            <label for="warrantyInterest" class="formLabel">I'm interested in:*</label>
            <select 
              id="warrantyInterest" 
              name="warrantyInterest"
              class="formInput"
              required
            >
              <option value="">Please select</option>
              <option value="Platinum Cover">Platinum Cover</option>
              <option value="Gold Cover">Gold Cover</option>
              <option value="Not Sure">Not Sure - Need Advice</option>
            </select>
          </div>
          
          <div class="formGroup">
            <label for="message" class="formLabel">Additional Comments</label>
            <textarea 
              id="message" 
              name="message"
              class="formInput" 
              placeholder="Any additional information or questions"
              rows="4"
            ></textarea>
          </div>
          
          <div class="formGroup">
            <label class="formLabel">
              <input 
                type="checkbox" 
                name="consent"
                required
              /> 
              I consent to Better Performance Ltd contacting me regarding warranty options.
            </label>
          </div>
          
          <div class="formNavigation">
            <button type="submit" class="button">
              Submit Enquiry
            </button>
          </div>
        </form>
      </div>
    </div>
  </section>
  
  <!-- FAQ Section -->
  <div class="faqSection">
    <div class="container">
      <div class="faqHeader">
        <h2>Frequently Asked Questions</h2>
        <p>Find answers to common questions about our warranty coverage</p>
      </div>
      
      <div class="faqContainer">
        <div class="faqItem">
          <div class="faqQuestion">
            <div class="questionContent">
              <div class="questionIcon">
                <i class="fas fa-question-circle"></i>
              </div>
              <h3>What does the RAC warranty cover?</h3>
            </div>
            <div class="faqToggle">
              <i class="fas fa-plus"></i>
            </div>
          </div>
          <div class="faqAnswer">
            <p>RAC warranties cover the cost of parts and labor for mechanical and electrical repairs caused by component failure. The specific components covered depend on the level of cover you choose (Platinum or Gold).</p>
          </div>
        </div>
        
        <div class="faqItem">
          <div class="faqQuestion">
            <div class="questionContent">
              <div class="questionIcon">
                <i class="fas fa-question-circle"></i>
              </div>
              <h3>How long does coverage last?</h3>
            </div>
            <div class="faqToggle">
              <i class="fas fa-plus"></i>
            </div>
          </div>
          <div class="faqAnswer">
            <p>Our standard warranty covers you for 3 months, with options to extend up to 3 years depending on your requirements and vehicle.</p>
          </div>
        </div>
        
        <div class="faqItem">
          <div class="faqQuestion">
            <div class="questionContent">
              <div class="questionIcon">
                <i class="fas fa-question-circle"></i>
              </div>
              <h3>Is there a claims limit?</h3>
            </div>
            <div class="faqToggle">
              <i class="fas fa-plus"></i>
            </div>
          </div>
          <div class="faqAnswer">
            <p>Yes, the Platinum cover has a £1,000 individual claim limit with unlimited claims. Gold cover limits vary by component. Our team can provide specific details based on your vehicle.</p>
          </div>
        </div>
        
        <div class="faqItem">
          <div class="faqQuestion">
            <div class="questionContent">
              <div class="questionIcon">
                <i class="fas fa-question-circle"></i>
              </div>
              <h3>What should I do if my vehicle breaks down?</h3>
            </div>
            <div class="faqToggle">
              <i class="fas fa-plus"></i>
            </div>
          </div>
          <div class="faqAnswer">
            <p>If your vehicle breaks down, contact RAC Assistance immediately. Over 90% of all RAC patrol men resolve vehicle breakdowns at the roadside without the need for a garage visit.</p>
          </div>
        </div>
        
        <div class="faqItem">
          <div class="faqQuestion">
            <div class="questionContent">
              <div class="questionIcon">
                <i class="fas fa-question-circle"></i>
              </div>
              <h3>Are all vehicles eligible for RAC warranty?</h3>
            </div>
            <div class="faqToggle">
              <i class="fas fa-plus"></i>
            </div>
          </div>
          <div class="faqAnswer">
            <p>Most vehicles we sell qualify for RAC warranty coverage. However, some exclusions may apply based on age, mileage, or other factors. Our sales team will confirm eligibility for your specific vehicle.</p>
          </div>
        </div>
        
        <div class="faqItem">
          <div class="faqQuestion">
            <div class="questionContent">
              <div class="questionIcon">
                <i class="fas fa-question-circle"></i>
              </div>
              <h3>Can I transfer the warranty if I sell my vehicle?</h3>
            </div>
            <div class="faqToggle">
              <i class="fas fa-plus"></i>
            </div>
          </div>
          <div class="faqAnswer">
            <p>Yes, in most cases RAC warranties can be transferred to the new owner, which can add value when selling your vehicle. Terms and conditions apply.</p>
          </div>
        </div>
      </div>
      
      <div class="faqCallToAction">
        <div class="ctaContent">
          <h3>Still have questions?</h3>
          <p>Our warranty specialists are ready to help you find the perfect coverage</p>
        </div>
        <a href="#contact-us" class="ctaButton">
          Contact Us
        </a>
      </div>
      
      <div class="faqDisclaimer">
        <div class="disclaimerIcon">
          <i class="fas fa-info-circle"></i>
        </div>
        <div class="disclaimerContent">
          <p>Some vehicles we sell may be ineligible for RAC Warranty. Please confirm with our sales consultant regarding your chosen vehicle.</p>
          <p>We offer 3 levels of cover dependent on varying factors and extended warranties for durations of 12, 24 & 36 months. Sale diesel is valid for 12 months irrespective of purchase of warranty. Please ask our sales consultant for a full explanation of all the products we offer.</p>
        </div>
      </div>
    </div>
  </div>
  
  <!-- WhatsApp Button -->
  <a href="https://api.whatsapp.com/send?phone=+447500314681&text=Hello%20Better%20Performance%20Ltd.%20I'm%20interested%20in%20warranty%20information." class="whatsappButton" target="_blank" rel="noreferrer">
    <span class="whatsappIcon"><i class="fab fa-whatsapp"></i></span>
  </a>
</div>
