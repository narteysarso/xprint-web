import { SiteConfig } from "@/types";

export const siteConfig: SiteConfig = {
  siteName: "Xprint",
  description: "Connect with local print shops and order print services online",
  url: "https://xprint.com",
  links: {
    twitter: "https://twitter.com/xprint",
    facebook: "https://facebook.com/xprint",
    instagram: "https://instagram.com/xprint",
    linkedin: "https://linkedin.com/company/xprint",
  }
};

export const navLinks = {
  main: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "How It Works",
      href: "/how-it-works",
    },
    {
      title: "Pricing",
      href: "/pricing",
    },
    {
      title: "About Us",
      href: "/about",
    },
    {
      title: "Blog",
      href: "/blog",
    },
    {
      title: "Contact",
      href: "/contact",
    },
  ],
  customer: [
    {
      title: "Dashboard",
      href: "/customer/dashboard",
      icon: "layout-dashboard",
    },
    {
      title: "Find Printers",
      href: "/customer/search",
      icon: "search",
    },
    {
      title: "My Orders",
      href: "/customer/orders",
      icon: "shopping-cart",
    },
    {
      title: "Favorites",
      href: "/customer/favorites",
      icon: "heart",
    },
    {
      title: "Messages",
      href: "/customer/messages",
      icon: "message-square",
    },
    {
      title: "Payment",
      href: "/customer/payment",
      icon: "credit-card",
    },
    {
      title: "Settings",
      href: "/customer/settings",
      icon: "settings",
    },
  ],
  vendor: [
    {
      title: "Dashboard",
      href: "/vendor/dashboard",
      icon: "layout-dashboard",
    },
    {
      title: "Orders",
      href: "/vendor/orders",
      icon: "shopping-cart",
    },
    {
      title: "Services",
      href: "/vendor/services",
      icon: "printer",
    },
    {
      title: "Profile",
      href: "/vendor/profile",
      icon: "user",
    },
    {
      title: "Reviews",
      href: "/vendor/reviews",
      icon: "star",
    },
    {
      title: "Messages",
      href: "/vendor/messages",
      icon: "message-square",
    },
    {
      title: "Finances",
      href: "/vendor/finances",
      icon: "dollar-sign",
    },
    {
      title: "Settings",
      href: "/vendor/settings",
      icon: "settings",
    },
  ],
  admin: [
    {
      title: "Dashboard",
      href: "/admin/dashboard",
      icon: "layout-dashboard",
    },
    {
      title: "Users",
      href: "/admin/users",
      icon: "users",
    },
    {
      title: "Vendors",
      href: "/admin/vendors",
      icon: "store",
    },
    {
      title: "Orders",
      href: "/admin/orders",
      icon: "shopping-cart",
    },
    {
      title: "Content",
      href: "/admin/content",
      icon: "file-text",
    },
    {
      title: "Revenue",
      href: "/admin/revenue",
      icon: "dollar-sign",
    },
    {
      title: "Reports",
      href: "/admin/reports",
      icon: "bar-chart",
    },
    {
      title: "Settings",
      href: "/admin/settings",
      icon: "settings",
    },
  ],
  footer: [
    {
      title: "Company",
      links: [
        { title: "About Us", href: "/about" },
        { title: "Careers", href: "/careers" },
        { title: "Press", href: "/press" },
        { title: "Blog", href: "/blog" },
        { title: "Contact", href: "/contact" },
      ],
    },
    {
      title: "Services",
      links: [
        { title: "Document Printing", href: "/services/document-printing" },
        { title: "Photo Prints", href: "/services/photo-prints" },
        { title: "Business Cards", href: "/services/business-cards" },
        { title: "Banners & Signs", href: "/services/banners-signs" },
        { title: "Custom Orders", href: "/services/custom-orders" },
      ],
    },
    {
      title: "Resources",
      links: [
        { title: "Help Center", href: "/help" },
        { title: "FAQs", href: "/faqs" },
        { title: "Pricing", href: "/pricing" },
        { title: "Become a Vendor", href: "/vendor/signup" },
        { title: "Download App", href: "/download" },
      ],
    },
    {
      title: "Legal",
      links: [
        { title: "Privacy Policy", href: "/privacy" },
        { title: "Terms of Service", href: "/terms" },
        { title: "Cookie Policy", href: "/cookies" },
      ],
    },
  ],
};

export const contentConfig = {
  heroSection: {
    title: "Professional Printing Services Near You",
    subtitle: "Find local print shops, upload your designs, and get high-quality prints delivered to your door",
    ctaPrimary: "Find a Printer",
    ctaSecondary: "Sign Up",
    ctaTertiary: "Download App",
  },
  howItWorks: {
    customer: {
      title: "How It Works for Customers",
      steps: [
        {
          title: "Find a Printer",
          description: "Search for print shops near you using our location-based search",
          icon: "search",
        },
        {
          title: "Upload Files",
          description: "Upload your design files and specify your requirements",
          icon: "upload",
        },
        {
          title: "Place Order",
          description: "Review your order, confirm details, and make payment",
          icon: "shopping-cart",
        },
        {
          title: "Track & Pick Up",
          description: "Track your order status and pick up when ready",
          icon: "package",
        },
      ],
    },
    vendor: {
      title: "How It Works for Print Shops",
      steps: [
        {
          title: "Register Your Shop",
          description: "Sign up as a vendor and create your shop profile",
          icon: "store",
        },
        {
          title: "List Services",
          description: "Add your printing services, pricing, and availability",
          icon: "list",
        },
        {
          title: "Accept Orders",
          description: "Receive and accept customer orders through the platform",
          icon: "check-circle",
        },
        {
          title: "Get Paid",
          description: "Complete orders and receive payments securely",
          icon: "dollar-sign",
        },
      ],
    },
  },
  featuredServices: [
    {
      title: "Document Printing",
      description: "High-quality document printing for business and personal use",
      icon: "file-text",
      link: "/services/document-printing",
    },
    {
      title: "Business Cards",
      description: "Professional business cards with various finishes and materials",
      icon: "credit-card",
      link: "/services/business-cards",
    },
    {
      title: "Banners & Signs",
      description: "Eye-catching banners and signs for events and promotions",
      icon: "flag",
      link: "/services/banners-signs",
    },
    {
      title: "Photo Prints",
      description: "Premium photo prints in various sizes and finishes",
      icon: "image",
      link: "/services/photo-prints",
    },
  ],
  testimonials: [
    {
      quote: "Xprint has revolutionized how we handle our printing needs. Fast, reliable, and hassle-free!",
      author: "Sarah Johnson",
      company: "Marketing Director, TechSolutions Inc.",
      image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150",
    },
    {
      quote: "As a small business owner, finding reliable print services was always a challenge until I discovered Xprint.",
      author: "Michael Chen",
      company: "Founder, Artisan Café",
      image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150",
    },
    {
      quote: "The quality and consistency across all our print materials have improved dramatically since we started using Xprint.",
      author: "Emma Rodriguez",
      company: "Event Coordinator, Global Events",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150",
    },
  ],
  aboutUs: {
    mission: "To connect people with high-quality, convenient printing services through our network of trusted local print shops.",
    vision: "Creating a world where professional printing is accessible to everyone, anywhere, anytime.",
    values: [
      {
        title: "Quality",
        description: "We ensure high standards in every print job through our network of verified vendors.",
      },
      {
        title: "Convenience",
        description: "We make printing services accessible with just a few clicks, saving you time and effort.",
      },
      {
        title: "Community",
        description: "We support local print shops and help them grow their business through our platform.",
      },
      {
        title: "Innovation",
        description: "We continuously improve our platform to enhance the printing experience for everyone.",
      },
    ],
    team: [
      {
        name: "David Lawrence",
        position: "CEO & Co-Founder",
        bio: "Former print shop owner passionate about modernizing the printing industry.",
        image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150",
      },
      {
        name: "Michelle Wang",
        position: "CTO & Co-Founder",
        bio: "Tech innovator with experience building marketplace platforms.",
        image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150",
      },
      {
        name: "James Wilson",
        position: "COO",
        bio: "Operations expert with a background in logistics and supply chain management.",
        image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=150",
      },
      {
        name: "Lisa Thompson",
        position: "Head of Vendor Relations",
        bio: "Dedicated to building strong relationships with print vendors across the country.",
        image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150",
      },
    ],
  },
  pricingPlans: {
    customer: {
      title: "Customer Plans",
      description: "No subscription required for customers. Pay only for the services you order.",
      plans: [
        {
          title: "Basic",
          price: "Free",
          features: [
            "Access to all print services",
            "Order tracking",
            "Messaging with vendors",
            "Basic file storage",
          ],
          recommended: false,
        },
        {
          title: "Premium",
          price: "$9.99/month",
          features: [
            "All Basic features",
            "Priority customer support",
            "Exclusive discounts",
            "Advanced file storage",
            "Order history analytics",
          ],
          recommended: true,
        },
      ],
    },
    vendor: {
      title: "Vendor Plans",
      description: "Choose the plan that works best for your print business.",
      plans: [
        {
          title: "Basic",
          price: "$29/month",
          commission: "10% per order",
          features: [
            "Business profile listing",
            "Order management system",
            "Customer messaging",
            "Basic analytics",
            "5 service listings",
          ],
          recommended: false,
        },
        {
          title: "Premium",
          price: "$79/month",
          commission: "8% per order",
          features: [
            "All Basic features",
            "Featured in search results",
            "Advanced analytics",
            "20 service listings",
            "Custom storefront",
            "Priority support",
          ],
          recommended: true,
        },
        {
          title: "Enterprise",
          price: "$199/month",
          commission: "5% per order",
          features: [
            "All Premium features",
            "Unlimited service listings",
            "API integration",
            "Dedicated account manager",
            "Custom reporting",
            "Lowest commission rate",
          ],
          recommended: false,
        },
      ],
    },
  },
  faqs: [
    {
      question: "How do I find a print shop near me?",
      answer: "Use our location-based search feature on the homepage. Enter your location or allow the site to access your location to find print shops nearby.",
      category: "customer",
    },
    {
      question: "What file formats are accepted for printing?",
      answer: "Most print shops accept PDF, JPEG, PNG, and TIFF files. Some vendors also accept native files from design software like Adobe InDesign, Illustrator, and Photoshop.",
      category: "customer",
    },
    {
      question: "How do I track my order?",
      answer: "Once you place an order, you can track its status in real-time from your customer dashboard under 'My Orders'.",
      category: "customer",
    },
    {
      question: "How do payments work?",
      answer: "Payments are processed securely through our platform. You can pay using credit/debit cards or PayPal. Funds are released to vendors after order completion.",
      category: "customer",
    },
    {
      question: "How do I sign up as a print vendor?",
      answer: "Click on 'Become a Vendor' in the navigation menu and follow the registration process. You'll need to provide business details and select a subscription plan.",
      category: "vendor",
    },
    {
      question: "What commission does Xprint charge?",
      answer: "Commission rates vary based on your subscription plan: 10% for Basic, 8% for Premium, and 5% for Enterprise plans.",
      category: "vendor",
    },
    {
      question: "How quickly will I receive payments for completed orders?",
      answer: "Payments are processed within 3-5 business days after an order is marked as completed and the customer has confirmed receipt.",
      category: "vendor",
    },
    {
      question: "Can I offer discounts to my customers?",
      answer: "Yes, you can create custom discounts and promotions through your vendor dashboard under 'Services'.",
      category: "vendor",
    },
  ],
};