# Project: prettysim.pl - Low-Code Business Automation Consultancy

## Project Overview
- Modern business automation consultancy website built with Vite + React
- Responsive design showcasing low-code expertise and fractional services
- AI-optimized for business automation and low-code platform searches
- Target audience: SME businesses (5-30 staff, £3-5M turnover) in UK, English-speaking Europe, Middle East, US East Coast
- Focus on lead generation and consultation bookings

## Company Context
- **Industry:** Low-code business process automation consultancy
- **Founded:** 2015 in Cape Town, now serving global English-speaking markets
- **Experience:** 10+ years, 300+ clients, 1500+ optimized applications
- **Specialization:** Airtable, Smartsuite, Make, Softr, Noloco integrations
- **Business Model:** Fractional services (embedded team member approach)
- **Value Proposition:** "Turn chaos into clarity" through process automation

## Tech Stack
- **Framework:** Vite 7.1 with React 19 and TypeScript
- **Routing:** React Router DOM 7.8
- **Styling:** Tailwind CSS 3.4 with custom design system
- **Language:** TypeScript 5.8 (strict mode)
- **Database:** Not required (static/marketing site)
- **Content:** Static markdown files in `/content/` directory
- **Forms:** React Hook Form with Zod validation
- **Analytics:** Google Analytics 4 + conversion tracking
- **Deployment:** Vercel (optimized for Vite)
- **Email:** Integration with existing systems via API

## Project Structure
- `src/pages/` - React Router page components (13 main pages + 6 FAQ detail pages)
- `src/components/` - Reusable UI components (Header, Footer, Breadcrumbs)
- `src/index.css` - Global styles and Tailwind custom components
- `content/` - Static markdown files (business content, not integrated into React)
- `public/` - Static assets (currently minimal)
- `vite.config.ts` - Vite configuration
- `tailwind.config.js` - Tailwind CSS configuration
- `tsconfig.json` - TypeScript configuration (references tsconfig.app.json)

### Current Pages
**Main Pages:** HomePage, ServicesPage, FractionalServicesPage, AboutPage, ContactPage, FAQPage, PrivacyPage, DiscoveryCallPage, JobOpportunitiesPage, MediaPage, SweetLionheartPage, HoopoeSharePage, MSAPage

**FAQ Detail Pages:** HowToGetSupportPage, MinimumCommitmentPeriodPage, EmergenciesOrUrgentRequestsPage, ProjectManagementOutsideScopePage, WhiteLabeledServicesPage, DiscountsForNonProfitPage

## Development Commands
- `npm run dev` - Start Vite development server (localhost:5173)
- `npm run build` - Build for production (tsc -b && vite build)
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint 9.32 with flat config

**Note:** TypeScript checking is integrated into the build process. No separate type-check or analyze commands are configured.

## Anti-Hallucination Guidelines (2024-2025 Best Practices)

### Fact Verification Protocol
- **NEVER assume company information**: Only use verified facts from this document
- **Technical verification required**: Check package.json and existing codebase before suggesting libraries/frameworks
- **Source-based responses**: When referencing code, use format `filename:line_number`
- **Uncertainty handling**: Respond "I don't know" rather than guessing or inferring
- **Retrieval-first approach**: Always verify information exists before stating it as fact

### Development Safeguards
- **Library verification**: Check `package.json` dependencies before assuming availability
- **Component verification**: Search codebase for existing components before creating new ones
- **Framework patterns**: Follow existing code patterns rather than assuming standard approaches
- **Configuration grounding**: Reference actual config files (tailwind.config.js, vite.config.ts, eslint.config.js) for settings

### Content Accuracy Requirements
- **Company facts**: Only use verified information (Founded: 2015, Cape Town → Global markets)
- **Technical capabilities**: Verify before claiming features are available or implemented
- **Business metrics**: Use only confirmed figures (10+ years, 300+ clients, 1500+ applications)
- **Service descriptions**: Reference actual service offerings, not assumptions

## Technical Context
- Git repository: `/Users/graceschutte/GitHub/bolt-website-demo`
- Current branch: main
- Focus on modern web development with performance optimization
- Target: Professional consultancy website with lead generation focus

## Code Style & Standards
- Use ES modules (import/export), never CommonJS
- Use relative imports: `import Header from './components/Header'`
- TypeScript strict mode with proper type definitions
- Component names in PascalCase: `ContactPage`, `Header`, `Footer`
- File names in PascalCase: `HomePage.tsx`, `ContactPage.tsx`
- Use functional components with React hooks
- Tailwind utility-first CSS approach with custom component classes
- Custom Tailwind components defined in `src/index.css` (btn-primary, card, etc.)

**Note:** No `@/` path alias is configured - use relative imports throughout the codebase.

## Website-Specific Guidelines
- Follow WCAG 2.1 AA accessibility standards
- Optimize for Core Web Vitals (LCP < 2.5s, CLS < 0.1, FID < 100ms) with Vite optimizations
- Use semantic HTML5 structure with proper heading hierarchy
- Mobile-first responsive design (breakpoints: sm:640px, md:768px, lg:1024px, xl:1280px)
- All images must have descriptive alt text and be optimized
- Forms require proper validation and error handling
- Include clear CTAs for consultation booking

## AI Optimization Guidelines (GEO)
- Write in conversational, natural language for low-code automation audience
- Start pages with executive summary/TL;DR sections
- Use question-based headings: "What is low-code automation?", "How does fractional consulting work?"
- Include direct answers after questions for featured snippets
- Structure content for AI platforms (ChatGPT, Perplexity, Google AI Overviews)
- Target long-tail keywords: "low-code business automation consultancy UK"
- Create FAQ sections optimized for voice search

## Business-Specific Content Requirements
- Emphasize 10+ years experience, 300+ clients, 1500+ applications optimized
- Highlight platform expertise: Airtable, Smartsuite, Make, Softr, Noloco
- Showcase fractional/embedded team member approach
- Include geographic focus: UK, English-speaking Europe, Middle East, US East Coast
- Target SME market: 5-30 staff, £3-5M annual turnover
- Use case studies with specific ROI examples
- Feature "less than $10/month" automation examples

## Performance Requirements
- Total bundle size < 500KB initial load
- Images optimized: Basic Vite asset handling (WebP optimization to be implemented)
- CSS bundled by Vite with Tailwind optimizations
- Lazy loading for below-fold images and components
- Fonts: Inter font family loaded via Google Fonts
- Minimize third-party scripts impact on Core Web Vitals

## SEO & Content Strategy
- Primary keywords: "low-code automation consultancy", "business process automation", "fractional technology services"
- Long-tail targets: "Airtable automation consultant UK", "Make.com integration specialist"
- Create pillar content: "Complete Guide to Low-Code Business Automation"
- Case studies showcasing specific platforms and ROI
- Blog content targeting "how to automate [business process]" searches
- Comparison content: "Airtable vs Smartsuite", "When to choose fractional vs project services"

## Testing Requirements
- Cross-browser testing (Chrome, Firefox, Safari, Edge)
- Mobile responsiveness across devices
- Performance testing with Lighthouse
- Accessibility testing with axe-core
- Form validation and submission testing

## Deployment Strategy
- Vercel deployment optimized for Vite with automatic builds from main branch
- Preview deployments for pull requests
- Environment variables for API keys and integrations
- CDN optimization for global content delivery
- Monitoring and error tracking setup