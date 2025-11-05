import { useState, useEffect } from "react";
import { Star, Clock, TrendingUp, Sparkles, Zap, Activity, Flame, Users, Gamepad2, Trophy } from "lucide-react";
import Sidebar from "@/components/Sidebar";
import ServerCard from "@/components/ServerCard";
import TermsModal from "@/components/TermsModal";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const heroImages = [
    "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=1920&q=80",
    "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=1920&q=80",
    "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=1920&q=80",
  ];
  
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);
  const featuredServer = {
    id: "featured-1",
    name: "Los Santos Roleplay Elite",
    players: 187,
    maxPlayers: 200,
    gameMode: "Roleplay",
    map: "Los Santos",
    ping: 24,
    isFavorite: true,
    banner: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=800&q=80",
    logo: "https://images.unsplash.com/photo-1614294148960-9aa740632a87?w=200&q=80",
  };

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
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          {/* Hero Image Slideshow */}
          <div className="absolute inset-0">
            {heroImages.map((image, index) => (
              <div
                key={image}
                className={`absolute inset-0 transition-opacity duration-1000 ${
                  index === currentSlide ? "opacity-100" : "opacity-0"
                }`}
              >
                <img
                  src={image}
                  alt={`Hero ${index + 1}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/90 to-background/80" />
              </div>
            ))}
          </div>
          
          {/* Ambient Background Effects */}
          <div className="absolute top-20 right-40 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
          
          <div className="relative container mx-auto px-8 py-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left: Headlines and CTAs */}
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-4 animate-fade-in">
                  <div className="relative">
                    <div className="absolute inset-0 bg-accent/50 rounded-full animate-ping" />
                    <div className="relative w-2 h-2 bg-accent rounded-full" />
                  </div>
                  <span className="text-sm text-accent font-medium">45,392 Players Online</span>
                </div>
                
                <h1 className="text-5xl md:text-7xl font-serif font-black mb-4 leading-none animate-slide-in-left">
                  <span className="gradient-white-orange">Join the Battle</span>
                  <br />
                  <span className="text-foreground">Play Without Limits</span>
                </h1>
                
                <p className="text-lg text-muted-foreground max-w-2xl mb-6 animate-fade-in">
                  Join thousands of players in epic roleplay, intense deathmatches, and adrenaline-pumping races. Your next adventure is one click away.
                </p>
                
                {/* Quick Stats */}
                <div className="flex flex-wrap gap-6 mb-8 animate-fade-in">
                  <div className="flex items-center gap-2">
                    <Users className="h-5 w-5 text-accent" />
                    <div>
                      <div className="text-2xl font-bold text-foreground">2,847</div>
                      <div className="text-xs text-muted-foreground">Active Servers</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Trophy className="h-5 w-5 text-accent" />
                    <div>
                      <div className="text-2xl font-bold text-foreground">127</div>
                      <div className="text-xs text-muted-foreground">Countries</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Gamepad2 className="h-5 w-5 text-accent" />
                    <div>
                      <div className="text-2xl font-bold text-foreground">24/7</div>
                      <div className="text-xs text-muted-foreground">Always Online</div>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-4 animate-fade-in">
                  <Link to="/servers">
                    <Button size="lg" className="gap-2 shadow-lg shadow-accent/20 relative group">
                      <Zap className="h-5 w-5" />
                      Jump Into Action
                      <div className="absolute inset-0 bg-accent/20 rounded-md blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Button>
                  </Link>
                  <Link to="/servers">
                    <Button size="lg" variant="outline" className="gap-2">
                      <Flame className="h-5 w-5" />
                      See What's Hot
                    </Button>
                  </Link>
                </div>
              </div>
              
              {/* Right: Featured Server Spotlight */}
              <div className="animate-fade-in">
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-accent to-orange-600 rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition-all duration-300 animate-pulse" />
                  <div className="relative bg-card border border-accent/20 rounded-2xl overflow-hidden">
                    <div className="absolute top-4 right-4 z-10 flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/90 backdrop-blur-sm animate-pulse">
                      <div className="w-2 h-2 bg-white rounded-full" />
                      <span className="text-xs font-bold text-white">LIVE NOW</span>
                    </div>
                    <div className="absolute top-4 left-4 z-10 flex items-center gap-2 px-3 py-1.5 rounded-full bg-orange-600/90 backdrop-blur-sm">
                      <Flame className="h-3 w-3 text-white" />
                      <span className="text-xs font-bold text-white">HOT SERVER</span>
                    </div>
                    <ServerCard {...featuredServer} />
                    <div className="p-4 bg-accent/5 border-t border-accent/10">
                      <p className="text-sm text-muted-foreground text-center">
                        <span className="text-accent font-semibold">187 players</span> experiencing epic roleplay right now
                      </p>
                    </div>
                  </div>
                </div>
              </div>
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
