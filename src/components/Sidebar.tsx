import { Link, useLocation } from "react-router-dom";
import { Home, Server, UserPlus, Gamepad2 } from "lucide-react";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

const Sidebar = () => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  const links = [
    { path: "/", icon: Home, label: "Home" },
    { path: "/servers", icon: Server, label: "Servers" },
    { path: "/register", icon: UserPlus, label: "Register" },
  ];
  
  return (
    <aside className="fixed right-0 top-0 h-screen w-20 bg-secondary/80 backdrop-blur-xl border-l border-border z-50 flex flex-col items-center py-8">
      {/* Logo */}
      <div className="mb-12">
        <div className="w-12 h-12 rounded-xl bg-gradient-bg flex items-center justify-center">
          <Gamepad2 className="h-6 w-6 text-background" />
        </div>
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
      
      {/* Footer indicator */}
      <div className="mt-auto">
        <div className="w-2 h-2 rounded-full bg-success animate-pulse" />
      </div>
    </aside>
  );
};

export default Sidebar;
