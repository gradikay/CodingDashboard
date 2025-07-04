# Vibe Coding Course Dashboard

## Overview

This is a front-end web application for a coding course dashboard that guides users through their web development learning journey. The application is built as a static website using HTML, CSS (with Tailwind CSS), and JavaScript, featuring a modern dark theme with animated background elements and an interactive checklist system.

## System Architecture

### Frontend Architecture
- **Static Website**: Pure HTML/CSS/JavaScript implementation without backend dependencies
- **Responsive Design**: Mobile-first approach using Tailwind CSS framework
- **Component-based Structure**: Modular JavaScript for checklist functionality
- **Progressive Enhancement**: Core functionality works without JavaScript, enhanced with interactive features

### Styling Strategy
- **Tailwind CSS**: Utility-first CSS framework loaded via CDN for rapid development
- **Custom CSS**: Additional styling in `styles.css` for animations and specialized effects
- **Custom Color Palette**: Brand-specific color scheme with purple, pink, and blue accent colors
- **Typography**: Inter font for general text, JetBrains Mono for code elements

## Key Components

### 1. Interactive Checklist System
- **Data Structure**: JavaScript array containing course steps with metadata
- **State Management**: Local storage for persistence across sessions
- **Progress Tracking**: Visual indicators for completed items
- **Affiliate Integration**: External links for course resources and tools

### 2. Achievement Badges and Rewards System
- **Badge Collection**: 8 different achievements with varying rarity levels (common, uncommon, rare, legendary)
- **Real-time Notifications**: Animated popup notifications when achievements are unlocked
- **Visual Display**: Interactive badge grid with tooltips showing achievement details
- **Special Effects**: Confetti animation for legendary achievements
- **Session Tracking**: Advanced tracking for speed runs and perfect completion runs
- **Persistence**: Achievement progress saved to local storage

### 2. Visual Design Elements
- **Animated Background**: Floating orb elements with CSS animations
- **Gradient Effects**: Background gradients and text effects for visual appeal
- **Card-based Layout**: Information organized in visually distinct containers
- **Responsive Grid**: Adapts to different screen sizes

### 3. Course Progression Flow
The application guides users through 5 key steps:
1. GitHub account creation
2. GitHub-Replit integration
3. GitHub Pages deployment
4. Domain connection with DNS setup
5. Celebration milestone

## Data Flow

1. **Initial Load**: Application loads static HTML structure
2. **JavaScript Enhancement**: Checklist data populates from JavaScript array
3. **User Interaction**: Click events toggle completion status
4. **Persistence**: Local storage maintains state between sessions
5. **External Navigation**: Affiliate links redirect to external resources

## External Dependencies

### CDN Resources
- **Tailwind CSS**: Styling framework (cdn.tailwindcss.com)
- **Google Fonts**: Inter and JetBrains Mono fonts
- **No JavaScript Libraries**: Vanilla JavaScript implementation

### Affiliate Partners
- **GitHub**: Version control and repository hosting
- **Replit**: Online code editor and deployment platform
- **GoDaddy**: Domain registration services
- **MDN Web Docs**: Learning resources

## Deployment Strategy

### Current Approach
- **Static Hosting**: Can be deployed to any static hosting service
- **No Build Process**: Direct file serving without compilation
- **CDN Dependencies**: External resources loaded at runtime

### Recommended Platforms
- GitHub Pages (free, integrated with development workflow)
- Netlify (enhanced features, form handling)
- Vercel (optimized for modern web apps)
- Replit (matches course ecosystem)

### Performance Considerations
- Minimal external dependencies
- Optimized images and assets
- Efficient CSS animations
- Local storage for state management

## Changelog

- July 01, 2025. Initial setup

## User Preferences

Preferred communication style: Simple, everyday language.