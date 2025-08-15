# CRR IT Learners Website

A responsive website for CRR IT Learners, providing educational resources,career pathways, semester-wise materials, and contact forms for students.

## Features

- **Responsive Design**: Works on all device sizes
- **Semester-wise Resources**: Organized materials for different semesters in google form 
- **Career Pathways**: Explore various IT career domains and their learning paths
- **Interactive Navigation**: Easy-to-use navigation between sections
- **Contact Form**: Integrated Google Form for user inquiries
- **Modern UI**: Clean and professional user interface

## Pages

1. **Home (`index.html`)**
   - Welcome section
   - Quick links to important sections
   - Overview of available resources

2. **Study materials Page (`semester.html`)**
   - Semester-wise subject listing
   - PDF viewer integration
   - Resource materials

3. **Career Pathways** (`pathways.html`)
   - Explore various IT career domains
   - Detailed learning paths for each domain
   - Resource recommendations
   - Skill requirements and certifications

4. **Contact Page (`contact.html`)**
   - Embedded Google Form
   - Responsive iframe integration
   - Alternative link to open form in new tab

## File Structure

```
├── index.html          # Home page
├── semester.html       # Semester resources page
├── contact.html        # Contact form page
├── script.js           # Main JavaScript functionality
├── style.css           # Main stylesheet
├── pathways.js         # Navigation and routing logic
└── README.md           # This file
```

## Technologies Used

- HTML5
- CSS3 (with Flexbox and Grid)
- JavaScript (Vanilla)
- Google Forms (for contact form)
- Google Sheets(for materials)
- github pages(for deployment)



### Local Development

1. Clone the repository
2. Open any HTML file in a modern web browser
3. No build process or dependencies required

### Updating the Contact Form

1. Create a new Google Form
2. Click "Send" and copy the embed code
3. Replace the iframe in `contact.html` with your new embed code

### Adding New Semester Content

1. Update `semester.html` with new semester sections
2. Add corresponding content in the google form
3. Updates will automatically happen in website

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (Chrome, Safari)


## Contact

For any inquiries, please use the contact form on the website.
