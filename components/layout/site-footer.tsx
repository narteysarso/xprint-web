import Link from "next/link";
import { Printer, Twitter, Facebook, Instagram, Linkedin } from "lucide-react";
import { siteConfig, navLinks } from "@/config/site";

export function SiteFooter() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {/* Logo and description */}
          <div className="col-span-2">
            <Link href="/" className="flex items-center">
              <Printer className="h-6 w-6 text-blue-600 dark:text-blue-400 mr-2" />
              <span className="text-xl font-bold text-gray-900 dark:text-white">Xprint</span>
            </Link>
            
            <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-md">
              Connect with local print shops and get high-quality printing services delivered to your doorstep or ready for pickup.
            </p>
            
            <div className="mt-6 flex space-x-4">
              <Link 
                href={siteConfig.links.twitter} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-blue-500 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              
              <Link 
                href={siteConfig.links.facebook} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-blue-500 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
              >
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              
              <Link 
                href={siteConfig.links.instagram} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-blue-500 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              
              <Link 
                href={siteConfig.links.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-blue-500 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>
          
          {/* Footer links */}
          {navLinks.footer.map((column, idx) => (
            <div key={idx} className="col-span-1">
              <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider">
                {column.title}
              </h3>
              
              <ul className="mt-4 space-y-3">
                {column.links.map((link, linkIdx) => (
                  <li key={linkIdx}>
                    <Link 
                      href={link.href} 
                      className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              &copy; {currentYear} Xprint. All rights reserved.
            </p>
            
            <div className="mt-4 md:mt-0 flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400">
              <Link 
                href="/terms" 
                className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                Terms of Service
              </Link>
              <Link 
                href="/privacy" 
                className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                Privacy Policy
              </Link>
              <Link 
                href="/cookies" 
                className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}