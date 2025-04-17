<?php
/**
 * Finance Section Template Part
 * 
 * This  the finance section including hero, options, and application form.
 */
?>

<div id="alt-section" class="container">
  <!-- Modern Hero Banner with navigation -->
  <div class="modernHeroWrapper">
    <div 
      class="modernHeroImage" 
      style="background-image: url('<?php echo get_stylesheet_directory_uri(); ?>/assets/images/20250402-LDB04582.jpg');"
    ></div>
    <div class="modernHeroOverlay">
      <div class="modernHeroContent">
        <h1>Premium Vehicle Finance Solutions</h1>
        <p>Tailored finance packages for luxury, performance, and classic vehicles</p>
        <div class="heroNavigation">
          <button class="navButton activeNavButton" id="apply-now-btn">
            Apply Now
          </button>
        </div>
      </div>
    </div>
  </div>
      
  <!-- Main Content -->
  <section class="contentSection">
    <h1 class="sectionTitle">Finance</h1>
    
    <div class="luxuryFeatureSection">
      <div class="featureText">
        <h2>Choosing Excellence</h2>
        <p>At Better Performance, we understand the unique requirements of high-performance and luxury vehicle financing. Our bespoke solutions are designed to accommodate the specific needs of discerning clients seeking exceptional automotive experiences.</p>
        <p>With expertise in prestige marques and specialist vehicles, our finance packages offer competitive rates, flexible terms, and options tailored to your lifestyle and preferences.</p>
        <div class="featureHighlights">
          <div class="highlightItem">
            <i class="fas fa-check-circle"></i>
            <span>Competitive rates for premium vehicles</span>
          </div>
          <div class="highlightItem">
            <i class="fas fa-check-circle"></i>
            <span>Bespoke payment structures</span>
          </div>
          <div class="highlightItem">
            <i class="fas fa-check-circle"></i>
            <span>Tailored to high-value assets</span>
          </div>
        </div>
      </div>
      <div class="featureImage">
        <img src="<?php echo get_stylesheet_directory_uri(); ?>/assets/images/20250409-DSC05699.jpg" alt="Luxury Sports Car" />
      </div>
    </div>
    
    <!-- Finance Products Section -->
    <div class="financeOptionsWrapper">
      <h2 class="centeredHeading">What we offer</h2>
      <p class="centeredText">Through our partnership with leading finance providers, we offer a range of flexible finance solutions to suit your needs:</p>
      
      <div class="financeOptionsGrid">
        <div class="financeOption">
          <div class="financeOptionHeader">
            <h3>Hire Purchase (HP)</h3>
          </div>
          <div class="financeOptionContent">
            <p>A straightforward way to finance your vehicle with fixed monthly payments.</p>
            <div class="featureList">
              <div class="featureItem">
                <span class="checkmark">✓</span>
                <span>Own the vehicle at the end of the agreement</span>
              </div>
              <div class="featureItem">
                <span class="checkmark">✓</span>
                <span>Fixed interest rate throughout the term</span>
              </div>
              <div class="featureItem">
                <span class="checkmark">✓</span>
                <span>Flexible deposit options available</span>
              </div>
              <div class="featureItem">
                <span class="checkmark">✓</span>
                <span>Terms from 12-60 months</span>
              </div>
            </div>
            <button class="button popup-trigger" data-popup="hp">
              Learn More
            </button>
          </div>
        </div>
        
        <div class="financeOption">
          <div class="financeOptionHeader">
            <h3>Personal Contract Purchase (PCP)</h3>
          </div>
          <div class="financeOptionContent">
            <p>Lower monthly payments with options at the end of your agreement.</p>
            <div class="featureList">
              <div class="featureItem">
                <span class="checkmark">✓</span>
                <span>Choose to buy, part-exchange, or return the vehicle</span>
              </div>
              <div class="featureItem">
                <span class="checkmark">✓</span>
                <span>Lower monthly payments than Hire Purchase</span>
              </div>
              <div class="featureItem">
                <span class="checkmark">✓</span>
                <span>Optional balloon payment at the end</span>
              </div>
              <div class="featureItem">
                <span class="checkmark">✓</span>
                <span>Flexible terms to suit your budget</span>
              </div>
            </div>
            <button class="button popup-trigger" data-popup="pcp">
              Learn More
            </button>
          </div>
        </div>
        
        <div class="financeOption">
          <div class="financeOptionHeader">
            <h3>Specialist Vehicle Finance</h3>
          </div>
          <div class="financeOptionContent">
            <p>Tailored solutions for prestige, classic, and performance vehicles with specialist Lease Purchase/HP options.</p>
            <div class="featureList">
              <div class="featureItem">
                <span class="checkmark">✓</span>
                <span>Bespoke packages for high-value vehicles</span>
              </div>
              <div class="featureItem">
                <span class="checkmark">✓</span>
                <span>Competitive rates for premium cars</span>
              </div>
              <div class="featureItem">
                <span class="checkmark">✓</span>
                <span>Lease Purchase/HP with flexible terms</span>
              </div>
              <div class="featureItem">
                <span class="checkmark">✓</span>
                <span>Tailored agreements for unique requirements</span>
              </div>
            </div>
            <button class="button popup-trigger" data-popup="specialist">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Application Form Section -->
    <div id="finance-application" class="applicationSection">
      <h2 class="centeredHeading">Finance Application</h2>
      <p class="centeredText">Complete our application form below for your personalized finance quote.</p>
      
      <div class="applicationForm">
        <div class="progressBar">
          <div class="progressIndicator" style="width: 16.6%;"></div>
        </div>
        
        <!-- Privacy Notice -->
        <div class="formStage active" id="privacy-notice">
          <h3>Privacy Notice</h3>
          <div class="privacyNotice">
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
          <div class="formGroup">
            <label class="formLabel">
              <input 
                type="checkbox" 
                id="privacy-accepted"
              /> 
              I have read and accept the Privacy Notice
            </label>
          </div>
          <div class="formNavigation">
            <div></div>
            <button 
              type="button" 
              class="button" 
              id="privacy-continue-btn"
              disabled
            >
              Accept and Continue
            </button>
          </div>
        </div>
        
        <!-- Form Stage 1: Personal Details -->
        <div class="formStage" id="personal-details">
          <h3>Personal Details</h3>
          <div class="formRow">
            <div class="formGroup">
              <label for="title" class="formLabel">Title*</label>
              <select 
                id="title" 
                name="title"
                class="formInput"
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
            
            <div class="formGroup">
              <label for="forename" class="formLabel">Forename*</label>
              <input 
                type="text" 
                id="forename" 
                name="forename"
                class="formInput" 
                placeholder="Enter your first name"
                required
              />
            </div>
            
            <div class="formGroup">
              <label for="middleName" class="formLabel">Middle Name</label>
              <input 
                type="text" 
                id="middleName" 
                name="middleName"
                class="formInput" 
                placeholder="Enter your middle name"
              />
            </div>
          </div>
          
          <div class="formRow">
            <div class="formGroup">
              <label for="surname" class="formLabel">Surname*</label>
              <input 
                type="text" 
                id="surname" 
                name="surname"
                class="formInput" 
                placeholder="Enter your surname"
                required
              />
            </div>
            
            <div class="formGroup">
              <label for="homeTelephone" class="formLabel">Home Telephone</label>
              <input 
                type="tel" 
                id="homeTelephone" 
                name="homeTelephone"
                class="formInput" 
                placeholder="Enter your home phone"
              />
            </div>
            
            <div class="formGroup">
              <label for="mobileTelephone" class="formLabel">Mobile Telephone*</label>
              <input 
                type="tel" 
                id="mobileTelephone" 
                name="mobileTelephone"
                class="formInput" 
                placeholder="Enter your mobile phone"
                required
              />
            </div>
          </div>
          
          <div class="formRow">
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
            
            <div class="formGroup">
              <label for="dateOfBirth" class="formLabel">Date of Birth*</label>
              <input 
                type="date" 
                id="dateOfBirth" 
                name="dateOfBirth"
                class="formInput"
                required
              />
            </div>
          </div>
          
          <div class="formRow">
            <div class="formGroup">
              <label for="gender" class="formLabel">Gender*</label>
              <select 
                id="gender" 
                name="gender"
                class="formInput"
                required
              >
                <option value="">Please select</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>
            
            <div class="formGroup">
              <label for="nationality" class="formLabel">Nationality*</label>
              <select 
                id="nationality" 
                name="nationality"
                class="formInput"
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
          
          <div class="formRow">
            <div class="formGroup">
              <label for="maritalStatus" class="formLabel">Marital Status*</label>
              <select 
                id="maritalStatus" 
                name="maritalStatus"
                class="formInput"
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
            
            <div class="formGroup">
              <label for="dependants" class="formLabel">Dependants</label>
              <input 
                type="number" 
                id="dependants" 
                name="dependants"
                class="formInput" 
                min="0"
                placeholder="Number of dependants"
              />
            </div>
          </div>
          
          <div class="formRow">
            <div class="formGroup">
              <label for="highNetWorth" class="formLabel">High Net Worth?*</label>
              <select 
                id="highNetWorth" 
                name="highNetWorth"
                class="formInput"
                required
              >
                <option value="">Please select</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>
            
            <div class="formGroup">
              <label for="businessUse" class="formLabel">Purchasing For Business Use?*</label>
              <select 
                id="businessUse" 
                name="businessUse"
                class="formInput"
                required
              >
                <option value="">Please select</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>
          </div>
          
          <div class="formNavigation">
            <button type="button" class="button secondary prev-stage-btn" data-current="2" data-prev="1">Previous</button>
            <button type="button" class="button next-stage-btn" data-current="2" data-next="3">Next Step</button>
          </div>
        </div>
        
        <!-- Form Stage 2: Address History -->
        <div class="formStage" id="address-history">
          <h3>Current Address</h3>
          <div class="formRow">
            <div class="formGroup">
              <label for="currentPostcode" class="formLabel">Postcode*</label>
              <input 
                type="text" 
                id="currentPostcode" 
                name="currentPostcode"
                class="formInput" 
                placeholder="Enter your postcode"
                required
              />
            </div>
            
            <div class="formGroup">
              <label for="currentNameNumber" class="formLabel">House Name/Number*</label>
              <input 
                type="text" 
                id="currentNameNumber" 
                name="currentNameNumber"
                class="formInput" 
                placeholder="Enter house name/number"
                required
              />
            </div>
          </div>
          
          <div class="formRow">
            <div class="formGroup">
              <label for="currentAddressLine1" class="formLabel">Address Line 1*</label>
              <input 
                type="text" 
                id="currentAddressLine1" 
                name="currentAddressLine1"
                class="formInput" 
                placeholder="Enter address line 1"
                required
              />
            </div>
            
            <div class="formGroup">
              <label for="currentAddressLine2" class="formLabel">Address Line 2</label>
              <input 
                type="text" 
                id="currentAddressLine2" 
                name="currentAddressLine2"
                class="formInput" 
                placeholder="Enter address line 2"
              />
            </div>
          </div>
          
          <div class="formRow">
            <div class="formGroup">
              <label for="currentAddressLine3" class="formLabel">Address Line 3</label>
              <input 
                type="text" 
                id="currentAddressLine3" 
                name="currentAddressLine3"
                class="formInput" 
                placeholder="Enter address line 3"
              />
            </div>
            
            <div class="formGroup">
              <label for="currentTownCity" class="formLabel">Town/City*</label>
              <input 
                type="text" 
                id="currentTownCity" 
                name="currentTownCity"
                class="formInput" 
                placeholder="Enter town/city"
                required
              />
            </div>
          </div>
          
          <div class="formRow">
            <div class="formGroup">
              <label for="currentCounty" class="formLabel">County*</label>
              <input 
                type="text" 
                id="currentCounty" 
                name="currentCounty"
                class="formInput" 
                placeholder="Enter county"
                required
              />
            </div>
            
            <div class="formGroup">
              <label for="currentYearsAtAddress" class="formLabel">Years at Address*</label>
              <input 
                type="number" 
                id="currentYearsAtAddress" 
                name="currentYearsAtAddress"
                class="formInput" 
                min="0"
                max="99"
                placeholder="Enter years"
                required
              />
            </div>
            
            <div class="formGroup">
              <label for="currentMonthsAtAddress" class="formLabel">Months at Address*</label>
              <input 
                type="number" 
                id="currentMonthsAtAddress" 
                name="currentMonthsAtAddress"
                class="formInput" 
                min="0"
                max="11"
                placeholder="Enter months"
                required
              />
            </div>
          </div>
          
          <div class="formRow">
            <div class="formGroup">
              <label for="currentAccommodationType" class="formLabel">Accommodation Type*</label>
              <select 
                id="currentAccommodationType" 
                name="currentAccommodationType"
                class="formInput"
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
          
          <!-- Previous Address Section (if less than 3 years at current address) -->
          <div id="previous-address-section" style="display: none;">
            <h3>Previous Address</h3>
            <p class="sectionNote">Please provide your previous address details as you have been at your current address for less than 3 years.</p>
            
            <div class="formRow">
              <div class="formGroup">
                <label for="previousPostcode" class="formLabel">Postcode*</label>
                <input 
                  type="text" 
                  id="previousPostcode" 
                  name="previousPostcode"
                  class="formInput" 
                  placeholder="Enter your previous postcode"
                  required
                />
              </div>
              
              <div class="formGroup">
                <label for="previousNameNumber" class="formLabel">House Name/Number*</label>
                <input 
                  type="text" 
                  id="previousNameNumber" 
                  name="previousNameNumber"
                  class="formInput" 
                  placeholder="Enter previous house name/number"
                  required
                />
              </div>
            </div>
            
            <div class="formRow">
              <div class="formGroup">
                <label for="previousAddressLine1" class="formLabel">Address Line 1*</label>
                <input 
                  type="text" 
                  id="previousAddressLine1" 
                  name="previousAddressLine1"
                  class="formInput" 
                  placeholder="Enter address line 1"
                  required
                />
              </div>
              
              <div class="formGroup">
                <label for="previousAddressLine2" class="formLabel">Address Line 2</label>
                <input 
                  type="text" 
                  id="previousAddressLine2" 
                  name="previousAddressLine2"
                  class="formInput" 
                  placeholder="Enter address line 2"
                />
              </div>
            </div>
            
            <div class="formRow">
              <div class="formGroup">
                <label for="previousAddressLine3" class="formLabel">Address Line 3</label>
                <input 
                  type="text" 
                  id="previousAddressLine3" 
                  name="previousAddressLine3"
                  class="formInput" 
                  placeholder="Enter address line 3"
                />
              </div>
              
              <div class="formGroup">
                <label for="previousTownCity" class="formLabel">Town/City*</label>
                <input 
                  type="text" 
                  id="previousTownCity" 
                  name="previousTownCity"
                  class="formInput" 
                  placeholder="Enter town/city"
                  required
                />
              </div>
            </div>
            
            <div class="formRow">
              <div class="formGroup">
                <label for="previousCounty" class="formLabel">County*</label>
                <input 
                  type="text" 
                  id="previousCounty" 
                  name="previousCounty"
                  class="formInput" 
                  placeholder="Enter county"
                  required
                />
              </div>
              
              <div class="formGroup">
                <label for="previousYearsAtAddress" class="formLabel">Years at Address*</label>
                <input 
                  type="number" 
                  id="previousYearsAtAddress" 
                  name="previousYearsAtAddress"
                  class="formInput" 
                  min="0"
                  max="99"
                  placeholder="Enter years"
                  required
                />
              </div>
              
              <div class="formGroup">
                <label for="previousMonthsAtAddress" class="formLabel">Months at Address*</label>
                <input 
                  type="number" 
                  id="previousMonthsAtAddress" 
                  name="previousMonthsAtAddress"
                  class="formInput" 
                  min="0"
                  max="11"
                  placeholder="Enter months"
                  required
                />
              </div>
            </div>
            
            <div class="formRow">
              <div class="formGroup">
                <label for="previousAccommodationType" class="formLabel">Accommodation Type*</label>
                <select 
                  id="previousAccommodationType" 
                  name="previousAccommodationType"
                  class="formInput"
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
          </div>
          
          <div class="formNavigation">
            <button type="button" class="button secondary prev-stage-btn" data-current="3" data-prev="2">Previous</button>
            <button type="button" class="button next-stage-btn" data-current="3" data-next="4">Next Step</button>
          </div>
        </div>
        
        <!-- Form Stage 3: Employment History -->
        <div class="formStage" id="employment-history">
          <h3>Current Employment</h3>
          <div class="formRow">
            <div class="formGroup">
              <label for="employer" class="formLabel">Employer Name*</label>
              <input 
                type="text" 
                id="employer" 
                name="employer"
                class="formInput" 
                placeholder="Enter employer name"
                required
              />
            </div>
            
            <div class="formGroup">
              <label for="employerPhone" class="formLabel">Employer Phone*</label>
              <input 
                type="tel" 
                id="employerPhone" 
                name="employerPhone"
                class="formInput" 
                placeholder="Enter employer phone number"
                required
              />
            </div>
          </div>
          
          <div class="formRow">
            <div class="formGroup">
              <label for="employerPostcode" class="formLabel">Employer Postcode*</label>
              <input 
                type="text" 
                id="employerPostcode" 
                name="employerPostcode"
                class="formInput" 
                placeholder="Enter employer postcode"
                required
              />
            </div>
            
            <div class="formGroup">
              <label for="employerNameNumber" class="formLabel">Building Name/Number*</label>
              <input 
                type="text" 
                id="employerNameNumber" 
                name="employerNameNumber"
                class="formInput" 
                placeholder="Enter building name/number"
                required
              />
            </div>
          </div>
          
          <div class="formRow">
            <div class="formGroup">
              <label for="employerAddressLine1" class="formLabel">Address Line 1*</label>
              <input 
                type="text" 
                id="employerAddressLine1" 
                name="employerAddressLine1"
                class="formInput" 
                placeholder="Enter address line 1"
                required
              />
            </div>
            
            <div class="formGroup">
              <label for="employerAddressLine2" class="formLabel">Address Line 2</label>
              <input 
                type="text" 
                id="employerAddressLine2" 
                name="employerAddressLine2"
                class="formInput" 
                placeholder="Enter address line 2"
              />
            </div>
          </div>
          
          <div class="formRow">
            <div class="formGroup">
              <label for="employerTownCity" class="formLabel">Town/City*</label>
              <input 
                type="text" 
                id="employerTownCity" 
                name="employerTownCity"
                class="formInput" 
                placeholder="Enter town/city"
                required
              />
            </div>
            
            <div class="formGroup">
              <label for="employerCounty" class="formLabel">County*</label>
              <input 
                type="text" 
                id="employerCounty" 
                name="employerCounty"
                class="formInput" 
                placeholder="Enter county"
                required
              />
            </div>
          </div>
          
          <div class="formRow">
            <div class="formGroup">
              <label for="occupation" class="formLabel">Occupation*</label>
              <input 
                type="text" 
                id="occupation" 
                name="occupation"
                class="formInput" 
                placeholder="Enter your job title"
                required
              />
            </div>
            
            <div class="formGroup">
              <label for="employmentBasis" class="formLabel">Employment Basis*</label>
              <select 
                id="employmentBasis" 
                name="employmentBasis"
                class="formInput"
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
          
          <div class="formRow">
            <div class="formGroup">
              <label for="employmentCategory" class="formLabel">Employment Category*</label>
              <select 
                id="employmentCategory" 
                name="employmentCategory"
                class="formInput"
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
          
          <div class="formRow">
            <div class="formGroup">
              <label for="yearsAtEmployment" class="formLabel">Years at Employment*</label>
              <input 
                type="number" 
                id="yearsAtEmployment" 
                name="yearsAtEmployment"
                class="formInput" 
                min="0"
                max="99"
                placeholder="Enter years"
                required
              />
            </div>
            
            <div class="formGroup">
              <label for="monthsAtEmployment" class="formLabel">Months at Employment*</label>
              <input 
                type="number" 
                id="monthsAtEmployment" 
                name="monthsAtEmployment"
                class="formInput" 
                min="0"
                max="11"
                placeholder="Enter months"
                required
              />
            </div>
            
            <div class="formGroup">
              <label for="grossAnnualIncome" class="formLabel">Gross Annual Income (£)*</label>
              <input 
                type="number" 
                id="grossAnnualIncome" 
                name="grossAnnualIncome"
                class="formInput" 
                min="0"
                placeholder="Enter annual income"
                required
              />
            </div>
          </div>
          
          <!-- Previous Employment (if less than 3 years) -->
          <div id="previous-employment-section" style="display: none;">
            <h3>Previous Employment</h3>
            <p class="sectionNote">Please provide your previous employment details as you have been at your current job for less than 3 years.</p>
            
            <div class="formRow">
              <div class="formGroup">
                <label for="prevEmployer" class="formLabel">Previous Employer*</label>
                <input 
                  type="text" 
                  id="prevEmployer" 
                  name="prevEmployer"
                  class="formInput" 
                  placeholder="Enter previous employer name"
                  required
                />
              </div>
              
              <div class="formGroup">
                <label for="prevEmployerPhone" class="formLabel">Employer Phone*</label>
                <input 
                  type="tel" 
                  id="prevEmployerPhone" 
                  name="prevEmployerPhone"
                  class="formInput" 
                  placeholder="Enter employer phone number"
                  required
                />
              </div>
            </div>
            
            <div class="formRow">
              <div class="formGroup">
                <label for="prevEmployerPostcode" class="formLabel">Employer Postcode*</label>
                <input 
                  type="text" 
                  id="prevEmployerPostcode" 
                  name="prevEmployerPostcode"
                  class="formInput" 
                  placeholder="Enter previous employer postcode"
                  required
                />
              </div>
              
              <div class="formGroup">
                <label for="prevEmployerNameNumber" class="formLabel">Building Name/Number*</label>
                <input 
                  type="text" 
                  id="prevEmployerNameNumber" 
                  name="prevEmployerNameNumber"
                  class="formInput" 
                  placeholder="Enter building name/number"
                  required
                />
              </div>
            </div>
            
            <div class="formRow">
              <div class="formGroup">
                <label for="prevEmployerAddressLine1" class="formLabel">Address Line 1*</label>
                <input 
                  type="text" 
                  id="prevEmployerAddressLine1" 
                  name="prevEmployerAddressLine1"
                  class="formInput" 
                  placeholder="Enter address line 1"
                  required
                />
              </div>
              
              <div class="formGroup">
                <label for="prevEmployerAddressLine2" class="formLabel">Address Line 2</label>
                <input 
                  type="text" 
                  id="prevEmployerAddressLine2" 
                  name="prevEmployerAddressLine2"
                  class="formInput" 
                  placeholder="Enter address line 2"
                />
              </div>
            </div>
            
            <div class="formRow">
              <div class="formGroup">
                <label for="prevEmployerTownCity" class="formLabel">Town/City*</label>
                <input 
                  type="text" 
                  id="prevEmployerTownCity" 
                  name="prevEmployerTownCity"
                  class="formInput" 
                  placeholder="Enter town/city"
                  required
                />
              </div>
              
              <div class="formGroup">
                <label for="prevEmployerCounty" class="formLabel">County*</label>
                <input 
                  type="text" 
                  id="prevEmployerCounty" 
                  name="prevEmployerCounty"
                  class="formInput" 
                  placeholder="Enter county"
                  required
                />
              </div>
            </div>
            
            <div class="formRow">
              <div class="formGroup">
                <label for="prevOccupation" class="formLabel">Occupation*</label>
                <input 
                  type="text" 
                  id="prevOccupation" 
                  name="prevOccupation"
                  class="formInput" 
                  placeholder="Enter your previous job title"
                  required
                />
              </div>
              
              <div class="formGroup">
                <label for="prevEmploymentBasis" class="formLabel">Employment Basis*</label>
                <select 
                  id="prevEmploymentBasis" 
                  name="prevEmploymentBasis"
                  class="formInput"
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
            
            <div class="formRow">
              <div class="formGroup">
                <label for="prevEmploymentCategory" class="formLabel">Employment Category*</label>
                <select 
                  id="prevEmploymentCategory" 
                  name="prevEmploymentCategory"
                  class="formInput"
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
            
            <div class="formRow">
              <div class="formGroup">
                <label for="prevYearsAtEmployment" class="formLabel">Years at Employment*</label>
                <input 
                  type="number" 
                  id="prevYearsAtEmployment" 
                  name="prevYearsAtEmployment"
                  class="formInput" 
                  min="0"
                  max="99"
                  placeholder="Enter years"
                  required
                />
              </div>
              
              <div class="formGroup">
                <label for="prevMonthsAtEmployment" class="formLabel">Months at Employment*</label>
                <input 
                  type="number" 
                  id="prevMonthsAtEmployment" 
                  name="prevMonthsAtEmployment"
                  class="formInput" 
                  min="0"
                  max="11"
                  placeholder="Enter months"
                  required
                />
              </div>
              
              <div class="formGroup">
                <label for="prevGrossAnnualIncome" class="formLabel">Gross Annual Income (£)*</label>
                <input 
                  type="number" 
                  id="prevGrossAnnualIncome" 
                  name="prevGrossAnnualIncome"
                  class="formInput" 
                  min="0"
                  placeholder="Enter annual income"
                  required
                />
              </div>
            </div>
          </div>
          
          <div class="formNavigation">
            <button type="button" class="button secondary prev-stage-btn" data-current="4" data-prev="3">Previous</button>
            <button type="button" class="button next-stage-btn" data-current="4" data-next="5">Next Step</button>
          </div>
        </div>
        
        <!-- Form Stage 4: Affordability Questions -->
        <div class="formStage" id="affordability">
          <h3>Affordability Questions</h3>
          <p class="sectionNote">These questions help us understand your financial situation and determine the most suitable finance options for you.</p>
          
          <div class="formRow">
            <div class="formGroup">
              <label for="replacingExistingFinance" class="formLabel">Is this application for a loan to replace an existing finance agreement?*</label>
              <select 
                id="replacingExistingFinance" 
                name="replacingExistingFinance"
                class="formInput"
                required
              >
                <option value="">Please select</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>
          </div>
          
          <div class="formRow">
            <div class="formGroup">
              <label for="additionalPrimaryIncome" class="formLabel">Do you have the ability to draw down additional Primary income?*</label>
              <select 
                id="additionalPrimaryIncome" 
                name="additionalPrimaryIncome"
                class="formInput"
                required
              >
                <option value="">Please select</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>
            
            <div class="formGroup" id="additionalPrimaryIncomeAmount-group" style="display: none;">
              <label for="additionalPrimaryIncomeAmount" class="formLabel">How much annually? (£)*</label>
              <input 
                type="number" 
                id="additionalPrimaryIncomeAmount" 
                name="additionalPrimaryIncomeAmount"
                class="formInput" 
                min="0"
                placeholder="Enter amount"
                required
              />
            </div>
          </div>
          
          <div class="formRow">
            <div class="formGroup">
              <label for="secondaryIncome" class="formLabel">Do you have a secondary Gross Annual Income or Savings?*</label>
              <select 
                id="secondaryIncome" 
                name="secondaryIncome"
                class="formInput"
                required
              >
                <option value="">Please select</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>
            
            <div class="formGroup" id="secondaryIncomeAmount-group" style="display: none;">
              <label for="secondaryIncomeAmount" class="formLabel">How much? (£)*</label>
              <input 
                type="number" 
                id="secondaryIncomeAmount" 
                name="secondaryIncomeAmount"
                class="formInput" 
                min="0"
                placeholder="Enter amount"
                required
              />
            </div>
          </div>
          
          <div class="formRow">
            <div class="formGroup">
              <label for="monthlyMortgageRental" class="formLabel">What is your share of monthly mortgage(s)/rental expenditure? (£)*</label>
              <input 
                type="number" 
                id="monthlyMortgageRental" 
                name="monthlyMortgageRental"
                class="formInput" 
                min="0"
                placeholder="Enter amount"
                required
              />
            </div>
          </div>
          
          <div class="formRow">
            <div class="formGroup">
              <label for="monthlyLivingCosts" class="formLabel">What is your share of monthly living costs? (Council tax, utilities, media, insurances, food, travel, savings, child maintenance, school fees, etc.) (£)*</label>
              <input 
                type="number" 
                id="monthlyLivingCosts" 
                name="monthlyLivingCosts"
                class="formInput" 
                min="0"
                placeholder="Enter amount"
                required
              />
            </div>
          </div>
          
          <div class="formRow">
            <div class="formGroup">
              <label for="securedCommitments" class="formLabel">Do you have any Secured HP and Finance agreements or other secured financial commitments?*</label>
              <select 
                id="securedCommitments" 
                name="securedCommitments"
                class="formInput"
                required
              >
                <option value="">Please select</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>
            
            <div class="formGroup" id="securedCommitmentsAmount-group" style="display: none;">
              <label for="securedCommitmentsAmount" class="formLabel">Monthly repayments (£)*</label>
              <input 
                type="number" 
                id="securedCommitmentsAmount" 
                name="securedCommitmentsAmount"
                class="formInput" 
                min="0"
                placeholder="Enter amount"
                required
              />
            </div>
          </div>
          
          <div class="formRow">
            <div class="formGroup">
              <label for="unsecuredCommitments" class="formLabel">Do you have any unsecured financial commitments?*</label>
              <select 
                id="unsecuredCommitments" 
                name="unsecuredCommitments"
                class="formInput"
                required
              >
                <option value="">Please select</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>
            
            <div class="formGroup" id="unsecuredCommitmentsAmount-group" style="display: none;">
              <label for="unsecuredCommitmentsAmount" class="formLabel">Monthly repayments (£)*</label>
              <input 
                type="number" 
                id="unsecuredCommitmentsAmount" 
                name="unsecuredCommitmentsAmount"
                class="formInput" 
                min="0"
                placeholder="Enter amount"
                required
              />
            </div>
          </div>
          
          <div class="formNavigation">
            <button type="button" class="button secondary prev-stage-btn" data-current="5" data-prev="4">Previous</button>
            <button type="button" class="button next-stage-btn" data-current="5" data-next="6">Next Step</button>
          </div>
        </div>
        
        <!-- Form Stage 5: Bank Details -->
        <div class="formStage" id="bank-details">
          <h3>Bank Details</h3>
          <p class="sectionNote">Please provide your banking information for the finance application.</p>
          
          <div class="formRow">
            <div class="formGroup">
              <label for="accountName" class="formLabel">Account Name*</label>
              <input 
                type="text" 
                id="accountName" 
                name="accountName"
                class="formInput" 
                placeholder="Enter account name"
                required
              />
            </div>
            
            <div class="formGroup">
              <label for="accountType" class="formLabel">Account Type*</label>
              <select 
                id="accountType" 
                name="accountType"
                class="formInput"
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
          
          <div class="formRow">
            <div class="formGroup">
              <label for="sortCode" class="formLabel">Sort Code*</label>
              <input 
                type="text" 
                id="sortCode" 
                name="sortCode"
                class="formInput" 
                placeholder="XX-XX-XX"
                required
              />
            </div>
            
            <div class="formGroup">
              <label for="accountNumber" class="formLabel">Account Number*</label>
              <input 
                type="text" 
                id="accountNumber" 
                name="accountNumber"
                class="formInput" 
                placeholder="Enter account number"
                required
              />
            </div>
          </div>
          
          <div class="formRow">
            <div class="formGroup">
              <label for="bankName" class="formLabel">Bank Name*</label>
              <input 
                type="text" 
                id="bankName" 
                name="bankName"
                class="formInput" 
                placeholder="Enter bank name"
                required
              />
            </div>
            
            <div class="formGroup">
              <label for="branchName" class="formLabel">Branch Name*</label>
              <input 
                type="text" 
                id="branchName" 
                name="branchName"
                class="formInput" 
                placeholder="Enter branch name"
                required
              />
            </div>
          </div>
          
          <div class="formRow">
            <div class="formGroup">
              <label for="bankAddress" class="formLabel">Bank Address*</label>
              <input 
                type="text" 
                id="bankAddress" 
                name="bankAddress"
                class="formInput" 
                placeholder="Enter bank address"
                required
              />
            </div>
            
            <div class="formGroup">
              <label for="yearsAtBank" class="formLabel">Years at Bank*</label>
              <input 
                type="number" 
                id="yearsAtBank" 
                name="yearsAtBank"
                class="formInput" 
                min="0"
                placeholder="Enter years at bank"
                required
              />
            </div>
          </div>
          
          <div class="formGroup">
            <label class="formLabel">
              <input 
                type="checkbox" 
                name="termsAccepted"
                id="termsAccepted"
                required
              /> 
              I confirm that all information provided is accurate and complete. I consent to credit searches and the processing of my data as outlined in the privacy notice.
            </label>
          </div>
          
          <div class="formNavigation">
            <button type="button" class="button secondary prev-stage-btn" data-current="6" data-prev="5">Previous</button>
            <button type="button" class="button" id="submit-form-btn">Submit Proposal</button>
          </div>
        </div>
        
        <!-- Completion Message -->
        <div class="formCompletion" style="display: none;">
          <div class="completionIcon">
            <i class="fas fa-check"></i>
          </div>
          <h3>Proposal Submitted Successfully!</h3>
          <p>Thank you for your finance application. One of our specialists will contact you shortly to discuss your requirements and the next steps.</p>
          <p>Your reference number: <span id="reference-number"></span></p>
          <p>A confirmation email has been sent to your provided email address.</p>
        </div>
      </div>
    </div>
  </section>
  
  <!-- Partners Section with black to subtle gradient -->
  <div class="partnersSection">
    <div class="container">
      <div class="partnersHeading">
        <h2>Our Partners</h2>
        <p>We work with these trusted partners to deliver exceptional finance solutions tailored to your needs.</p>
      </div>
      <div class="partnersGrid">
        <div class="partnerLogo">
          <img src="<?php echo get_stylesheet_directory_uri(); ?>/assets/images/above-beyond-logo.svg" alt="Above & Beyond" />
        </div>
        <div class="partnerLogo">
          <img src="<?php echo get_stylesheet_directory_uri(); ?>/assets/images/jbr-capital-logo.svg" alt="JBR Capital" />
        </div>
        <div class="partnerLogo">
          <img src="<?php echo get_stylesheet_directory_uri(); ?>/assets/images/north-ridge-finance-logo.svg" alt="North Ridge Finance" />
        </div>
        <div class="partnerLogo">
          <img src="<?php echo get_stylesheet_directory_uri(); ?>/assets/images/dsg-group-logo.svg" alt="DSG Group" />
        </div>
      </div>
    </div>
  </div>
  
  <!-- WhatsApp Button -->
  <a href="https://api.whatsapp.com/send?phone=+447500314681&text=Hello%20Better%20Performance%20Ltd." class="whatsappButton" target="_blank" rel="noreferrer">
    <span class="whatsappIcon"><i class="fab fa-whatsapp"></i></span>
  </a>
  
  <!-- Popup for Hire Purchase (HP) -->
  <div class="popupOverlay" id="hp-popup" style="display: none;">
    <div class="popupDocument">
      <div class="popupHeader">
        <h2>Hire Purchase (HP) Finance</h2>
        <button class="closePopup" data-popup="hp">
          <i class="fas fa-times"></i>
        </button>
      </div>
      <div class="popupContent">
        <div class="popupExample">
          <em>This is an example timeline for a BMW M3 at £60,000 over 48 months</em>
        </div>
        
        <h3>How Hire Purchase Works</h3>
        <p>Hire Purchase (HP) is a straightforward way to finance your vehicle. You'll pay a deposit followed by fixed monthly payments over an agreed term. At the end of the agreement, you'll own the vehicle outright.</p>
        
        <!-- Payment Steps Visualization -->
        <div class="paymentStepsContainer">
          <div class="paymentStep">
            <div class="paymentIcon">
              <i class="fas fa-hand-holding-usd"></i>
            </div>
            <div class="paymentTitle">Initial Deposit</div>
            <div class="paymentAmount">£6,000</div>
            <div class="paymentDesc">10% of vehicle value</div>
          </div>
          
          <div class="paymentStep">
            <div class="paymentIcon">
              <i class="fas fa-calendar-alt"></i>
            </div>
            <div class="paymentTitle">Monthly Payments</div>
            <div class="paymentAmount">£1,269.37</div>
            <div class="paymentDesc">for 48 months</div>
          </div>
          
          <div class="paymentStep">
            <div class="paymentIcon">
              <i class="fas fa-check-circle"></i>
            </div>
            <div class="paymentTitle">Final Payment</div>
            <div class="paymentAmount">£0</div>
            <div class="paymentDesc">You now own the vehicle</div>
          </div>
        </div>

        <div class="documentTable">
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
        
        <div class="documentNote">
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
  
  <!-- Popup for Personal Contract Purchase (PCP) -->
  <div class="popupOverlay" id="pcp-popup" style="display: none;">
    <div class="popupDocument">
      <div class="popupHeader">
        <h2>Personal Contract Purchase (PCP) Finance</h2>
        <button class="closePopup" data-popup="pcp">
          <i class="fas fa-times"></i>
        </button>
      </div>
      <div class="popupContent">
        <div class="popupExample">
          <em>This is an example timeline for a BMW M3 at £60,000 over 48 months</em>
        </div>
        
        <h3>How Personal Contract Purchase Works</h3>
        <p>Personal Contract Purchase (PCP) offers lower monthly payments than Hire Purchase. You'll pay a deposit followed by monthly payments over an agreed term. At the end of the agreement, you have three options: pay the final balloon payment to own the vehicle, part-exchange for a new vehicle, or simply return the vehicle.</p>
        
        <!-- Payment Steps -->
        <div class="paymentStepsContainer">
          <div class="paymentStep">
            <div class="paymentIcon">
              <i class="fas fa-hand-holding-usd"></i>
            </div>
            <div class="paymentTitle">Initial Deposit</div>
            <div class="paymentAmount">£6,000</div>
            <div class="paymentDesc">10% of vehicle value</div>
          </div>
          
          <div class="paymentStep">
            <div class="paymentIcon">
              <i class="fas fa-calendar-alt"></i>
            </div>
            <div class="paymentTitle">Monthly Payments</div>
            <div class="paymentAmount">£801.22</div>
            <div class="paymentDesc">for 48 months</div>
          </div>
          
          <div class="paymentStep">
            <div class="paymentIcon">
              <i class="fas fa-route"></i>
            </div>
            <div class="paymentTitle">End of Agreement</div>
            <div class="paymentAmount">3 Options</div>
            <div class="paymentDesc">Buy, Return, or Exchange</div>
          </div>
        </div>

        <div class="documentTable">
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

        <div class="documentNote">
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
  
  <!-- Popup for Specialist Vehicle Finance -->
  <div class="popupOverlay" id="specialist-popup" style="display: none;">
    <div class="popupDocument">
      <div class="popupHeader">
        <h2>Specialist Vehicle Finance</h2>
        <button class="closePopup" data-popup="specialist">
          <i class="fas fa-times"></i>
        </button>
      </div>
      <div class="popupContent">
        <div class="popupExample">
          <em>This is an example for a BMW M3 at £60,000 with premium terms</em>
        </div>
        
        <h3>Specialist Finance Options</h3>
        <p>Our Specialist Vehicle Finance includes bespoke Lease Purchase/HP options tailored for prestige, performance, and classic vehicles. These options are designed to accommodate the unique requirements of high-value vehicles and their owners.</p>
        
        <!-- Payment Steps -->
        <div class="paymentStepsContainer">
          <div class="paymentStep">
            <div class="paymentIcon">
              <i class="fas fa-hand-holding-usd"></i>
            </div>
            <div class="paymentTitle">Initial Deposit</div>
            <div class="paymentAmount">£6,000</div>
            <div class="paymentDesc">10% of vehicle value</div>
          </div>
          
          <div class="paymentStep">
            <div class="paymentIcon">
              <i class="fas fa-calendar-alt"></i>
            </div>
            <div class="paymentTitle">Monthly Payments</div>
            <div class="paymentAmount">£701.50</div>
            <div class="paymentDesc">for 48 months</div>
          </div>
          
          <div class="paymentStep">
            <div class="paymentIcon">
              <i class="fas fa-car"></i>
            </div>
            <div class="paymentTitle">Optional Final Payment</div>
            <div class="paymentAmount">£35,000</div>
            <div class="paymentDesc">to own the vehicle</div>
          </div>
        </div>

        <div class="documentTable">
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
        
        <div class="documentNote">
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
</div>
