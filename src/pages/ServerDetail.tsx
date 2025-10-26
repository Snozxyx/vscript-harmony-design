import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Users, Wifi, Clock, Star, Shield, Zap, MapPin, Crown, Copy } from "lucide-react";
import Sidebar from "@/components/Sidebar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import JoiningServerModal from "@/components/JoiningServerModal";

const ServerDetail = () => {
  const { id } = useParams();
  const [joiningModalOpen, setJoiningModalOpen] = useState(false);
  
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
    ip: "connect 192.168.1.1:30120",
    banner: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=1200&h=400&fit=crop",
    logo: "https://images.unsplash.com/photo-1614680376593-902f74cf0d41?w=200&h=200&fit=crop",
  };
  
  const fillPercentage = (server.players / server.maxPlayers) * 100;
  
  const features = [
    { icon: Shield, label: "Anti-Cheat", value: "Enabled", color: "text-success" },
    { icon: Zap, label: "Version", value: server.version, color: "text-accent" },
    { icon: Clock, label: "Uptime", value: server.uptime, color: "text-primary" },
    { icon: MapPin, label: "Region", value: "NA East", color: "text-muted-foreground" },
  ];
  
  const copyIP = () => {
    navigator.clipboard.writeText(server.ip);
    toast.success("Server IP copied to clipboard!");
  };
  
  return (
    <div className="min-h-screen h-screen overflow-hidden bg-background pr-20 flex flex-col">
      <Sidebar />
      
      {/* Hero Section with Banner */}
      <section className="relative border-b border-border flex-shrink-0">
        {/* Banner Background */}
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src={server.banner} 
            alt={server.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
        </div>
        
        <div className="relative container mx-auto px-8 py-8">
          <Link to="/servers">
            <Button variant="ghost" className="mb-4 gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Servers
            </Button>
          </Link>
          
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                <img 
                  src={server.logo} 
                  alt={server.name}
                  className="w-16 h-16 rounded-2xl object-cover border-2 border-border"
                />
                <div>
                  <h1 className="text-4xl font-serif font-black gradient-white-orange">
                    {server.name}
                  </h1>
                  <div className="flex items-center gap-4 mt-2 text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Users className="h-4 w-4" />
                      {server.players}/{server.maxPlayers}
                    </span>
                    <span className="flex items-center gap-1">
                      <Wifi className="h-4 w-4 text-success" />
                      {server.ping}ms
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="flex gap-2 mb-6">
                {server.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
            
            <Button size="icon" variant="outline" className="ml-4">
              <Star className="h-5 w-5" />
            </Button>
          </div>
          
          {/* Progress Bar */}
          <div className="max-w-2xl">
            <div className="flex items-center justify-between mb-1 text-sm">
              <span className="text-muted-foreground">Server Population</span>
              <span className="font-medium text-foreground">{fillPercentage.toFixed(0)}% Full</span>
            </div>
            <div className="h-2 bg-muted/30 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-accent to-primary transition-all duration-500 relative overflow-hidden"
                style={{ width: `${fillPercentage}%` }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse" />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Main Content */}
      <section className="flex-1 overflow-y-auto px-8 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {/* Left Column - Main Info */}
          <div className="lg:col-span-2 space-y-6">
            {/* About Section */}
            <div className="bg-card/30 backdrop-blur-sm border border-border rounded-2xl p-6">
              <h2 className="text-xl font-serif font-bold mb-3 flex items-center gap-2">
                <Crown className="h-5 w-5 text-accent" />
                About This Server
              </h2>
              <p className="text-muted-foreground leading-relaxed text-sm">
                {server.description}
              </p>
            </div>
            
            {/* Server Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {features.map((feature) => (
                <div
                  key={feature.label}
                  className="bg-card/30 backdrop-blur-sm border border-border rounded-xl p-4 text-center transition-all duration-300 hover:border-accent/50"
                >
                  <feature.icon className={`h-5 w-5 mx-auto mb-2 ${feature.color}`} />
                  <div className="text-xs text-muted-foreground mb-1">{feature.label}</div>
                  <div className="font-semibold text-sm">{feature.value}</div>
                </div>
              ))}
            </div>
            
            {/* Additional Info */}
            <div className="bg-card/30 backdrop-blur-sm border border-border rounded-2xl p-6">
              <h2 className="text-xl font-serif font-bold mb-4">Server Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="text-xs text-muted-foreground mb-1">Game Mode</p>
                  <p className="font-medium">{server.gameMode}</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground mb-1">Map</p>
                  <p className="font-medium">{server.map}</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground mb-1">Discord</p>
                  <p className="font-medium text-accent text-sm">{server.discord}</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground mb-1">Language</p>
                  <p className="font-medium">English</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Column - Actions */}
          <div className="space-y-4">
            {/* Join Card */}
            <div className="bg-card/30 backdrop-blur-sm border border-border rounded-2xl p-6">
              <Button 
                className="w-full mb-4 h-11 shadow-lg shadow-accent/20 hover:shadow-accent/30 transition-all"
                onClick={() => setJoiningModalOpen(true)}
              >
                Join Server Now
              </Button>
              
              <div className="space-y-3">
                <Button 
                  variant="outline" 
                  className="w-full gap-2"
                  onClick={copyIP}
                >
                  <Copy className="h-4 w-4" />
                  Copy Server IP
                </Button>
                
                <div className="pt-3 border-t border-border">
                  <p className="text-xs text-muted-foreground mb-2">Direct Connect</p>
                  <code className="block px-3 py-2 bg-muted/30 rounded-lg text-xs font-mono break-all">
                    {server.ip}
                  </code>
                </div>
              </div>
            </div>
            
            {/* Quick Stats */}
            <div className="bg-card/30 backdrop-blur-sm border border-border rounded-2xl p-6">
              <h3 className="font-serif font-bold mb-4 text-lg">Quick Stats</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Peak Players</span>
                  <span className="font-semibold">198/200</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Avg. Players</span>
                  <span className="font-semibold">145</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Total Visits</span>
                  <span className="font-semibold">1.2M</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <JoiningServerModal 
        open={joiningModalOpen}
        onOpenChange={setJoiningModalOpen}
        serverName={server.name}
        serverLogo={server.logo}
      />
    </div>
  );
};

export default ServerDetail;
