export const PRINTING_SERVICES = [
  {
    id: "document-printing",
    name: "Document Printing",
    description: "Professional printing for documents, reports, and presentations",
    icon: "file-text",
    variants: [
      { name: "Black & White", priceRange: "$0.10 - $0.25 per page" },
      { name: "Color", priceRange: "$0.50 - $1.00 per page" },
      { name: "Double-sided", priceRange: "Additional $0.05 per page" },
    ],
    image: "https://images.pexels.com/photos/7014337/pexels-photo-7014337.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: "photo-printing",
    name: "Photo Printing",
    description: "High-quality prints for your digital photos in various sizes and finishes",
    icon: "image",
    // variants: [
    //   { name: "4×6″", priceRange: "$0.25 - $0.50 per print" },
    //   { name: "5×7″", priceRange: "$1.00 - $2.00 per print" },
    //   { name: "8×10″", priceRange: "$3.00 - $5.00 per print" },
    //   { name: "Canvas Prints", priceRange: "$40.00+ per print" },
    // ],
    image: "https://images.pexels.com/photos/3841338/pexels-photo-3841338.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: "business-cards",
    name: "Business Cards",
    description: "Professional business cards with various paper stocks and finishes",
    icon: "credit-card",
    // variants: [
    //   { name: "Standard", priceRange: "$20 - $35 per 100" },
    //   { name: "Premium", priceRange: "$35 - $50 per 100" },
    //   { name: "Luxury", priceRange: "$50+ per 100" },
    // ],
    image: "https://images.pexels.com/photos/6177639/pexels-photo-6177639.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: "posters",
    name: "Posters & Banners",
    description: "Large format printing for posters, banners, and signage",
    icon: "flag",
    // variants: [
    //   { name: "Posters", priceRange: "$15 - $30 per poster" },
    //   { name: "Banners", priceRange: "$5 - $10 per square foot" },
    //   { name: "Retractable Banners", priceRange: "$80 - $150 each" },
    // ],
    image: "https://images.pexels.com/photos/5696555/pexels-photo-5696555.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: "brochures",
    name: "Brochures & Flyers",
    description: "Marketing materials including brochures, flyers, and leaflets",
    icon: "book-open",
    // variants: [
    //   { name: "Flyers", priceRange: "$100 - $200 per 500" },
    //   { name: "Bi-fold Brochures", priceRange: "$200 - $300 per 500" },
    //   { name: "Tri-fold Brochures", priceRange: "$250 - $350 per 500" },
    // ],
    image: "https://images.pexels.com/photos/5699516/pexels-photo-5699516.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: "stickers",
    name: "Stickers & Labels",
    description: "Custom stickers and labels in various shapes and sizes",
    icon: "tag",
    // variants: [
    //   { name: "Sheet Stickers", priceRange: "$15 - $25 per sheet" },
    //   { name: "Die-Cut Stickers", priceRange: "$50 - $100 per 100" },
    //   { name: "Roll Labels", priceRange: "$30 - $60 per roll" },
    // ],
    image: "https://images.pexels.com/photos/5611216/pexels-photo-5611216.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: "invitations",
    name: "Invitations & Cards",
    description: "Custom invitations and greeting cards for special occasions",
    icon: "mail",
    // variants: [
    //   { name: "Wedding Invitations", priceRange: "$2 - $5 per card" },
    //   { name: "Greeting Cards", priceRange: "$1.50 - $3 per card" },
    //   { name: "Holiday Cards", priceRange: "$1 - $2.50 per card" },
    // ],
    image: "https://images.pexels.com/photos/5701266/pexels-photo-5701266.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: "custom",
    name: "Custom Orders",
    description: "Specialized printing services for unique requirements",
    icon: "settings",
    // variants: [
    //   { name: "T-shirt Printing", priceRange: "Varies" },
    //   { name: "3D Printing", priceRange: "Varies" },
    //   { name: "Promotional Items", priceRange: "Varies" },
    // ],
    image: "https://images.pexels.com/photos/6567607/pexels-photo-6567607.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
];

export const BLOG_CATEGORIES = [
  "Printing Tips",
  "Design Inspiration",
  "Industry News",
  "Case Studies",
  "Tutorials",
];

export const CITIES = [
  "Kumasi",
  "Accra",
  "Winneba",
  "Cape Coast",
  "Takoradi",
  "Tamale",
  "Sunyani",
  "Bolgatanga",
  "Ho",
  "Koforidua",
];

export const FEATURED_VENDORS = [
  {
    id: "v1",
    businessName: "PrintMaster Pro",
    location: "New York, NY",
    rating: 4.8,
    reviewCount: 237,
    services: ["Document Printing", "Business Cards", "Posters"],
    image: "https://images.pexels.com/photos/1170412/pexels-photo-1170412.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: "v2",
    businessName: "Ink & Paper Co.",
    location: "Los Angeles, CA",
    rating: 4.7,
    reviewCount: 189,
    services: ["Photo Printing", "Invitations", "Brochures"],
    image: "https://images.pexels.com/photos/7319094/pexels-photo-7319094.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: "v3",
    businessName: "QuickPrint Solutions",
    location: "Chicago, IL",
    rating: 4.9,
    reviewCount: 312,
    services: ["Document Printing", "Stickers", "Custom Orders"],
    image: "https://images.pexels.com/photos/3957616/pexels-photo-3957616.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: "v4",
    businessName: "Urban Printing Hub",
    location: "Houston, TX",
    rating: 4.6,
    reviewCount: 156,
    services: ["Business Cards", "Brochures", "Posters"],
    image: "https://images.pexels.com/photos/6953883/pexels-photo-6953883.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
];

export const DEMO_ORDERS = [
  {
    id: "ord-001",
    vendorName: "PrintMaster Pro",
    orderDate: "2025-05-10T14:30:00Z",
    status: "in_progress",
    totalPrice: 45.99,
    services: ["Document Printing (25 pages)", "Binding"],
  },
  {
    id: "ord-002",
    vendorName: "Ink & Paper Co.",
    orderDate: "2025-05-08T10:15:00Z",
    status: "ready",
    totalPrice: 75.50,
    services: ["Business Cards (100)", "Logo Design"],
  },
  {
    id: "ord-003",
    vendorName: "QuickPrint Solutions",
    orderDate: "2025-05-05T16:45:00Z",
    status: "completed",
    totalPrice: 120.00,
    services: ["Posters (5)", "Lamination"],
  },
];

export const ANALYTICS_DATA = {
  totalUsers: 15873,
  totalVendors: 1245,
  ordersCompleted: 25698,
  revenue: 1250750,
  growth: {
    users: 12.5,
    vendors: 8.3,
    orders: 15.7,
    revenue: 18.2,
  },
  recentActivity: [
    {
      type: "new_user",
      details: "New customer registered: John D.",
      time: "10 minutes ago",
    },
    {
      type: "new_vendor",
      details: "New vendor registered: City Prints",
      time: "25 minutes ago",
    },
    {
      type: "order_placed",
      details: "Order #12458 placed with PrintShop Express",
      time: "45 minutes ago",
    },
    {
      type: "order_completed",
      details: "Order #12445 marked as completed",
      time: "1 hour ago",
    },
    {
      type: "payment_received",
      details: "Payment of $125.50 received for order #12441",
      time: "2 hours ago",
    },
  ],
};