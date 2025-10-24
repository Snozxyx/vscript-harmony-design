import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Home, Server, UserPlus, Gamepad2 } from "lucide-react";
import { Tooltip, TooltipContent, TooltipTrigger, TooltipProvider } from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
import RegisterModal from "@/components/RegisterModal";

const Sidebar = () => {
  const location = useLocation();
  const [registerOpen, setRegisterOpen] = useState(false);
  
  const isActive = (path: string) => location.pathname === path;
  
  const links = [
    { path: "/", icon: Home, label: "Home" },
    { path: "/servers", icon: Server, label: "Servers" },
  ];
  
  return (
    <>
      <RegisterModal open={registerOpen} onOpenChange={setRegisterOpen} />
      <TooltipProvider>
        <aside className="fixed right-0 top-0 h-screen w-20 bg-secondary/80 backdrop-blur-xl border-l border-border z-50 flex flex-col items-center py-8">
          {/* Logo */}
          <div className="mb-12">
            <Tooltip>
              <TooltipTrigger asChild>
                <Link to="/">
                  <div className="w-12 h-12 rounded-xl bg-gradient-bg flex items-center justify-center hover:scale-105 transition-transform">
                    <Gamepad2 className="h-6 w-6 text-background" />
                  </div>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="left">
                <p className="font-serif font-bold">GG Multiplayer</p>
              </TooltipContent>
            </Tooltip>
          </div>
          
          {/* Navigation Links */}
          <nav className="flex-1 flex flex-col gap-6">
            {links.map((link) => (
              <Tooltip key={link.path}>
                <TooltipTrigger asChild>
                  <Link
                    to={link.path}
                    className={`
                      w-12 h-12 rounded-xl flex items-center justify-center
                      transition-all duration-300 relative group
                      ${
                        isActive(link.path)
                          ? "bg-accent text-background shadow-lg shadow-accent/30"
                          : "hover:bg-card text-muted-foreground hover:text-foreground"
                      }
                    `}
                  >
                    <link.icon className="h-5 w-5" />
                    {isActive(link.path) && (
                      <div className="absolute -left-1 top-1/2 -translate-y-1/2 w-1 h-8 bg-accent rounded-r-full" />
                    )}
                  </Link>
                </TooltipTrigger>
                <TooltipContent side="left">
                  <p>{link.label}</p>
                </TooltipContent>
              </Tooltip>
            ))}
          </nav>
          
          {/* Register Button */}
          <div className="mt-auto mb-4">
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  onClick={() => setRegisterOpen(true)}
                  size="icon"
                  className="w-12 h-12 rounded-xl shadow-lg shadow-accent/20 hover:shadow-accent/30"
                >
                  <UserPlus className="h-5 w-5" />
                </Button>
              </TooltipTrigger>
              <TooltipContent side="left">
                <p>Register</p>
              </TooltipContent>
            </Tooltip>
          </div>
          
          {/* Footer indicator */}
          <div>
            <div className="w-2 h-2 rounded-full bg-success animate-pulse" />
          </div>
        </aside>
      </TooltipProvider>
    </>
  );
};

export default Sidebar;
