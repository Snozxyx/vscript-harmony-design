import { Users, Wifi } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface ServerCardProps {
  id: string;
  name: string;
  players: number;
  maxPlayers: number;
  gameMode: string;
  map: string;
  ping: number;
  isFavorite?: boolean;
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
}: ServerCardProps) => {
  const fillPercentage = (players / maxPlayers) * 100;
  
  return (
    <Link to={`/server/${id}`} className="block">
      <div className="card-elevated p-6 cursor-pointer group">
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <h3 className="text-xl font-serif font-bold mb-2 group-hover:text-accent transition-colors">
              {name}
            </h3>
            <div className="flex gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1">
                <Users className="h-4 w-4" />
                {players}/{maxPlayers}
              </span>
              <span className="flex items-center gap-1">
                <Wifi className="h-4 w-4" />
                {ping}ms
              </span>
            </div>
          </div>
          {isFavorite && (
            <div className="px-2 py-1 rounded bg-accent/10 text-accent text-xs font-medium">
              Favorite
            </div>
          )}
        </div>
        
        {/* Player Count Bar */}
        <div className="mb-4">
          <div className="h-2 bg-muted rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-bg transition-all duration-300"
              style={{ width: `${fillPercentage}%` }}
            />
          </div>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <p className="text-sm text-muted-foreground">Mode: {gameMode}</p>
            <p className="text-sm text-muted-foreground">Map: {map}</p>
          </div>
          <Button variant="default" size="sm">
            Join Server
          </Button>
        </div>
      </div>
    </Link>
  );
};

export default ServerCard;
