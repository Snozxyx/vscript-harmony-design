import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Users, Wifi, Clock, Star, Shield, Zap } from "lucide-react";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const ServerDetail = () => {
  const { id } = useParams();
  
  // Mock server data
  const server = {
    id,
    name: "Los Santos Roleplay",
    players: 128,
    maxPlayers: 200,
    gameMode: "Roleplay",
    map: "Los Santos",
    ping: 45,
    description: "Experience the most immersive roleplay server in FiveM. Create your own story, join factions, start businesses, and interact with hundreds of players in a living, breathing Los Santos. Our economy system, custom jobs, and dedicated staff team ensure you have the best RP experience.",
    tags: ["Economy", "Custom Jobs", "Active Staff", "Whitelist"],
    uptime: "99.8%",
    version: "1.0.5",
    discord: "discord.gg/example",
  };
  
  const fillPercentage = (server.players / server.maxPlayers) * 100;
  
  const features = [
    { icon: Shield, label: "Anti-Cheat", value: "Enabled" },
    { icon: Zap, label: "Server Version", value: server.version },
    { icon: Clock, label: "Uptime", value: server.uptime },
  ];
  
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <section className="container mx-auto px-4 py-12">
        <Link to="/servers">
          <Button variant="ghost" className="mb-6 gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to Servers
          </Button>
        </Link>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            <div className="card-elevated p-8">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h1 className="text-4xl font-serif font-black mb-2 gradient-white-orange">
                    {server.name}
                  </h1>
                  <div className="flex items-center gap-4 text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Users className="h-4 w-4" />
                      {server.players}/{server.maxPlayers} Players
                    </span>
                    <span className="flex items-center gap-1">
                      <Wifi className="h-4 w-4" />
                      {server.ping}ms
                    </span>
                  </div>
                </div>
                <Button size="icon" variant="outline">
                  <Star className="h-5 w-5" />
                </Button>
              </div>
              
              {/* Player Count Bar */}
              <div className="mb-6">
                <div className="flex items-center justify-between mb-2 text-sm">
                  <span className="text-muted-foreground">Server Population</span>
                  <span className="font-medium">{fillPercentage.toFixed(0)}% Full</span>
                </div>
                <div className="h-3 bg-muted rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-bg transition-all duration-300"
                    style={{ width: `${fillPercentage}%` }}
                  />
                </div>
              </div>
              
              <div className="flex gap-2 mb-6">
                {server.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
              
              <div>
                <h2 className="text-xl font-serif font-bold mb-3">About</h2>
                <p className="text-muted-foreground leading-relaxed">
                  {server.description}
                </p>
              </div>
            </div>
            
            {/* Server Info */}
            <div className="card-elevated p-8">
              <h2 className="text-xl font-serif font-bold mb-6">Server Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Game Mode</p>
                  <p className="font-medium">{server.gameMode}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Map</p>
                  <p className="font-medium">{server.map}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Discord</p>
                  <p className="font-medium text-accent">{server.discord}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Region</p>
                  <p className="font-medium">North America</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Sidebar */}
          <div className="space-y-6">
            <div className="card-elevated p-6">
              <Button className="w-full mb-4" size="lg">
                Join Server
              </Button>
              <Button variant="outline" className="w-full">
                Copy Server IP
              </Button>
            </div>
            
            <div className="card-elevated p-6 space-y-4">
              {features.map((feature) => (
                <div key={feature.label} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <feature.icon className="h-5 w-5 text-accent" />
                    <span className="text-sm text-muted-foreground">{feature.label}</span>
                  </div>
                  <span className="font-medium text-sm">{feature.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServerDetail;
