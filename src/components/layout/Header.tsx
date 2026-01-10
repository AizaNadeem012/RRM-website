import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Facebook, Instagram, Search, Star, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
];

const servicePages = [
  { href: "/services", label: "All Services" },
  { href: "/render-cleaning-golborne", label: "Render Cleaning - Golborne" },
  { href: "/render-cleaning-huyton", label: "Render Cleaning - Huyton" },
  { href: "/render-cleaning-liverpool", label: "Render Cleaning - Liverpool" },
  { href: "/render-cleaning-lymm", label: "Render Cleaning - Lymm" },
  { href: "/exterior-cleaning-companies-huyton", label: "Exterior Cleaning - Huyton" },
  { href: "/cladding-cleaning-golborne", label: "Cladding Cleaning - Golborne" },
  { href: "/driveway-cleaning-golborne", label: "Driveway Cleaning - Golborne" },
  { href: "/conservatory-cleaning-golborne", label: "Conservatory Cleaning - Golborne" },
  { href: "/roof-cleaning-golborne", label: "Roof Cleaning - Golborne" },
];

const navLinksAfter = [
  { href: "/areas", label: "Service Areas" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full backdrop-blur-xl transition-all duration-300 border-b border-gray-200",
        scrolled ? "bg-[#4A1E7A]/90 shadow-lg" : "bg-[#4A1E7A]/70"
      )}
    >
      <div className="container mx-auto px-4">

        {/* TOP BAR — PURE WHITE (hidden on mobile) */}
        <div className="hidden md:flex justify-between items-center py-2 bg-white text-gray-700 rounded-b-xl shadow-sm px-4">
          <div className="flex items-center gap-4">
            <a href="#" className="text-gray-600 hover:text-[#6A2FA3]">
              <Facebook size={18} />
            </a>
            <a href="#" className="text-gray-600 hover:text-[#6A2FA3]">
              <Instagram size={18} />
            </a>
          </div>

          <div className="relative w-64">
            <input
              type="text"
              placeholder="Search services..."
              className="w-full pl-10 pr-4 py-2 rounded-md bg-gray-100 border border-gray-300 text-gray-700 placeholder-gray-500 focus:outline-none focus:border-[#6A2FA3]"
            />
            <Search className="absolute left-3 top-2.5 text-gray-500" size={18} />
          </div>
        </div>

        {/* MAIN NAVBAR */}
        <div className="flex items-center justify-between h-16 md:h-20">

          {/* LOGO */}
          <Link to="/" className="flex items-center gap-3">
            <img
              src="/logo.webp"
              alt="R.R.M Logo"
              className="h-16 md:h-20 w-auto object-contain drop-shadow-lg"
            />
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden lg:flex items-center gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={cn(
                  "px-4 py-2 text-sm font-medium rounded-md transition-all",
                  location.pathname === link.href
                    ? "text-[#D6B7FF] bg-[#6A2FA3]/20"
                    : "text-gray-200 hover:text-[#D6B7FF] hover:bg-[#6A2FA3]/10"
                )}
              >
                {link.label}
              </Link>
            ))}
            
            {/* Services Dropdown */}
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent text-gray-200 hover:text-[#D6B7FF] hover:bg-[#6A2FA3]/10 data-[state=open]:text-[#D6B7FF] data-[state=open]:bg-[#6A2FA3]/20">
                    Services
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[300px] gap-2 p-4">
                      {servicePages.map((service) => (
                        <li key={service.href}>
                          <NavigationMenuLink asChild>
                            <Link
                              to={service.href}
                              className={cn(
                                "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                                location.pathname === service.href && "bg-accent/50"
                              )}
                            >
                              <div className="text-sm font-medium leading-none">{service.label}</div>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            
            {navLinksAfter.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={cn(
                  "px-4 py-2 text-sm font-medium rounded-md transition-all",
                  location.pathname === link.href
                    ? "text-[#D6B7FF] bg-[#6A2FA3]/20"
                    : "text-gray-200 hover:text-[#D6B7FF] hover:bg-[#6A2FA3]/10"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Button
              className="bg-gradient-to-r from-[#6A2FA3] to-[#8B45CC] text-white hover:scale-105 transition-transform shadow-lg"
              asChild
            >
              <Link to="/contact">Get Free Quote</Link>
            </Button>

            <a
              href="https://share.google/QUZ3caSgzonO6nfct"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-white text-gray-700 px-3 py-2 rounded-lg shadow hover:scale-105 transition-transform"
            >
              <img src="/google-logo.png" alt="Google" className="h-5 w-5 object-contain" />
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="text-yellow-400" />
                ))}
              </div>
            </a>
          </div>

          {/* MOBILE GOOGLE REVIEWS (visible next to hamburger) */}
          <a
            href="https://share.google/QUZ3caSgzonO6nfct"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 lg:hidden text-gray-700 bg-white px-2 py-1 rounded-lg shadow"
          >
            <img src="/google-logo.png" alt="Google" className="h-4 w-4 object-contain" />
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={12} className="text-yellow-400" />
            ))}
          </a>

          {/* MOBILE MENU ICON */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-white"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* MOBILE DROPDOWN MENU */}
        <div
          className={cn(
            "lg:hidden overflow-hidden transition-all",
            isOpen ? "max-h-[600px] py-4" : "max-h-0"
          )}
        >
          <div className="relative mb-4">
            <input
              type="text"
              placeholder="Search..."
              className="w-full pl-10 pr-4 py-2 rounded-md bg-gray-100 text-gray-700 border border-gray-300"
            />
            <Search className="absolute left-3 top-2.5 text-gray-600" size={18} />
          </div>

          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => setIsOpen(false)}
                className="px-4 py-3 text-gray-200 rounded-md hover:bg-[#6A2FA3]/20 hover:text-[#D6B7FF]"
              >
                {link.label}
              </Link>
            ))}
            
            {/* Mobile Services Submenu */}
            <div className="border-t border-gray-600 my-2 pt-2">
              <div className="px-4 py-2 text-xs font-semibold text-gray-400 uppercase tracking-wider">
                Services
              </div>
              {servicePages.map((service) => (
                <Link
                  key={service.href}
                  to={service.href}
                  onClick={() => setIsOpen(false)}
                  className="px-6 py-3 text-gray-200 rounded-md hover:bg-[#6A2FA3]/20 hover:text-[#D6B7FF] block"
                >
                  {service.label}
                </Link>
              ))}
            </div>
            
            {navLinksAfter.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => setIsOpen(false)}
                className="px-4 py-3 text-gray-200 rounded-md hover:bg-[#6A2FA3]/20 hover:text-[#D6B7FF]"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Buttons inside dropdown */}
          <div className="flex flex-col gap-2 mt-4 px-4">
            <Button
              className="w-full bg-gradient-to-r from-[#6A2FA3] to-[#8B45CC] text-white shadow-lg"
              asChild
            >
              <Link to="/contact">Get Free Quote</Link>
            </Button>

            <a
              href="https://share.google/QUZ3caSgzonO6nfct"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full bg-white text-gray-700 px-3 py-2 rounded-lg shadow hover:scale-105 transition-transform"
            >
              <img src="/google-logo.png" alt="Google" className="h-5 w-5 object-contain" />
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="text-yellow-400" />
                ))}
              </div>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
