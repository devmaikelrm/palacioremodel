# Overview

This is a modern, full-stack website for Palacio Remodeling, a premium construction and renovation company. The project features an interactive, visually appealing website with comprehensive sections including services, portfolio gallery, testimonials, and contact forms. The application showcases the company's expertise in kitchen renovations, bathroom remodels, home additions, and custom construction projects with a focus on visual storytelling and user engagement.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development
- **Build Tool**: Vite for fast development and optimized builds
- **Styling**: Tailwind CSS with custom design system using earth tones and vibrant accents
- **UI Components**: Extensive use of Radix UI primitives through shadcn/ui for accessible, customizable components
- **Animations**: Custom CSS animations and scroll-based reveal effects for enhanced user experience
- **Typography**: Multi-font strategy combining Playfair Display (serif), Inter (sans-serif), and Montserrat for visual hierarchy
- **Responsive Design**: Mobile-first approach with tablet and desktop optimizations

## Backend Architecture
- **Runtime**: Node.js with Express.js server
- **Language**: TypeScript throughout the stack for consistency
- **Development**: Hot module replacement and development middleware via Vite integration
- **Static Assets**: Served through Express with proper caching headers
- **API Structure**: RESTful API design ready for future expansion

## Data Storage Solutions
- **Database**: PostgreSQL configured via Drizzle ORM
- **Connection**: Neon Database serverless PostgreSQL for scalability
- **Schema Management**: Drizzle Kit for migrations and schema evolution
- **Session Storage**: PostgreSQL-based session store using connect-pg-simple
- **Development Storage**: In-memory storage implementation for development and testing

## Authentication and Authorization
- **User Schema**: Basic user model with username/password authentication ready
- **Session Management**: Express sessions with PostgreSQL persistence
- **Security**: Prepared infrastructure for future authentication implementation

## Component Architecture
- **Design System**: Consistent component library with theme variables and variants
- **Scroll Animations**: Custom scroll reveal hooks for progressive content disclosure
- **Form Handling**: React Hook Form with Zod validation for type-safe form processing
- **State Management**: TanStack Query for server state and React hooks for local state
- **Routing**: Wouter for lightweight client-side routing

## Content Management
- **Portfolio System**: Dynamic project gallery with before/after image comparisons
- **Testimonial Carousel**: Automated testimonial rotation with manual controls
- **Service Showcase**: Interactive service cards with hover animations
- **Contact Forms**: Multi-step contact forms with project type selection

# External Dependencies

## UI and Styling
- **Radix UI**: Complete accessible component primitives for complex UI patterns
- **Tailwind CSS**: Utility-first CSS framework with custom design tokens
- **Lucide React**: Modern icon library for consistent iconography
- **Font Awesome**: Extended icon set for construction and business-specific icons
- **Google Fonts**: Custom font loading for Playfair Display, Inter, and Montserrat

## Database and ORM
- **Neon Database**: Serverless PostgreSQL database hosting
- **Drizzle ORM**: Type-safe database operations with automatic migration generation
- **Drizzle Zod**: Schema validation integration between database and runtime validation

## Form and State Management
- **React Hook Form**: Performant form handling with minimal re-renders
- **Zod**: Runtime type validation for forms and API responses
- **TanStack Query**: Server state management with caching and synchronization
- **Hookform Resolvers**: Zod integration for form validation

## Development and Build
- **Vite**: Fast build tool with HMR and optimized production builds
- **TypeScript**: Full-stack type safety and development experience
- **ESBuild**: Fast JavaScript bundling for server-side code
- **PostCSS**: CSS processing with Tailwind CSS integration

## Asset Management
- **Unsplash**: Copyright-free stock photography for portfolio and testimonials
- **Custom Assets**: Logo and branding assets stored in attached_assets directory

## Utilities and Enhancements
- **date-fns**: Date manipulation and formatting utilities
- **clsx**: Conditional CSS class name utility
- **class-variance-authority**: Type-safe component variant management
- **Embla Carousel**: Touch-friendly carousel for testimonials and portfolio