"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  Printer, Menu, X, ChevronDown, User, Search, ShoppingCart, Sun, Moon, LogIn 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { navLinks } from "@/config/site";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function SiteHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  
  // Check if we're on the homepage
  const isHomepage = pathname === "/";
  
  // Handle scroll effect for transparent header on homepage
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };
    
    window.addEventListener("scroll", handleScroll);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  
  // Determine header background style based on scroll position and current page
  const headerStyle = () => {
    if (isHomepage && !isScrolled && !isMobileMenuOpen) {
      return "bg-transparent";
    } else if (isScrolled || isMobileMenuOpen) {
      return "bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-sm";
    } else {
      return "bg-white dark:bg-gray-900";
    }
  };
  
  // Determine text color based on scroll position and current page
  const textStyle = () => {
    if (isHomepage && !isScrolled && !isMobileMenuOpen) {
      return "text-white";
    } else {
      return "text-gray-900 dark:text-white";
    }
  };
  
  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${headerStyle()}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 md:h-20 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link 
              href="/" 
              className={`flex items-center font-bold text-xl ${textStyle()} transition-colors`}
            >
              <Printer className="h-6 w-6 mr-2" />
              <span>Xprint</span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navLinks.main.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-2 text-sm font-medium rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 ${
                  pathname === link.href
                    ? "text-blue-600 dark:text-blue-400"
                    : textStyle()
                } transition-colors`}
              >
                {link.title}
              </Link>
            ))}
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button 
                  variant="ghost" 
                  size="sm"
                  className={`flex items-center ${textStyle()} transition-colors`}
                >
                  Solutions
                  <ChevronDown className="ml-1 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem asChild>
                  <Link href="/solutions/business">For Business</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/solutions/education">For Education</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/solutions/personal">For Personal Use</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>
          
          {/* Right side actions */}
          <div className="flex items-center gap-2 md:gap-4">
            <div className="hidden md:flex items-center gap-1">
              <Button 
                variant="ghost" 
                size="sm" 
                className={`${textStyle()} transition-colors hidden lg:flex`}
                asChild
              >
                <Link href="/customer/search">
                  <Search className="h-4 w-4 mr-1" />
                  Find a Printer
                </Link>
              </Button>
              
              <ThemeToggle />
              
              <Button 
                variant="ghost" 
                size="sm" 
                className={`${textStyle()} transition-colors`}
                asChild
              >
                <Link href="/login">
                  <LogIn className="h-4 w-4 mr-1" />
                  Log In
                </Link>
              </Button>
            </div>
            
            <Button 
              className="hidden md:inline-flex" 
              size="sm"
              asChild
            >
              <Link href="/signup">
                Sign Up
              </Link>
            </Button>
            
            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMobileMenuOpen ? (
                <X className={`h-6 w-6 ${textStyle()}`} />
              ) : (
                <Menu className={`h-6 w-6 ${textStyle()}`} />
              )}
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <nav className="flex flex-col space-y-2">
              {navLinks.main.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-2 rounded-md ${
                    pathname === link.href
                      ? "bg-gray-100 dark:bg-gray-800 text-blue-600 dark:text-blue-400"
                      : "text-gray-900 dark:text-white"
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.title}
                </Link>
              ))}
              
              <Link
                href="/solutions"
                className="px-3 py-2 rounded-md text-gray-900 dark:text-white"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Solutions
              </Link>
              
              <div className="pt-4 border-t border-gray-200 dark:border-gray-800 flex flex-col space-y-2">
                <Link
                  href="/login"
                  className="px-3 py-2 rounded-md text-gray-900 dark:text-white flex items-center"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <LogIn className="h-5 w-5 mr-2" />
                  Log In
                </Link>
                
                <Link
                  href="/customer/search"
                  className="px-3 py-2 rounded-md text-gray-900 dark:text-white flex items-center"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Search className="h-5 w-5 mr-2" />
                  Find a Printer
                </Link>
                
                <div className="px-3 py-2 flex items-center justify-between">
                  <span className="text-gray-900 dark:text-white">Theme</span>
                  <ThemeToggle />
                </div>
                
                <Button 
                  className="mt-2" 
                  asChild
                >
                  <Link 
                    href="/signup" 
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Sign Up
                  </Link>
                </Button>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}