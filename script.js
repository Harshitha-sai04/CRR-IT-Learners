/**
 * CRR IT Learners - Main JavaScript File
 * 
 * This file handles:
 * 1. Mobile navigation menu
 * 2. Fetching semester data from Google Apps Script
 * 3. Dynamic subject display on semester pages
 * 4. Tab switching for resources (syllabus, materials, papers)
 * 5. Semester navigation
 * 6. Contact form submission
 * 
 * To modify in the future:
 * - Change WEB_APP_URL to your new Google Apps Script URL if needed
 * - Modify subject data structure in loadSubjects() if JSON format changes
 * - Update semester data mapping in semesterData object
 */

// Configuration - Update this URL if your Google Apps Script changes
const WEB_APP_URL = 'https://script.google.com/macros/s/AKfycbzONoQJorcEDdjzm5ixiibZHEuMFNpfqUqpyCM56cJROPHZeNP7bSfcRJ6PpXjU-KivZw/exec';

// Semester data mapping - You can modify descriptions here
const semesterData = {
    1: {
        title: 'Semester 1',
        description: 'Foundation subjects and programming basics',
        year: 1
    },
    2: {
        title: 'Semester 2', 
        description: 'Advanced programming and mathematics',
        year: 1
    },
    3: {
        title: 'Semester 3',
        description: 'Data structures and algorithms',
        year: 2
    },
    4: {
        title: 'Semester 4',
        description: 'Database systems and web development',
        year: 2
    },
    5: {
        title: 'Semester 5',
        description: 'Software engineering and networks',
        year: 3
    },
    6: {
        title: 'Semester 6',
        description: 'Advanced topics and specialization',
        year: 3
    },
    7: {
        title: 'Semester 7',
        description: 'Project work and electives',
        year: 4
    },
    8: {
        title: 'Semester 8',
        description: 'Final project and industry preparation',
        year: 4
    }
};

/**
 * Initialize the page when the DOM is fully loaded
 */
document.addEventListener('DOMContentLoaded', function() {
    initializeMobileMenu();
    if (document.querySelector('.semester-page')) {
        initializeSemesterPage();
    }
    if (document.querySelector('.resources-section')) {
        initializeTabs();
    }
    if (document.querySelector('.contact-form')) {
        initializeContactForm();
    }
});

/**
 * Mobile Menu Functionality
 * Handles hamburger menu toggle for mobile devices
 */
function initializeMobileMenu() {
    const mobileMenu = document.getElementById('mobile-menu');
    const navMenu = document.getElementById('nav-menu');
    
    if (mobileMenu && navMenu) {
        mobileMenu.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            
            // Animate hamburger bars
            const bars = mobileMenu.querySelectorAll('.bar');
            bars.forEach((bar, index) => {
                if (navMenu.classList.contains('active')) {
                    if (index === 0) bar.style.transform = 'rotate(45deg) translate(6px, 6px)';
                    if (index === 1) bar.style.opacity = '0';
                    if (index === 2) bar.style.transform = 'rotate(-45deg) translate(6px, -6px)';
                } else {
                    bar.style.transform = 'none';
                    bar.style.opacity = '1';
                }
            });
        });

        // Close mobile menu when clicking on links
        const navLinks = navMenu.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                const bars = mobileMenu.querySelectorAll('.bar');
                bars.forEach(bar => {
                    bar.style.transform = 'none';
                    bar.style.opacity = '1';
                });
            });
        });
    }
}

/**
 * Initialize Semester Page
 * Handles semester-specific functionality including data loading
 */
function initializeSemesterPage() {
    // Get semester number from URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const semesterNum = parseInt(urlParams.get('semester')) || 1;
    
    // Update page content based on semester
    updateSemesterInfo(semesterNum);
    
    // Load subjects for this semester
    loadSubjects(semesterNum);
    
    // Setup navigation buttons
    setupSemesterNavigation(semesterNum);
}

/**
 * Update Semester Information
 * Updates the page title, breadcrumb, and other semester-specific info
 */
function updateSemesterInfo(semesterNum) {
    const semesterInfo = semesterData[semesterNum];
    
    if (semesterInfo) {
        // Update page title
        const titleElement = document.getElementById('semester-title');
        if (titleElement) {
            titleElement.textContent = semesterInfo.title;
        }
        
        // Update breadcrumb
        const breadcrumbElement = document.getElementById('breadcrumb-semester');
        if (breadcrumbElement) {
            breadcrumbElement.textContent = semesterInfo.title;
        }
        
        // Update page title in head
        document.title = `CRR IT Learners - ${semesterInfo.title}`;
    }
}

/**
 * Load Subjects from Google Apps Script
 * Fetches and displays subjects dynamically for the specified semester
 * 
 * IMPORTANT: This function expects your Google Apps Script to return JSON in this format:
 * {
 *   "semester1": [
 *     {"name": "Subject Name", "code": "SUBJ101", "credits": 3},
 *     ...
 *   ],
 *   "semester2": [...],
 *   ...
 * }
 * 
 * Modify this function if your JSON structure is different
 */
async function loadSubjects(semesterNum) {
    const loadingElement = document.getElementById('loading');
    const subjectsSection = document.getElementById('subjects-section');
    const subjectsList = document.getElementById('subjects-list');
    
    try {
        // Show loading indicator
        if (loadingElement) {
            loadingElement.style.display = 'block';
        }
        
        // Fetch data from Google Apps Script
        console.log(`Fetching data from: ${WEB_APP_URL}`);
        const response = await fetch(WEB_APP_URL);
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        console.log('Received data:', data);
        
        // Get subjects for current semester
        const semesterKey = `semester${semesterNum}`;
        const subjects = data[semesterKey] || [];
        
        // Clear existing subjects
        if (subjectsList) {
            subjectsList.innerHTML = '';
        }
        
        // Display subjects
        if (subjects.length > 0) {
            subjects.forEach(subject => {
                const subjectCard = createSubjectCard(subject);
                subjectsList.appendChild(subjectCard);
            });
            
            // Show subjects section
            if (subjectsSection) {
                subjectsSection.style.display = 'block';
            }
        } else {
            // Show message if no subjects found
            if (subjectsList) {
                subjectsList.innerHTML = `
                    <div style="text-align: center; padding: 2rem; color: #64748b;">
                        <p>No subjects data available for this semester yet.</p>
                        <p style="font-size: 0.9rem; margin-top: 0.5rem;">Please check back later or contact us if you believe this is an error.</p>
                    </div>
                `;
            }
            
            if (subjectsSection) {
                subjectsSection.style.display = 'block';
            }
        }
        
    } catch (error) {
        console.error('Error loading subjects:', error);
        
        // Show error message
        if (subjectsList) {
            subjectsList.innerHTML = `
                <div style="text-align: center; padding: 2rem; color: #ef4444;">
                    <p>Unable to load subjects at the moment.</p>
                    <p style="font-size: 0.9rem; margin-top: 0.5rem;">Please try refreshing the page or contact us if the problem persists.</p>
                </div>
            `;
        }
        
        if (subjectsSection) {
            subjectsSection.style.display = 'block';
        }
    } finally {
        // Hide loading indicator
        if (loadingElement) {
            loadingElement.style.display = 'none';
        }
    }
}

/**
 * Create Subject Card Element
 * Creates a DOM element for displaying subject information
 * 
 * Modify this function to change how subjects are displayed
 */
function createSubjectCard(subject) {
    const card = document.createElement('div');
    card.className = 'subject-card';
    
    // Handle different possible data structures
    const subjectName = subject.name || subject.subject || subject.title || 'Unknown Subject';
    const subjectCode = subject.code || subject.subjectCode || '';
    const credits = subject.credits || subject.credit || '';
    
    card.innerHTML = `
        <h3>${subjectName}</h3>
        ${subjectCode ? `<p><strong>Code:</strong> ${subjectCode}</p>` : ''}
        ${credits ? `<p><strong>Credits:</strong> ${credits}</p>` : ''}
    `;
    
    return card;
}

/**
 * Setup Semester Navigation
 * Adds previous/next semester navigation buttons
 */
function setupSemesterNavigation(currentSemester) {
    const prevButton = document.getElementById('prev-semester');
    const nextButton = document.getElementById('next-semester');
    
    // Setup previous semester button
    if (prevButton) {
        if (currentSemester > 1) {
            prevButton.style.display = 'inline-block';
            prevButton.textContent = `← ${semesterData[currentSemester - 1].title}`;
            prevButton.onclick = () => {
                window.location.href = `semester.html?semester=${currentSemester - 1}`;
            };
        }
    }
    
    // Setup next semester button
    if (nextButton) {
        if (currentSemester < 8) {
            nextButton.style.display = 'inline-block';
            nextButton.textContent = `${semesterData[currentSemester + 1].title} →`;
            nextButton.onclick = () => {
                window.location.href = `semester.html?semester=${currentSemester + 1}`;
            };
        }
    }
}

/**
 * Initialize Tab Functionality
 * Handles switching between syllabus, materials, and question papers tabs
 */
function initializeTabs() {
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabPanes = document.querySelectorAll('.tab-pane');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetTab = button.dataset.tab;
            
            // Remove active class from all buttons and panes
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabPanes.forEach(pane => pane.classList.remove('active'));
            
            // Add active class to clicked button and corresponding pane
            button.classList.add('active');
            const targetPane = document.getElementById(targetTab);
            if (targetPane) {
                targetPane.classList.add('active');
            }
        });
    });
}

/**
 * Initialize Contact Form
 * Handles form submission and validation
 */
function initializeContactForm() {
    const form = document.getElementById('contactForm');
    if (!form) {
        console.error('Contact form not found');
        return;
    }

    form.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(form);
        const formObject = {};
        formData.forEach((value, key) => {
            formObject[key] = value;
        });

        // Show loading state
        const submitButton = form.querySelector('button[type="submit"]');
        const originalButtonText = submitButton.textContent;
        submitButton.disabled = true;
        submitButton.textContent = 'Sending...';
        
        try {
            // Send data to Google Apps Script
            const response = await fetch(WEB_APP_URL, {
                method: 'POST',
                mode: 'no-cors',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formObject),
            });

            // Show success message
            showFormMessage('Thank you for your message! We will get back to you soon.', 'success');
            form.reset();
        } catch (error) {
            console.error('Error:', error);
            showFormMessage('There was an error sending your message. Please try again later.', 'error');
        } finally {
            // Reset button state
            submitButton.disabled = false;
            submitButton.textContent = originalButtonText;
        }
    });
}

/**
 * Show form message
 * @param {string} message - The message to display
 * @param {string} type - The type of message (success, error, etc.)
 */
function showFormMessage(message, type) {
    const messageDiv = document.getElementById('form-message');
    if (!messageDiv) return;
    
    messageDiv.textContent = message;
    messageDiv.className = ''; // Clear previous classes
    messageDiv.classList.add(type);
    messageDiv.style.display = 'block';
    
    // Auto-hide after 5 seconds
    setTimeout(() => {
        messageDiv.style.display = 'none';
    }, 5000);
}

/**
 * Utility Functions
 */

// Show notification (you can extend this for user feedback)
function showNotification(message, type = 'info') {
    console.log(`${type.toUpperCase()}: ${message}`);
    // You can implement a toast notification system here in the future
}

// Get current semester from URL
function getCurrentSemester() {
    const urlParams = new URLSearchParams(window.location.search);
    return parseInt(urlParams.get('semester')) || 1;
}

// Smooth scroll to element (for future enhancements)
function smoothScrollTo(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}