# SoftSell Marketing Website

A responsive, single-page marketing website for 'SoftSell', a fictional platform to sell unused software licenses, built for the **Credex Web Development Internship Assignment**. This project showcases a modern UI with Tailwind CSS, interactive features, and a mock AI chatbot, demonstrating frontend development skills within the 48-hour timeframe.

## Overview

SoftSell is designed to attract users looking to sell their unused software licenses with ease. The website features a clean, full-width layout with distinct sections to highlight the service's value proposition, process, benefits, testimonials, and a contact form for lead generation.

## Features

- **Hero Section**: A visually striking header with a catchy headline, subheading, and a prominent "Get a Quote" CTA button, enhanced with subtle animations using Framer Motion.
- **How It Works**: A 3-step process (Upload License, Get Valuation, Get Paid) with emoji icons and concise descriptions, presented in responsive cards.
- **Why Choose Us**: 3 feature tiles (Fast Payments, Secure Process, Expert Support) with icons, emphasizing key benefits.
- **Customer Testimonials**: 2 dummy reviews with names, roles, and companies to build trust, styled for readability.
- **Contact/Lead Form**: A functional form with fields for Name, Email, Company, License Type (dropdown), and Message, including basic frontend validation (`required` attributes).
- **Bonus Features**:
  - **Full-Width Layout**: Custom design choice for an immersive experience, using Tailwind's `w-screen` for edge-to-edge sections.
  - **Logo Placeholder**: A simple "SoftSell" text logo in the Hero section for branding.
  - **SEO Meta Tags**: Added page title and meta descriptions using `react-helmet` for search engine visibility.
  - **Animations**: Smooth fade-in effects for Hero content using Framer Motion.
  - **Light/Dark Mode Toggle**: An animated sun/moon switch using `react-toggle-dark-mode` for theme switching, with consistent Tailwind `dark:` classes.
  - **Mock AI Chat Widget**: A keyword-based chatbot with dynamic responses for common queries about selling licenses, positioned as a floating widget with an enhanced UI.

## Design Choices

- **Framework**: Built with React.js and Vite for fast development and build times, ensuring a lightweight and performant app.
- **Styling**: Utilized Tailwind CSS with a coherent blue-white-gray color palette for a professional, trustworthy look. Customizations include gradients for the Hero section, colored shadows, increased white space, and responsive typography for a modern aesthetic.
- **Layout**: Opted for a full-width design (`w-screen`) over constrained containers for a bold, immersive user experience, while maintaining responsiveness with Tailwind's mobile-first utilities (`md:`, `sm:`, etc.).
- **User Experience**: Focused on smooth transitions for hover effects, subtle animations, and an intuitive chat widget UI to enhance interactivity and engagement.

## Time Spent

- **Total**: Approximately 8-10 hours over the 48-hour timeframe.
  - Setup and Initial Structure: 1-2 hours (project initialization, Tailwind setup).
  - UI Development: 3-4 hours (designing sections, styling with Tailwind, responsiveness).
  - Bonus Features: 2-3 hours (dark mode toggle, animations, SEO tags, chatbot implementation).
  - Debugging and Testing: 1 hour (ensuring functionality across devices and modes).
  - Deployment and Documentation: 1 hour (Vercel deployment, writing README.md).

## Technologies Used

- **Frontend**: React.js with Vite
- **Styling**: Tailwind CSS
- **Libraries**: `react-helmet` (SEO), `framer-motion` (animations), `react-toggle-dark-mode` (theme switch)
- **Deployment**: Vercel

## Live URL

_https://soft-sell-three.vercel.app/_

## GitHub Repository

*https://github.com/krishna-dtu/SoftSell.git*

## Installation (Optional for Reviewers)

If you wish to run this project locally:
1. Clone the repository: 'git clone https://github.com/krishna-dtu/SoftSell.git'
2. Navigate to the project directory: `cd softsell-website`
3. Install dependencies: `npm install`
4. Start the development server: `npm run dev`
5. Open `http://localhost:5173` in your browser.

## Challenges and Solutions

- **Chatbot Implementation**: Initially attempted OpenAI API integration but faced issues with browser-based API calls and proxy setup. Reverted to a keyword-based mock AI chatbot with dynamic responses to meet the bonus requirement within time constraints.
- **Full-Width Layout**: Ensured edge-to-edge design using `w-screen` while maintaining content readability with padding and responsive adjustments.

## Future Improvements

- Integrate a real backend for the contact form to handle submissions.
- Enhance the chatbot with a hosted proxy server for OpenAI API integration on the deployed version.
- Add more interactive animations and micro-interactions for user engagement.

## Acknowledgments

Thank you to Credex for this opportunity to showcase frontend development skills. Special thanks to online resources like Tailwind CSS documentation and community forums for design inspiration and troubleshooting.

---

*Built by Krishna | Submission for Credex Web Development Internship*
