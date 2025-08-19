# Overview

This is a modern, interactive website for Palacio Remodeling, a construction and remodeling company. The website showcases their services including kitchen renovations, bathroom remodels, home additions, and custom construction. It features an interactive portfolio gallery with before/after project comparisons, dynamic testimonial carousel, and responsive design optimized for all devices. The site emphasizes visual storytelling with modern animations, high contrast design for accessibility, and performance optimization.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development
- **Build Tool**: Vite for fast development and optimized production builds
- **Styling**: Tailwind CSS with custom CSS variables for consistent theming
- **UI Components**: Radix UI primitives with shadcn/ui component library for accessibility and consistency
- **Animations**: Framer Motion for smooth transitions and scroll reveal effects
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack React Query for server state management
- **Form Handling**: React Hook Form with Zod validation for type-safe forms

## Backend Architecture
- **Server**: Express.js with TypeScript for API endpoints
- **Build Process**: ESBuild for server bundling with external package handling
- **Development**: Hot module replacement and runtime error overlay via Vite plugins
- **Storage Interface**: Abstracted storage layer with in-memory implementation for user management
- **Middleware**: JSON parsing, URL encoding, request logging, and error handling

## Database Design
- **ORM**: Drizzle ORM with PostgreSQL dialect for type-safe database operations
- **Schema**: User table with UUID primary keys, username, and password fields
- **Migrations**: Automated schema migrations via Drizzle Kit
- **Connection**: Neon Database serverless connection with environment-based configuration

## Design System
- **Typography**: Google Fonts integration (Playfair Display serif, Inter sans-serif, Montserrat)
- **Color Scheme**: Dark theme with navy backgrounds, cream text, accent orange, and gold highlights
- **Responsive Design**: Mobile-first approach with Tailwind breakpoints
- **Accessibility**: High contrast ratios, semantic HTML, ARIA attributes, and keyboard navigation

## Component Architecture
- **Atomic Design**: Reusable UI components in `/components/ui/` directory
- **Feature Components**: Page-specific components for sections like hero, services, portfolio
- **Custom Hooks**: Scroll reveal animations, mobile detection, and toast notifications
- **Scroll Animations**: Intersection Observer API for reveal effects on scroll

# External Dependencies

## Core Libraries
- **React Ecosystem**: React 18, React DOM, React Hook Form, React Query
- **UI Framework**: Radix UI component primitives for accessibility
- **Styling**: Tailwind CSS with PostCSS and Autoprefixer
- **Animations**: Framer Motion for smooth transitions and effects
- **Icons**: Font Awesome and Lucide React for comprehensive icon sets

## Development Tools
- **Build Tools**: Vite with React plugin and TypeScript support
- **Code Quality**: TypeScript for static typing, ESLint configuration
- **Database**: Drizzle ORM with PostgreSQL support via Neon Database
- **Validation**: Zod for runtime type checking and form validation
- **Utilities**: Class Variance Authority for component variants, clsx for conditional classes

## External Services
- **Database**: Neon Database serverless PostgreSQL
- **Images**: Unsplash API for high-quality stock photography
- **Fonts**: Google Fonts API for typography
- **Hosting**: Configured for Replit deployment with development banners

## Development Environment
- **Package Manager**: npm with lock file for consistent dependencies
- **Runtime**: Node.js with ES modules support
- **Development Server**: Vite dev server with HMR and middleware integration
- **Error Handling**: Runtime error overlay and comprehensive logging