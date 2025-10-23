import { Link, useLocation } from "react-router-dom";
import { Home, Server, UserPlus, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

const Navbar = () => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  const NavLinks = () => (
    <>
      <Link to="/">
        <Button
          variant={isActive("/") ? "default" : "ghost"}
          className="gap-2"
        >
          <Home className="h-4 w-4" />
          Home
        </Button>
      </Link>
      <Link to="/servers">
        <Button
          variant={isActive("/servers") ? "default" : "ghost"}
          className="gap-2"
        >
          <Server className="h-4 w-4" />
          Servers
        </Button>
      </Link>
      <Link to="/register">
        <Button
          variant={isActive("/register") ? "default" : "ghost"}
          className="gap-2"
        >
          <UserPlus className="h-4 w-4" />
          Register
        </Button>
      </Link>
    </>
  );
  
  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-secondary/95 backdrop-blur">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded bg-gradient-bg" />
            <span className="text-xl font-serif font-bold">FiveM</span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-2">
            <NavLinks />
          </div>
          
          {/* Mobile Navigation */}
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <div className="flex flex-col gap-4 mt-8">
                <NavLinks />
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
