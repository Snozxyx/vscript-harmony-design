import { Star, Clock, TrendingUp, Crown, Zap, Activity } from "lucide-react";
import Sidebar from "@/components/Sidebar";
import ServerCard from "@/components/ServerCard";
import TermsModal from "@/components/TermsModal";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Home = () => {
  const premiumServers = [
    {
      id: "premium-1",
      name: "Elite Roleplay Network",
      players: 198,
      maxPlayers: 200,
      gameMode: "Roleplay",
      map: "Los Santos Enhanced",
      ping: 12,
      isFavorite: true,
      banner: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&q=80",
      logo: "https://images.unsplash.com/photo-1614680376593-902f74cf0d41?w=200&q=80",
    },
    {
      id: "premium-2",
      name: "Apex Racing Championship",
      players: 98,
      maxPlayers: 100,
      gameMode: "Racing",
      map: "International Circuit",
      ping: 15,
      isFavorite: false,
      banner: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&q=80",
      logo: "https://images.unsplash.com/photo-1557862921-37829c790f19?w=200&q=80",
    },
    {
      id: "premium-3",
      name: "Global Combat Arena",
      players: 150,
      maxPlayers: 150,
      gameMode: "Deathmatch",
      map: "Warzone Delta",
      ping: 18,
      isFavorite: true,
      banner: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&q=80",
      logo: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=200&q=80",
    },
  ];
  
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
      banner: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=800&q=80",
      logo: "https://images.unsplash.com/photo-1614294148960-9aa740632a87?w=200&q=80",
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
      banner: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&q=80",
      logo: "https://images.unsplash.com/photo-1557862921-37829c790f19?w=200&q=80",
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
      banner: "https://images.unsplash.com/photo-1532009877282-3340270e0529?w=800&q=80",
      logo: "https://images.unsplash.com/photo-1551817958-d9d86fb29431?w=200&q=80",
    },
    {
      id: "4",
      name: "Deathmatch Arena",
      players: 45,
      maxPlayers: 60,
      gameMode: "Deathmatch",
      map: "Arena",
      ping: 52,
      banner: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&q=80",
      logo: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=200&q=80",
    },
  ];
  
  const stats = [
    { label: "Active Servers", value: "2,847", icon: TrendingUp, gradient: "from-accent to-orange-600" },
    { label: "Online Players", value: "45,392", icon: Activity, gradient: "from-primary to-accent" },
    { label: "Your Playtime", value: "142h", icon: Zap, gradient: "from-success to-emerald-400" },
  ];
  
  return (
    <div className="min-h-screen h-screen overflow-hidden bg-background pr-20 flex flex-col">
      <Sidebar />
      <TermsModal />
      
      <div className="flex-1 overflow-y-auto scrollbar-hide">
        {/* Premium Servers Section */}
        <section className="relative border-b border-border bg-secondary/30 backdrop-blur-sm">
          <div className="absolute top-20 right-40 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
          
          <div className="relative container mx-auto px-8 py-8">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h1 className="text-4xl font-serif font-black mb-2 flex items-center gap-3">
                  <Crown className="h-8 w-8 text-accent" />
                  <span className="gradient-white-orange">Premium Servers</span>
                </h1>
                <p className="text-muted-foreground">
                  Elite communities with the best gaming experience
                </p>
              </div>
              <Link to="/servers">
                <Button variant="outline" className="gap-2">
                  View All Servers
                  <TrendingUp className="h-4 w-4" />
                </Button>
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {premiumServers.map((server, index) => (
                <div
                  key={server.id}
                  className="animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <ServerCard {...server} />
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Stats Grid */}
        <section className="container mx-auto px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="relative group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-10 rounded-2xl blur transition-all duration-300`} />
                <div className="relative bg-card/30 backdrop-blur-sm border border-border rounded-2xl p-6 transition-all duration-300 group-hover:border-accent/50">
                  <stat.icon className="h-6 w-6 mb-3 text-accent" />
                  <div className="text-3xl font-serif font-bold mb-2 bg-gradient-to-br bg-clip-text text-transparent from-foreground to-muted-foreground">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </section>
        
        {/* Favorite Servers */}
        <section className="container mx-auto px-8 py-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-3xl font-serif font-bold flex items-center gap-3 mb-2">
                <Star className="h-6 w-6 text-accent" />
                Favorite Servers
              </h2>
              <p className="text-muted-foreground text-sm">Your most played communities</p>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {favoriteServers.map((server) => (
              <ServerCard key={server.id} {...server} />
            ))}
          </div>
        </section>
        
        {/* Recent Servers */}
        <section className="container mx-auto px-8 py-8 pb-12">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-3xl font-serif font-bold flex items-center gap-3 mb-2">
                <Clock className="h-6 w-6 text-accent" />
                Recently Played
              </h2>
              <p className="text-muted-foreground text-sm">Jump back into the action</p>
            </div>
            <Link to="/servers">
              <Button variant="outline" className="gap-2">
                View All
                <TrendingUp className="h-4 w-4" />
              </Button>
            </Link>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {recentServers.map((server) => (
              <ServerCard key={server.id} {...server} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
