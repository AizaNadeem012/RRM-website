import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Menu,
  X,
  Facebook,
  Instagram,
  Search,
  Star,
  ChevronDown,
} from "lucide-react";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

/* ---------------- DATA ---------------- */

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

/* ---------------- COMPONENT ---------------- */

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
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

        {/* TOP BAR (DESKTOP ONLY) */}
        <div className="hidden md:flex justify-between items-center py-2 bg-white rounded-b-xl shadow-sm px-4">
          <div className="flex items-center gap-4 text-gray-600">
            <Facebook size={18} />
            <Instagram size={18} />
          </div>

          <div className="relative w-64">
            <input
              type="text"
              placeholder="Search services..."
              className="w-full pl-10 pr-4 py-2 rounded-md bg-gray-100 border text-sm"
            />
            <Search className="absolute left-3 top-2.5 text-gray-500" size={16} />
          </div>
        </div>

        {/* MAIN BAR */}
        <div className="flex items-center justify-between h-16 md:h-20">

          {/* LOGO */}
          <Link to="/" className="flex items-center">
            <img
              src="/logo.webp"
              alt="Logo"
              className="h-10 md:h-20 w-auto object-contain"
            />
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden lg:flex items-center gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={cn(
                  "px-4 py-2 rounded-md text-sm transition",
                  location.pathname === link.href
                    ? "bg-[#6A2FA3]/20 text-[#D6B7FF]"
                    : "text-gray-200 hover:bg-[#6A2FA3]/10 hover:text-[#D6B7FF]"
                )}
              >
                {link.label}
              </Link>
            ))}

            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent text-gray-200">
                    Services
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="w-[320px] p-4 grid gap-2">
                      {servicePages.map((s) => (
                        <li key={s.href}>
                          <NavigationMenuLink asChild>
                            <Link
                              to={s.href}
                              className="block p-3 rounded-md hover:bg-accent text-sm"
                            >
                              {s.label}
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
                className="px-4 py-2 rounded-md text-sm text-gray-200 hover:bg-[#6A2FA3]/10"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* DESKTOP CTA */}
          <div className="hidden md:flex gap-3">
            <Button asChild className="bg-gradient-to-r from-[#6A2FA3] to-[#8B45CC]">
              <Link to="/contact">Get Free Quote</Link>
            </Button>
          </div>

          {/* MOBILE RIGHT */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href="https://share.google/QUZ3caSgzonO6nfct"
              target="_blank"
              className="flex items-center gap-1 bg-white px-2 py-1 rounded-md shadow"
            >
              <img src="/google-logo.png" className="h-4 w-4" />
              <Star size={12} className="text-yellow-400" />
              <Star size={12} className="text-yellow-400" />
              <Star size={12} className="text-yellow-400" />
            </a>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md bg-[#6A2FA3] text-white"
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* MOBILE MENU */}
        <div
          className={cn(
            "lg:hidden overflow-hidden transition-[max-height,opacity] duration-300",
            isOpen ? "max-h-[1000px] opacity-100 pb-4" : "max-h-0 opacity-0"
          )}
        >
          <nav className="flex flex-col gap-1">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                to={l.href}
                onClick={() => setIsOpen(false)}
                className="px-4 py-3 text-gray-200 hover:bg-[#6A2FA3]/20 rounded-md"
              >
                {l.label}
              </Link>
            ))}

            {/* SERVICES TOGGLE */}
            <button
              onClick={() => setServicesOpen(!servicesOpen)}
              className="flex justify-between items-center px-4 py-3 text-gray-200"
            >
              Services
              <ChevronDown
                className={cn(
                  "transition-transform",
                  servicesOpen && "rotate-180"
                )}
              />
            </button>

            {servicesOpen && (
              <div className="pl-4">
                {servicePages.map((s) => (
                  <Link
                    key={s.href}
                    to={s.href}
                    onClick={() => setIsOpen(false)}
                    className="block px-4 py-2 text-sm text-gray-300 hover:text-white"
                  >
                    {s.label}
                  </Link>
                ))}
              </div>
            )}

            {navLinksAfter.map((l) => (
              <Link
                key={l.href}
                to={l.href}
                onClick={() => setIsOpen(false)}
                className="px-4 py-3 text-gray-200 hover:bg-[#6A2FA3]/20 rounded-md"
              >
                {l.label}
              </Link>
            ))}

            <div className="px-4 pt-3">
              <Button asChild className="w-full bg-gradient-to-r from-[#6A2FA3] to-[#8B45CC]">
                <Link to="/contact">Get Free Quote</Link>
              </Button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
