import { Star, Clock, TrendingUp } from "lucide-react";
import Navbar from "@/components/Navbar";
import ServerCard from "@/components/ServerCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Home = () => {
  const favoriteServers = [
    {
      id: "1",
      name: "Los Santos Roleplay",
      players: 128,
      maxPlayers: 200,
      gameMode: "Roleplay",
      map: "Los Santos",
      ping: 45,
      isFavorite: true,
    },
    {
      id: "2",
      name: "Racing Paradise",
      players: 64,
      maxPlayers: 100,
      gameMode: "Racing",
      map: "Custom Track",
      ping: 32,
      isFavorite: true,
    },
  ];
  
  const recentServers = [
    {
      id: "3",
      name: "Cops & Robbers Elite",
      players: 89,
      maxPlayers: 150,
      gameMode: "Cops & Robbers",
      map: "Liberty City",
      ping: 28,
    },
    {
      id: "4",
      name: "Deathmatch Arena",
      players: 45,
      maxPlayers: 60,
      gameMode: "Deathmatch",
      map: "Arena",
      ping: 52,
    },
  ];
  
  const stats = [
    { label: "Active Servers", value: "2,847", icon: TrendingUp },
    { label: "Online Players", value: "45,392", icon: Star },
    { label: "Your Playtime", value: "142h", icon: Clock },
  ];
  
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-6xl md:text-7xl font-serif font-black mb-4">
            <span className="gradient-white-orange">Welcome Back</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Jump into your favorite servers or discover new experiences
          </p>
        </div>
        
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {stats.map((stat) => (
            <div key={stat.label} className="card-elevated p-6 text-center">
              <stat.icon className="h-8 w-8 mx-auto mb-3 text-accent" />
              <div className="text-3xl font-serif font-bold mb-2">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>
      
      {/* Favorite Servers */}
      <section className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-3xl font-serif font-bold flex items-center gap-2">
            <Star className="h-6 w-6 text-accent" />
            Favorite Servers
          </h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-16">
          {favoriteServers.map((server) => (
            <ServerCard key={server.id} {...server} />
          ))}
        </div>
      </section>
      
      {/* Recent Servers */}
      <section className="container mx-auto px-4 py-8 pb-16">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-3xl font-serif font-bold flex items-center gap-2">
            <Clock className="h-6 w-6 text-accent" />
            Recently Played
          </h2>
          <Link to="/servers">
            <Button variant="outline">View All Servers</Button>
          </Link>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {recentServers.map((server) => (
            <ServerCard key={server.id} {...server} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
