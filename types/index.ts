// Common Types
export type User = {
  id: string;
  name: string;
  email: string;
  role: 'customer' | 'vendor' | 'admin';
  profileImage?: string;
  createdAt: Date;
};

export type Customer = User & {
  role: 'customer';
  favoriteVendors: string[];
  savedAddresses: Address[];
  paymentMethods: PaymentMethod[];
};

export type Vendor = User & {
  role: 'vendor';
  businessName: string;
  businessDescription: string;
  services: Service[];
  location: Address;
  operatingHours: OperatingHours[];
  rating: number;
  reviewCount: number;
  subscription: 'basic' | 'premium' | 'enterprise';
};

export type Admin = User & {
  role: 'admin';
  permissions: string[];
};

export type Address = {
  id: string;
  line1: string;
  line2?: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
  isPrimary?: boolean;
};

export type PaymentMethod = {
  id: string;
  type: 'credit' | 'debit' | 'paypal';
  lastFour?: string;
  expiryDate?: string;
  isPrimary: boolean;
};

export type Service = {
  id: string;
  name: string;
  description: string;
  price: number;
  turnaroundTime: string;
  category: string;
};

export type OperatingHours = {
  day: 'monday' | 'tuesday' | 'wednesday' | 'thursday' | 'friday' | 'saturday' | 'sunday';
  open: string;
  close: string;
  isClosed: boolean;
};

export type Order = {
  id: string;
  customerId: string;
  vendorId: string;
  services: OrderService[];
  status: 'pending' | 'accepted' | 'in_progress' | 'ready' | 'completed' | 'cancelled';
  totalPrice: number;
  createdAt: Date;
  updatedAt: Date;
  pickupTime?: Date;
  files: FileItem[];
  messages: Message[];
};

export type OrderService = {
  serviceId: string;
  serviceName: string;
  quantity: number;
  price: number;
  specifications?: string;
};

export type FileItem = {
  id: string;
  name: string;
  size: number;
  url: string;
  uploadedAt: Date;
};

export type Message = {
  id: string;
  senderId: string;
  senderRole: 'customer' | 'vendor' | 'admin';
  content: string;
  createdAt: Date;
  isRead: boolean;
};

export type Review = {
  id: string;
  orderId: string;
  customerId: string;
  vendorId: string;
  rating: number;
  comment: string;
  createdAt: Date;
};

export type BlogPost = {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  coverImage: string;
  publishedAt: Date;
  tags: string[];
};

export type FAQ = {
  id: string;
  question: string;
  answer: string;
  category: string;
};

export type SiteConfig = {
  siteName: string;
  description: string;
  url: string;
  links: {
    twitter: string;
    facebook: string;
    instagram: string;
    linkedin: string;
  }
};

export type Notification = {
  id: string;
  userId: string;
  title: string;
  message: string;
  type: 'info' | 'success' | 'warning' | 'error';
  isRead: boolean;
  createdAt: Date;
  link?: string;
};