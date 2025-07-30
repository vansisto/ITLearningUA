# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

ITLearningUA is a static educational website providing programming and database learning resources in Ukrainian. The site is organized as a hierarchical structure with HTML content pages covering various topics.

## Architecture and Structure

This is a static HTML-based educational website with modern dark theme design following a consistent template structure:

- **Root level**: Main navigation page (`index.html`) with hero section and category cards
- **Programming section**: Located in `Programming/` directory
  - Java subsection with JDBC tutorial
- **Database section**: Located in `Database/` directory  
  - MySQL subsection (in development)
- **Shared resources**: 
  - `style.css`: Modern dark theme stylesheet with CSS Grid/Flexbox layouts
  - `script.js`: Table of contents functionality with active section tracking

## Content Architecture

The site follows a modern, consistent template pattern:
- **Headers**: Sticky navigation with logo and breadcrumb-style links
- **Hero sections**: Prominent title and description areas with dark gradient backgrounds
- **Main content**: Container-wrapped content with sidebar table of contents for tutorials
- **Tutorial pages**: Two-column layout with sticky TOC and article content
- **Code blocks**: Prism.js syntax highlighting with dark theme
- **Responsive design**: Mobile-first approach with flexible grid layouts

## Technology Stack

- **Frontend**: Vanilla HTML5, CSS3, JavaScript
- **Syntax Highlighting**: Prism.js CDN with dark theme (Tomorrow Night)
- **Typography**: JetBrains Mono font stack for code and headers
- **Styling**: Modern CSS with CSS Grid, Flexbox, and custom properties
- **Color Scheme**: Dark theme (#0f172a background, #e2e8f0 text)
- **Content Language**: Ukrainian

## Development Guidelines

### Adding New Content
- Follow the existing directory structure pattern
- Use semantic HTML with proper heading hierarchy (h1, h2, h3)
- Wrap code examples in `.code-block` containers
- Include table of contents with anchor links for long tutorials
- Maintain consistent navigation with "back" links

### Styling Conventions
- Use modern CSS classes (`.container`, `.hero`, `.category-card`, `.main-content`)
- Follow dark theme color palette (#0f172a, #1e293b, #334155, #e2e8f0)
- Code blocks use dark background (#1e293b) with syntax highlighting
- Maintain consistent spacing using rem units and CSS Grid layouts
- Use hover effects and transitions for interactive elements

### File Organization
- Tutorial content goes in appropriately named subdirectories
- Each tutorial needs its own `index.html` following the modern template structure
- Link stylesheets relatively (e.g., `../../../style.css`)
- Include Prism.js CDN links for syntax highlighting
- Add table of contents structure for long tutorials with sticky navigation

## Common Operations

Since this is a static site with no build process:
- **Testing**: Open HTML files directly in browser
- **Development**: Edit HTML/CSS files directly
- **Deployment**: Copy files to web server
- **Content Updates**: Edit HTML content directly in tutorial files

## Content Standards

- All content is in Ukrainian language
- Technical terms include both Ukrainian and English equivalents
- Code examples are well-commented in Ukrainian
- Tutorials include practical examples and explanations
- Each major topic includes table of contents for easy navigation