"use client";
import { Button } from "@/app/Components/ui/button";
import { ChevronDown, Menu, X } from "lucide-react";
import { useState } from "react";
import { ThemeToggle } from "./theme-toggle";
import { useRouter } from "next/navigation";




const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const router = useRouter();

  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-6xl">
      <nav className="flex items-center justify-between px-6 py-3 bg-card/95 backdrop-blur-md rounded-2xl border border-border">

        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-primary animate-pulse" />
          <span className="text-lg font-bold text-foreground">Api Watch</span>
        </div>


        <div className="hidden md:flex items-center gap-6">
          <NavItem label="Features" hasDropdown />  
          <NavItem label="Solutions" hasDropdown />
          <NavItem label="Enterprise" />
          <NavItem label="Resources" hasDropdown />
          <NavItem label="Pricing" />
          
        </div>

        <div className="hidden md:flex items-center gap-3">
          <Button onClick={() => router.push("/SignIn")} variant="ghost" className="text-foreground hover:text-foreground hover:bg-muted cursor-pointer duration-300 ease-in-out">
            Log in
          </Button>
          <Button onClick={() => router.push("/SignUp")} className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium px-5 cursor-pointer duration-300 ease-in-out">
            Register for free
          </Button>
          <div className=" w-10 h-10"><ThemeToggle/></div>
        </div>

      <div className="md:hidden flex items-center gap-2">
          <div className="w-10 h-10"><ThemeToggle/></div>
          <button
            className="p-2 text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
      </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-2 p-4 bg-card/95 backdrop-blur-md rounded-2xl border border-border transition-all duration-300 ease-in-out">
          <div className="flex flex-col gap-4">
            <NavItem label="Features" hasDropdown />
            <NavItem label="Solutions" hasDropdown />
            <NavItem label="Enterprise" />
            <NavItem label="Resources" hasDropdown />
            <NavItem label="Pricing" />
            
          
            
            <div className="flex flex-col gap-2 pt-4 border-t border-border">
              <Button variant="ghost" className="w-full justify-center text-foreground hover:text-foreground hover:bg-muted cursor-pointer duration-300 ease-in-out">Log in</Button>
              <Button className="w-full bg-primary hover:bg-primary/90 duration-300 ease-in-out">Register for free</Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

const NavItem = ({ label, hasDropdown = false }: { label: string; hasDropdown?: boolean }) => (
  <button className="flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors text-sm font-medium cursor-pointer">
    {label}
    {hasDropdown && <ChevronDown size={16} />}
  </button>
);

export default Header;
