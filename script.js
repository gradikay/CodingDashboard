// Web Development Course Dashboard JavaScript

// Achievement system data
const achievements = [
    {
        id: 'first_step',
        title: 'Getting Started',
        description: 'Complete your first step',
        icon: '🌟',
        condition: (progress) => Object.values(progress).filter(Boolean).length >= 1,
        rarity: 'common'
    },
    {
        id: 'github_master',
        title: 'GitHub Master',
        description: 'Complete GitHub account setup',
        icon: '🐙',
        condition: (progress) => progress[1] === true,
        rarity: 'common'
    },
    {
        id: 'integration_expert',
        title: 'Integration Expert',
        description: 'Connect GitHub to Replit successfully',
        icon: '🔗',
        condition: (progress) => progress[2] === true,
        rarity: 'uncommon'
    },
    {
        id: 'deployment_pro',
        title: 'Deployment Pro',
        description: 'Set up GitHub Pages deployment',
        icon: '🚀',
        condition: (progress) => progress[3] === true,
        rarity: 'uncommon'
    },
    {
        id: 'domain_wizard',
        title: 'Domain Wizard',
        description: 'Successfully connect custom domain',
        icon: '🧙‍♂️',
        condition: (progress) => progress[4] === true,
        rarity: 'rare'
    },
    {
        id: 'course_champion',
        title: 'Course Champion',
        description: 'Complete the entire course',
        icon: '🏆',
        condition: (progress) => Object.values(progress).filter(Boolean).length === 5,
        rarity: 'legendary'
    },
    {
        id: 'speed_runner',
        title: 'Speed Runner',
        description: 'Complete 3 steps in one session',
        icon: '⚡',
        condition: (progress, sessionProgress) => sessionProgress >= 3,
        rarity: 'rare'
    },
    {
        id: 'perfectionist',
        title: 'Perfectionist',
        description: 'Complete all steps without unchecking any',
        icon: '💎',
        condition: (progress, sessionProgress, perfectRun) => perfectRun && Object.values(progress).filter(Boolean).length === 5,
        rarity: 'legendary'
    }
];

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
        affiliateLink: "https://replit.com/refer/kgradi",
        linkText: "Connect on Replit →",
        hasScreenshots: true,
        screenshots: [
            {
                title: "Step 1: Go to Replit and Sign Up",
                description: "Visit replit.com and click the 'Sign up' button in the top right corner",
                image: "attached_assets/replit-1-signup_1751575224716.png"
            },
            {
                title: "Step 2: Choose GitHub Sign-up",
                description: "Select 'Continue with GitHub' to link your GitHub account with Replit",
                image: "attached_assets/replit-2-signup-with-github_1751575224718.png"
            },
            {
                title: "Step 3: Authorize Replit",
                description: "GitHub will ask for permission to connect to Replit. Click 'Authorize Replit' to continue",
                image: "attached_assets/replit-3-sginup-github-permission_1751575224719.png"
            },
            {
                title: "Step 4: Verify Your Email",
                description: "Check your email and click the verification link to confirm your account",
                image: "attached_assets/replit-4-signup-verification_1751575224719.png"
            },
            {
                title: "Step 5: Complete Your Profile",
                description: "Fill in your first name, last name, and choose how you plan to use Replit",
                image: "attached_assets/replit-5-loggedin-empty-field_1751575224719.png"
            },
            {
                title: "Step 6: Finish Setup",
                description: "Complete all the fields and click 'Continue' to finish setting up your Replit account",
                image: "attached_assets/replit-5-loggedin-field-completed_1751575224719.png"
            },
            {
                title: "Step 7: Choose Free Plan",
                description: "Select the 'Starter' free plan and click 'Continue with Starter' to proceed without payment",
                image: "attached_assets/replit-6-starter-plan_1751577736529.png"
            },
            {
                title: "Step 8: Enter Project Prompt",
                description: "⚠️ IMPORTANT: Type this exact prompt to ensure you get a static website (HTML/CSS/JS only): 'Create a mobile-first landing page with animated touch effects, floating elements, and a glowing CTA button—all using pure HTML, CSS, and JS. No frameworks, no libraries, no python files. Just magic.' The specificity is crucial - if you ask for something generic, Replit might create a Python/Node.js project instead of a static site! Then click 'Start chat'",
                image: "attached_assets/replit-7-type-your-prompt_1751577736529.png"
            },
            {
                title: "Step 9: Review Plan Features",
                description: "You can click 'Show more features' to see additional options, but don't select them - you can add features later",
                image: "attached_assets/replit-8-approve-plan_1751577736530.png"
            },
            {
                title: "Step 10: Scroll Through Features",
                description: "Scroll down to see all available features, but keep the basic plan for now",
                image: "attached_assets/replit-8-approve-plan-2_1751577736530.png"
            },
            {
                title: "Step 11: Approve and Start",
                description: "Review the plan and click 'Approve plan & start' to begin creating your project",
                image: "attached_assets/replit-8-approve-plan-3_1751577736530.png"
            },
            {
                title: "Step 12: Agent Working",
                description: "Wait for the AI agent to create your project files. This may take a few minutes",
                image: "attached_assets/replit-9-agent-working_1751577736530.png"
            },
            {
                title: "Step 13: Verify Project Files",
                description: "Check that your project contains only HTML, CSS, and JS files. The replit.md and .git folder are fine for deployment",
                image: "attached_assets/replit-10-check-files_1751577736531.png"
            },
            {
                title: "Step 14: Open Git Tools",
                description: "Click the Tools menu (4 squares icon) and find the 'Git' tool to connect your project to GitHub",
                image: "attached_assets/replit-11-search-git-tool_1751577736531.png"
            },
            {
                title: "Step 15: Access Git Settings",
                description: "In the Git tab, click on 'Settings view' to configure your GitHub connection",
                image: "attached_assets/replit-12-connect-github_1751577736531.png"
            },
            {
                title: "Step 16: Connect to GitHub",
                description: "Click 'Connect to GitHub' to initialize your GitHub connection and link your project",
                image: "attached_assets/replit-13-connect-to-github_1751577736532.png"
            },
            {
                title: "Step 17: Install & Authorize Replit",
                description: "Install and authorize the Replit GitHub app with the required permissions. Click 'Install & Authorize' to proceed",
                image: "attached_assets/replit-14-install-authorize-github_1751581593497.png"
            },
            {
                title: "Step 18: Back to Settings",
                description: "If the 'Create Repository' button doesn't work, refresh the page or use the 'Settings' link at the top to return to the previous page",
                image: "attached_assets/replit-15-back-to-settings_1751581593497.png"
            },
            {
                title: "Step 19: Refresh & Click Settings",
                description: "Refresh the page and click on the 'Settings view' again to access the GitHub repository creation options",
                image: "attached_assets/replit-16-refresh-page-then-click-settings-view_1751581593497.png"
            },
            {
                title: "Step 20: Create Repository",
                description: "Enter a repository name and description. Make sure to select 'Public' for your Git repository, then click 'Create Repository on GitHub'",
                image: "attached_assets/replit-17-create-repository_1751581593498.png"
            },
            {
                title: "Step 21: Get Remote URL",
                description: "You should see a remote URL appear. If not, refresh the page and click 'Create Repository on GitHub' again",
                image: "attached_assets/replit-18-create-remote-repository_1751585314023.png"
            },
            {
                title: "Step 22: Push Branch",
                description: "Click the 'Push branch as origin/main' button to upload your code to the GitHub repository",
                image: "attached_assets/replit-19-push-branch_1751581593498.png"
            },
            {
                title: "Step 23: Confirm Session",
                description: "When prompted, click 'Confirm for this session' to authenticate and push your code to GitHub",
                image: "attached_assets/replit-20-confirm-session_1751581593498.png"
            },
            {
                title: "Step 24: Success - Files Committed",
                description: "Your files have been successfully committed to GitHub! You can see the remote updates and sync status",
                image: "attached_assets/replit-21-githup-push-success_1751581593498.png"
            }
        ]
    },
    {
        id: 3,
        title: "Setup GitHub Pages deployment",
        description: "Configure GitHub Pages to host your website for free. This will make your site live on the internet with automatic deployments.",
        affiliateLink: "https://docs.github.com/en/pages",
        linkText: "Learn about GitHub Pages →",
        hasScreenshots: true,
        screenshots: [
            {
                title: "Step 1: GitHub Account Overview",
                description: "Navigate to your GitHub dashboard where you can see your repositories and account overview",
                image: "attached_assets/github-5-account_1751585153119.png"
            },
            {
                title: "Step 2: Find Your Repository",
                description: "Look for the repository created from Replit in your 'Top repositories' section and click on it",
                image: "attached_assets/github-6-repository-created-from-replit-19_1751585153119.png"
            },
            {
                title: "Step 3: Repository Overview",
                description: "You're now in the repository created from Replit. You can see all your website files here",
                image: "attached_assets/github-7-repository-overview_1751585153119.png"
            },
            {
                title: "Step 4: Access Settings",
                description: "Click on the 'Settings' tab at the top of the repository to access configuration options",
                image: "attached_assets/github-8-settings_1751585153119.png"
            },
            {
                title: "Step 5: Find Pages Section",
                description: "In the left sidebar, scroll down and click on 'Pages' to access GitHub Pages settings",
                image: "attached_assets/github-9-pages_1751585153120.png"
            },
            {
                title: "Step 6: Deploy from Branch",
                description: "Click on 'Deploy from a branch' to set up automatic deployment from your main branch",
                image: "attached_assets/github-10-branch_1751585153120.png"
            },
            {
                title: "Step 7: Select Main Branch",
                description: "Click where it says 'None' for branch and select 'main' from the dropdown menu",
                image: "attached_assets/github-11-select-branch_1751585153120.png"
            },
            {
                title: "Step 8: Select Root Folder",
                description: "Make sure to select '/ (root)' as the folder to deploy from, then the settings will be ready",
                image: "attached_assets/github-12-select-root_1751585153120.png"
            },
            {
                title: "Step 9: Save Configuration & Note Your Domain",
                description: "Verify that branch is set to 'main' and folder is set to '/ (root)', then click 'Save' to enable GitHub Pages. Remember your default GitHub domain shown in the custom domain section - it will be something like 'yourusername.github.io' - you'll need this for the next steps!",
                image: "attached_assets/github-13-branch-all-set_1751590509147.png"
            }
        ]
    },
    {
        id: 4,
        title: "Connect domain to GitHub Pages",
        description: "Link your custom domain to your GitHub Pages site so visitors can access your website using your domain name. This guide shows you how to set up DNS records in GoDaddy and configure GitHub Pages.",
        affiliateLink: "https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site",
        linkText: "Learn about custom domains →",
        hasScreenshots: true,
        screenshots: [
            {
                title: "Step 1: Navigate to My Products",
                description: "In your GoDaddy dashboard, click on your account menu and select 'My Products' to see all your domains",
                image: "attached_assets/godaddy-1-account-my-products_1751591866558.png"
            },
            {
                title: "Step 2: Select Your Domain",
                description: "Choose the domain you want to connect to your GitHub Pages website from your list of domains",
                image: "attached_assets/goddady-2-pick-domain-for-github_1751591866559.png"
            },
            {
                title: "Step 3: Access Domain Settings",
                description: "In your domain dashboard, click on 'Domain' from the left sidebar menu to access domain management options",
                image: "attached_assets/godaddy-3-domain_1751591866559.png"
            },
            {
                title: "Step 4: Go to DNS Settings",
                description: "Click on the 'DNS' tab to access DNS record management where you'll configure your domain to point to GitHub Pages",
                image: "attached_assets/godaddy-4-dns_1751591866559.png"
            },
            {
                title: "Step 5: Add New DNS Records",
                description: "On the DNS Records page, click the 'Add New Record' button to start adding the required DNS records for GitHub Pages",
                image: "attached_assets/godaddy-5-add-new-record_1751591866559.png"
            },
            {
                title: "Step 6: Create Four A Records",
                description: "Create four A records with Name '@', TTL '1 Hour', and these GitHub IP addresses: 185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153",
                image: "attached_assets/goddady-6-records_1751591866559.png"
            },
            {
                title: "Step 7: Add CNAME Record for WWW",
                description: "Create one CNAME record with Name 'www', Value as your GitHub domain (like 'yourusername.github.io'), and TTL '1 Hour'",
                image: "attached_assets/goddady-7-cname-www_1751591866560.png"
            },
            {
                title: "Step 8: Configure GitHub Custom Domain",
                description: "Back in GitHub Pages settings, enter your domain name (without www) in the custom domain field and make sure 'Enforce HTTPS' is checked, then click Save",
                image: "attached_assets/godaddy-8-github-custom-domain_1751591866560.png"
            },
            {
                title: "Step 9: Verify DNS Configuration",
                description: "If DNS is set up correctly, you'll see 'DNS check successful' in GitHub. This may take a few minutes to propagate - be patient!",
                image: "attached_assets/goddady-9-github-dns-check_1751591866560.png"
            }
        ]
    },
    {
        id: 5,
        title: "Celebrate! 🎉",
        description: "Congratulations! You've successfully created and deployed your first website with a custom domain. Your site is now live on the internet for everyone to see!",
        affiliateLink: "https://developer.mozilla.org/en-US/docs/Learn",
        linkText: "Continue learning web development →"
    }
];

// DOM elements
const checklistContainer = document.getElementById('checklist-container');
const progressBar = document.getElementById('progress-bar');
const progressText = document.getElementById('progress-text');
const celebration = document.getElementById('celebration');

// Achievement tracking variables
let sessionProgress = 0;
let perfectRun = true;
let sessionStartTime = Date.now();

// Achievement system functions
function loadAchievements() {
    const saved = localStorage.getItem('courseAchievements');
    return saved ? JSON.parse(saved) : [];
}

function saveAchievements(earnedAchievements) {
    localStorage.setItem('courseAchievements', JSON.stringify(earnedAchievements));
}

function checkAchievements() {
    const progress = loadProgress();
    const earnedAchievements = loadAchievements();
    const newAchievements = [];
    
    achievements.forEach(achievement => {
        if (!earnedAchievements.includes(achievement.id)) {
            if (achievement.condition(progress, sessionProgress, perfectRun)) {
                earnedAchievements.push(achievement.id);
                newAchievements.push(achievement);
            }
        }
    });
    
    if (newAchievements.length > 0) {
        saveAchievements(earnedAchievements);
        showAchievementNotification(newAchievements);
        updateAchievementDisplay();
    }
}

function showAchievementNotification(newAchievements) {
    newAchievements.forEach((achievement, index) => {
        setTimeout(() => {
            const notification = document.createElement('div');
            notification.className = 'achievement-notification fixed top-4 right-4 z-50 bg-card-bg border-2 border-primary-blue rounded-lg p-4 shadow-2xl transform translate-x-full transition-all duration-500';
            notification.innerHTML = `
                <div class="flex items-center space-x-3">
                    <div class="text-3xl achievement-icon">${achievement.icon}</div>
                    <div>
                        <div class="font-bold text-text-primary">Achievement Unlocked!</div>
                        <div class="text-sm text-primary-blue font-semibold">${achievement.title}</div>
                        <div class="text-xs text-text-secondary">${achievement.description}</div>
                    </div>
                    <div class="achievement-rarity-badge text-white text-xs px-2 py-1 rounded" style="background-color: ${getRarityColor(achievement.rarity)}">${achievement.rarity.toUpperCase()}</div>
                </div>
            `;
            
            document.body.appendChild(notification);
            
            // Special effects for legendary achievements
            if (achievement.rarity === 'legendary') {
                createConfetti();
            }
            
            // Animate in
            setTimeout(() => {
                notification.classList.remove('translate-x-full');
            }, 100);
            
            // Animate out and remove
            setTimeout(() => {
                notification.classList.add('translate-x-full');
                setTimeout(() => {
                    if (notification.parentNode) {
                        notification.parentNode.removeChild(notification);
                    }
                }, 500);
            }, 4000);
        }, index * 1000);
    });
}

function createConfetti() {
    for (let i = 0; i < 50; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            confetti.className = 'confetti-piece';
            confetti.style.left = Math.random() * window.innerWidth + 'px';
            confetti.style.background = ['#2563EB', '#059669', '#DC2626', '#7C3AED', '#EA580C'][Math.floor(Math.random() * 5)];
            confetti.style.animationDelay = Math.random() * 2 + 's';
            confetti.style.animationDuration = (Math.random() * 2 + 2) + 's';
            
            document.body.appendChild(confetti);
            
            setTimeout(() => {
                if (confetti.parentNode) {
                    confetti.parentNode.removeChild(confetti);
                }
            }, 4000);
        }, i * 50);
    }
}

function getRarityColor(rarity) {
    switch (rarity) {
        case 'common': return '#6B7280';
        case 'uncommon': return '#10B981';
        case 'rare': return '#3B82F6';
        case 'legendary': return '#F59E0B';
        default: return '#6B7280';
    }
}

function updateAchievementDisplay() {
    const earnedAchievements = loadAchievements();
    const achievementContainer = document.getElementById('achievement-container');
    
    if (achievementContainer) {
        achievementContainer.innerHTML = achievements.map(achievement => {
            const isEarned = earnedAchievements.includes(achievement.id);
            const rarityColor = getRarityColor(achievement.rarity);
            return `
                <div class="achievement-badge ${isEarned ? 'earned' : 'locked'} relative group cursor-pointer">
                    <div class="w-16 h-16 rounded-full border-2 flex items-center justify-center text-2xl transition-all duration-300 ${
                        isEarned 
                            ? '' 
                            : 'border-gray-300 bg-gray-100 grayscale'
                    }" ${isEarned ? `style="border-color: ${rarityColor}; background-color: ${rarityColor}20;"` : ''}>
                        ${achievement.icon}
                    </div>
                    <div class="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:block">
                        <div class="bg-gray-800 text-white text-xs rounded py-1 px-2 whitespace-nowrap">
                            <div class="font-semibold">${achievement.title}</div>
                            <div>${achievement.description}</div>
                            <div style="color: ${rarityColor}">${achievement.rarity.toUpperCase()}</div>
                        </div>
                    </div>
                </div>
            `;
        }).join('');
    }
}

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
    
    // Check for new achievements
    checkAchievements();
    
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
    const wasCompleted = progress[id];
    progress[id] = !progress[id];
    saveProgress(progress);
    
    // Track session progress and perfect run
    if (progress[id] && !wasCompleted) {
        sessionProgress++;
    } else if (!progress[id] && wasCompleted) {
        perfectRun = false;
    }
    
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
    if (confirm('Are you sure you want to reset all progress and achievements? This cannot be undone.')) {
        localStorage.removeItem('vibecodingProgress');
        localStorage.removeItem('courseAchievements');
        sessionProgress = 0;
        perfectRun = true;
        sessionStartTime = Date.now();
        renderChecklist();
        updateProgress();
        updateAchievementDisplay();
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
                        <h3 class="text-lg font-semibold text-text-primary">${item.title}</h3>
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
                <div class="mt-4 pt-4 border-t border-border-light">
                    <p class="text-text-secondary mb-4 leading-relaxed">${item.description}</p>
                    
                    ${item.hasScreenshots ? `
                        <div class="mb-6">
                            <h4 class="text-lg font-semibold text-primary-blue mb-4">Step-by-Step Guide:</h4>
                            <div class="carousel-container relative">
                                <div class="carousel-track flex transition-transform duration-300 ease-in-out" id="carousel-${item.id}">
                                    ${item.screenshots.map((screenshot, index) => `
                                        <div class="carousel-slide min-w-full">
                                            <div class="bg-card-bg rounded-lg p-4 border border-border-light">
                                                <div class="flex flex-col gap-4">
                                                    <div class="text-center">
                                                        <img src="${screenshot.image}" alt="${screenshot.title}" 
                                                             class="w-full max-w-2xl mx-auto rounded-lg border border-border-light hover:border-primary-blue transition-all duration-300 cursor-pointer screenshot-image"
                                                             onclick="openScreenshotModal('${screenshot.image}', '${screenshot.title}')">
                                                    </div>
                                                    <div class="text-center">
                                                        <h5 class="font-semibold text-text-primary mb-2">${screenshot.title}</h5>
                                                        <p class="text-sm text-text-secondary">${screenshot.description}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    `).join('')}
                                </div>
                                
                                <!-- Navigation buttons -->
                                <button class="carousel-btn carousel-prev absolute left-2 top-1/2 transform -translate-y-1/2" onclick="previousSlide(${item.id})">
                                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
                                    </svg>
                                </button>
                                <button class="carousel-btn carousel-next absolute right-2 top-1/2 transform -translate-y-1/2" onclick="nextSlide(${item.id})">
                                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                                    </svg>
                                </button>
                                
                                <!-- Step navigation -->
                                <div class="mt-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                                    ${item.screenshots.map((screenshot, index) => `
                                        <button class="step-nav-btn text-center p-3 rounded-lg border transition-all duration-300 ${index === 0 ? 'active' : ''}" onclick="goToSlide(${item.id}, ${index})">
                                            <div class="flex flex-col items-center space-y-2">
                                                <div class="flex-shrink-0 w-8 h-8 rounded-full border-2 flex items-center justify-center step-indicator ${index === 0 ? 'border-primary-blue bg-primary-blue text-white' : 'border-text-secondary'}">
                                                    <span class="text-sm font-bold step-number">${index + 1}</span>
                                                    <svg class="w-5 h-5 text-primary-green hidden step-check" fill="currentColor" viewBox="0 0 20 20">
                                                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                                                    </svg>
                                                </div>
                                                <span class="text-xs font-medium text-text-secondary step-title text-center leading-tight">${screenshot.title.replace(/^Step \d+: /, '')}</span>
                                            </div>
                                        </button>
                                    `).join('')}
                                </div>
                            </div>
                        </div>
                    ` : ''}
                    
                    <a href="${item.affiliateLink}" target="_blank" rel="noopener noreferrer" 
                       class="vibe-button">
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

// Initialize carousels
function initializeCarousels() {
    // Initialize all carousel states and touch support
    checklistData.forEach(item => {
        if (item.hasScreenshots) {
            currentSlides[item.id] = 0;
            // Initialize touch support for each carousel
            setTimeout(() => {
                initializeTouchCarousel(item.id);
            }, 100); // Small delay to ensure DOM is ready
        }
    });
}

// Theme management
function loadTheme() {
    const savedTheme = localStorage.getItem('courseTheme') || 'dark';
    applyTheme(savedTheme);
    return savedTheme;
}

function saveTheme(theme) {
    localStorage.setItem('courseTheme', theme);
}

function applyTheme(theme) {
    const body = document.body;
    const themeIcon = document.getElementById('theme-icon');
    const themeText = document.getElementById('theme-text');
    const floatingElements = document.querySelectorAll('.floating-magical-element');
    
    if (theme === 'light') {
        body.setAttribute('data-theme', 'light');
        themeIcon.textContent = '🌙';
        themeText.textContent = 'Dark Mode';
        // Hide magical floating elements in light mode
        floatingElements.forEach(el => el.style.display = 'none');
    } else {
        body.removeAttribute('data-theme');
        themeIcon.textContent = '☀️';
        themeText.textContent = 'Light Mode';
        // Show magical floating elements in dark mode
        floatingElements.forEach(el => el.style.display = 'block');
    }
}

function toggleTheme() {
    const currentTheme = document.body.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    applyTheme(newTheme);
    saveTheme(newTheme);
}

// Initialize the application
function init() {
    loadTheme(); // Load saved theme preference
    renderChecklist();
    updateProgress();
    addInteractiveEffects();
    initializeCarousels();
    updateAchievementDisplay();
    
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
    
    // Carousel navigation with arrow keys
    if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
        const expandedContent = document.querySelector('.checklist-content.expanded');
        if (expandedContent) {
            const carousel = expandedContent.querySelector('.carousel-track');
            if (carousel) {
                const itemId = carousel.id.replace('carousel-', '');
                if (e.key === 'ArrowLeft') {
                    previousSlide(parseInt(itemId));
                } else {
                    nextSlide(parseInt(itemId));
                }
                e.preventDefault();
            }
        }
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

// Carousel functionality
let currentSlides = {};

function nextSlide(itemId) {
    const carousel = document.getElementById(`carousel-${itemId}`);
    const slides = carousel.querySelectorAll('.carousel-slide');
    const totalSlides = slides.length;
    
    if (!currentSlides[itemId]) currentSlides[itemId] = 0;
    currentSlides[itemId] = (currentSlides[itemId] + 1) % totalSlides;
    
    updateCarousel(itemId);
}

function previousSlide(itemId) {
    const carousel = document.getElementById(`carousel-${itemId}`);
    const slides = carousel.querySelectorAll('.carousel-slide');
    const totalSlides = slides.length;
    
    if (!currentSlides[itemId]) currentSlides[itemId] = 0;
    currentSlides[itemId] = (currentSlides[itemId] - 1 + totalSlides) % totalSlides;
    
    updateCarousel(itemId);
}

function goToSlide(itemId, slideIndex) {
    currentSlides[itemId] = slideIndex;
    updateCarousel(itemId);
}

function updateCarousel(itemId) {
    const carousel = document.getElementById(`carousel-${itemId}`);
    const stepButtons = carousel.parentElement.querySelectorAll('.step-nav-btn');
    
    if (!carousel) return;
    
    const currentSlide = currentSlides[itemId] || 0;
    const translateX = -currentSlide * 100;
    
    carousel.style.transform = `translateX(${translateX}%)`;
    
    // Update step navigation buttons
    stepButtons.forEach((button, index) => {
        const stepIndicator = button.querySelector('.step-indicator');
        const stepNumber = button.querySelector('.step-number');
        const stepCheck = button.querySelector('.step-check');
        
        // Reset all buttons
        button.classList.remove('bg-blue-500/20', 'border-blue-500/50');
        button.classList.add('bg-gray-800/50', 'border-gray-600/50');
        stepIndicator.classList.remove('border-blue-500', 'bg-blue-500/20', 'border-green-500', 'bg-green-500/20');
        stepIndicator.classList.add('border-gray-500');
        stepNumber.classList.remove('hidden');
        stepCheck.classList.add('hidden');
        
        if (index === currentSlide) {
            // Current step - highlight
            button.classList.remove('bg-gray-800/50', 'border-gray-600/50');
            button.classList.add('bg-blue-500/20', 'border-blue-500/50');
            stepIndicator.classList.remove('border-gray-500');
            stepIndicator.classList.add('border-blue-500', 'bg-blue-500/20');
        } else if (index < currentSlide) {
            // Completed steps - show checkmark
            stepIndicator.classList.remove('border-gray-500');
            stepIndicator.classList.add('border-green-500', 'bg-green-500/20');
            stepNumber.classList.add('hidden');
            stepCheck.classList.remove('hidden');
        }
    });
}

// Touch/swipe support for carousels
function initializeTouchCarousel(itemId) {
    const carousel = document.getElementById(`carousel-${itemId}`);
    if (!carousel) return;
    
    let startX = 0;
    let startY = 0;
    let endX = 0;
    let endY = 0;
    let isSwipeGesture = false;
    
    carousel.addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX;
        startY = e.touches[0].clientY;
        isSwipeGesture = false;
    }, { passive: true });
    
    carousel.addEventListener('touchmove', (e) => {
        if (!startX || !startY) return;
        
        endX = e.touches[0].clientX;
        endY = e.touches[0].clientY;
        
        const diffX = Math.abs(startX - endX);
        const diffY = Math.abs(startY - endY);
        
        // If horizontal swipe is more pronounced than vertical, prevent page scroll
        if (diffX > diffY && diffX > 10) {
            e.preventDefault();
            isSwipeGesture = true;
        }
    }, { passive: false });
    
    carousel.addEventListener('touchend', (e) => {
        if (!isSwipeGesture || !startX || !endX) return;
        
        const diffX = startX - endX;
        const threshold = 50; // Minimum swipe distance
        
        if (Math.abs(diffX) > threshold) {
            if (diffX > 0) {
                // Swiped left - next slide
                nextSlide(itemId);
            } else {
                // Swiped right - previous slide
                previousSlide(itemId);
            }
        }
        
        // Reset values
        startX = 0;
        startY = 0;
        endX = 0;
        endY = 0;
        isSwipeGesture = false;
    }, { passive: true });
}

// Expose functions globally
window.resetProgress = resetProgress;
window.openScreenshotModal = openScreenshotModal;
window.closeScreenshotModal = closeScreenshotModal;
window.nextSlide = nextSlide;
window.previousSlide = previousSlide;
window.goToSlide = goToSlide;
window.initializeTouchCarousel = initializeTouchCarousel;
