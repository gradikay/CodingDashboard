// Vibe Coding Dashboard JavaScript

// Checklist data
const checklistData = [
    {
        id: 1,
        title: "Create GitHub Account",
        description: "Set up your GitHub account to store and manage your code repositories. GitHub is essential for version control and collaboration in software development.",
        affiliateLink: "https://github.com",
        linkText: "Sign up for GitHub →",
        hasScreenshots: true,
        screenshots: [
            {
                title: "Step 1: Click Sign up",
                description: "Go to GitHub.com and click the 'Sign up' button in the top right corner",
                image: "attached_assets/github-1-signup_1751565143888.png"
            },
            {
                title: "Step 2: Fill out the form",
                description: "Enter your email, create a strong password, choose a username, and select your country",
                image: "attached_assets/github-2-signup_1751566338107.png"
            },
            {
                title: "Step 3: Complete the form",
                description: "Make sure all fields are filled correctly with valid information, then click 'Continue'",
                image: "attached_assets/github-3-signup_1751566338108.png"
            },
            {
                title: "Step 4: Welcome to GitHub!",
                description: "Once logged in, you'll see your dashboard where you can create repositories and start coding",
                image: "attached_assets/github-4-loggedin_1751566338108.png"
            }
        ]
    },
    {
        id: 2,
        title: "Connect GitHub to Replit",
        description: "Link your GitHub account to Replit for seamless code editing and deployment. This integration allows you to work on your projects from anywhere.",
        affiliateLink: "https://replit.com",
        linkText: "Connect on Replit →"
    },
    {
        id: 3,
        title: "Build your first static website",
        description: "Create a simple HTML, CSS, and JavaScript website. Start with a basic portfolio or landing page to practice your front-end development skills.",
        affiliateLink: "https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web",
        linkText: "Learn web development →"
    },
    {
        id: 4,
        title: "Push the code to GitHub",
        description: "Upload your website code to a GitHub repository. Learn the basics of Git commands like add, commit, and push to manage your code versions.",
        affiliateLink: "https://docs.github.com/en/get-started/using-git",
        linkText: "Learn Git & GitHub →"
    },
    {
        id: 5,
        title: "Buy a cheap domain from GoDaddy",
        description: "Purchase an affordable domain name for your website. A custom domain makes your site look professional and helps with branding.",
        affiliateLink: "https://godaddy.com",
        linkText: "Buy domain on GoDaddy →"
    },
    {
        id: 6,
        title: "Connect domain to GitHub Pages",
        description: "Set up GitHub Pages to host your website and connect your custom domain. This gives you free hosting with automatic deployments from your repository.",
        affiliateLink: "https://docs.github.com/en/pages",
        linkText: "Setup GitHub Pages →"
    },
    {
        id: 7,
        title: "Celebrate!",
        description: "Congratulations! You've successfully deployed your first website with a custom domain. Share your achievement and start planning your next project!",
        affiliateLink: "https://twitter.com/intent/tweet?text=I%20just%20deployed%20my%20first%20website!%20%F0%9F%9A%80",
        linkText: "Share your success →"
    }
];

// DOM elements
const checklistContainer = document.getElementById('checklist-container');
const progressBar = document.getElementById('progress-bar');
const progressText = document.getElementById('progress-text');
const celebration = document.getElementById('celebration');

// Load progress from localStorage
function loadProgress() {
    const saved = localStorage.getItem('vibecodingProgress');
    return saved ? JSON.parse(saved) : {};
}

// Save progress to localStorage
function saveProgress(progress) {
    localStorage.setItem('vibecodingProgress', JSON.stringify(progress));
}

// Update progress bar and text
function updateProgress() {
    const progress = loadProgress();
    const completedCount = Object.values(progress).filter(Boolean).length;
    const totalCount = checklistData.length;
    const percentage = (completedCount / totalCount) * 100;
    
    progressBar.style.width = `${percentage}%`;
    progressText.textContent = `${completedCount}/${totalCount} completed`;
    
    // Show celebration if all items are completed
    if (completedCount === totalCount) {
        celebration.classList.remove('hidden');
        celebration.scrollIntoView({ behavior: 'smooth', block: 'center' });
    } else {
        celebration.classList.add('hidden');
    }
}

// Toggle checklist item
function toggleChecklistItem(id) {
    const progress = loadProgress();
    progress[id] = !progress[id];
    saveProgress(progress);
    
    const checkbox = document.getElementById(`checkbox-${id}`);
    const item = document.getElementById(`item-${id}`);
    
    checkbox.checked = progress[id];
    
    if (progress[id]) {
        item.classList.add('completed');
        // Add a small celebration animation
        item.style.transform = 'scale(1.02)';
        setTimeout(() => {
            item.style.transform = 'scale(1)';
        }, 200);
    } else {
        item.classList.remove('completed');
    }
    
    updateProgress();
}

// Toggle item expansion
function toggleExpansion(id) {
    const content = document.getElementById(`content-${id}`);
    const isExpanded = content.classList.contains('expanded');
    
    // Close all other expanded items
    document.querySelectorAll('.checklist-content').forEach(el => {
        if (el !== content) {
            el.classList.remove('expanded');
        }
    });
    
    // Toggle current item
    if (isExpanded) {
        content.classList.remove('expanded');
    } else {
        content.classList.add('expanded');
    }
}

// Reset all progress
function resetProgress() {
    if (confirm('Are you sure you want to reset all progress? This cannot be undone.')) {
        localStorage.removeItem('vibecodingProgress');
        renderChecklist();
        updateProgress();
    }
}

// Render checklist items
function renderChecklist() {
    const progress = loadProgress();
    
    checklistContainer.innerHTML = checklistData.map(item => `
        <div id="item-${item.id}" class="checklist-item ${progress[item.id] ? 'completed' : ''}">
            <div class="p-6 cursor-pointer" onclick="toggleExpansion(${item.id})">
                <div class="flex items-center space-x-4">
                    <div class="step-number w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold font-mono">
                        ${item.id}
                    </div>
                    <div class="flex-1">
                        <h3 class="text-lg font-semibold text-vibe-text">${item.title}</h3>
                    </div>
                    <div class="flex items-center space-x-3">
                        <input 
                            type="checkbox" 
                            id="checkbox-${item.id}"
                            class="custom-checkbox"
                            ${progress[item.id] ? 'checked' : ''}
                            onclick="event.stopPropagation(); toggleChecklistItem(${item.id})"
                        >
                        <svg class="w-5 h-5 text-gray-400 transition-transform duration-300 expand-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                        </svg>
                    </div>
                </div>
            </div>
            
            <div id="content-${item.id}" class="checklist-content px-6 pb-6">
                <div class="mt-4 pt-4 border-t border-white/10">
                    <p class="text-gray-300 mb-4 leading-relaxed">${item.description}</p>
                    
                    ${item.hasScreenshots ? `
                        <div class="mb-6">
                            <h4 class="text-lg font-semibold text-vibe-purple mb-4">Step-by-Step Guide:</h4>
                            <div class="space-y-4">
                                ${item.screenshots.map(screenshot => `
                                    <div class="bg-gradient-to-r from-vibe-card/20 to-purple-900/20 rounded-lg p-4 border border-white/5">
                                        <div class="flex flex-col md:flex-row gap-4">
                                            <div class="md:w-2/3">
                                                <img src="${screenshot.image}" alt="${screenshot.title}" 
                                                     class="w-full rounded-lg border border-white/10 hover:border-vibe-purple/30 transition-all duration-300 cursor-pointer screenshot-image"
                                                     onclick="openScreenshotModal('${screenshot.image}', '${screenshot.title}')">
                                            </div>
                                            <div class="md:w-1/3 flex flex-col justify-center">
                                                <h5 class="font-semibold text-vibe-text mb-2">${screenshot.title}</h5>
                                                <p class="text-sm text-gray-400">${screenshot.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                    ` : ''}
                    
                    <a href="${item.affiliateLink}" target="_blank" rel="noopener noreferrer" 
                       class="inline-flex items-center px-4 py-2 bg-gradient-to-r from-vibe-purple to-vibe-pink rounded-lg text-white font-medium hover:shadow-lg transition-all duration-300 hover:scale-105 vibe-button">
                        ${item.linkText}
                        <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    `).join('');
    
    // Add rotation animation to expand icons
    document.querySelectorAll('.checklist-item').forEach((item, index) => {
        const expandIcon = item.querySelector('.expand-icon');
        const content = item.querySelector('.checklist-content');
        
        item.addEventListener('click', (e) => {
            if (e.target.type === 'checkbox') return;
            
            const isExpanded = content.classList.contains('expanded');
            expandIcon.style.transform = isExpanded ? 'rotate(0deg)' : 'rotate(180deg)';
        });
    });
}

// Add some interactive effects
function addInteractiveEffects() {
    // Add hover effects to checklist items
    document.addEventListener('mouseover', (e) => {
        if (e.target.closest('.checklist-item')) {
            const item = e.target.closest('.checklist-item');
            item.style.transform = 'translateY(-2px)';
        }
    });
    
    document.addEventListener('mouseout', (e) => {
        if (e.target.closest('.checklist-item')) {
            const item = e.target.closest('.checklist-item');
            item.style.transform = 'translateY(0)';
        }
    });
    
    // Add click animation to buttons
    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('vibe-button') || e.target.closest('.vibe-button')) {
            const button = e.target.classList.contains('vibe-button') ? e.target : e.target.closest('.vibe-button');
            button.style.transform = 'scale(0.95)';
            setTimeout(() => {
                button.style.transform = 'scale(1)';
            }, 150);
        }
    });
}

// Initialize the application
function init() {
    renderChecklist();
    updateProgress();
    addInteractiveEffects();
    
    // Add a welcome animation
    setTimeout(() => {
        document.querySelectorAll('.checklist-item').forEach((item, index) => {
            setTimeout(() => {
                item.style.opacity = '0';
                item.style.transform = 'translateY(20px)';
                item.style.transition = 'all 0.5s ease';
                
                setTimeout(() => {
                    item.style.opacity = '1';
                    item.style.transform = 'translateY(0)';
                }, 100);
            }, index * 100);
        });
    }, 500);
}

// Start the application when DOM is loaded
document.addEventListener('DOMContentLoaded', init);

// Add keyboard navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        // Close modal if open
        const modal = document.getElementById('screenshot-modal');
        if (modal && !modal.classList.contains('hidden')) {
            closeScreenshotModal();
            return;
        }
        
        // Close all expanded items
        document.querySelectorAll('.checklist-content').forEach(el => {
            el.classList.remove('expanded');
        });
        document.querySelectorAll('.expand-icon').forEach(icon => {
            icon.style.transform = 'rotate(0deg)';
        });
    }
});

// Add smooth scrolling for better UX
function smoothScrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Screenshot modal functionality
function openScreenshotModal(imageSrc, title) {
    const modal = document.getElementById('screenshot-modal');
    const modalImage = document.getElementById('modal-image');
    const modalTitle = document.getElementById('modal-title');
    
    modalImage.src = imageSrc;
    modalTitle.textContent = title;
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
    
    // Add click outside to close
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeScreenshotModal();
        }
    });
}

function closeScreenshotModal() {
    const modal = document.getElementById('screenshot-modal');
    modal.classList.add('hidden');
    document.body.style.overflow = 'auto';
}

// Expose functions globally
window.resetProgress = resetProgress;
window.openScreenshotModal = openScreenshotModal;
window.closeScreenshotModal = closeScreenshotModal;
