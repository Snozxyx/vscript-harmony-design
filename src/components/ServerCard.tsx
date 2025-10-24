import { Users, Wifi, MapPin, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";

interface ServerCardProps {
  id: string;
  name: string;
  players: number;
  maxPlayers: number;
  gameMode: string;
  map: string;
  ping: number;
  isFavorite?: boolean;
  banner?: string;
  logo?: string;
}

const ServerCard = ({
  id,
  name,
  players,
  maxPlayers,
  gameMode,
  map,
  ping,
  isFavorite,
  banner,
  logo,
}: ServerCardProps) => {
  const fillPercentage = (players / maxPlayers) * 100;
  
  return (
    <div className="group relative">
      {/* Glow effect on hover */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-accent to-primary rounded-2xl opacity-0 group-hover:opacity-20 blur transition-all duration-300" />
      
      <Link to={`/server/${id}`} className="block relative">
        <div className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl overflow-hidden transition-all duration-300 group-hover:border-accent/50 group-hover:translate-y-[-4px]">
          {/* Banner */}
          <div className="relative h-32 overflow-hidden">
            <img 
              src={banner || "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&q=80"} 
              alt={`${name} banner`}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-card/90 to-transparent" />
            
            {/* Logo */}
            {logo && (
              <div className="absolute -bottom-8 left-6 w-16 h-16 rounded-xl border-2 border-border bg-card overflow-hidden shadow-lg">
                <img 
                  src={logo} 
                  alt={`${name} logo`}
                  className="w-full h-full object-cover"
                />
              </div>
            )}
          </div>
          
          <div className="p-6 pt-10">
            {/* Header */}
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1 min-w-0">
                <h3 className="text-xl font-serif font-bold mb-2 truncate group-hover:text-accent transition-colors">
                  {name}
                </h3>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="text-xs">
                    {gameMode}
                  </Badge>
                  {isFavorite && (
                    <Badge className="bg-accent/10 text-accent border-accent/20 text-xs">
                      ★ Favorite
                    </Badge>
                  )}
                </div>
              </div>
            </div>
          
          {/* Stats Row */}
          <div className="grid grid-cols-3 gap-4 mb-4">
            <div className="flex items-center gap-2 text-sm">
              <Users className="h-4 w-4 text-accent" />
              <span className="text-foreground font-medium">{players}</span>
              <span className="text-muted-foreground">/ {maxPlayers}</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Wifi className="h-4 w-4 text-success" />
              <span className="text-foreground font-medium">{ping}ms</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <MapPin className="h-4 w-4 text-primary" />
              <span className="text-muted-foreground truncate">{map}</span>
            </div>
          </div>
          
          {/* Progress Bar */}
          <div className="mb-4">
            <div className="flex items-center justify-between mb-2 text-xs">
              <span className="text-muted-foreground">Population</span>
              <span className="text-foreground font-medium">{fillPercentage.toFixed(0)}%</span>
            </div>
            <div className="h-2 bg-muted/30 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-accent to-primary transition-all duration-500"
                style={{ width: `${fillPercentage}%` }}
              />
            </div>
          </div>
          
            {/* Action Button */}
            <Button 
              className="w-full gap-2 group-hover:shadow-lg group-hover:shadow-accent/20 transition-all" 
              size="sm"
            >
              <Play className="h-4 w-4" />
              Join Server
            </Button>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ServerCard;
