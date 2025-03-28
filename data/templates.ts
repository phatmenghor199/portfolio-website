export const templates = [
  {
    id: 1,
    title: "Next.js Dashboard Starter",
    description: "A comprehensive dashboard template built with Next.js, Tailwind CSS, and shadcn/ui components.",
    image: "/placeholder.svg?height=600&width=800",
    category: "dashboard",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui"],
    features: [
      "Responsive layout for all device sizes",
      "Dark and light mode support",
      "Authentication ready with Auth.js",
      "Dashboard widgets and components",
      "Data visualization with Recharts",
      "Form handling with React Hook Form",
    ],
    setupInstructions: [
      "Clone the repository: git clone https://github.com/example/nextjs-dashboard-starter.git",
      "Install dependencies: npm install",
      "Configure environment variables: cp .env.example .env.local",
      "Run the development server: npm run dev",
      "Open http://localhost:3000 in your browser",
    ],
    projectStructure: `
├── app/
│   ├── (auth)/
│   │   ├── login/
│   │   └── register/
│   ├── dashboard/
│   │   ├── analytics/
│   │   ├── settings/
│   │   └── users/
│   ├── api/
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── ui/
│   ├── dashboard/
│   └── forms/
├── lib/
├── public/
├── styles/
├── next.config.js
├── tailwind.config.js
└── package.json
    `,
    customizationOptions: [
      {
        title: "Theme Customization",
        description: "Modify the theme in tailwind.config.js to match your brand colors and styling preferences.",
      },
      {
        title: "Layout Adjustments",
        description: "Customize the layout structure in app/layout.tsx and components/dashboard/layout.tsx.",
      },
      {
        title: "Widget Configuration",
        description: "Add, remove, or modify dashboard widgets in the components/dashboard/widgets directory.",
      },
      {
        title: "API Integration",
        description: "Connect to your own API endpoints by updating the fetch functions in lib/api.ts.",
      },
    ],
  },
  {
    id: 2,
    title: "E-commerce Starter Kit",
    description: "A complete e-commerce template with product listings, cart functionality, and checkout process.",
    image: "/placeholder.svg?height=600&width=800",
    category: "e-commerce",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe", "Prisma"],
    features: [
      "Product catalog with filtering and search",
      "Shopping cart with persistent storage",
      "User authentication and account management",
      "Checkout process with Stripe integration",
      "Order history and tracking",
      "Admin dashboard for product management",
    ],
    setupInstructions: [
      "Clone the repository: git clone https://github.com/example/ecommerce-starter-kit.git",
      "Install dependencies: npm install",
      "Configure environment variables: cp .env.example .env.local",
      "Set up the database: npx prisma migrate dev",
      "Run the development server: npm run dev",
      "Open http://localhost:3000 in your browser",
    ],
    projectStructure: `
├── app/
│   ├── (auth)/
│   ├── (shop)/
│   │   ├── products/
│   │   ├── cart/
│   │   └── checkout/
│   ├── (account)/
│   ├── (admin)/
│   ├── api/
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── ui/
│   ├── products/
│   ├── cart/
│   └── checkout/
├── lib/
├── prisma/
├── public/
├── next.config.js
├── tailwind.config.js
└── package.json
    `,
    customizationOptions: [
      {
        title: "Product Schema",
        description: "Modify the product schema in prisma/schema.prisma to match your specific product requirements.",
      },
      {
        title: "Payment Integration",
        description: "Configure different payment providers by updating the checkout components and API routes.",
      },
      {
        title: "Shipping Options",
        description: "Customize shipping methods and calculations in lib/shipping.ts.",
      },
      {
        title: "Tax Configuration",
        description: "Adjust tax calculations and rules in lib/tax.ts to comply with your local regulations.",
      },
    ],
  },
  {
    id: 3,
    title: "Blog Platform Template",
    description: "A modern blog platform with content management, comments, and newsletter subscription.",
    image: "/placeholder.svg?height=600&width=800",
    category: "blog",
    technologies: ["Next.js", "MDX", "Tailwind CSS", "Contentlayer"],
    features: [
      "MDX content support with code highlighting",
      "Category and tag organization",
      "Comment system with moderation",
      "Newsletter subscription form",
      "SEO optimization",
      "RSS feed generation",
    ],
    setupInstructions: [
      "Clone the repository: git clone https://github.com/example/blog-platform-template.git",
      "Install dependencies: npm install",
      "Configure environment variables: cp .env.example .env.local",
      "Add your first blog post in content/posts/",
      "Run the development server: npm run dev",
      "Open http://localhost:3000 in your browser",
    ],
    projectStructure: `
├── app/
│   ├── blog/
│   │   ├── [slug]/
│   │   ├── categories/
│   │   └── tags/
│   ├── api/
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── ui/
│   ├── blog/
│   └── newsletter/
├── content/
│   ├── posts/
│   └── authors/
├── lib/
├── public/
├── contentlayer.config.js
├── next.config.js
├── tailwind.config.js
└── package.json
    `,
    customizationOptions: [
      {
        title: "Content Structure",
        description: "Customize the content schema in contentlayer.config.js to match your specific blog requirements.",
      },
      {
        title: "Theme Customization",
        description: "Modify the blog theme in tailwind.config.js and components/blog/theme.tsx.",
      },
      {
        title: "Comment System",
        description: "Choose between different comment providers by updating the components/blog/comments directory.",
      },
      {
        title: "Newsletter Integration",
        description: "Connect to your preferred email service by updating the newsletter components and API routes.",
      },
    ],
  },
  {
    id: 4,
    title: "SaaS Application Boilerplate",
    description: "A starter template for building SaaS applications with authentication, billing, and user management.",
    image: "/placeholder.svg?height=600&width=800",
    category: "saas",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma", "Stripe"],
    features: [
      "User authentication and authorization",
      "Subscription management with Stripe",
      "Team collaboration features",
      "User roles and permissions",
      "Email notifications",
      "Usage analytics and tracking",
    ],
    setupInstructions: [
      "Clone the repository: git clone https://github.com/example/saas-boilerplate.git",
      "Install dependencies: npm install",
      "Configure environment variables: cp .env.example .env.local",
      "Set up the database: npx prisma migrate dev",
      "Configure Stripe webhook: stripe listen --forward-to localhost:3000/api/webhooks/stripe",
      "Run the development server: npm run dev",
      "Open http://localhost:3000 in your browser",
    ],
    projectStructure: `
├── app/
│   ├── (auth)/
│   ├── (dashboard)/
│   │   ├── settings/
│   │   ├── billing/
│   │   └── team/
│   ├── api/
│   │   ├── auth/
│   │   ├── webhooks/
│   │   └── users/
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── ui/
│   ├── auth/
│   ├── billing/
│   └── dashboard/
├── lib/
├── prisma/
├── public/
├── next.config.js
├── tailwind.config.js
└── package.json
    `,
    customizationOptions: [
      {
        title: "Subscription Plans",
        description: "Configure subscription tiers and features in lib/billing/plans.ts.",
      },
      {
        title: "Authentication Providers",
        description: "Add or remove authentication providers in app/api/auth/[...nextauth]/route.ts.",
      },
      {
        title: "Email Templates",
        description: "Customize email notifications in lib/email/templates/.",
      },
      {
        title: "User Permissions",
        description: "Modify the permission system in lib/auth/permissions.ts to match your application needs.",
      },
    ],
  },
  {
    id: 5,
    title: "Portfolio Website Template",
    description: "A professional portfolio template for showcasing your work, skills, and experience.",
    image: "/placeholder.svg?height=600&width=800",
    category: "portfolio",
    technologies: ["Next.js", "Framer Motion", "Tailwind CSS", "MDX"],
    features: [
      "Responsive design for all devices",
      "Animated page transitions and effects",
      "Project showcase with filtering",
      "Skills and experience sections",
      "Contact form with validation",
      "Blog section with MDX support",
    ],
    setupInstructions: [
      "Clone the repository: git clone https://github.com/example/portfolio-template.git",
      "Install dependencies: npm install",
      "Configure environment variables: cp .env.example .env.local",
      "Customize your information in data/profile.js",
      "Add your projects in data/projects.js",
      "Run the development server: npm run dev",
      "Open http://localhost:3000 in your browser",
    ],
    projectStructure: `
├── app/
│   ├── about/
│   ├── projects/
│   ├── blog/
│   ├── contact/
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── ui/
│   ├── home/
│   ├── projects/
│   └── blog/
├── data/
│   ├── profile.js
│   ├── projects.js
│   └── blog/
├── lib/
├── public/
├── next.config.js
├── tailwind.config.js
└── package.json
    `,
    customizationOptions: [
      {
        title: "Personal Information",
        description: "Update your personal details, skills, and experience in data/profile.js.",
      },
      {
        title: "Project Showcase",
        description: "Add your projects with details and images in data/projects.js.",
      },
      {
        title: "Color Scheme",
        description: "Customize the color palette in tailwind.config.js to match your personal brand.",
      },
      {
        title: "Animations",
        description: "Modify the animation settings in components/animations/ to adjust the motion effects.",
      },
    ],
  },
  {
    id: 6,
    title: "Admin Dashboard Template",
    description: "A comprehensive admin dashboard template with data visualization, user management, and settings.",
    image: "/placeholder.svg?height=600&width=800",
    category: "dashboard",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Recharts", "Tanstack Table"],
    features: [
      "Responsive admin layout",
      "Data visualization with charts and graphs",
      "User management interface",
      "Settings and configuration panels",
      "Notification system",
      "Dark and light mode support",
    ],
    setupInstructions: [
      "Clone the repository: git clone https://github.com/example/admin-dashboard-template.git",
      "Install dependencies: npm install",
      "Configure environment variables: cp .env.example .env.local",
      "Run the development server: npm run dev",
      "Open http://localhost:3000 in your browser",
    ],
    projectStructure: `
├── app/
│   ├── admin/
│   │   ├── dashboard/
│   │   ├── users/
│   │   ├── settings/
│   │   └── analytics/
│   ├── api/
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── ui/
│   ├── admin/
│   ├── charts/
│   └── tables/
├── lib/
├── public/
├── next.config.js
├── tailwind.config.js
└── package.json
    `,
    customizationOptions: [
      {
        title: "Dashboard Widgets",
        description: "Configure the dashboard widgets and layout in components/admin/dashboard/.",
      },
      {
        title: "Data Sources",
        description: "Connect to your data sources by updating the API handlers in app/api/.",
      },
      {
        title: "Chart Customization",
        description: "Modify the chart components in components/charts/ to visualize your specific data.",
      },
      {
        title: "Table Configuration",
        description: "Customize the data tables in components/tables/ to display your application data.",
      },
    ],
  },
]

