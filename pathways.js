// Career Pathways Data
const careerPathways = [
    {
        id: 'web-dev',
        title: 'Web Development',
        icon: '🌐',
        description: 'Build and maintain websites and web applications using modern technologies and frameworks.',
        skills: [
            { name: 'HTML5 & CSS3', level: 'beginner' },
            { name: 'JavaScript (ES6+)', level: 'intermediate' },
            { name: 'React.js / Vue.js / Angular', level: 'intermediate' },
            { name: 'Node.js & Express', level: 'intermediate' },
            { name: 'RESTful APIs', level: 'intermediate' },
            { name: 'Git & GitHub', level: 'beginner' },
            { name: 'Responsive Design', level: 'intermediate' },
            { name: 'Web Performance', level: 'advanced' },
            { name: 'Testing (Jest, Cypress)', level: 'intermediate' },
            { name: 'Web Security', level: 'advanced' }
        ],
        certifications: [
            { name: 'MDN Web Docs - Web Development', url: 'https://developer.mozilla.org/en-US/docs/Learn' },
            { name: 'freeCodeCamp - Responsive Web Design', url: 'https://www.freecodecamp.org/learn/2022/responsive-web-design/' },
            { name: 'The Odin Project', url: 'https://www.theodinproject.com/' },
            { name: 'Full Stack Open', url: 'https://fullstackopen.com/en/' },
            { name: 'Google Web Fundamentals', url: 'https://developers.google.com/web' }
        ],
        resources: [
            { name: 'Frontend Masters', url: 'https://frontendmasters.com/' },
            { name: 'CSS-Tricks', url: 'https://css-tricks.com/' },
            { name: 'Smashing Magazine', url: 'https://www.smashingmagazine.com/' },
            { name: 'JavaScript30', url: 'https://javascript30.com/' },
            { name: 'CodePen Challenges', url: 'https://codepen.io/challenges' }
        ]
    },
    {
        id: 'data-science',
        title: 'Data Science',
        icon: '📊',
        description: 'Extract insights and knowledge from structured and unstructured data using scientific methods.',
        skills: [
            { name: 'Python', level: 'intermediate' },
            { name: 'R', level: 'beginner' },
            { name: 'SQL', level: 'intermediate' },
            { name: 'Pandas & NumPy', level: 'intermediate' },
            { name: 'Data Visualization', level: 'intermediate' },
            { name: 'Machine Learning', level: 'beginner' },
            { name: 'Statistics', level: 'intermediate' },
            { name: 'Data Cleaning', level: 'intermediate' },
            { name: 'Jupyter Notebooks', level: 'beginner' },
            { name: 'Big Data', level: 'advanced' }
        ],
        certifications: [
            { name: 'DataCamp - Data Scientist', url: 'https://www.datacamp.com/tracks/data-scientist-with-python' },
            { name: 'Coursera - Data Science Specialization', url: 'https://www.coursera.org/specializations/jhu-data-science' },
            { name: 'edX - MicroMasters in Data Science', url: 'https://www.edx.org/micromasters/uc-san-diegox-data-science' },
            { name: 'Kaggle Courses', url: 'https://www.kaggle.com/learn/overview' },
            { name: 'IBM Data Science Professional', url: 'https://www.coursera.org/professional-certificates/ibm-data-science' }
        ],
        resources: [
            { name: 'Kaggle', url: 'https://www.kaggle.com/' },
            { name: 'Towards Data Science', url: 'https://towardsdatascience.com/' },
            { name: 'Data Science Central', url: 'https://www.datasciencecentral.com/' },
            { name: 'Analytics Vidhya', url: 'https://www.analyticsvidhya.com/' },
            { name: 'KDnuggets', url: 'https://www.kdnuggets.com/' }
        ]
    },
    {
        id: 'cybersecurity',
        title: 'Cybersecurity',
        icon: '🔒',
        description: 'Protect systems, networks, and programs from digital attacks and security breaches.',
        skills: [
            { name: 'Network Security', level: 'intermediate' },
            { name: 'Ethical Hacking', level: 'intermediate' },
            { name: 'Cryptography', level: 'advanced' },
            { name: 'Security Auditing', level: 'intermediate' },
            { name: 'Incident Response', level: 'intermediate' },
            { name: 'Linux/Unix', level: 'intermediate' },
            { name: 'Penetration Testing', level: 'advanced' },
            { name: 'Security Frameworks', level: 'intermediate' },
            { name: 'Risk Management', level: 'beginner' },
            { name: 'Forensics', level: 'advanced' }
        ],
        certifications: [
            { name: 'CompTIA Security+', url: 'https://www.comptia.org/certifications/security' },
            { name: 'CEH (Certified Ethical Hacker)', url: 'https://www.eccouncil.org/programs/certified-ethical-hacker-ceh/' },
            { name: 'CISSP', url: 'https://www.isc2.org/Certifications/CISSP' },
            { name: 'OSCP', url: 'https://www.offensive-security.com/pwk-oscp/' },
            { name: 'CISCO CCNA Security', url: 'https://www.cisco.com/c/en/us/training-events/training-certifications/certifications/associate/ccna.html' }
        ],
        resources: [
            { name: 'Hack The Box', url: 'https://www.hackthebox.com/' },
            { name: 'TryHackMe', url: 'https://tryhackme.com/' },
            { name: 'Cybrary', url: 'https://www.cybrary.it/' },

            { name: 'OWASP', url: 'https://owasp.org/' }
        ]
    },
    {
        id: 'cloud-computing',
        title: 'Cloud Computing',
        icon: '☁️',
        description: 'Design, deploy, and manage applications in cloud environments like AWS, Azure, and Google Cloud.',
        skills: [
            { name: 'AWS/Azure/GCP', level: 'intermediate' },
            { name: 'Containers & Docker', level: 'intermediate' },
            { name: 'Kubernetes', level: 'intermediate' },
            { name: 'Infrastructure as Code', level: 'intermediate' },
            { name: 'Serverless Architecture', level: 'intermediate' },
            { name: 'Cloud Security', level: 'intermediate' },
            { name: 'Networking', level: 'intermediate' },
            { name: 'CI/CD Pipelines', level: 'intermediate' },
            { name: 'Monitoring & Logging', level: 'beginner' },
            { name: 'Cloud Migration', level: 'advanced' }
        ],
        certifications: [
            { name: 'AWS Certified Solutions Architect', url: 'https://aws.amazon.com/certification/certified-solutions-architect-associate/' },
            { name: 'Microsoft Certified: Azure Administrator Associate', url: 'https://learn.microsoft.com/en-us/certifications/azure-administrator/' },
            { name: 'Google Professional Cloud Architect', url: 'https://cloud.google.com/certification/cloud-architect' },
            { name: 'Certified Kubernetes Administrator (CKA)', url: 'https://www.cncf.io/certification/cka/' },
            { name: 'Terraform Associate', url: 'https://www.hashicorp.com/certification/terraform-associate' }
        ],
        resources: [
            { name: 'AWS Training & Certification', url: 'https://aws.amazon.com/training/' },
            { name: 'Microsoft Learn', url: 'https://learn.microsoft.com/en-us/training/' },
            { name: 'Google Cloud Training', url: 'https://cloud.google.com/training' },
            { name: 'A Cloud Guru', url: 'https://acloudguru.com/' },
            { name: 'Cloud Academy', url: 'https://cloudacademy.com/' }
        ]
    },
    {
        id: 'ai-ml',
        title: 'AI & Machine Learning',
        icon: '🤖',
        description: 'Develop intelligent systems that can learn from data and make predictions or decisions.',
        skills: [
            { name: 'Python', level: 'intermediate' },
            { name: 'Machine Learning', level: 'intermediate' },
            { name: 'Deep Learning', level: 'intermediate' },
            { name: 'Neural Networks', level: 'intermediate' },
            { name: 'Natural Language Processing', level: 'intermediate' },
            { name: 'Computer Vision', level: 'intermediate' },
            { name: 'TensorFlow/PyTorch', level: 'intermediate' },
            { name: 'Data Preprocessing', level: 'intermediate' },
            { name: 'Model Evaluation', level: 'intermediate' },
            { name: 'MLOps', level: 'advanced' }
        ],
        certifications: [
            { name: 'Deep Learning Specialization (Coursera)', url: 'https://www.coursera.org/specializations/deep-learning' },
            { name: 'TensorFlow Developer Certificate', url: 'https://www.tensorflow.org/certificate' },
            { name: 'IBM AI Engineering Professional Certificate', url: 'https://www.coursera.org/professional-certificates/ai-engineer' },
            { name: 'Stanford Machine Learning (Coursera)', url: 'https://www.coursera.org/learn/machine-learning' },
            { name: 'fast.ai Practical Deep Learning', url: 'https://course.fast.ai/' }
        ],
        resources: [
            { name: 'Kaggle', url: 'https://www.kaggle.com/' },
            { name: 'Papers With Code', url: 'https://paperswithcode.com/' },
            { name: 'Google AI', url: 'https://ai.google/' },
            { name: 'OpenAI', url: 'https://openai.com/' },
            { name: 'Distill.pub', url: 'https://distill.pub/' }
        ]
    },
    {
        id: 'devops',
        title: 'DevOps',
        icon: '🔄',
        description: 'Bridge the gap between development and operations through automation and collaboration.',
        skills: [
            { name: 'Linux/Unix', level: 'intermediate' },
            { name: 'Docker', level: 'intermediate' },
            { name: 'Kubernetes', level: 'intermediate' },
            { name: 'CI/CD', level: 'intermediate' },
            { name: 'Infrastructure as Code', level: 'intermediate' },
            { name: 'Monitoring & Logging', level: 'intermediate' },
            { name: 'Cloud Platforms', level: 'intermediate' },
            { name: 'Scripting (Bash, Python)', level: 'intermediate' },
            { name: 'Configuration Management', level: 'intermediate' },
            { name: 'Git & Version Control', level: 'intermediate' }
        ],
        certifications: [
            { name: 'AWS Certified DevOps Engineer', url: 'https://aws.amazon.com/certification/certified-devops-engineer-professional/' },
            { name: 'Certified Kubernetes Administrator (CKA)', url: 'https://www.cncf.io/certification/cka/' },
            { name: 'Red Hat Certified Engineer (RHCE)', url: 'https://www.redhat.com/en/services/certification/rhce' }
        ],
        resources: [
            { name: 'DevOps Roadmap', url: 'https://roadmap.sh/devops' },
            { name: 'Kubernetes Documentation', url: 'https://kubernetes.io/docs/home/' },
            { name: 'Docker Documentation', url: 'https://docs.docker.com/' },
            { name: 'DevOps.com', url: 'https://devops.com/' },
            { name: 'The New Stack', url: 'https://thenewstack.io/' }
        ]
    }
];

// DOM Elements
const pathwaysContainer = document.getElementById('pathways-container');
const modal = document.getElementById('pathway-modal');
const modalContent = document.getElementById('pathway-details');
const closeBtn = document.querySelector('.close-btn');

// Render pathway cards
function renderPathwayCards() {
    pathwaysContainer.innerHTML = careerPathways.map(pathway => `
        <div class="pathway-card" data-pathway-id="${pathway.id}">
            <div class="pathway-icon">${pathway.icon}</div>
            <div class="pathway-content">
                <h3>${pathway.title}</h3>
                <p>${pathway.description}</p>
                <div class="pathway-meta">
                    <span>${pathway.skills.length} Skills</span>
                    <span>${pathway.certifications.length} Certifications</span>
                </div>
            </div>
        </div>
    `).join('');

    // Add event listeners to pathway cards
    document.querySelectorAll('.pathway-card').forEach(card => {
        card.addEventListener('click', (e) => {
            const pathwayId = card.getAttribute('data-pathway-id');
            const pathway = careerPathways.find(p => p.id === pathwayId);
            if (pathway) {
                openPathwayModal(pathway);
            }
        });
    });
}

// Open pathway modal with details
function openPathwayModal(pathway) {
    // Create skills HTML
    const skillsHtml = `
        <ul class="skills-list">
            ${pathway.skills.map(skill => `
                <li>
                    ${skill.name}
                    <span class="skill-level ${skill.level}">${skill.level}</span>
                </li>
            `).join('')}
        </ul>
    `;

    // Create certifications HTML
    const certsHtml = `
        <ul class="certifications-list">
            ${pathway.certifications.map(cert => `
                <li>
                    <a href="${cert.url}" target="_blank" rel="noopener noreferrer">
                        ${cert.name}
                    </a>
                </li>
            `).join('')}
        </ul>
    `;

    // Create resources HTML
    const resourcesHtml = `
        <ul class="resources-list">
            ${pathway.resources.map(resource => `
                <li>
                    <a href="${resource.url}" target="_blank" rel="noopener noreferrer">
                        ${resource.name}
                    </a>
                </li>
            `).join('')}
        </ul>
    `;

    // Set modal content
    modalContent.innerHTML = `
        <div class="pathway-header">
            <h2>${pathway.title} ${pathway.icon}</h2>
            <p class="pathway-description">${pathway.description}</p>
        </div>
        
        <div class="details-section">
            <h3>Skills to Learn</h3>
            ${skillsHtml}
        </div>
        
        <div class="details-section">
            <h3>Recommended Certifications</h3>
            ${certsHtml}
        </div>
        
        <div class="details-section">
            <h3>Learning Resources</h3>
            ${resourcesHtml}
        </div>
    `;

    // Show modal
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// Close modal
function closeModal() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Event listeners
closeBtn.addEventListener('click', closeModal);

// Close modal when clicking outside the content
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModal();
    }
});

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.style.display === 'block') {
        closeModal();
    }
});

// Initialize the page
if (pathwaysContainer) {
    document.addEventListener('DOMContentLoaded', renderPathwayCards);
}
