// ============================================
// TERMINAL PORTFOLIO - MAIN SCRIPT
// ============================================

// Global State
let commandHistory = [];
let historyIndex = -1;
let isProcessing = false;

// Portfolio Data
const portfolioData = {
    about: {
        name: "Ayush Prakash Tiwari",
        location: "Guna, M.P., India",
        university: "Jaypee University of Engineering and Technology",
        degree: "B.Tech in Computer Science",
        years: "2023-2027",
        bio: "Machine Learning Engineer and Full-Stack Developer passionate about building scalable systems and AI-powered solutions. Experienced in microservices architecture, deep learning, and backend development."
    },
    skills: {
        "Languages": ["Java", "Python", "C++", "JavaScript", "SQL"],
        "Backend": ["Spring Boot", "Hibernate", "JPA", "REST APIs", "Microservices"],
        "ML/AI": ["TensorFlow", "Keras", "Scikit-learn", "Deep Learning", "CNNs"],
        "Databases": ["MongoDB", "MySQL", "Redis"],
        "DevOps": ["Docker", "Kafka", "Git"],
        "Core": ["Data Structures", "Algorithms", "OOP", "Signal Processing"]
    },
    experience: [
        {
            role: "Machine Learning Engineer Intern",
            company: "Codec Technologies",
            period: "Aug 2025 - Sep 2025",
            highlights: [
                "Proposed demand forecasting and regression models for dynamic pricing of perishable products",
                "Performed EDA, feature engineering, and time-series analysis on 10K+ records",
                "Improved inventory optimization and reduced food wastage by 20%"
            ]
        }
    ],
    projects: [
        {
            name: "Secure Journal Application",
            tech: "Spring Boot, Kafka, Redis, MongoDB",
            description: "JWT + OAuth2 secured backend with role-based authentication",
            highlights: [
                "Event-driven microservices with Kafka messaging and Redis caching",
                "Improved response time by 40% with optimized MongoDB queries",
                "Handles 10K+ requests with rate limiting and centralized exception handling",
                "Dockerized services with 50+ tested endpoints"
            ],
            github: "https://github.com/AyushPrakash414/journalApp"
        },
        {
            name: "Anomalous Sound Detection",
            tech: "Deep Learning, CNN, Signal Processing",
            description: "Machinery fault detection using spectrograms and CNN",
            highlights: [
                "Converted raw audio to Mel-spectrograms using STFT, MFCC",
                "Trained on 2000 spectrogram samples achieving 96% accuracy",
                "Reduced inference latency by 35% for real-time monitoring",
                "Complete pipeline: preprocessing → training → evaluation → deployment"
            ],
            github: "https://github.com/AyushPrakash414/Anomalous-Sound-Detection"
        },
        {
            name: "Potato Leaf Disease Classification",
            tech: "TensorFlow, CNN, Computer Vision",
            description: "CNN model for plant disease detection",
            highlights: [
                "85%+ accuracy classifying Early Blight, Late Blight, and Healthy leaves",
                "Trained on 3000+ images with augmentation techniques",
                "Improved F1-score by 12% through hyperparameter tuning"
            ],
            github: "https://github.com/AyushPrakash414/Minor-project"
        }
    ],
    achievements: [
        "🥈 Runner-up at Walmart Sparkathon (500+ teams nationwide)",
        "🏆 Winner of GeeksforGeeks Coding Contest (2000+ participants)",
        "🌟 Active Open Source Contributor - Thing Description ediTDor",
        "📚 Certifications: Deep Learning, AI Foundation"
    ],
    contact: {
        email: "prakashayush414@gmail.com",
        phone: "+91 9555978566",
        github: "https://github.com/AyushPrakash414",
        linkedin: "https://linkedin.com/in/ayush-prakash-tiwari-5281b2286/"
    }
};

// Easter Eggs
const easterEggs = {
    'sudo': 'Nice try! But you need root access. Try "sudo hire-me" instead 😉',
    'sudo hire-me': '🎉 Access granted! Contacting recruiters... Just kidding! But seriously, I\'m available for hire!',
    'coffee': '☕ Here\'s your coffee! *steam rises* Remember: Code + Coffee = Magic',
    'matrix': 'Entering the Matrix...',
    'hack': '🔐 Initiating hack sequence... Just kidding! I only hack code problems.',
    'whoami': 'You are the recruiter who\'s about to hire an amazing developer! 😎',
    'pwd': '/home/ayush/impressive-portfolio',
    'ls -la': 'drwxr-xr-x  skills/\ndrwxr-xr-x  projects/\ndrwxr-xr-x  experience/\n-rw-r--r--  resume.pdf\n-rw-r--r--  hire-me.txt',
    'cat hire-me.txt': '📄 Dear Recruiter,\n\nI\'m a passionate developer with expertise in ML, Backend Dev, and System Design.\nLet\'s build something amazing together!\n\n- Ayush',
    'fortune': 'Your fortune: "A great opportunity awaits in your inbox... mine!" 📧',
    'cowsay': ' _________________\n< Hire Ayush! 🐮 >\n -----------------\n        \\   ^__^\n         \\  (oo)\\_______\n            (__)\\       )\\/\\\n                ||----w |\n                ||     ||',
    'sl': '🚂 Choo choo! The opportunity train is leaving the station...'
};

// ============================================
// INITIALIZATION
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    initializeMatrixBackground();
    initializeBootSequence();
    initializeTerminal();
    initializeParticles();
    updateTime();
    setInterval(updateTime, 1000);
});

// ============================================
// MATRIX BACKGROUND
// ============================================

function initializeMatrixBackground() {
    const canvas = document.getElementById('matrix-bg');
    const ctx = canvas.getContext('2d');
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()';
    const fontSize = 14;
    const columns = canvas.width / fontSize;
    const drops = Array(Math.floor(columns)).fill(1);
    
    function drawMatrix() {
        ctx.fillStyle = 'rgba(10, 14, 39, 0.05)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        ctx.fillStyle = '#00fff9';
        ctx.font = fontSize + 'px monospace';
        
        drops.forEach((y, i) => {
            const char = chars[Math.floor(Math.random() * chars.length)];
            const x = i * fontSize;
            ctx.fillText(char, x, y * fontSize);
            
            if (y * fontSize > canvas.height && Math.random() > 0.975) {
                drops[i] = 0;
            }
            drops[i]++;
        });
    }
    
    setInterval(drawMatrix, 50);
    
    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
}

// ============================================
// BOOT SEQUENCE
// ============================================

function initializeBootSequence() {
    const bootScreen = document.getElementById('boot-screen');
    
    // Auto-start after boot logs complete
    setTimeout(() => {
        bootScreen.classList.remove('active');
        setTimeout(() => {
            document.getElementById('terminal-container').classList.remove('hidden');
            document.getElementById('terminal-input').focus();
        }, 500);
    }, 3000);
    
    // Allow manual start with Enter
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' && bootScreen.classList.contains('active')) {
            bootScreen.classList.remove('active');
            setTimeout(() => {
                document.getElementById('terminal-container').classList.remove('hidden');
                document.getElementById('terminal-input').focus();
            }, 500);
        }
    });
}

// ============================================
// TERMINAL INITIALIZATION
// ============================================

function initializeTerminal() {
    const input = document.getElementById('terminal-input');
    
    input.addEventListener('keydown', handleKeyDown);
    
    // Keep input focused
    document.addEventListener('click', () => {
        if (!window.getSelection().toString()) {
            input.focus();
        }
    });
    
    // Window controls
    document.querySelector('.btn-close').addEventListener('click', () => {
        if (confirm('Close terminal? You\'ll need to refresh the page.')) {
            document.getElementById('terminal-container').style.opacity = '0';
        }
    });
    
    document.querySelector('.btn-minimize').addEventListener('click', () => {
        const terminal = document.getElementById('terminal-container');
        terminal.style.transform = 'translate(-50%, -50%) scale(0.5)';
        terminal.style.opacity = '0.5';
        setTimeout(() => {
            terminal.style.transform = 'translate(-50%, -50%) scale(1)';
            terminal.style.opacity = '1';
        }, 300);
    });
}

// ============================================
// INPUT HANDLING
// ============================================

function handleKeyDown(e) {
    const input = e.target;
    
    if (e.key === 'Enter') {
        e.preventDefault();
        const command = input.value.trim();
        
        if (command) {
            commandHistory.push(command);
            historyIndex = commandHistory.length;
            executeCommand(command);
        }
        
        input.value = '';
    } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        if (historyIndex > 0) {
            historyIndex--;
            input.value = commandHistory[historyIndex];
        }
    } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        if (historyIndex < commandHistory.length - 1) {
            historyIndex++;
            input.value = commandHistory[historyIndex];
        } else {
            historyIndex = commandHistory.length;
            input.value = '';
        }
    } else if (e.key === 'Tab') {
        e.preventDefault();
        autoComplete(input);
    } else if (e.ctrlKey && e.key === 'l') {
        e.preventDefault();
        executeCommand('clear');
    }
}

// ============================================
// AUTO COMPLETE
// ============================================

function autoComplete(input) {
    const commands = ['help', 'about', 'skills', 'projects', 'experience', 'achievements', 
                     'contact', 'resume', 'clear', 'theme', 'history', 'github', 'linkedin'];
    const partial = input.value.toLowerCase();
    
    const matches = commands.filter(cmd => cmd.startsWith(partial));
    
    if (matches.length === 1) {
        input.value = matches[0];
    } else if (matches.length > 1) {
        printOutput(`<div class="info-value">Possible commands: ${matches.join(', ')}</div>`);
    }
}

// ============================================
// COMMAND EXECUTION
// ============================================

function executeCommand(command) {
    if (isProcessing) return;
    
    // Echo command
    printOutput(`<div class="command-echo">$ ${escapeHtml(command)}</div>`);
    
    const cmd = command.toLowerCase().trim();
    const args = command.split(' ').slice(1);
    
    // Check easter eggs first
    if (easterEggs[cmd] || easterEggs[command.toLowerCase()]) {
        const egg = easterEggs[cmd] || easterEggs[command.toLowerCase()];
        if (cmd === 'matrix') {
            triggerMatrixEffect();
        } else {
            printOutput(`<div class="success-text">${egg}</div>`);
        }
        return;
    }
    
    // Main commands
    switch (cmd) {
        case 'help':
            showHelp();
            break;
        case 'about':
            showAbout();
            break;
        case 'skills':
            showSkills();
            break;
        case 'projects':
            showProjects();
            break;
        case 'experience':
            showExperience();
            break;
        case 'achievements':
            showAchievements();
            break;
        case 'contact':
            showContact();
            break;
        case 'resume':
            showResume();
            break;
        case 'clear':
            clearTerminal();
            break;
        case 'theme':
            cycleTheme();
            break;
        case 'history':
            showHistory();
            break;
        case 'github':
            window.open(portfolioData.contact.github, '_blank');
            printOutput(`<div class="success-text">Opening GitHub profile...</div>`);
            break;
        case 'linkedin':
            window.open(portfolioData.contact.linkedin, '_blank');
            printOutput(`<div class="success-text">Opening LinkedIn profile...</div>`);
            break;
        default:
            printOutput(`<div class="error-text">Command not found: ${escapeHtml(cmd)}</div><div class="hint-text">Type 'help' to see available commands</div>`);
    }
    
    scrollToBottom();
}

// ============================================
// COMMAND IMPLEMENTATIONS
// ============================================

function showHelp() {
    const helpText = `
        <div class="section-title">📚 Available Commands</div>
        <div class="help-table">
            <div class="help-row">
                <div class="help-command">help</div>
                <div class="help-description">Display this help message</div>
            </div>
            <div class="help-row">
                <div class="help-command">about</div>
                <div class="help-description">Learn about me and my background</div>
            </div>
            <div class="help-row">
                <div class="help-command">skills</div>
                <div class="help-description">View my technical skills and expertise</div>
            </div>
            <div class="help-row">
                <div class="help-command">projects</div>
                <div class="help-description">Explore my featured projects</div>
            </div>
            <div class="help-row">
                <div class="help-command">experience</div>
                <div class="help-description">See my work experience</div>
            </div>
            <div class="help-row">
                <div class="help-command">achievements</div>
                <div class="help-description">View my achievements and awards</div>
            </div>
            <div class="help-row">
                <div class="help-command">contact</div>
                <div class="help-description">Get my contact information</div>
            </div>
            <div class="help-row">
                <div class="help-command">resume</div>
                <div class="help-description">Download my resume (PDF)</div>
            </div>
            <div class="help-row">
                <div class="help-command">github</div>
                <div class="help-description">Open my GitHub profile</div>
            </div>
            <div class="help-row">
                <div class="help-command">linkedin</div>
                <div class="help-description">Open my LinkedIn profile</div>
            </div>
            <div class="help-row">
                <div class="help-command">clear</div>
                <div class="help-description">Clear the terminal screen</div>
            </div>
            <div class="help-row">
                <div class="help-command">history</div>
                <div class="help-description">Show command history</div>
            </div>
        </div>
        <div class="hint-text" style="margin-top: 1rem;">
            💡 <span class="highlight">Pro tip:</span> Use Tab for auto-completion, ↑↓ for command history, Ctrl+L to clear
        </div>
        <div class="hint-text">
            🎮 <span class="highlight">Try some easter eggs:</span> sudo, coffee, matrix, whoami, cowsay
        </div>
    `;
    printOutput(helpText);
}

function showAbout() {
    const about = portfolioData.about;
    const output = `
        <div class="section-title">👨‍💻 About Me</div>
        <div class="info-grid">
            <div class="info-label">Name:</div>
            <div class="info-value">${about.name}</div>
            <div class="info-label">Location:</div>
            <div class="info-value">${about.location}</div>
            <div class="info-label">Education:</div>
            <div class="info-value">${about.university}</div>
            <div class="info-label">Degree:</div>
            <div class="info-value">${about.degree}</div>
            
            <div class="info-label">Period:</div>
            <div class="info-value">${about.years}</div>
        </div>
        <div class="output-line" style="margin-top: 1rem;">
            <div class="info-value">${about.bio}</div>
        </div>
    `;
    printOutput(output);
}

function showSkills() {
    let output = '<div class="section-title">🛠️ Technical Skills</div>';
    
    const skillLevels = {
        "Languages": 90,
        "Backend": 85,
        "ML/AI": 88,
        "Databases": 82,
        "DevOps": 80,
        "Core": 92
    };
    
    for (const [category, skills] of Object.entries(portfolioData.skills)) {
        output += `
            <div class="skill-bar-container">
                <div class="skill-name">${category}</div>
                <div class="info-value">${skills.join(', ')}</div>
                <div class="skill-bar">
                    <div class="skill-fill" style="--skill-width: ${skillLevels[category]}%"></div>
                </div>
            </div>
        `;
    }
    
    printOutput(output);
}

function showProjects() {
    let output = '<div class="section-title">💻 Featured Projects</div>';
    
    portfolioData.projects.forEach((project, index) => {
        output += `
            <div class="project-card">
                <div class="project-title">${index + 1}. ${project.name}</div>
                <div class="project-tech">🔧 ${project.tech}</div>
                <div class="project-description">${project.description}</div>
                <div style="margin-top: 0.8rem;">
                    ${project.highlights.map(h => `<div class="info-value">• ${h}</div>`).join('')}
                </div>
                <div style="margin-top: 1rem;">
                    <a href="${project.github}" target="_blank" class="project-link">
                        🔗 View on GitHub →
                    </a>
                </div>
            </div>
        `;
    });
    
    printOutput(output);
}

function showExperience() {
    let output = '<div class="section-title">💼 Work Experience</div>';
    
    portfolioData.experience.forEach(exp => {
        output += `
            <div class="subsection-title">${exp.role}</div>
            <div class="info-grid">
                <div class="info-label">Company:</div>
                <div class="info-value">${exp.company}</div>
                <div class="info-label">Period:</div>
                <div class="info-value">${exp.period}</div>
            </div>
            <div style="margin-top: 0.8rem;">
                ${exp.highlights.map(h => `<div class="info-value">• ${h}</div>`).join('')}
            </div>
        `;
    });
    
    printOutput(output);
}

function showAchievements() {
    let output = '<div class="section-title">🏆 Achievements & Recognition</div>';
    
    portfolioData.achievements.forEach(achievement => {
        output += `<div class="achievement-item">${achievement}</div>`;
    });
    
    printOutput(output);
}

function showContact() {
    const contact = portfolioData.contact;
    const output = `
        <div class="section-title">📬 Contact Information</div>
        <div class="info-grid">
            <div class="info-label">Email:</div>
            <div class="info-value">${contact.email}</div>
            <div class="info-label">Phone:</div>
            <div class="info-value">${contact.phone}</div>
        </div>
        <div class="contact-links">
            <a href="mailto:${contact.email}" class="contact-link">
                📧 Send Email
            </a>
            <a href="${contact.github}" target="_blank" class="contact-link">
                🐙 GitHub
            </a>
            <a href="${contact.linkedin}" target="_blank" class="contact-link">
                💼 LinkedIn
            </a>
        </div>
    `;
    printOutput(output);
}

function showResume() {
    const output = `
        <div class="section-title">📄 Resume</div>
        <div class="info-value">
            My complete resume is available in LaTeX format. You can find all the details about my education, 
            experience, projects, and skills in the source file.
        </div>
        <div class="contact-links" style="margin-top: 1rem;">
            <a href="${portfolioData.contact.github}" target="_blank" class="contact-link">
                📥 View on GitHub
            </a>
        </div>
        <div class="hint-text" style="margin-top: 1rem;">
            💡 <span class="highlight">Tip:</span> Use the 'about', 'skills', 'projects', and 'experience' commands 
            to explore specific sections interactively!
        </div>
    `;
    printOutput(output);
}

function showHistory() {
    if (commandHistory.length === 0) {
        printOutput('<div class="info-value">No commands in history yet.</div>');
        return;
    }
    
    let output = '<div class="section-title">📜 Command History</div>';
    commandHistory.forEach((cmd, index) => {
        output += `<div class="info-value">${index + 1}. ${escapeHtml(cmd)}</div>`;
    });
    printOutput(output);
}

function clearTerminal() {
    const output = document.getElementById('terminal-output');
    output.innerHTML = '';
}

function cycleTheme() {
    printOutput('<div class="success-text">Theme cycling feature coming soon! Stay tuned... 🎨</div>');
}

// ============================================
// EASTER EGGS
// ============================================

function triggerMatrixEffect() {
    const output = document.getElementById('terminal-output');
    
    printOutput('<div class="success-text matrix-rain">Entering the Matrix...</div>');
    
    const chars = '01';
    for (let i = 0; i < 50; i++) {
        setTimeout(() => {
            let line = '';
            for (let j = 0; j < 80; j++) {
                line += chars[Math.floor(Math.random() * chars.length)];
            }
            const div = document.createElement('div');
            div.className = 'success-text';
            div.style.opacity = '0.3';
            div.textContent = line;
            output.appendChild(div);
            scrollToBottom();
        }, i * 50);
    }
    
    setTimeout(() => {
        printOutput('<div class="info-value">You\'ve seen the code. Now let\'s build something together! 💚</div>');
    }, 2600);
}

// ============================================
// UTILITIES
// ============================================

function printOutput(html) {
    const output = document.getElementById('terminal-output');
    const div = document.createElement('div');
    div.className = 'output-line';
    div.innerHTML = html;
    output.appendChild(div);
}

function scrollToBottom() {
    const output = document.getElementById('terminal-output');
    output.scrollTop = output.scrollHeight;
}

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

function updateTime() {
    const now = new Date();
    const timeString = now.toLocaleTimeString('en-US', { 
        hour12: false, 
        hour: '2-digit', 
        minute: '2-digit' 
    });
    const dateString = now.toLocaleDateString('en-US', { 
        month: 'short', 
        day: 'numeric' 
    });
    document.getElementById('time-display').textContent = `${dateString} ${timeString}`;
}

// ============================================
// FLOATING PARTICLES
// ============================================

function initializeParticles() {
    const container = document.querySelector('.code-particles');
    const symbols = ['<', '>', '{', '}', '[', ']', '(', ')', ';', '/', '*', '$', '#', '@'];
    
    for (let i = 0; i < 20; i++) {
        setTimeout(() => {
            const particle = document.createElement('div');
            particle.className = 'particle';
            particle.textContent = symbols[Math.floor(Math.random() * symbols.length)];
            particle.style.left = Math.random() * 100 + '%';
            particle.style.animationDuration = (Math.random() * 10 + 15) + 's';
            particle.style.animationDelay = Math.random() * 5 + 's';
            container.appendChild(particle);
        }, i * 300);
    }
}

// ============================================
// KEYBOARD SHORTCUTS
// ============================================

document.addEventListener('keydown', (e) => {
    // Ctrl+K to focus input
    if (e.ctrlKey && e.key === 'k') {
        e.preventDefault();
        document.getElementById('terminal-input').focus();
    }
});

// Prevent context menu for more app-like feel
document.addEventListener('contextmenu', (e) => {
    if (e.target.tagName !== 'A') {
        e.preventDefault();
    }
});
